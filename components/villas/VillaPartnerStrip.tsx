import React from "react";

export default function VillaPartnerStrip() {
  return (
    <section className="w-full bg-surface-container-low py-space-md border-t border-surface-container-highest">
      <div className="max-w-7xl mx-auto px-margin flex flex-wrap items-center justify-between gap-space-md text-outline">
        <div className="flex flex-wrap items-center gap-space-md">
          <span className="font-label-md text-xs font-bold tracking-wider uppercase text-on-surface-variant">
            Mitra Resmi:
          </span>
          <div className="flex flex-wrap items-center gap-space-sm">
            <span className="inline-flex items-center gap-1 font-label-md text-xs font-semibold text-on-surface bg-surface-container-lowest px-2.5 py-1 rounded shadow-xs">
              <span className="material-symbols-outlined text-primary text-sm">
                shield
              </span>{" "}
              ASITA Indonesia
            </span>
            <span className="inline-flex items-center gap-1 font-label-md text-xs font-semibold text-on-surface bg-surface-container-lowest px-2.5 py-1 rounded shadow-xs">
              <span className="material-symbols-outlined text-primary text-sm">
                award_star
              </span>{" "}
              Wonderful Indonesia
            </span>
            <span className="inline-flex items-center gap-1 font-label-md text-xs font-semibold text-on-surface bg-surface-container-lowest px-2.5 py-1 rounded shadow-xs">
              <span className="material-symbols-outlined text-primary text-sm">
                verified
              </span>{" "}
              Kemenparekraf RI
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-space-md text-xs font-label-md">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-sm text-primary">
              lock
            </span>{" "}
            256-bit Bank Grade Encryption
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-sm text-primary">
              credit_card
            </span>{" "}
            BCA · Mandiri · QRIS · Visa · Mastercard
          </span>
        </div>
      </div>
    </section>
  );
}
