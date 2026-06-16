"use client";

import { useEffect, useState } from "react";
import { Loader2, Trash2 } from "lucide-react";

interface Appointment {
  id: number;
  client_name: string;
  client_email: string;
  client_phone: string | null;
  subject: string | null;
  message: string;
  appointment_date: string;
  appointment_time: string;
  status: string;
  created_at: string;
}

function formatTime(time: string): string {
  const [h, m] = time.split(":").map(Number);
  const ampm = h >= 12 ? "PM" : "AM";
  const hour = h % 12 || 12;
  return `${hour}:${String(m).padStart(2, "0")} ${ampm}`;
}

const STATUSES = ["pending", "confirmed", "cancelled", "completed"];

export default function AdminAppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  function loadAppointments() {
    setLoading(true);
    fetch("/api/admin/appointments")
      .then((r) => r.json())
      .then((data) => setAppointments(data.appointments || []))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    loadAppointments();
  }, []);

  async function updateStatus(id: number, status: string) {
    await fetch(`/api/admin/appointments/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    loadAppointments();
  }

  async function deleteAppointment(id: number) {
    if (!confirm("Delete this appointment? The time slot will become available again.")) return;
    await fetch(`/api/admin/appointments/${id}`, { method: "DELETE" });
    loadAppointments();
  }

  const filtered =
    filter === "all"
      ? appointments
      : appointments.filter((a) => a.status === filter);

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-olive-900">Appointments</h1>
        <p className="text-slate-500 mt-1">Manage client consultation bookings</p>
      </div>

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
                    {formatTime(apt.appointment_time)}
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
                  onChange={(e) => updateStatus(apt.id, e.target.value)}
                  className="rounded-lg border border-tan-200 px-3 py-2 text-sm bg-tan-50 text-olive-900"
                >
                  {STATUSES.map((s) => (
                    <option key={s} value={s}>
                      {s.charAt(0).toUpperCase() + s.slice(1)}
                    </option>
                  ))}
                </select>
                <button
                  onClick={() => deleteAppointment(apt.id)}
                  className="ml-auto p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  title="Delete appointment"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
