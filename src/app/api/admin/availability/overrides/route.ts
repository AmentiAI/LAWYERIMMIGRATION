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

export async function POST(request: Request) {
  if (!(await verifyAdminSession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await ensureDb();
    const body = await request.json();
    const { override_date, is_closed, custom_start, custom_end, notes } = body;

    if (!override_date) {
      return NextResponse.json({ error: "Date is required" }, { status: 400 });
    }

    const sql = getDb();
    const result = await sql`
      INSERT INTO date_overrides (override_date, is_closed, custom_start, custom_end, notes)
      VALUES (
        ${override_date}::date,
        ${is_closed ?? false},
        ${custom_start || null}::time,
        ${custom_end || null}::time,
        ${notes || null}
      )
      ON CONFLICT (override_date) DO UPDATE SET
        is_closed = EXCLUDED.is_closed,
        custom_start = EXCLUDED.custom_start,
        custom_end = EXCLUDED.custom_end,
        notes = EXCLUDED.notes
      RETURNING id, override_date::text, is_closed, custom_start::text, custom_end::text, notes
    `;

    return NextResponse.json({ override: result[0] });
  } catch (error) {
    console.error("Create override error:", error);
    return NextResponse.json({ error: "Failed to save override" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  if (!(await verifyAdminSession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await ensureDb();
    const { searchParams } = new URL(request.url);
    const date = searchParams.get("date");

    if (!date) {
      return NextResponse.json({ error: "Date is required" }, { status: 400 });
    }

    const sql = getDb();
    await sql`DELETE FROM date_overrides WHERE override_date = ${date}::date`;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete override error:", error);
    return NextResponse.json({ error: "Failed to delete override" }, { status: 500 });
  }
}
