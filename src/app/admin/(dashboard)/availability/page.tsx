"use client";

import { useEffect, useState } from "react";
import { Loader2, Plus, X } from "lucide-react";

interface WeeklyDay {
  id: number;
  day_of_week: number;
  day_name: string;
  start_time: string;
  end_time: string;
  slot_duration_minutes: number;
  is_enabled: boolean;
}

interface DateOverride {
  id: number;
  override_date: string;
  is_closed: boolean;
  custom_start: string | null;
  custom_end: string | null;
  notes: string | null;
}

export default function AdminAvailabilityPage() {
  const [weekly, setWeekly] = useState<WeeklyDay[]>([]);
  const [overrides, setOverrides] = useState<DateOverride[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const [newOverride, setNewOverride] = useState({
    override_date: "",
    is_closed: true,
    custom_start: "",
    custom_end: "",
    notes: "",
  });

  function load() {
    setLoading(true);
    fetch("/api/admin/availability")
      .then((r) => r.json())
      .then((data) => {
        setWeekly(data.weekly || []);
        setOverrides(data.overrides || []);
      })
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    load();
  }, []);

  function updateDay(index: number, field: string, value: string | boolean | number) {
    setWeekly((prev) =>
      prev.map((d, i) => (i === index ? { ...d, [field]: value } : d))
    );
    setSaved(false);
  }

  async function saveWeekly() {
    setSaving(true);
    await fetch("/api/admin/availability", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ weekly }),
    });
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  async function addOverride(e: React.FormEvent) {
    e.preventDefault();
    await fetch("/api/admin/availability/overrides", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        override_date: newOverride.override_date,
        is_closed: newOverride.is_closed,
        custom_start: newOverride.custom_start || null,
        custom_end: newOverride.custom_end || null,
        notes: newOverride.notes || null,
      }),
    });
    setNewOverride({
      override_date: "",
      is_closed: true,
      custom_start: "",
      custom_end: "",
      notes: "",
    });
    load();
  }

  async function removeOverride(date: string) {
    await fetch(`/api/admin/availability/overrides?date=${date}`, {
      method: "DELETE",
    });
    load();
  }

  if (loading) {
    return (
      <div className="p-8 flex items-center gap-2 text-slate-500">
        <Loader2 className="h-5 w-5 animate-spin" /> Loading...
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-olive-900">Availability</h1>
        <p className="text-slate-500 mt-1">
          Set weekly hours and block specific dates. The contact form calendar
          reads from these settings.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-tan-200 shadow-sm mb-8">
        <div className="px-6 py-4 border-b border-tan-200 flex items-center justify-between">
          <h2 className="font-serif text-xl font-bold text-olive-900">
            Weekly Schedule
          </h2>
          <button
            onClick={saveWeekly}
            disabled={saving}
            className="rounded-full bg-olive-700 px-5 py-2 text-sm font-semibold text-white hover:bg-olive-600 disabled:opacity-60"
          >
            {saving ? "Saving..." : saved ? "Saved!" : "Save Changes"}
          </button>
        </div>

        <div className="divide-y divide-tan-100">
          {weekly.map((day, i) => (
            <div
              key={day.day_of_week}
              className="px-6 py-4 flex flex-wrap items-center gap-4"
            >
              <label className="flex items-center gap-3 w-36">
                <input
                  type="checkbox"
                  checked={day.is_enabled}
                  onChange={(e) => updateDay(i, "is_enabled", e.target.checked)}
                  className="rounded border-olive-300 text-olive-700 focus:ring-olive-500"
                />
                <span className="font-medium text-olive-900">{day.day_name}</span>
              </label>
              <input
                type="time"
                value={day.start_time.slice(0, 5)}
                onChange={(e) => updateDay(i, "start_time", e.target.value)}
                disabled={!day.is_enabled}
                className="rounded-lg border border-tan-200 px-3 py-2 text-sm disabled:opacity-40"
              />
              <span className="text-slate-400">to</span>
              <input
                type="time"
                value={day.end_time.slice(0, 5)}
                onChange={(e) => updateDay(i, "end_time", e.target.value)}
                disabled={!day.is_enabled}
                className="rounded-lg border border-tan-200 px-3 py-2 text-sm disabled:opacity-40"
              />
              <select
                value={day.slot_duration_minutes}
                onChange={(e) =>
                  updateDay(i, "slot_duration_minutes", parseInt(e.target.value))
                }
                disabled={!day.is_enabled}
                className="rounded-lg border border-tan-200 px-3 py-2 text-sm disabled:opacity-40"
              >
                <option value={30}>30 min slots</option>
                <option value={45}>45 min slots</option>
                <option value={60}>60 min slots</option>
              </select>
            </div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl border border-tan-200 shadow-sm p-6">
          <h2 className="font-serif text-xl font-bold text-olive-900 mb-4">
            Block or Customize a Date
          </h2>
          <form onSubmit={addOverride} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-olive-900 mb-1">
                Date
              </label>
              <input
                type="date"
                required
                value={newOverride.override_date}
                onChange={(e) =>
                  setNewOverride((p) => ({ ...p, override_date: e.target.value }))
                }
                className="w-full rounded-lg border border-tan-200 px-3 py-2 text-sm"
              />
            </div>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={newOverride.is_closed}
                onChange={(e) =>
                  setNewOverride((p) => ({ ...p, is_closed: e.target.checked }))
                }
                className="rounded text-olive-700"
              />
              <span className="text-sm text-olive-900">Closed all day</span>
            </label>
            {!newOverride.is_closed && (
              <div className="flex gap-3">
                <input
                  type="time"
                  value={newOverride.custom_start}
                  onChange={(e) =>
                    setNewOverride((p) => ({ ...p, custom_start: e.target.value }))
                  }
                  className="rounded-lg border border-tan-200 px-3 py-2 text-sm"
                  placeholder="Start"
                />
                <input
                  type="time"
                  value={newOverride.custom_end}
                  onChange={(e) =>
                    setNewOverride((p) => ({ ...p, custom_end: e.target.value }))
                  }
                  className="rounded-lg border border-tan-200 px-3 py-2 text-sm"
                  placeholder="End"
                />
              </div>
            )}
            <input
              type="text"
              value={newOverride.notes}
              onChange={(e) =>
                setNewOverride((p) => ({ ...p, notes: e.target.value }))
              }
              placeholder="Notes (optional)"
              className="w-full rounded-lg border border-tan-200 px-3 py-2 text-sm"
            />
            <button
              type="submit"
              className="flex items-center gap-2 rounded-full bg-olive-700 px-5 py-2 text-sm font-semibold text-white hover:bg-olive-600"
            >
              <Plus className="h-4 w-4" /> Add Override
            </button>
          </form>
        </div>

        <div className="bg-white rounded-2xl border border-tan-200 shadow-sm p-6">
          <h2 className="font-serif text-xl font-bold text-olive-900 mb-4">
            Date Overrides
          </h2>
          {overrides.length === 0 ? (
            <p className="text-slate-500 text-sm">No date overrides set.</p>
          ) : (
            <div className="space-y-3">
              {overrides.map((o) => (
                <div
                  key={o.id}
                  className="flex items-center justify-between p-3 bg-tan-50 rounded-xl border border-tan-200"
                >
                  <div>
                    <p className="font-medium text-olive-900">
                      {new Date(o.override_date + "T12:00:00").toLocaleDateString(
                        "en-US",
                        { weekday: "short", month: "short", day: "numeric", year: "numeric" }
                      )}
                    </p>
                    <p className="text-xs text-slate-500">
                      {o.is_closed
                        ? "Closed"
                        : `Custom hours: ${o.custom_start?.slice(0, 5)} – ${o.custom_end?.slice(0, 5)}`}
                      {o.notes && ` · ${o.notes}`}
                    </p>
                  </div>
                  <button
                    onClick={() => removeOverride(o.override_date)}
                    className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
