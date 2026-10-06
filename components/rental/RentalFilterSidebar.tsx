"use client";

import React from "react";

interface RentalFilterSidebarProps {
  selectedCategories: string[];
  onToggleCategory: (cat: string) => void;
  selectedTransmission: "all" | "matic" | "manual";
  onTransmissionChange: (trans: "all" | "matic" | "manual") => void;
  selectedPriceRange: string[];
  onTogglePriceRange: (range: string) => void;
  selectedSeats: number | null;
  onSelectSeats: (seats: number | null) => void;
  selectedPerks: string[];
  onTogglePerk: (perk: string) => void;
  onResetFilters: () => void;
  activeFilterCount: number;
}

const CATEGORIES = [
  { id: "city-car", label: "City Car Compact", count: 14 },
  { id: "mpv", label: "MPV Keluarga (7 Seater)", count: 18 },
  { id: "suv", label: "Premium & Luxury SUV", count: 6 },
  { id: "scooter-maxi", label: "Maxi Scooter (155cc)", count: 20 },
  { id: "scooter-retro", label: "Retro Scooter (Vespa/Scoopy)", count: 12 },
];

const PRICE_RANGES = [
  { id: "under-300", label: "< Rp 300.000 / hari" },
  { id: "300-600", label: "Rp 300.000 - Rp 600.000" },
  { id: "600-1000", label: "Rp 600.000 - Rp 1.000.000" },
  { id: "above-1000", label: "> Rp 1.000.000 / hari" },
];

const PERKS = [
  "Antar Bandara Gratis",
  "Gratis Batal 24 Jam",
  "Asuransi All-Risk",
  "Unit Produksi 2023 - 2025",
];

export default function RentalFilterSidebar({
  selectedCategories,
  onToggleCategory,
  selectedTransmission,
  onTransmissionChange,
  selectedPriceRange,
  onTogglePriceRange,
  selectedSeats,
  onSelectSeats,
  selectedPerks,
  onTogglePerk,
  onResetFilters,
  activeFilterCount,
}: RentalFilterSidebarProps) {
  return (
    <aside className="w-full lg:w-72 shrink-0 flex flex-col gap-space-md">
      {/* Filter Head */}
      <div className="flex items-center justify-between bg-surface-container-lowest p-space-md rounded-xl shadow-sm border border-surface-container-high/60">
        <div className="flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-primary-container text-[20px]">
            tune
          </span>
          <span className="font-label-md text-label-md text-on-surface font-bold">
            Filter Pencarian
          </span>
        </div>
        <button
          type="button"
          onClick={onResetFilters}
          className="text-primary-container font-label-md text-label-md font-medium hover:underline text-[12px] cursor-pointer"
        >
          Reset ({activeFilterCount})
        </button>
      </div>

      {/* Filter Containers */}
      <div className="flex flex-col gap-space-md bg-surface-container-lowest p-space-md rounded-xl shadow-sm border border-surface-container-high/60">
        {/* Category Selection */}
        <div className="flex flex-col gap-space-xs">
          <span className="font-label-md text-label-md text-on-surface font-bold text-sm">
            Kategori Armada
          </span>
          <div className="flex flex-col gap-space-xs mt-space-xs">
            {CATEGORIES.map((cat) => {
              const isChecked = selectedCategories.includes(cat.id);
              return (
                <label
                  key={cat.id}
                  className="flex items-center justify-between text-on-surface-variant font-label-md text-label-md cursor-pointer hover:text-on-surface text-xs sm:text-sm py-0.5"
                >
                  <span className="flex items-center gap-space-xs">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => onToggleCategory(cat.id)}
                      className="w-4 h-4 rounded text-primary-container accent-primary-container focus:ring-0 cursor-pointer"
                    />
                    <span>{cat.label}</span>
                  </span>
                  <span className="text-secondary text-[11px] bg-surface-container-low px-space-xs rounded">
                    {cat.count}
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        <div className="h-[1px] bg-surface-container-highest" />

        {/* Transmisi */}
        <div className="flex flex-col gap-space-xs">
          <span className="font-label-md text-label-md text-on-surface font-bold text-sm">
            Transmisi
          </span>
          <div className="grid grid-cols-2 gap-space-xs mt-space-xs">
            <button
              type="button"
              onClick={() =>
                onTransmissionChange(
                  selectedTransmission === "matic" ? "all" : "matic"
                )
              }
              className={`py-space-xs px-space-sm rounded-lg font-label-md text-label-md font-semibold text-center transition-all cursor-pointer text-xs ${
                selectedTransmission === "matic"
                  ? "bg-primary-container text-on-primary shadow-xs"
                  : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container"
              }`}
            >
              Matic (AT/CVT)
            </button>
            <button
              type="button"
              onClick={() =>
                onTransmissionChange(
                  selectedTransmission === "manual" ? "all" : "manual"
                )
              }
              className={`py-space-xs px-space-sm rounded-lg font-label-md text-label-md text-center transition-all cursor-pointer text-xs ${
                selectedTransmission === "manual"
                  ? "bg-primary-container text-on-primary font-semibold shadow-xs"
                  : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container"
              }`}
            >
              Manual (MT)
            </button>
          </div>
        </div>

        <div className="h-[1px] bg-surface-container-highest" />

        {/* Rentang Harga */}
        <div className="flex flex-col gap-space-xs">
          <div className="flex items-center justify-between">
            <span className="font-label-md text-label-md text-on-surface font-bold text-sm">
              Tarif Per Hari
            </span>
            <span className="font-label-md text-label-md text-primary font-semibold text-[12px]">
              Hingga Rp 1.5jt
            </span>
          </div>
          <div className="flex flex-col gap-space-xs mt-space-xs">
            {PRICE_RANGES.map((pr) => {
              const isChecked = selectedPriceRange.includes(pr.id);
              return (
                <label
                  key={pr.id}
                  className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md cursor-pointer hover:text-on-surface text-xs sm:text-sm py-0.5"
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => onTogglePriceRange(pr.id)}
                    className="w-4 h-4 rounded text-primary-container accent-primary-container cursor-pointer"
                  />
                  <span>{pr.label}</span>
                </label>
              );
            })}
          </div>
        </div>

        <div className="h-[1px] bg-surface-container-highest" />

        {/* Kapasitas Penumpang */}
        <div className="flex flex-col gap-space-xs">
          <span className="font-label-md text-label-md text-on-surface font-bold text-sm">
            Kapasitas Kursi
          </span>
          <div className="flex flex-wrap gap-space-xs mt-space-xs">
            {[
              { seats: 2, label: "2 Orang" },
              { seats: 5, label: "4 - 5 Orang" },
              { seats: 7, label: "7+ Orang" },
            ].map((item) => {
              const isSelected = selectedSeats === item.seats;
              return (
                <button
                  type="button"
                  key={item.seats}
                  onClick={() =>
                    onSelectSeats(isSelected ? null : item.seats)
                  }
                  className={`px-space-sm py-space-xs rounded-lg font-label-md text-xs transition-all cursor-pointer ${
                    isSelected
                      ? "bg-primary-container text-on-primary font-semibold shadow-xs"
                      : "bg-surface-container-low text-on-surface hover:bg-secondary-container"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="h-[1px] bg-surface-container-highest" />

        {/* Keistimewaan Layanan */}
        <div className="flex flex-col gap-space-xs">
          <span className="font-label-md text-label-md text-on-surface font-bold text-sm">
            Fasilitas &amp; Jaminan
          </span>
          <div className="flex flex-col gap-space-xs mt-space-xs">
            {PERKS.map((perk, idx) => {
              const isChecked = selectedPerks.includes(perk);
              return (
                <label
                  key={idx}
                  className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md cursor-pointer hover:text-on-surface text-xs sm:text-sm py-0.5"
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => onTogglePerk(perk)}
                    className="w-4 h-4 rounded text-primary-container accent-primary-container cursor-pointer"
                  />
                  <span>{perk}</span>
                </label>
              );
            })}
          </div>
        </div>

        <div className="h-[1px] bg-surface-container-highest" />

        {/* Syarat Sewa Badge Box */}
        <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-space-xs border border-surface-container-high/60">
          <div className="flex items-center gap-space-xs text-primary-container">
            <span className="material-symbols-outlined text-[18px]">
              verified
            </span>
            <span className="font-label-md text-label-md font-bold text-on-surface text-xs sm:text-sm">
              Syarat Cepat Wisatawan
            </span>
          </div>
          <p className="font-body-md text-label-md text-on-surface-variant text-[11px] leading-relaxed">
            Cukup KTP/Paspor &amp; SIM A/C aktif. Tanpa tahan jaminan kartu kredit atau uang jaminan ribet.
          </p>
        </div>
      </div>
    </aside>
  );
}
