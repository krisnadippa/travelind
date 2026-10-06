"use client";

import React, { useState } from "react";

interface VillaListingsHeaderProps {
  totalCount: number;
  activePill: string;
  onSelectPill: (pill: string) => void;
  onSortChange: (sort: string) => void;
}

const quickFilterPills = [
  { id: "all", label: "Semua Villa (68)" },
  { id: "private_pool", label: "Private Pool (54)" },
  { id: "beachfront", label: "Dekat Pantai (22)" },
  { id: "family", label: "Family Friendly (35)" },
  { id: "romantic", label: "Romantic Stay (19)" },
];

export default function VillaListingsHeader({
  totalCount,
  activePill,
  onSelectPill,
  onSortChange,
}: VillaListingsHeaderProps) {
  const [viewMode, setViewMode] = useState<"grid" | "map">("grid");

  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
      {/* Title & View Mode Toggle */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm pb-space-sm">
        <div>
          <h1 className="font-headline-lg text-2xl md:text-3xl text-on-surface font-bold tracking-tight">
            Villa &amp; Luxury Stays di Bali
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant mt-0.5 text-sm">
            Menampilkan {totalCount} pilihan villa privat terverifikasi dengan butler 24 jam &amp; fasilitas bintang lima
          </p>
        </div>

        {/* Quick View Toggle Buttons */}
        <div className="flex items-center gap-2 self-start md:self-auto">
          <div className="inline-flex bg-surface-container-low p-1 rounded-lg">
            <button
              onClick={() => setViewMode("grid")}
              className={`px-3 py-1.5 rounded font-label-md text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === "grid"
                  ? "shadow-sm text-white"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
              style={
                viewMode === "grid"
                  ? { backgroundColor: "rgb(2, 100, 246)", color: "rgb(255, 255, 255)" }
                  : {}
              }
              type="button"
            >
              <span className="material-symbols-outlined text-base">grid_view</span>
              <span>Daftar Villa</span>
            </button>
            <button
              onClick={() => setViewMode("map")}
              className={`px-3 py-1.5 rounded font-label-md text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                viewMode === "map"
                  ? "shadow-sm text-white"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
              style={
                viewMode === "map"
                  ? { backgroundColor: "rgb(2, 100, 246)", color: "rgb(255, 255, 255)" }
                  : {}
              }
              type="button"
            >
              <span className="material-symbols-outlined text-base">map</span>
              <span>Lihat di Peta</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sorting & Quick Filters Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-sm pt-space-sm border-t border-surface-container-highest">
        {/* Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full">
          {quickFilterPills.map((pill) => {
            const isActive = activePill === pill.id;
            return (
              <button
                key={pill.id}
                onClick={() => onSelectPill(pill.id)}
                className={`px-3 py-1.5 rounded-full font-label-md text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  isActive
                    ? "text-on-primary shadow-sm"
                    : "bg-surface-container-low hover:bg-surface-container text-on-surface-variant"
                }`}
                style={
                  isActive
                    ? { backgroundColor: "rgb(2, 100, 246)", color: "rgb(255, 255, 255)" }
                    : {}
                }
                type="button"
              >
                {pill.label}
              </button>
            );
          })}
        </div>

        {/* Sorting Select Dropdown */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="font-label-md text-xs text-outline">Urutkan:</span>
          <div className="relative inline-block">
            <select
              onChange={(e) => onSortChange(e.target.value)}
              className="bg-surface-container-low text-on-surface font-label-md text-xs font-semibold py-1.5 pl-3 pr-8 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-primary-container"
            >
              <option value="recommended">Rekomendasi Terbaik Travelind</option>
              <option value="price_low">Harga: Rendah ke Tinggi</option>
              <option value="price_high">Harga: Tinggi ke Rendah</option>
              <option value="rating_high">Rating Tamu Tertinggi</option>
              <option value="most_booked">Paling Sering Dipesan</option>
            </select>
            <span className="material-symbols-outlined absolute right-2 top-1.5 text-sm text-outline pointer-events-none">
              unfold_more
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
