"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimeSlot {
  date: string;
  time: string;
  available: boolean;
}

interface AppointmentCalendarProps {
  selectedDate: string | null;
  selectedTime: string | null;
  onSelectDate: (date: string) => void;
  onSelectTime: (time: string | null) => void;
  /** When true, omits outer card wrapper (used inside AppointmentBookingForm) */
  embedded?: boolean;
}

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const DAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function formatDisplayTime(time: string): string {
  const [h, m] = time.split(":").map(Number);
  const ampm = h >= 12 ? "PM" : "AM";
  const hour = h % 12 || 12;
  return `${hour}:${String(m).padStart(2, "0")} ${ampm}`;
}

export { formatDisplayTime };

export function AppointmentCalendar({
  selectedDate,
  selectedTime,
  onSelectDate,
  onSelectTime,
  embedded = false,
}: AppointmentCalendarProps) {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth() + 1);
  const [slots, setSlots] = useState<Record<string, TimeSlot[]>>({});
  const [loading, setLoading] = useState(true);

  const fetchSlots = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/availability?year=${year}&month=${month}`);
      const data = await res.json();
      setSlots(data.slots || {});
    } catch {
      setSlots({});
    } finally {
      setLoading(false);
    }
  }, [year, month]);

  useEffect(() => {
    fetchSlots();
  }, [fetchSlots]);

  function prevMonth() {
    if (month === 1) {
      setMonth(12);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  }

  function nextMonth() {
    if (month === 12) {
      setMonth(1);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  }

  const firstDay = new Date(year, month - 1, 1).getDay();
  const daysInMonth = new Date(year, month, 0).getDate();
  const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

  const calendarDays: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) calendarDays.push(null);
  for (let d = 1; d <= daysInMonth; d++) calendarDays.push(d);

  const daySlots = selectedDate ? slots[selectedDate] || [] : [];
  const availableTimes = daySlots.filter((s) => s.available);

  const calendarBody = (
    <>
      <div className="flex items-center justify-between mb-4">
        <button
          type="button"
          onClick={prevMonth}
          className="p-2 rounded-lg hover:bg-tan-100 text-olive-800 transition-colors"
          aria-label="Previous month"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <span className="font-serif font-bold text-olive-900">
          {MONTH_NAMES[month - 1]} {year}
        </span>
        <button
          type="button"
          onClick={nextMonth}
          className="p-2 rounded-lg hover:bg-tan-100 text-olive-800 transition-colors"
          aria-label="Next month"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-12 text-olive-600">
          <Loader2 className="h-6 w-6 animate-spin" />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-7 gap-1 mb-2">
            {DAY_LABELS.map((d) => (
              <div
                key={d}
                className="text-center text-xs font-semibold text-olive-600 py-1"
              >
                {d}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {calendarDays.map((day, i) => {
              if (day === null) {
                return <div key={`empty-${i}`} />;
              }
              const dateStr = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
              const hasSlots = slots[dateStr]?.some((s) => s.available);
              const isPast = dateStr < todayStr;
              const isSelected = selectedDate === dateStr;

              return (
                <button
                  key={dateStr}
                  type="button"
                  disabled={!hasSlots || isPast}
                  onClick={() => {
                    onSelectDate(dateStr);
                    onSelectTime(null);
                  }}
                    className={cn(
                      "aspect-square rounded-lg text-sm font-medium transition-all touch-target",
                    isSelected
                      ? "bg-olive-700 text-white shadow-md"
                      : hasSlots && !isPast
                        ? "bg-olive-50 text-olive-800 hover:bg-olive-100 border border-olive-200"
                        : "text-slate-300 cursor-not-allowed"
                  )}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </>
      )}

      {selectedDate && (
        <div className="mt-6 pt-5 border-t border-tan-200">
          <p className="text-sm font-semibold text-olive-900 mb-3">
            Available times —{" "}
            {new Date(selectedDate + "T12:00:00").toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </p>
          {availableTimes.length === 0 ? (
            <p className="text-sm text-slate-500">No times available this day.</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {availableTimes.map((slot) => (
                <button
                  key={slot.time}
                  type="button"
                  onClick={() => onSelectTime(slot.time)}
                    className={cn(
                      "px-3 py-2.5 sm:py-2 rounded-lg text-sm font-medium transition-all border touch-target min-h-11",
                    selectedTime === slot.time
                      ? "bg-olive-700 text-white border-olive-700"
                      : "bg-white text-olive-800 border-olive-200 hover:border-olive-500 hover:bg-olive-50"
                  )}
                >
                  {formatDisplayTime(slot.time)}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );

  if (embedded) {
    return <div>{calendarBody}</div>;
  }

  return (
    <div className="rounded-2xl border border-tan-200 bg-white overflow-hidden">
      <div className="bg-olive-800 text-white px-5 py-4">
        <p className="font-semibold text-sm">Book an Appointment</p>
        <p className="text-white/60 text-xs mt-1">
          Select a date and time based on office availability
        </p>
      </div>

      <div className="p-5">{calendarBody}</div>
    </div>
  );
}
