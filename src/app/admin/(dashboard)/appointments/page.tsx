"use client";

import { useEffect, useState } from "react";
import { Loader2, Trash2, History } from "lucide-react";

interface Appointment {
  id: number;
  client_name: string;
  client_email: string;
  client_phone: string | null;
  subject: string | null;
  message: string;
  appointment_date: string;
  appointment_time: string;
  duration_minutes: number;
  status: string;
  created_at: string;
  updated_at?: string;
}

interface AppointmentLog {
  id: number;
  appointment_id: number | null;
  action: string;
  actor: string;
  details: Record<string, unknown> | null;
  created_at: string;
}

function formatTime(time: string): string {
  const [h, m] = time.split(":").map(Number);
  const ampm = h >= 12 ? "PM" : "AM";
  const hour = h % 12 || 12;
  return `${hour}:${String(m).padStart(2, "0")} ${ampm}`;
}

function formatDateTime(iso: string): string {
  try {
    return new Date(iso).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  } catch {
    return iso;
  }
}

const STATUSES = ["pending", "confirmed", "cancelled", "completed"];

export default function AdminAppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [logs, setLogs] = useState<AppointmentLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [busyId, setBusyId] = useState<number | null>(null);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [showLog, setShowLog] = useState(false);

  function loadAppointments() {
    setLoading(true);
    setError("");
    fetch("/api/admin/appointments")
      .then(async (r) => {
        const data = await r.json();
        if (!r.ok) throw new Error(data.error || "Failed to load");
        setAppointments(data.appointments || []);
        setLogs(data.logs || []);
      })
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    loadAppointments();
  }, []);

  async function updateStatus(id: number, status: string) {
    setBusyId(id);
    setError("");
    setNotice("");
    try {
      const res = await fetch(`/api/admin/appointments/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to update status");

      if (status === "cancelled" || status === "completed") {
        setNotice("Status updated. That time slot is available again on the booking calendar.");
      } else {
        setNotice("Status updated.");
      }
      loadAppointments();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update");
    } finally {
      setBusyId(null);
    }
  }

  async function deleteAppointment(id: number) {
    if (
      !confirm(
        "Delete this appointment permanently? The time slot will become available again on the booking calendar. A log entry will be kept."
      )
    ) {
      return;
    }

    setBusyId(id);
    setError("");
    setNotice("");
    try {
      const res = await fetch(`/api/admin/appointments/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to delete");

      const slot = data.freedSlot;
      setNotice(
        slot
          ? `Appointment deleted. Slot freed: ${slot.date} at ${formatTime(String(slot.time).slice(0, 5))}.`
          : "Appointment deleted. Time slot is available again."
      );
      loadAppointments();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete");
    } finally {
      setBusyId(null);
    }
  }

  const filtered =
    filter === "all"
      ? appointments
      : appointments.filter((a) => a.status === filter);

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl font-bold text-olive-900">Appointments</h1>
          <p className="text-slate-500 mt-1">
            Manage bookings, free time slots, and review the appointment log
          </p>
        </div>
        <button
          type="button"
          onClick={() => setShowLog((v) => !v)}
          className="inline-flex items-center gap-2 rounded-full border border-tan-200 bg-white px-4 py-2 text-sm font-medium text-olive-800 hover:bg-olive-50"
        >
          <History className="h-4 w-4" />
          {showLog ? "Hide activity log" : "Show activity log"}
        </button>
      </div>

      {error && (
        <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}
      {notice && (
        <div className="mb-4 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
          {notice}
        </div>
      )}

      {showLog && (
        <div className="mb-8 bg-white rounded-2xl border border-tan-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-tan-200">
            <h2 className="font-serif text-xl font-bold text-olive-900">
              Appointment activity log
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Every create, status change, delete, and freed slot is recorded.
            </p>
          </div>
          {logs.length === 0 ? (
            <p className="p-6 text-slate-500 text-sm">No log entries yet.</p>
          ) : (
            <div className="divide-y divide-tan-100 max-h-80 overflow-y-auto">
              {logs.map((log) => (
                <div key={log.id} className="px-6 py-3 text-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium text-olive-900 capitalize">
                      {log.action.replace(/_/g, " ")}
                      {log.appointment_id != null ? ` · #${log.appointment_id}` : ""}
                      <span className="ml-2 text-xs font-normal text-slate-500">
                        by {log.actor}
                      </span>
                    </p>
                    <p className="text-xs text-slate-500">
                      {formatDateTime(log.created_at)}
                    </p>
                  </div>
                  {log.details && (
                    <p className="mt-1 text-xs text-slate-500 font-mono break-all">
                      {typeof log.details === "string"
                        ? log.details
                        : JSON.stringify(log.details)}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="flex gap-2 mb-6 flex-wrap">
        {["all", ...STATUSES].map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors ${
              filter === s
                ? "bg-olive-700 text-white"
                : "bg-white border border-tan-200 text-olive-800 hover:bg-olive-50"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex items-center gap-2 text-slate-500">
          <Loader2 className="h-5 w-5 animate-spin" /> Loading...
        </div>
      ) : filtered.length === 0 ? (
        <p className="text-slate-500">No appointments found.</p>
      ) : (
        <div className="space-y-4">
          {filtered.map((apt) => (
            <div
              key={apt.id}
              className="bg-white rounded-2xl border border-tan-200 p-6 shadow-sm"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-bold text-olive-900 text-lg">{apt.client_name}</h3>
                  <p className="text-sm text-slate-500">{apt.client_email}</p>
                  {apt.client_phone && (
                    <p className="text-sm text-slate-500">{apt.client_phone}</p>
                  )}
                  <p className="text-xs text-slate-400 mt-2">
                    Booked {formatDateTime(apt.created_at)}
                    {apt.updated_at && apt.updated_at !== apt.created_at
                      ? ` · Updated ${formatDateTime(apt.updated_at)}`
                      : ""}
                  </p>
                </div>
                <div className="text-left sm:text-right shrink-0">
                  <p className="font-semibold text-olive-800">
                    {new Date(apt.appointment_date + "T12:00:00").toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                  <p className="text-olive-600 font-medium">
                    {formatTime(apt.appointment_time.slice(0, 5))}
                    {apt.duration_minutes
                      ? ` · ${apt.duration_minutes === 60 ? "1 hour" : `${apt.duration_minutes} min`}`
                      : ""}
                  </p>
                </div>
              </div>

              {apt.subject && (
                <p className="text-sm font-medium text-olive-900 mb-1">
                  Subject: {apt.subject}
                </p>
              )}
              <p className="text-sm text-slate-600 mb-4 whitespace-pre-wrap">
                {apt.message}
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-tan-100">
                <select
                  value={apt.status}
                  disabled={busyId === apt.id}
                  onChange={(e) => updateStatus(apt.id, e.target.value)}
                  className="rounded-lg border border-tan-200 px-3 py-2 text-sm bg-tan-50 text-olive-900 disabled:opacity-50"
                >
                  {STATUSES.map((s) => (
                    <option key={s} value={s}>
                      {s.charAt(0).toUpperCase() + s.slice(1)}
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  onClick={() => deleteAppointment(apt.id)}
                  disabled={busyId === apt.id}
                  className="ml-auto inline-flex items-center gap-2 px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50 text-sm font-medium"
                  title="Delete appointment and free the time slot"
                >
                  {busyId === apt.id ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Trash2 className="h-4 w-4" />
                  )}
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
