import React from "react";

interface BookingStepperHeaderProps {
  reservationCode?: string;
}

export default function BookingStepperHeader({
  reservationCode = "#TVL-VIL-2026-8891",
}: BookingStepperHeaderProps) {
  return (
    <section className="w-full bg-surface-container-lowest shadow-[0_2px_12px_rgba(73,96,126,0.04)] border-b border-surface-container-highest">
      <div className="w-full px-gutter py-space-md flex flex-col md:flex-row md:items-center justify-between gap-space-md">
        {/* Reservation Number Info */}
        <div className="flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-xs text-secondary font-label-md text-xs">
            <span className="material-symbols-outlined text-[16px] text-primary-container">
              receipt_long
            </span>
            <span>
              Nomor Reservasi:{" "}
              <strong className="text-on-surface font-bold text-[14px]">
                {reservationCode}
              </strong>
            </span>
          </div>
          <p className="font-label-md text-xs text-on-surface-variant">
            Lengkapi data tamu dan preferensi menginap Anda untuk melanjutkan.
          </p>
        </div>

        {/* 4-Step Stepper Bar */}
        <div className="flex items-center gap-space-xs overflow-x-auto pb-space-xs md:pb-0">
          {/* Step 1: Completed */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-6 h-6 rounded-full bg-primary-fixed flex items-center justify-center text-primary-container shrink-0">
              <span className="material-symbols-outlined text-[15px] font-bold">
                check
              </span>
            </div>
            <span className="font-label-md text-xs font-medium text-secondary">
              Detail Villa
            </span>
          </div>

          <div className="w-6 h-[1.5px] bg-primary-fixed shrink-0" />

          {/* Step 2: Active */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-6 h-6 rounded-full bg-primary-container text-on-primary flex items-center justify-center text-xs font-bold shadow-md shrink-0">
              2
            </div>
            <span className="font-label-md text-xs font-bold text-primary-container">
              Data Tamu
            </span>
          </div>

          <div className="w-6 h-[1.5px] bg-surface-container-high shrink-0" />

          {/* Step 3: Upcoming */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-6 h-6 rounded-full bg-surface-container text-outline flex items-center justify-center text-xs font-medium shrink-0">
              3
            </div>
            <span className="font-label-md text-xs font-medium text-outline">
              Pembayaran
            </span>
          </div>

          <div className="w-6 h-[1.5px] bg-surface-container-high shrink-0" />

          {/* Step 4: Upcoming */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-6 h-6 rounded-full bg-surface-container text-outline flex items-center justify-center text-xs font-medium shrink-0">
              4
            </div>
            <span className="font-label-md text-xs font-medium text-outline">
              E-Voucher Konfirmasi
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
