import { Info } from "lucide-react";
import { consultationFees, cancellationPolicy } from "@/lib/constants";

export function ConsultationBookingInfo() {
  return (
    <details className="group border-b border-tan-200 bg-tan-50/80">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-2 p-4 sm:px-6 text-sm font-medium text-olive-900">
        <span className="inline-flex items-center gap-2">
          <Info className="h-4 w-4 text-gold-600 shrink-0" />
          Consultation fees &amp; cancellation policy
        </span>
        <span className="text-lg text-olive-700 transition-transform group-open:rotate-45">
          +
        </span>
      </summary>

      <div className="space-y-4 px-4 pb-5 sm:px-6">
        <div className="space-y-2">
          {consultationFees.map((fee) => (
            <div
              key={fee.title}
              className="flex items-baseline justify-between gap-3 text-sm"
            >
              <span className="text-slate-700">
                <span className="font-semibold text-olive-900">
                  {fee.title}
                </span>{" "}
                · {fee.duration}
              </span>
              <span className="font-serif font-bold text-gold-600 shrink-0">
                {fee.price}
              </span>
            </div>
          ))}
        </div>

        <div className="border-t border-tan-200 pt-3">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-olive-600">
            Cancellation Policy
          </p>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {cancellationPolicy.reschedule}
          </p>
          <ul className="mt-1 space-y-0.5">
            {cancellationPolicy.rules.map((rule) => (
              <li
                key={rule}
                className="text-xs text-slate-500 leading-relaxed"
              >
                {rule}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </details>
  );
}
