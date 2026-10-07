"use client";

import React from "react";

interface VehicleMobileBottomBarProps {
  totalFormatted: string;
  onBookNow: () => void;
}

export default function VehicleMobileBottomBar({
  totalFormatted,
  onBookNow,
}: VehicleMobileBottomBarProps) {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full bg-surface-container-lowest border-t border-surface-container-high shadow-2xl p-space-sm z-40 flex items-center justify-between">
      <div className="flex flex-col">
        <span className="text-[11px] text-on-surface-variant">
          Total Sewa 3 Hari
        </span>
        <span
          id="mobile-total-display"
          className="font-headline-lg text-primary font-bold text-lg leading-none"
        >
          {totalFormatted}
        </span>
      </div>

      <button
        type="button"
        onClick={onBookNow}
        className="px-space-md py-2.5 rounded-lg bg-primary-container text-on-primary font-label-md text-sm font-semibold flex items-center gap-1 shadow-sm cursor-pointer hover:bg-surface-tint"
      >
        <span>Pesan Sekarang</span>
        <span className="material-symbols-outlined text-[18px]">
          arrow_forward
        </span>
      </button>
    </div>
  );
}
