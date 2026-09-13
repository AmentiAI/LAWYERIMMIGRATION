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
        appointment_date::text, appointment_time::text, duration_minutes,
        status, created_at, updated_at
      FROM appointments
      ORDER BY appointment_date DESC, appointment_time DESC
    `;

    const stats = await sql`
      SELECT
        COUNT(*) FILTER (WHERE status = 'pending')::int AS pending,
        COUNT(*) FILTER (WHERE status = 'confirmed')::int AS confirmed,
        COUNT(*) FILTER (WHERE appointment_date >= CURRENT_DATE AND status IN ('pending', 'confirmed'))::int AS upcoming,
        COUNT(*)::int AS total
      FROM appointments
    `;

    const logs = await sql`
      SELECT
        id, appointment_id, action, actor, details, created_at
      FROM appointment_logs
      ORDER BY created_at DESC
      LIMIT 100
    `;

    return NextResponse.json({
      appointments,
      stats: stats[0],
      logs,
    });
  } catch (error) {
    console.error("Admin appointments error:", error);
    return NextResponse.json({ error: "Failed to load appointments" }, { status: 500 });
  }
}
