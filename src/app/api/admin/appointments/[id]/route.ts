import { NextResponse } from "next/server";
import { initDatabase } from "@/lib/schema";
import { getDb } from "@/lib/db";
import { verifyAdminSession } from "@/lib/auth";
import { logAppointmentEvent } from "@/lib/appointment-log";

let dbReady = false;

async function ensureDb() {
  if (!dbReady) {
    await initDatabase();
    dbReady = true;
  }
}

const VALID_STATUSES = ["pending", "confirmed", "cancelled", "completed"];

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await verifyAdminSession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await ensureDb();
    const { id } = await params;
    const appointmentId = parseInt(id, 10);
    if (Number.isNaN(appointmentId)) {
      return NextResponse.json({ error: "Invalid id" }, { status: 400 });
    }

    const { status } = await request.json();

    if (!VALID_STATUSES.includes(status)) {
      return NextResponse.json({ error: "Invalid status" }, { status: 400 });
    }

    const sql = getDb();

    const existing = await sql`
      SELECT
        id, client_name, client_email, client_phone, subject, message,
        appointment_date::text, appointment_time::text, duration_minutes, status
      FROM appointments
      WHERE id = ${appointmentId}
    `;

    if (existing.length === 0) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const previous = existing[0];
    const previousStatus = previous.status as string;

    const updated = await sql`
      UPDATE appointments
      SET status = ${status}, updated_at = NOW()
      WHERE id = ${appointmentId}
      RETURNING
        id, client_name, client_email, status,
        appointment_date::text, appointment_time::text, duration_minutes, updated_at
    `;

    await logAppointmentEvent({
      appointmentId,
      action: "status_changed",
      actor: "admin",
      details: {
        from: previousStatus,
        to: status,
        appointment_date: previous.appointment_date,
        appointment_time: previous.appointment_time,
        duration_minutes: previous.duration_minutes,
        client_name: previous.client_name,
        client_email: previous.client_email,
      },
    });

    // Cancelling or completing frees the calendar slot for new bookings.
    if (
      (status === "cancelled" || status === "completed") &&
      previousStatus !== status
    ) {
      await logAppointmentEvent({
        appointmentId,
        action: "slot_freed",
        actor: "admin",
        details: {
          reason: status,
          appointment_date: previous.appointment_date,
          appointment_time: previous.appointment_time,
          duration_minutes: previous.duration_minutes,
        },
      });
    }

    return NextResponse.json({ appointment: updated[0] });
  } catch (error) {
    console.error("Update appointment error:", error);
    return NextResponse.json({ error: "Failed to update" }, { status: 500 });
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await verifyAdminSession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await ensureDb();
    const { id } = await params;
    const appointmentId = parseInt(id, 10);
    if (Number.isNaN(appointmentId)) {
      return NextResponse.json({ error: "Invalid id" }, { status: 400 });
    }

    const sql = getDb();

    const existing = await sql`
      SELECT
        id, client_name, client_email, client_phone, subject, message,
        appointment_date::text, appointment_time::text, duration_minutes, status,
        created_at
      FROM appointments
      WHERE id = ${appointmentId}
    `;

    if (existing.length === 0) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const snapshot = existing[0];

    // Log before delete so the record survives hard-delete of the appointment.
    await logAppointmentEvent({
      appointmentId,
      action: "deleted",
      actor: "admin",
      details: {
        ...snapshot,
        slot_freed: true,
      },
    });

    await logAppointmentEvent({
      appointmentId,
      action: "slot_freed",
      actor: "admin",
      details: {
        reason: "deleted",
        appointment_date: snapshot.appointment_date,
        appointment_time: snapshot.appointment_time,
        duration_minutes: snapshot.duration_minutes,
      },
    });

    // contact_messages.appointment_id is ON DELETE SET NULL — delete can proceed.
    const deleted = await sql`
      DELETE FROM appointments
      WHERE id = ${appointmentId}
      RETURNING id
    `;

    if (deleted.length === 0) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      freedSlot: {
        date: snapshot.appointment_date,
        time: snapshot.appointment_time,
        duration_minutes: snapshot.duration_minutes,
      },
    });
  } catch (error) {
    console.error("Delete appointment error:", error);
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
  }
}
