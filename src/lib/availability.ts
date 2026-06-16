import { getDb } from "./db";

export interface TimeSlot {
  date: string;
  time: string;
  available: boolean;
}

interface WeeklyRow {
  day_of_week: number;
  start_time: string;
  end_time: string;
  slot_duration_minutes: number;
  is_enabled: boolean;
}

interface OverrideRow {
  override_date: string;
  is_closed: boolean;
  custom_start: string | null;
  custom_end: string | null;
}

interface BookedRow {
  appointment_date: string;
  appointment_time: string;
}

function parseTime(timeStr: string): number {
  const [h, m] = timeStr.split(":").map(Number);
  return h * 60 + m;
}

function formatTime(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

function formatDate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function normalizeDateKey(value: string): string {
  return value.slice(0, 10);
}

function normalizeTimeKey(value: string): string {
  const [h, m] = value.split(":");
  return `${h.padStart(2, "0")}:${m.padStart(2, "0")}`;
}

function generateSlotsForDay(
  startMinutes: number,
  endMinutes: number,
  duration: number
): string[] {
  const slots: string[] = [];
  for (let t = startMinutes; t + duration <= endMinutes; t += duration) {
    slots.push(formatTime(t));
  }
  return slots;
}

export async function getAvailableSlotsForMonth(
  year: number,
  month: number
): Promise<Record<string, TimeSlot[]>> {
  const sql = getDb();

  const weekly = (await sql`
    SELECT day_of_week, start_time::text, end_time::text, slot_duration_minutes, is_enabled
    FROM weekly_availability
  `) as WeeklyRow[];

  if (weekly.length === 0) {
    return {};
  }

  const weeklyMap = new Map(weekly.map((w) => [w.day_of_week, w]));

  const startDate = new Date(year, month - 1, 1);
  const endDate = new Date(year, month, 0);
  const startStr = formatDate(startDate);
  const endStr = formatDate(endDate);

  const overrides = (await sql`
    SELECT override_date::text, is_closed, custom_start::text, custom_end::text
    FROM date_overrides
    WHERE override_date >= ${startStr}::date AND override_date <= ${endStr}::date
  `) as OverrideRow[];

  const overrideMap = new Map(
    overrides.map((o) => [normalizeDateKey(o.override_date), o])
  );

  const booked = (await sql`
    SELECT appointment_date::text, appointment_time::text
    FROM appointments
    WHERE appointment_date >= ${startStr}::date
      AND appointment_date <= ${endStr}::date
      AND status != 'cancelled'
  `) as BookedRow[];

  const bookedSet = new Set(
    booked.map(
      (b) =>
        `${normalizeDateKey(b.appointment_date)}_${normalizeTimeKey(b.appointment_time)}`
    )
  );

  const result: Record<string, TimeSlot[]> = {};
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
    const dateStr = formatDate(d);
    if (d < today) continue;

    const override = overrideMap.get(dateStr);
    if (override?.is_closed) continue;

    const dayOfWeek = d.getDay();
    const schedule = weeklyMap.get(dayOfWeek);
    if (!schedule?.is_enabled && !override) continue;

    let startMinutes: number;
    let endMinutes: number;
    const duration = schedule?.slot_duration_minutes ?? 30;

    if (override?.custom_start && override?.custom_end) {
      startMinutes = parseTime(override.custom_start);
      endMinutes = parseTime(override.custom_end);
    } else if (schedule?.is_enabled) {
      startMinutes = parseTime(schedule.start_time);
      endMinutes = parseTime(schedule.end_time);
    } else {
      continue;
    }

    const times = generateSlotsForDay(startMinutes, endMinutes, duration);
    const daySlots: TimeSlot[] = times.map((time) => ({
      date: dateStr,
      time,
      available: !bookedSet.has(`${dateStr}_${time}`),
    }));

    if (daySlots.some((s) => s.available)) {
      result[dateStr] = daySlots;
    }
  }

  return result;
}

export async function isSlotAvailable(
  date: string,
  time: string
): Promise<boolean> {
  const [year, month] = date.split("-").map(Number);
  const slots = await getAvailableSlotsForMonth(year, month);
  const daySlots = slots[date];
  if (!daySlots) return false;
  const slot = daySlots.find((s) => s.time === time);
  return slot?.available ?? false;
}
