import React from "react";
import Link from "next/link";

export default function VillaBookingStepper() {
  return (
    <div className="w-full px-gutter pb-space-sm">
      <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl px-space-md sm:px-gutter py-space-sm shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-space-md">
        <div className="flex items-center gap-2 text-[13px] text-on-surface-variant font-medium">
          <span className="material-symbols-outlined text-primary text-[18px]">
            verified
          </span>
          <span>Jaminan Ketersediaan Real-Time:</span>
          <span className="text-primary font-semibold hidden sm:inline">
            Pilih tanggal &amp; kamar untuk melanjutkan reservasi
          </span>
        </div>

        <nav aria-label="Booking Stepper" className="flex items-center flex-wrap gap-2 text-label-md">
          {/* Step 1 */}
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center text-[12px] font-bold">
              1
            </span>
            <span className="font-semibold text-primary text-[13px]">
              Detail Villa
            </span>
          </div>

          <div className="w-6 sm:w-8 h-0.5 bg-outline-variant/40 shrink-0" />

          {/* Step 2 */}
          <Link
            href="/villas/villa-seminyak-oasis/booking"
            className="flex items-center gap-2 hover:opacity-100 transition-opacity"
          >
            <span className="w-6 h-6 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center text-[12px] font-bold">
              2
            </span>
            <span className="font-medium text-on-surface-variant text-[13px] hover:text-primary">
              Data Tamu
            </span>
          </Link>

          <div className="w-6 sm:w-8 h-0.5 bg-outline-variant/40 shrink-0" />

          {/* Step 3 */}
          <div className="flex items-center gap-2 opacity-60">
            <span className="w-6 h-6 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center text-[12px] font-bold">
              3
            </span>
            <span className="font-medium text-on-surface-variant text-[13px]">
              Pembayaran
            </span>
          </div>

          <div className="w-6 sm:w-8 h-0.5 bg-outline-variant/40 shrink-0" />

          {/* Step 4 */}
          <div className="flex items-center gap-2 opacity-60">
            <span className="w-6 h-6 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center text-[12px] font-bold">
              4
            </span>
            <span className="font-medium text-on-surface-variant text-[13px]">
              Konfirmasi
            </span>
          </div>
        </nav>
      </div>
    </div>
  );
}
