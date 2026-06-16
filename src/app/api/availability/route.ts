import { NextResponse } from "next/server";
import { initDatabase } from "@/lib/schema";
import { getAvailableSlotsForMonth } from "@/lib/availability";
import { getDb } from "@/lib/db";

export const dynamic = "force-dynamic";

let dbReady = false;

async function ensureDb() {
  if (!dbReady) {
    await initDatabase();
    dbReady = true;
  }
}

export async function GET(request: Request) {
  try {
    await ensureDb();
    const { searchParams } = new URL(request.url);
    const year = parseInt(searchParams.get("year") || String(new Date().getFullYear()));
    const month = parseInt(searchParams.get("month") || String(new Date().getMonth() + 1));

    if (month < 1 || month > 12) {
      return NextResponse.json({ error: "Invalid month" }, { status: 400 });
    }

    const slots = await getAvailableSlotsForMonth(year, month);

    const sql = getDb();
    const enabledDays = await sql`
      SELECT COUNT(*)::int AS count
      FROM weekly_availability
      WHERE is_enabled = true
    `;

    return NextResponse.json({
      year,
      month,
      slots,
      configured: enabledDays[0].count > 0,
    });
  } catch (error) {
    console.error("Availability error:", error);
    return NextResponse.json({ error: "Failed to load availability" }, { status: 500 });
  }
}
