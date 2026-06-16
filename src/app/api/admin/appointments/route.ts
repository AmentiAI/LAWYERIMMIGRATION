import { NextResponse } from "next/server";
import { initDatabase } from "@/lib/schema";
import { getDb } from "@/lib/db";
import { verifyAdminSession } from "@/lib/auth";

let dbReady = false;

async function ensureDb() {
  if (!dbReady) {
    await initDatabase();
    dbReady = true;
  }
}

export async function GET() {
  if (!(await verifyAdminSession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await ensureDb();
    const sql = getDb();

    const appointments = await sql`
      SELECT
        id, client_name, client_email, client_phone, subject, message,
        appointment_date::text, appointment_time::text, status, created_at
      FROM appointments
      ORDER BY appointment_date DESC, appointment_time DESC
    `;

    const stats = await sql`
      SELECT
        COUNT(*) FILTER (WHERE status = 'pending')::int AS pending,
        COUNT(*) FILTER (WHERE status = 'confirmed')::int AS confirmed,
        COUNT(*) FILTER (WHERE appointment_date >= CURRENT_DATE AND status != 'cancelled')::int AS upcoming
      FROM appointments
    `;

    return NextResponse.json({
      appointments,
      stats: stats[0],
    });
  } catch (error) {
    console.error("Admin appointments error:", error);
    return NextResponse.json({ error: "Failed to load appointments" }, { status: 500 });
  }
}
