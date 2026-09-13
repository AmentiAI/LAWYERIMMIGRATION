import { getDb } from "./db";

export type AppointmentLogAction =
  | "created"
  | "status_changed"
  | "deleted"
  | "slot_freed";

export async function logAppointmentEvent(opts: {
  appointmentId: number | null;
  action: AppointmentLogAction;
  actor?: "system" | "admin" | "client";
  details?: Record<string, unknown>;
}) {
  const sql = getDb();
  const detailsJson = JSON.stringify(opts.details ?? {});

  await sql`
    INSERT INTO appointment_logs (appointment_id, action, actor, details)
    VALUES (
      ${opts.appointmentId},
      ${opts.action},
      ${opts.actor ?? "system"},
      ${detailsJson}::jsonb
    )
  `;
}
