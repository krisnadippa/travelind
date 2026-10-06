"use client";

import React, { useState } from "react";
import Link from "next/link";

interface VillaSearchStripProps {
  onSearchChange?: (location: string) => void;
}

export default function VillaSearchStrip({ onSearchChange }: VillaSearchStripProps) {
  const [location, setLocation] = useState("Seminyak & Canggu, Bali");
  const [dates, setDates] = useState("19 Mar - 22 Mar (3 Mlm)");
  const [guests, setGuests] = useState("2 Tamu · 1 Private Villa");
  const [isEditing, setIsEditing] = useState(false);

  const handleSearch = () => {
    if (onSearchChange) {
      onSearchChange(location);
    }
    setIsEditing(false);
  };

  return (
    <section className="w-full bg-surface-container-lowest shadow-sm">
      <div className="max-w-7xl mx-auto px-margin py-space-md">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md mb-space-md text-sm"
        >
          <Link
            className="hover:text-primary transition-colors flex items-center gap-1"
            href="/"
          >
            <span className="material-symbols-outlined text-sm">home</span>
            <span>Beranda</span>
          </Link>
          <span className="text-outline-variant">/</span>
          <Link className="hover:text-primary transition-colors" href="/villas">
            Villas &amp; Stays Bali
          </Link>
          <span className="text-outline-variant">/</span>
          <span className="text-on-surface font-semibold">Semua Villa Terkurasi</span>
        </nav>

        {/* Search Formulation Card */}
        <div className="bg-surface-container-low rounded-xl p-space-sm md:p-space-md grid grid-cols-1 md:grid-cols-12 gap-space-sm items-center">
          {/* Location Picker */}
          <div
            onClick={() => setIsEditing(true)}
            className="md:col-span-4 bg-surface-container-lowest rounded-lg p-space-sm flex items-center gap-space-sm hover:shadow-sm transition-all cursor-pointer"
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
              style={{
                backgroundColor: "rgb(235, 243, 254)",
                color: "rgb(2, 100, 246)",
              }}
            >
              <span className="material-symbols-outlined text-primary">location_on</span>
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <span className="text-outline font-label-md text-xs uppercase tracking-wider">
                Lokasi / Destinasi
              </span>
              <div className="flex items-center gap-1">
                {isEditing ? (
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="font-label-md text-label-md text-on-surface font-bold bg-transparent border-b border-secondary outline-none w-full"
                    autoFocus
                  />
                ) : (
                  <span className="font-label-md text-label-md text-on-surface font-bold truncate">
                    {location}
                  </span>
                )}
                <span className="material-symbols-outlined text-sm text-outline">
                  expand_more
                </span>
              </div>
            </div>
          </div>

          {/* Date Range */}
          <div className="md:col-span-3 bg-surface-container-lowest rounded-lg p-space-sm flex items-center gap-space-sm hover:shadow-sm transition-all cursor-pointer">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
              style={{
                backgroundColor: "rgb(235, 243, 254)",
                color: "rgb(2, 100, 246)",
              }}
            >
              <span className="material-symbols-outlined text-primary">
                calendar_month
              </span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-outline font-label-md text-xs uppercase tracking-wider">
                Check-in — Check-out
              </span>
              <span className="font-label-md text-label-md text-on-surface font-semibold truncate">
                {dates}
              </span>
            </div>
          </div>

          {/* Guests / Capacity */}
          <div className="md:col-span-3 bg-surface-container-lowest rounded-lg p-space-sm flex items-center gap-space-sm hover:shadow-sm transition-all cursor-pointer">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
              style={{
                backgroundColor: "rgb(235, 243, 254)",
                color: "rgb(2, 100, 246)",
              }}
            >
              <span className="material-symbols-outlined text-primary">group</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-outline font-label-md text-xs uppercase tracking-wider">
                Kapasitas Tamu
              </span>
              <span className="font-label-md text-label-md text-on-surface font-semibold truncate">
                {guests}
              </span>
            </div>
          </div>

          {/* Action Button */}
          <div className="md:col-span-2">
            <button
              onClick={handleSearch}
              className="w-full h-full min-h-[52px] font-label-md text-label-md font-semibold rounded-lg flex items-center justify-center gap-space-xs shadow-md transition-all active:scale-[0.98] cursor-pointer"
              style={{
                backgroundColor: "rgb(2, 100, 246)",
                color: "rgb(255, 255, 255)",
              }}
            >
              <span className="material-symbols-outlined">search</span>
              <span>Ubah Pencarian</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
