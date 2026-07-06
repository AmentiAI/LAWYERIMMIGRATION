import { NextResponse } from "next/server";
import { initDatabase } from "@/lib/schema";
import { getDb } from "@/lib/db";
import { isSlotAvailable } from "@/lib/availability";

let dbReady = false;

async function ensureDb() {
  if (!dbReady) {
    await initDatabase();
    dbReady = true;
  }
}

export async function POST(request: Request) {
  try {
    await ensureDb();
    const body = await request.json();
    const {
      name,
      email,
      phone,
      subject,
      message,
      appointmentDate,
      appointmentTime,
      durationMinutes,
    } = body;

    const duration = [30, 60].includes(Number(durationMinutes))
      ? Number(durationMinutes)
      : 30;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    if (!appointmentDate || !appointmentTime) {
      return NextResponse.json(
        { error: "Please select an appointment date and time" },
        { status: 400 }
      );
    }

    const available = await isSlotAvailable(
      appointmentDate,
      appointmentTime,
      duration
    );
    if (!available) {
      return NextResponse.json(
        { error: "That time slot is no longer available. Please choose another." },
        { status: 409 }
      );
    }

    const sql = getDb();

    const appointment = await sql`
      INSERT INTO appointments (
        client_name, client_email, client_phone, subject, message,
        appointment_date, appointment_time, duration_minutes, status
      ) VALUES (
        ${name}, ${email}, ${phone || null}, ${subject || null}, ${message},
        ${appointmentDate}::date, ${appointmentTime}::time, ${duration}, 'pending'
      )
      RETURNING id, appointment_date::text, appointment_time::text, status, created_at
    `;

    await sql`
      INSERT INTO contact_messages (client_name, client_email, subject, message, appointment_id)
      VALUES (${name}, ${email}, ${subject || null}, ${message}, ${appointment[0].id})
    `;

    return NextResponse.json({
      success: true,
      appointment: appointment[0],
    });
  } catch (error: unknown) {
    console.error("Appointment booking error:", error);
    const msg = error instanceof Error ? error.message : "";
    if (msg.includes("unique") || msg.includes("duplicate")) {
      return NextResponse.json(
        { error: "That time slot was just booked. Please choose another." },
        { status: 409 }
      );
    }
    return NextResponse.json({ error: "Failed to book appointment" }, { status: 500 });
  }
}
