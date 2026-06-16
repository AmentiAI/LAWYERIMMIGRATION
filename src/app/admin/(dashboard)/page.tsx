"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Calendar, Clock, Users, ArrowRight } from "lucide-react";

interface Appointment {
  id: number;
  client_name: string;
  client_email: string;
  appointment_date: string;
  appointment_time: string;
  status: string;
}

interface Stats {
  pending: number;
  confirmed: number;
  upcoming: number;
}

function formatTime(time: string): string {
  const [h, m] = time.split(":").map(Number);
  const ampm = h >= 12 ? "PM" : "AM";
  const hour = h % 12 || 12;
  return `${hour}:${String(m).padStart(2, "0")} ${ampm}`;
}

const statusColors: Record<string, string> = {
  pending: "bg-amber-100 text-amber-800",
  confirmed: "bg-green-100 text-green-800",
  cancelled: "bg-red-100 text-red-800",
  completed: "bg-slate-100 text-slate-600",
};

export default function AdminDashboardPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [stats, setStats] = useState<Stats>({ pending: 0, confirmed: 0, upcoming: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/appointments")
      .then((r) => r.json())
      .then((data) => {
        setAppointments((data.appointments || []).slice(0, 8));
        setStats(data.stats || { pending: 0, confirmed: 0, upcoming: 0 });
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-olive-900">Dashboard</h1>
        <p className="text-slate-500 mt-1">Overview of appointments and availability</p>
      </div>

      <div className="grid sm:grid-cols-3 gap-6 mb-10">
        {[
          { label: "Pending", value: stats.pending, icon: Clock, color: "bg-amber-50 border-amber-200 text-amber-700" },
          { label: "Confirmed", value: stats.confirmed, icon: Users, color: "bg-green-50 border-green-200 text-green-700" },
          { label: "Upcoming", value: stats.upcoming, icon: Calendar, color: "bg-olive-50 border-olive-200 text-olive-700" },
        ].map((stat) => (
          <div
            key={stat.label}
            className={`rounded-2xl border p-6 ${stat.color}`}
          >
            <stat.icon className="h-6 w-6 mb-3 opacity-70" />
            <p className="text-3xl font-bold">{stat.value}</p>
            <p className="text-sm font-medium opacity-80">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-tan-200 shadow-sm">
        <div className="flex items-center justify-between px-6 py-4 border-b border-tan-200">
          <h2 className="font-serif text-xl font-bold text-olive-900">
            Recent Appointments
          </h2>
          <Link
            href="/admin/appointments"
            className="text-sm font-semibold text-olive-700 hover:text-olive-900 flex items-center gap-1"
          >
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {loading ? (
          <p className="p-6 text-slate-500">Loading...</p>
        ) : appointments.length === 0 ? (
          <p className="p-6 text-slate-500">No appointments yet.</p>
        ) : (
          <div className="divide-y divide-tan-100">
            {appointments.map((apt) => (
              <div
                key={apt.id}
                className="px-6 py-4 flex items-center justify-between gap-4"
              >
                <div>
                  <p className="font-semibold text-olive-900">{apt.client_name}</p>
                  <p className="text-sm text-slate-500">{apt.client_email}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-olive-800">
                    {new Date(apt.appointment_date + "T12:00:00").toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}{" "}
                    at {formatTime(apt.appointment_time)}
                  </p>
                  <span
                    className={`inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-semibold capitalize ${statusColors[apt.status] || ""}`}
                  >
                    {apt.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
