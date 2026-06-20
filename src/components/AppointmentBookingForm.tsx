"use client";

import { useState } from "react";
import {
  CheckCircle2,
  Loader2,
  ArrowLeft,
  Calendar,
  Clock,
} from "lucide-react";
import { AppointmentCalendar, formatDisplayTime } from "@/components/AppointmentCalendar";
import { ConsultationBookingInfo } from "@/components/ConsultationBookingInfo";

const CASE_TYPES = [
  { value: "family", label: "Family Based Petitions" },
  { value: "adjustment", label: "Adjustment of Status" },
  { value: "consular", label: "Consular Processing" },
  { value: "conditional", label: "Removal of Conditions" },
  { value: "citizenship", label: "Citizenship & Naturalization" },
  { value: "fiance", label: "Fiancé Petitions" },
  { value: "work-permit", label: "Work Permit Renewal" },
  { value: "green-card", label: "Green Card Renewal" },
  { value: "vawa", label: "VAWA" },
  { value: "daca", label: "DACA Renewal" },
  { value: "e2", label: "E-2 Investment Visa" },
  { value: "business", label: "Business / Investment" },
  { value: "b1b2", label: "B-1/B-2 Renewal" },
  { value: "other", label: "Other / Not Sure" },
];

const CONSULTATION_TYPES = [
  {
    value: "30",
    label: "General Overview Snapshot — 30 min ($99)",
    duration: "30 min",
  },
  {
    value: "60",
    label: "Start Working on Your Case — 1 hour ($350)",
    duration: "1 hour",
  },
];

export function AppointmentBookingForm() {
  const [step, setStep] = useState<1 | 2>(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    caseType: "",
    consultationType: "",
    message: "",
  });

  function handleSelectDate(date: string) {
    setSelectedDate(date);
    setSelectedTime(null);
    setError("");
  }

  function handleSelectTime(time: string) {
    setSelectedTime(time);
    setError("");
    setStep(2);
  }

  function handleBack() {
    setStep(1);
    setError("");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!selectedDate || !selectedTime) {
      setError("Please select an appointment date and time.");
      setStep(1);
      return;
    }

    const caseLabel =
      CASE_TYPES.find((c) => c.value === form.caseType)?.label || "Consultation";
    const consultationLabel =
      CONSULTATION_TYPES.find((c) => c.value === form.consultationType)
        ?.duration || "";
    const subject = consultationLabel
      ? `${caseLabel} — ${consultationLabel} consultation`
      : caseLabel;

    setLoading(true);
    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          subject,
          message: form.message,
          appointmentDate: selectedDate,
          appointmentTime: selectedTime,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Failed to book appointment");
        if (res.status === 409) {
          setStep(1);
          setSelectedTime(null);
        }
        return;
      }

      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-3xl bg-white p-8 md:p-10 shadow-xl border border-tan-200 text-center py-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-olive-100 text-olive-700 mb-6">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-olive-900 mb-3">
          Appointment Booked
        </h3>
        <p className="text-slate-600 max-w-md mx-auto">
          Your consultation request has been received. We&apos;ll confirm your
          appointment by email within one business day.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-white shadow-xl border border-tan-200 overflow-hidden">
      <ConsultationBookingInfo />

      <div className="flex border-b border-tan-200">
        {[
          { num: 1, label: "Select date & time" },
          { num: 2, label: "Your information" },
        ].map(({ num, label }) => (
          <div
            key={num}
            className={`flex-1 px-4 py-4 text-center text-sm font-medium transition-colors ${
              step === num
                ? "bg-olive-50 text-olive-900 border-b-2 border-olive-700"
                : step > num
                  ? "text-olive-700 bg-white"
                  : "text-slate-400 bg-white"
            }`}
          >
            <span className="hidden sm:inline">
              {num}. {label}
            </span>
            <span className="sm:hidden">{num}</span>
          </div>
        ))}
      </div>

      <div className="p-4 sm:p-6 md:p-8">
        {step === 1 ? (
          <div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-olive-900 mb-2">
              Choose an Available Time
            </h2>
            <p className="text-slate-600 text-sm mb-6">
              Select a day, then pick an open time slot for your in-person or
              video consultation.
            </p>
            <AppointmentCalendar
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              onSelectDate={handleSelectDate}
              onSelectTime={(time) => time && handleSelectTime(time)}
              embedded
            />
          </div>
        ) : (
          <div>
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center gap-2 text-sm font-medium text-olive-700 hover:text-olive-900 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Change date or time
            </button>

            <h2 className="font-serif text-xl sm:text-2xl font-bold text-olive-900 mb-2">
              Your Details
            </h2>
            <p className="text-slate-600 text-sm mb-4">
              Complete the form below to confirm your appointment.
            </p>

            {selectedDate && selectedTime && (
              <div className="mb-6 flex flex-wrap gap-4 p-4 bg-olive-50 rounded-xl border border-olive-200 text-sm text-olive-900">
                <span className="inline-flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-olive-700" />
                  {new Date(selectedDate + "T12:00:00").toLocaleDateString(
                    "en-US",
                    { weekday: "long", month: "long", day: "numeric" }
                  )}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4 text-olive-700" />
                  {formatDisplayTime(selectedTime)}
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="booking-name"
                  className="block text-sm font-medium text-olive-900 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="booking-name"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, name: e.target.value }))
                  }
                  className="w-full rounded-xl border border-tan-200 bg-tan-50 px-4 py-3 text-olive-900 focus:border-olive-500 focus:outline-none focus:ring-2 focus:ring-olive-500/20"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="booking-email"
                    className="block text-sm font-medium text-olive-900 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="booking-email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, email: e.target.value }))
                    }
                    className="w-full rounded-xl border border-tan-200 bg-tan-50 px-4 py-3 text-olive-900 focus:border-olive-500 focus:outline-none focus:ring-2 focus:ring-olive-500/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="booking-phone"
                    className="block text-sm font-medium text-olive-900 mb-2"
                  >
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="booking-phone"
                    required
                    value={form.phone}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, phone: e.target.value }))
                    }
                    className="w-full rounded-xl border border-tan-200 bg-tan-50 px-4 py-3 text-olive-900 focus:border-olive-500 focus:outline-none focus:ring-2 focus:ring-olive-500/20"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="booking-case-type"
                  className="block text-sm font-medium text-olive-900 mb-2"
                >
                  Type of Case *
                </label>
                <select
                  id="booking-case-type"
                  required
                  value={form.caseType}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, caseType: e.target.value }))
                  }
                  className="w-full rounded-xl border border-tan-200 bg-tan-50 px-4 py-3 text-olive-900 focus:border-olive-500 focus:outline-none focus:ring-2 focus:ring-olive-500/20"
                >
                  <option value="">Select a service</option>
                  {CASE_TYPES.map((c) => (
                    <option key={c.value} value={c.value}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="booking-consultation-type"
                  className="block text-sm font-medium text-olive-900 mb-2"
                >
                  Consultation Type *
                </label>
                <select
                  id="booking-consultation-type"
                  required
                  value={form.consultationType}
                  onChange={(e) =>
                    setForm((p) => ({
                      ...p,
                      consultationType: e.target.value,
                    }))
                  }
                  className="w-full rounded-xl border border-tan-200 bg-tan-50 px-4 py-3 text-olive-900 focus:border-olive-500 focus:outline-none focus:ring-2 focus:ring-olive-500/20"
                >
                  <option value="">Select consultation type</option>
                  {CONSULTATION_TYPES.map((c) => (
                    <option key={c.value} value={c.value}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="booking-message"
                  className="block text-sm font-medium text-olive-900 mb-2"
                >
                  Brief Description of Your Situation *
                </label>
                <textarea
                  id="booking-message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, message: e.target.value }))
                  }
                  placeholder="Please provide a brief overview of your immigration matter..."
                  className="w-full rounded-xl border border-tan-200 bg-tan-50 px-4 py-3 text-olive-900 focus:border-olive-500 focus:outline-none focus:ring-2 focus:ring-olive-500/20 resize-none"
                />
              </div>

              {error && <p className="text-red-600 text-sm">{error}</p>}

              <p className="text-xs text-slate-500">
                Submitting this form does not create an attorney-client
                relationship. Please do not send confidential information.
              </p>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-olive-700 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-olive-600 hover:shadow-lg disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Booking...
                  </>
                ) : (
                  "Book Appointment"
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
