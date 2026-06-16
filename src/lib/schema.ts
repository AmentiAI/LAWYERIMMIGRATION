import { getDb } from "./db";

const DEFAULT_WEEKLY_SCHEDULE = [
  { day_of_week: 0, start_time: "09:00", end_time: "12:00", slot_duration_minutes: 30, is_enabled: false },
  { day_of_week: 1, start_time: "09:00", end_time: "18:00", slot_duration_minutes: 30, is_enabled: true },
  { day_of_week: 2, start_time: "09:00", end_time: "18:00", slot_duration_minutes: 30, is_enabled: true },
  { day_of_week: 3, start_time: "09:00", end_time: "18:00", slot_duration_minutes: 30, is_enabled: true },
  { day_of_week: 4, start_time: "09:00", end_time: "18:00", slot_duration_minutes: 30, is_enabled: true },
  { day_of_week: 5, start_time: "09:00", end_time: "18:00", slot_duration_minutes: 30, is_enabled: true },
  { day_of_week: 6, start_time: "09:00", end_time: "14:00", slot_duration_minutes: 30, is_enabled: true },
] as const;

async function ensureDefaultWeeklySchedule() {
  const sql = getDb();

  for (const day of DEFAULT_WEEKLY_SCHEDULE) {
    await sql`
      INSERT INTO weekly_availability (day_of_week, start_time, end_time, slot_duration_minutes, is_enabled)
      VALUES (
        ${day.day_of_week},
        ${day.start_time}::time,
        ${day.end_time}::time,
        ${day.slot_duration_minutes},
        ${day.is_enabled}
      )
      ON CONFLICT (day_of_week) DO NOTHING
    `;
  }
}

export async function initDatabase() {
  const sql = getDb();

  await sql`
    CREATE TABLE IF NOT EXISTS weekly_availability (
      id SERIAL PRIMARY KEY,
      day_of_week INTEGER NOT NULL CHECK (day_of_week >= 0 AND day_of_week <= 6),
      start_time TIME NOT NULL,
      end_time TIME NOT NULL,
      slot_duration_minutes INTEGER NOT NULL DEFAULT 30,
      is_enabled BOOLEAN NOT NULL DEFAULT true,
      UNIQUE(day_of_week)
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS date_overrides (
      id SERIAL PRIMARY KEY,
      override_date DATE NOT NULL UNIQUE,
      is_closed BOOLEAN NOT NULL DEFAULT false,
      custom_start TIME,
      custom_end TIME,
      notes TEXT
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS appointments (
      id SERIAL PRIMARY KEY,
      client_name VARCHAR(255) NOT NULL,
      client_email VARCHAR(255) NOT NULL,
      client_phone VARCHAR(50),
      subject VARCHAR(500),
      message TEXT,
      appointment_date DATE NOT NULL,
      appointment_time TIME NOT NULL,
      status VARCHAR(20) NOT NULL DEFAULT 'pending',
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      UNIQUE(appointment_date, appointment_time)
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS contact_messages (
      id SERIAL PRIMARY KEY,
      client_name VARCHAR(255) NOT NULL,
      client_email VARCHAR(255) NOT NULL,
      subject VARCHAR(500),
      message TEXT NOT NULL,
      appointment_id INTEGER REFERENCES appointments(id),
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;

  await ensureDefaultWeeklySchedule();
}
