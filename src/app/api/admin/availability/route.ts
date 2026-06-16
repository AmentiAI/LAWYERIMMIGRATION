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

const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export async function GET() {
  if (!(await verifyAdminSession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await ensureDb();
    const sql = getDb();

    const weekly = await sql`
      SELECT id, day_of_week, start_time::text, end_time::text, slot_duration_minutes, is_enabled
      FROM weekly_availability
      ORDER BY day_of_week
    `;

    const overrides = await sql`
      SELECT id, override_date::text, is_closed, custom_start::text, custom_end::text, notes
      FROM date_overrides
      WHERE override_date >= CURRENT_DATE - INTERVAL '1 day'
      ORDER BY override_date
    `;

    const weeklyWithNames = weekly.map((w) => ({
      ...w,
      day_name: DAY_NAMES[w.day_of_week as number],
    }));

    return NextResponse.json({ weekly: weeklyWithNames, overrides });
  } catch (error) {
    console.error("Admin availability error:", error);
    return NextResponse.json({ error: "Failed to load availability" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  if (!(await verifyAdminSession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await ensureDb();
    const { weekly } = await request.json();
    const sql = getDb();

    for (const day of weekly) {
      await sql`
        UPDATE weekly_availability SET
          start_time = ${day.start_time}::time,
          end_time = ${day.end_time}::time,
          slot_duration_minutes = ${day.slot_duration_minutes},
          is_enabled = ${day.is_enabled}
        WHERE day_of_week = ${day.day_of_week}
      `;
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Update availability error:", error);
    return NextResponse.json({ error: "Failed to update" }, { status: 500 });
  }
}
