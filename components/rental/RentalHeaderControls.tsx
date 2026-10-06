"use client";

import React from "react";

interface RentalHeaderControlsProps {
  totalCount: number;
  sortBy: string;
  onSortChange: (sort: string) => void;
  viewMode: "grid" | "list";
  onViewModeChange: (mode: "grid" | "list") => void;
}

export default function RentalHeaderControls({
  totalCount,
  sortBy,
  onSortChange,
  viewMode,
  onViewModeChange,
}: RentalHeaderControlsProps) {
  return (
    <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm bg-surface-container-lowest p-space-md rounded-xl shadow-sm border border-surface-container-high/60">
      <div className="flex flex-col">
        <h1 className="font-headline-lg text-label-md text-on-surface font-bold text-[18px] leading-tight">
          Armada Tersedia di Bali
        </h1>
        <span className="font-body-md text-label-md text-on-surface-variant text-[13px]">
          Menampilkan <strong className="text-on-surface">{totalCount} unit kendaraan</strong> siap pakai di area Kuta, Seminyak, Canggu &amp; Bandara
        </span>
      </div>

      {/* Sort & View Layout Switcher */}
      <div className="flex items-center gap-space-sm w-full sm:w-auto justify-between sm:justify-end">
        <div className="flex items-center gap-space-xs bg-surface-container-low px-space-sm py-space-xs rounded-lg border border-surface-container-high/50">
          <span className="font-label-md text-label-md text-secondary text-[12px]">
            Urutkan:
          </span>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="bg-transparent font-label-md text-label-md text-on-surface font-semibold focus:outline-none cursor-pointer text-xs"
          >
            <option value="popular">Paling Populer</option>
            <option value="price-low">Harga Terendah</option>
            <option value="price-high">Harga Tertinggi</option>
            <option value="rating">Rating Tertinggi</option>
            <option value="newest">Armada Terbaru (2024)</option>
          </select>
        </div>

        <div className="flex items-center bg-surface-container-low p-space-xs rounded-lg border border-surface-container-high/50">
          <button
            type="button"
            onClick={() => onViewModeChange("grid")}
            className={`p-space-xs rounded transition-all cursor-pointer ${
              viewMode === "grid"
                ? "bg-surface-container-lowest text-primary-container shadow-sm"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
            title="Grid View"
          >
            <span className="material-symbols-outlined text-[18px]">
              grid_view
            </span>
          </button>
          <button
            type="button"
            onClick={() => onViewModeChange("list")}
            className={`p-space-xs rounded transition-all cursor-pointer ${
              viewMode === "list"
                ? "bg-surface-container-lowest text-primary-container shadow-sm"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
            title="List View"
          >
            <span className="material-symbols-outlined text-[18px]">
              format_list_bulleted
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
