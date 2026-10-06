"use client";

import React, { useState } from "react";

interface VillaFilterSidebarProps {
  onFilterChange?: (filters: any) => void;
}

export default function VillaFilterSidebar({
  onFilterChange,
}: VillaFilterSidebarProps) {
  const [activeFilters, setActiveFilters] = useState<string[]>([
    "Seminyak",
    "Private Pool",
    "Butler 24 Jam",
  ]);

  const [maxPrice, setMaxPrice] = useState(4500000);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([
    "Entire Private Villa",
  ]);
  const [selectedAreas, setSelectedAreas] = useState<string[]>([
    "Seminyak (Kayu Aya & Petitenget)",
  ]);
  const [selectedFacilities, setSelectedFacilities] = useState<string[]>([
    "Kolam Renang Privat",
    "Butler Privat 24 Jam",
  ]);
  const [selectedRating, setSelectedRating] = useState<string>("4.8");

  const removeFilter = (filterName: string) => {
    setActiveFilters((prev) => prev.filter((f) => f !== filterName));
  };

  const resetAll = () => {
    setActiveFilters([]);
    setSelectedTypes([]);
    setSelectedAreas([]);
    setSelectedFacilities([]);
    setMaxPrice(10000000);
  };

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <aside className="lg:col-span-3 sticky top-24 space-y-space-md">
      {/* Active Filter Badge Strip */}
      <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
        <div className="flex items-center justify-between pb-space-xs mb-space-sm">
          <span className="font-label-md text-label-md text-on-surface font-bold text-sm">
            Filter Diterapkan
          </span>
          <button
            onClick={resetAll}
            className="font-label-md text-xs text-primary-container hover:underline font-semibold cursor-pointer"
          >
            Reset Semua
          </button>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {activeFilters.map((filter) => (
            <span
              key={filter}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-label-md font-semibold"
              style={{
                backgroundColor: "rgb(235, 243, 254)",
                color: "rgb(2, 100, 246)",
              }}
            >
              {filter}
              <button
                type="button"
                onClick={() => removeFilter(filter)}
                className="hover:text-error flex items-center justify-center cursor-pointer"
                aria-label={`Remove filter ${filter}`}
              >
                <span className="material-symbols-outlined text-xs">close</span>
              </button>
            </span>
          ))}
          {activeFilters.length === 0 && (
            <span className="text-xs text-outline italic">
              Tidak ada filter aktif
            </span>
          )}
        </div>
      </div>

      {/* Filter Accordions Container */}
      <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-lg">
        {/* Price Range Slider */}
        <div>
          <h4 className="font-label-md text-label-md text-on-surface font-bold mb-space-xs text-sm">
            Tarif per Malam
          </h4>
          <p className="font-body-md text-xs text-outline mb-space-sm">
            Termasuk pajak &amp; layanan butler privat
          </p>
          <div className="space-y-space-xs">
            <input
              type="range"
              min="1500000"
              max="12000000"
              step="250000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full h-2 bg-surface-container-high rounded-lg cursor-pointer"
              style={{ accentColor: "rgb(2, 100, 246)" }}
            />
            <div className="flex items-center justify-between gap-space-xs pt-space-xs">
              <div className="bg-surface-container-low rounded-lg p-2 flex-1">
                <span className="text-[10px] uppercase font-bold text-outline block">
                  Minimum
                </span>
                <span className="font-label-md text-xs font-semibold text-on-surface">
                  Rp 1.500.000
                </span>
              </div>
              <span className="text-outline">-</span>
              <div className="bg-surface-container-low rounded-lg p-2 flex-1 text-right">
                <span className="text-[10px] uppercase font-bold text-outline block">
                  Maksimum
                </span>
                <span className="font-label-md text-xs font-semibold text-on-surface">
                  {maxPrice >= 12000000
                    ? "Rp 12.000.000+"
                    : formatRupiah(maxPrice)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Accommodation Type */}
        <div>
          <h4 className="font-label-md text-label-md text-on-surface font-bold mb-space-sm text-sm">
            Tipe Villa &amp; Akomodasi
          </h4>
          <div className="space-y-2.5 font-label-md text-label-md text-on-surface-variant">
            {[
              { label: "Entire Private Villa", count: 42 },
              { label: "Beachfront Luxury Villa", count: 18 },
              { label: "Cliffside Ocean Suite", count: 9 },
              { label: "Eco Bamboo Mansion", count: 12 },
              { label: "Private Pool Suite", count: 25 },
            ].map((type) => {
              const checked = selectedTypes.includes(type.label);
              return (
                <label
                  key={type.label}
                  className="flex items-center justify-between cursor-pointer group"
                >
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => {
                        setSelectedTypes((prev) =>
                          checked
                            ? prev.filter((t) => t !== type.label)
                            : [...prev, type.label]
                        );
                      }}
                      className="w-4 h-4 rounded"
                      style={{ accentColor: "rgb(2, 100, 246)" }}
                    />
                    <span className="group-hover:text-primary text-sm">
                      {type.label}
                    </span>
                  </div>
                  <span className="text-xs text-outline font-mono">
                    {type.count}
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Areas in Bali */}
        <div>
          <h4 className="font-label-md text-label-md text-on-surface font-bold mb-space-sm text-sm">
            Destinasi Populer Bali
          </h4>
          <div className="space-y-2.5 font-label-md text-label-md text-on-surface-variant">
            {[
              { label: "Seminyak (Kayu Aya & Petitenget)", count: 28 },
              { label: "Canggu (Batu Bolong & Echo)", count: 21 },
              { label: "Ubud (Sayan & Tegallalang)", count: 15 },
              { label: "Uluwatu & Bingin Cliff", count: 11 },
              { label: "Sanur Heritage Beach", count: 8 },
              { label: "Nusa Penida Coastal", count: 6 },
            ].map((area) => {
              const checked = selectedAreas.includes(area.label);
              return (
                <label
                  key={area.label}
                  className="flex items-center justify-between cursor-pointer group"
                >
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => {
                        setSelectedAreas((prev) =>
                          checked
                            ? prev.filter((a) => a !== area.label)
                            : [...prev, area.label]
                        );
                      }}
                      className="w-4 h-4 rounded"
                      style={{ accentColor: "rgb(2, 100, 246)" }}
                    />
                    <span className="group-hover:text-primary text-sm">
                      {area.label}
                    </span>
                  </div>
                  <span className="text-xs text-outline font-mono">
                    {area.count}
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Signature Facilities */}
        <div>
          <h4 className="font-label-md text-label-md text-on-surface font-bold mb-space-sm text-sm">
            Fasilitas Prioritas
          </h4>
          <div className="space-y-2.5 font-label-md text-label-md text-on-surface-variant">
            {[
              { label: "Kolam Renang Privat", icon: "pool" },
              { label: "Butler Privat 24 Jam", icon: "room_service" },
              { label: "Floating Breakfast", icon: "breakfast_dining" },
              { label: "Free Airport Transfer", icon: "airport_shuttle" },
              { label: "Fiber Wi-Fi (150+ Mbps)", icon: "wifi" },
            ].map((facility) => {
              const checked = selectedFacilities.includes(facility.label);
              return (
                <label
                  key={facility.label}
                  className="flex items-center justify-between cursor-pointer group"
                >
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => {
                        setSelectedFacilities((prev) =>
                          checked
                            ? prev.filter((f) => f !== facility.label)
                            : [...prev, facility.label]
                        );
                      }}
                      className="w-4 h-4 rounded"
                      style={{ accentColor: "rgb(2, 100, 246)" }}
                    />
                    <span className="group-hover:text-primary text-sm">
                      {facility.label}
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-sm text-outline">
                    {facility.icon}
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Guest Rating Filter */}
        <div>
          <h4 className="font-label-md text-label-md text-on-surface font-bold mb-space-sm text-sm">
            Rating Ulasan Tamu
          </h4>
          <div className="space-y-2">
            <button
              type="button"
              onClick={() => setSelectedRating("4.8")}
              className={`w-full flex items-center justify-between p-2 rounded-lg font-label-md text-sm font-semibold transition-colors cursor-pointer ${
                selectedRating === "4.8"
                  ? "border"
                  : "hover:bg-surface-container text-on-surface-variant"
              }`}
              style={
                selectedRating === "4.8"
                  ? {
                      backgroundColor: "rgb(235, 243, 254)",
                      color: "rgb(2, 100, 246)",
                      borderColor: "rgb(191, 219, 254)",
                    }
                  : {}
              }
            >
              <div className="flex items-center gap-1.5">
                <span
                  className="material-symbols-outlined text-base"
                  style={{
                    color: "rgb(245, 158, 11)",
                    fontVariationSettings: "'FILL' 1",
                  }}
                >
                  star
                </span>
                <span>4.8+ Luar Biasa</span>
              </div>
              <span className="text-xs font-mono text-outline">48 Villa</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedRating("4.5")}
              className={`w-full flex items-center justify-between p-2 rounded-lg font-label-md text-sm font-semibold transition-colors cursor-pointer ${
                selectedRating === "4.5"
                  ? "border"
                  : "hover:bg-surface-container text-on-surface-variant"
              }`}
              style={
                selectedRating === "4.5"
                  ? {
                      backgroundColor: "rgb(235, 243, 254)",
                      color: "rgb(2, 100, 246)",
                      borderColor: "rgb(191, 219, 254)",
                    }
                  : {}
              }
            >
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-outline text-base">
                  star
                </span>
                <span>4.5+ Sangat Bagus</span>
              </div>
              <span className="text-xs font-mono text-outline">62 Villa</span>
            </button>
          </div>
        </div>

        {/* Booking Perks Policy */}
        <div>
          <h4 className="font-label-md text-label-md text-on-surface font-bold mb-space-sm text-sm">
            Kebijakan Pemesanan
          </h4>
          <div className="space-y-2 font-label-md text-label-md text-on-surface-variant">
            {[
              "Pembatalan Gratis (H-3)",
              "Konfirmasi Instan",
              "Bayar Saat Check-in",
            ].map((policy, idx) => (
              <label
                key={idx}
                className="flex items-center gap-2.5 cursor-pointer"
              >
                <input
                  type="checkbox"
                  defaultChecked={idx === 0}
                  className="w-4 h-4 rounded"
                  style={{ accentColor: "rgb(2, 100, 246)" }}
                />
                <span className="text-sm">{policy}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Curated Concierge Support Box */}
      <div
        className="rounded-xl p-space-md shadow-md relative overflow-hidden text-white"
        style={{ backgroundColor: "rgb(10, 25, 47)" }}
      >
        <div className="relative z-10 space-y-space-xs">
          <span
            className="font-label-md text-[11px] uppercase tracking-wider font-bold block"
            style={{ color: "#94A3B8" }}
          >
            Private Stays Advisory
          </span>
          <h5
            className="font-headline-lg text-lg font-bold leading-snug"
            style={{ color: "#FFFFFF" }}
          >
            Butuh Kurasi Khusus Acara Spesial?
          </h5>
          <p
            className="font-body-md text-xs leading-relaxed"
            style={{ color: "#CBD5E1" }}
          >
            Tim Private Concierge kami siap membantu reservasi honeymoon, wedding, atau retreat privat.
          </p>
          <a
            className="inline-flex items-center gap-2 text-xs font-label-md font-semibold text-white px-3.5 py-2.5 rounded-lg shadow-sm transition-all mt-2 cursor-pointer"
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: "#0264F6", color: "#FFFFFF" }}
          >
            <span className="material-symbols-outlined text-sm text-white">
              chat
            </span>
            <span>Hubungi Travelind Concierge</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
