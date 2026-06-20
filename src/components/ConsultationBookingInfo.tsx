import { CheckCircle2, Clock, DollarSign } from "lucide-react";
import {
  businessInvestmentServices,
  consultationFees,
  cancellationPolicy,
} from "@/lib/constants";

export function ConsultationBookingInfo() {
  return (
    <div className="border-b border-tan-200 bg-tan-50/80 p-4 sm:p-6 md:p-8 space-y-4">
      <div className="rounded-xl bg-white border border-tan-200 p-4 sm:p-5">
        <div className="flex items-center gap-2 mb-3">
          <DollarSign className="h-5 w-5 text-gold-600 shrink-0" />
          <h3 className="font-serif text-base sm:text-lg font-semibold text-olive-900">
            Consultation Fees
          </h3>
        </div>
        <div className="space-y-3">
          {consultationFees.map((fee) => (
            <div
              key={fee.title}
              className="border-b border-tan-100 pb-3 last:border-0 last:pb-0"
            >
              <div className="flex items-baseline justify-between gap-3 mb-0.5">
                <p className="font-semibold text-sm text-olive-900">
                  {fee.title}
                </p>
                <p className="font-serif text-base font-bold text-gold-600 shrink-0">
                  {fee.price}
                </p>
              </div>
              <p className="text-xs uppercase tracking-wide text-olive-600 mb-1">
                {fee.duration} · in person or video
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {fee.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="rounded-xl bg-white border border-tan-200 p-4 sm:p-5">
          <h3 className="font-serif text-sm sm:text-base font-semibold text-olive-900 mb-2">
            Business / Investment Services Includes
          </h3>
          <ul className="space-y-1.5">
            {businessInvestmentServices.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-xs sm:text-sm text-slate-700"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-olive-600 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl bg-white border border-tan-200 p-4 sm:p-5">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="h-4 w-4 text-olive-700 shrink-0" />
            <h3 className="font-serif text-sm sm:text-base font-semibold text-olive-900">
              Cancellation Policy
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
            {cancellationPolicy.reschedule}
          </p>
          <ul className="space-y-1">
            {cancellationPolicy.rules.map((rule) => (
              <li
                key={rule}
                className="text-xs sm:text-sm text-slate-600 leading-relaxed"
              >
                {rule}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
