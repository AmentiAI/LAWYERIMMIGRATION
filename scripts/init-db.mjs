import { config } from "dotenv";
import { neon } from "@neondatabase/serverless";

config({ path: ".env" });

const sql = neon(process.env.DATABASE_URL);

async function initDatabase() {
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

  const existing = await sql`SELECT COUNT(*)::int AS count FROM weekly_availability`;

  if (existing[0].count === 0) {
    await sql`
      INSERT INTO weekly_availability (day_of_week, start_time, end_time, slot_duration_minutes, is_enabled)
      VALUES
        (1, '09:00', '18:00', 30, true),
        (2, '09:00', '18:00', 30, true),
        (3, '09:00', '18:00', 30, true),
        (4, '09:00', '18:00', 30, true),
        (5, '09:00', '18:00', 30, true),
        (6, '09:00', '14:00', 30, true),
        (0, '09:00', '12:00', 30, false)
    `;
  }
}

initDatabase()
  .then(() => console.log("Database initialized successfully."))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
