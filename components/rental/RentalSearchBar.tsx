"use client";

import React from "react";

interface RentalSearchBarProps {
  vehicleType: "all" | "car" | "motorcycle";
  onVehicleTypeChange: (type: "car" | "motorcycle") => void;
  driverMode: "self-drive" | "with-driver";
  onDriverModeChange: (mode: "self-drive" | "with-driver") => void;
  selectedLocation: string;
  onLocationChange: (loc: string) => void;
  onSearch: () => void;
}

export default function RentalSearchBar({
  vehicleType,
  onVehicleTypeChange,
  driverMode,
  onDriverModeChange,
  selectedLocation,
  onLocationChange,
  onSearch,
}: RentalSearchBarProps) {
  return (
    <section className="w-full px-gutter py-space-md bg-surface-container-lowest shadow-sm sticky top-20 z-40 border-b border-surface-container-high/60">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-space-sm">
        {/* Top Level Switcher & Driver Mode */}
        <div className="flex flex-wrap items-center justify-between gap-space-sm">
          {/* Mobil vs Motor Tabs */}
          <div className="inline-flex p-space-xs rounded-xl bg-surface-container-low border border-surface-container-high/50">
            <button
              type="button"
              id="tab-mobil"
              onClick={() => onVehicleTypeChange("car")}
              className={`flex items-center gap-space-xs px-space-md py-space-xs rounded-lg font-label-md text-label-md transition-all cursor-pointer ${
                vehicleType === "car"
                  ? "bg-primary-container text-on-primary font-bold shadow-sm"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">
                directions_car
              </span>
              <span>Rental Mobil</span>
            </button>
            <button
              type="button"
              id="tab-motor"
              onClick={() => onVehicleTypeChange("motorcycle")}
              className={`flex items-center gap-space-xs px-space-md py-space-xs rounded-lg font-label-md text-label-md transition-all cursor-pointer ${
                vehicleType === "motorcycle"
                  ? "bg-primary-container text-on-primary font-bold shadow-sm"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">
                two_wheeler
              </span>
              <span>Rental Motor</span>
            </button>
          </div>

          {/* Driver Mode Toggle (Lepas Kunci vs Dengan Driver) */}
          <div className="flex items-center gap-space-xs bg-surface-container-low p-space-xs rounded-xl border border-surface-container-high/50">
            <button
              type="button"
              onClick={() => onDriverModeChange("self-drive")}
              className={`px-space-sm py-space-xs rounded-lg font-label-md text-label-md transition-all cursor-pointer ${
                driverMode === "self-drive"
                  ? "bg-surface-container-lowest text-on-surface font-semibold shadow-sm"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              Lepas Kunci (Self Drive)
            </button>
            <button
              type="button"
              onClick={() => onDriverModeChange("with-driver")}
              className={`px-space-sm py-space-xs rounded-lg font-label-md text-label-md transition-all cursor-pointer ${
                driverMode === "with-driver"
                  ? "bg-surface-container-lowest text-on-surface font-semibold shadow-sm"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              Dengan Driver
            </button>
          </div>
        </div>

        {/* Search Inputs Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-sm items-center">
          {/* Lokasi Penjemputan */}
          <div className="lg:col-span-4 bg-surface-container-low rounded-xl px-space-md py-space-xs flex items-center gap-space-sm border border-surface-container-high/60 focus-within:border-primary-container transition-colors">
            <span className="material-symbols-outlined text-primary-container text-[22px] shrink-0">
              location_on
            </span>
            <div className="flex flex-col flex-1 min-w-0">
              <label className="font-label-md text-secondary text-[11px] leading-tight">
                Lokasi Penjemputan Bali
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => onLocationChange(e.target.value)}
                className="bg-transparent text-on-surface font-label-md text-label-md font-semibold focus:outline-none cursor-pointer truncate"
              >
                <option value="all">Semua Titik Penjemputan Bali</option>
                <option value="dps">Bandara Ngurah Rai (DPS)</option>
                <option value="seminyak">Seminyak &amp; Kerobokan</option>
                <option value="canggu">Canggu &amp; Pererenan</option>
                <option value="ubud">Ubud &amp; Gianyar</option>
                <option value="uluwatu">Uluwatu &amp; Jimbaran</option>
                <option value="sanur">Sanur Port &amp; Beach</option>
              </select>
            </div>
          </div>

          {/* Tanggal Ambil */}
          <div className="lg:col-span-3 bg-surface-container-low rounded-xl px-space-md py-space-xs flex items-center gap-space-sm border border-surface-container-high/60 cursor-pointer hover:border-primary-container/60 transition-colors">
            <span className="material-symbols-outlined text-secondary text-[22px] shrink-0">
              calendar_today
            </span>
            <div className="flex flex-col flex-1 min-w-0">
              <label className="font-label-md text-secondary text-[11px] leading-tight">
                Tanggal Ambil
              </label>
              <div className="font-label-md text-label-md text-on-surface font-semibold truncate">
                18 Mar 2026, 09:00
              </div>
            </div>
          </div>

          {/* Tanggal Kembali & Durasi */}
          <div className="lg:col-span-3 bg-surface-container-low rounded-xl px-space-md py-space-xs flex items-center gap-space-sm border border-surface-container-high/60 cursor-pointer hover:border-primary-container/60 transition-colors">
            <span className="material-symbols-outlined text-secondary text-[22px] shrink-0">
              event_repeat
            </span>
            <div className="flex flex-col flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <label className="font-label-md text-secondary text-[11px] leading-tight">
                  Tanggal Kembali
                </label>
                <span className="font-label-md text-primary font-bold text-[10px] bg-secondary-container px-space-xs rounded">
                  3 Hari
                </span>
              </div>
              <div className="font-label-md text-label-md text-on-surface font-semibold truncate">
                21 Mar 2026, 18:00
              </div>
            </div>
          </div>

          {/* Search CTA */}
          <div className="lg:col-span-2">
            <button
              type="button"
              onClick={onSearch}
              className="w-full h-full min-h-[52px] bg-primary-container hover:bg-surface-tint text-on-primary rounded-xl font-label-md text-label-md font-bold flex items-center justify-center gap-space-xs shadow-sm transition-all cursor-pointer hover:shadow-md"
            >
              <span className="material-symbols-outlined text-[20px]">
                search
              </span>
              <span>Cari Armada</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
