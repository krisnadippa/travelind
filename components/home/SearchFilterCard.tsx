"use client";

import React, { useState } from "react";

type SearchTab = "villa" | "car" | "motorcycle" | "activity";

interface TabConfig {
  id: SearchTab;
  label: string;
  icon: string;
  locationLabel: string;
  locationPlaceholder: string;
  dateLabel: string;
  defaultDates: string;
  guestLabel: string;
  defaultGuests: string;
  buttonText: string;
}

const tabConfigs: TabConfig[] = [
  {
    id: "villa",
    label: "Villa & Resort",
    icon: "villa",
    locationLabel: "Lokasi / Destinasi",
    locationPlaceholder: "Pilih area di Bali...",
    dateLabel: "Tanggal Sewa",
    defaultDates: "15 Mar - 18 Mar (3 Ml)",
    guestLabel: "Tamu & Kamar",
    defaultGuests: "2 Tamu, 1 Unit Villa",
    buttonText: "Cari Villa",
  },
  {
    id: "car",
    label: "Rental Mobil",
    icon: "directions_car",
    locationLabel: "Lokasi Jemput",
    locationPlaceholder: "Bandara Ngurah Rai, Seminyak, Ubud...",
    dateLabel: "Durasi Sewa",
    defaultDates: "15 Mar - 17 Mar (2 Hari)",
    guestLabel: "Tipe Sewa",
    defaultGuests: "Lepas Kunci / Driver",
    buttonText: "Cari Mobil",
  },
  {
    id: "motorcycle",
    label: "Rental Motor",
    icon: "two_wheeler",
    locationLabel: "Titik Antar Motor",
    locationPlaceholder: "Hotel, Villa, atau Bandara...",
    dateLabel: "Periode Sewa",
    defaultDates: "15 Mar - 18 Mar (3 Hari)",
    guestLabel: "Fasilitas Tambahan",
    defaultGuests: "2 Helm + Jas Hujan",
    buttonText: "Cari Motor",
  },
  {
    id: "activity",
    label: "Aktivitas & Tur",
    icon: "surfing",
    locationLabel: "Destinasi / Aktivitas",
    locationPlaceholder: "Ubud, Nusa Penida, Batur...",
    dateLabel: "Tanggal Aktivitas",
    defaultDates: "16 Mar 2026",
    guestLabel: "Jumlah Peserta",
    defaultGuests: "2 Orang Dewasa",
    buttonText: "Cari Tur",
  },
];

const quickFilters = [
  { label: "Private Pool Villa", href: "#villas" },
  { label: "Mobil Lepas Kunci", href: "#vehicles" },
  { label: "NMAX & Vespa Matic", href: "#vehicles" },
  { label: "ATV Ubud Quad", href: "#activities" },
  { label: "Snorkeling Penida", href: "#activities" },
];

export default function SearchFilterCard() {
  const [activeTab, setActiveTab] = useState<SearchTab>("villa");
  const [location, setLocation] = useState("Seminyak, Ubud, Canggu");

  const currentConfig = tabConfigs.find((tab) => tab.id === activeTab) || tabConfigs[0];

  return (
    <div className="relative z-20 w-full max-w-5xl -mt-16 sm:-mt-20 md:-mt-24 px-4">
      <div className="w-full bg-surface-container-lowest rounded-2xl shadow-xl border border-surface-container-highest p-4 sm:p-6 flex flex-col gap-5">
        {/* Search Category Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-surface-container-highest pb-4">
          <div className="flex flex-wrap items-center gap-2">
            {tabConfigs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl font-title-sm text-sm transition-all cursor-pointer ${
                    isActive
                      ? "bg-secondary text-on-primary font-semibold shadow-sm"
                      : "bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface font-medium"
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {tab.icon}
                  </span>
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs font-medium text-secondary">
            <span className="material-symbols-outlined text-[16px]">verified</span>
            <span>Garansi Harga Transparan</span>
          </div>
        </div>

        {/* Main Search Fields Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
          {/* Field 1: Lokasi / Destinasi */}
          <div className="md:col-span-4 flex items-center gap-3 px-4 py-3 rounded-xl border border-surface-container-highest hover:border-secondary focus-within:border-secondary focus-within:ring-2 focus-within:ring-secondary/20 transition-all bg-surface-container-lowest shadow-sm">
            <span className="material-symbols-outlined text-secondary text-[22px] shrink-0">
              location_on
            </span>
            <div className="flex flex-col text-left w-full overflow-hidden">
              <span className="font-label-caps text-[11px] uppercase font-bold text-on-surface-variant tracking-wider">
                {currentConfig.locationLabel}
              </span>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="font-title-sm text-sm text-on-surface font-semibold bg-transparent outline-none w-full placeholder:text-outline"
                placeholder={currentConfig.locationPlaceholder}
              />
            </div>
          </div>

          {/* Field 2: Tanggal Sewa / Check-in */}
          <div className="md:col-span-3 flex items-center gap-3 px-4 py-3 rounded-xl border border-surface-container-highest hover:border-secondary transition-colors bg-surface-container-lowest shadow-sm cursor-pointer">
            <span className="material-symbols-outlined text-secondary text-[22px] shrink-0">
              calendar_month
            </span>
            <div className="flex flex-col text-left">
              <span className="font-label-caps text-[11px] uppercase font-bold text-on-surface-variant tracking-wider">
                {currentConfig.dateLabel}
              </span>
              <span className="font-title-sm text-sm font-semibold text-on-surface whitespace-nowrap">
                {currentConfig.defaultDates}
              </span>
            </div>
          </div>

          {/* Field 3: Tamu & Kamar */}
          <div className="md:col-span-3 flex items-center justify-between px-4 py-3 rounded-xl border border-surface-container-highest hover:border-secondary transition-colors bg-surface-container-lowest shadow-sm cursor-pointer">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary text-[22px] shrink-0">
                group
              </span>
              <div className="flex flex-col text-left">
                <span className="font-label-caps text-[11px] uppercase font-bold text-on-surface-variant tracking-wider">
                  {currentConfig.guestLabel}
                </span>
                <span className="font-title-sm text-sm font-semibold text-on-surface whitespace-nowrap">
                  {currentConfig.defaultGuests}
                </span>
              </div>
            </div>
            <span className="material-symbols-outlined text-outline text-[18px]">
              expand_more
            </span>
          </div>

          {/* Primary Action Button: Cari Sekarang */}
          <div className="md:col-span-2">
            <button
              type="button"
              className="w-full h-full min-h-[52px] px-5 py-3 rounded-xl bg-secondary hover:bg-primary text-on-primary font-headline-sm text-sm sm:text-base font-bold transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">
                search
              </span>
              <span className="whitespace-nowrap">
                {currentConfig.buttonText}
              </span>
            </button>
          </div>
        </div>

        {/* Quick Filter / Tags Row */}
        <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-on-surface-variant">
          <span className="font-semibold text-on-surface">Pilihan Cepat:</span>
          {quickFilters.map((tag, idx) => (
            <React.Fragment key={idx}>
              <a
                href={tag.href}
                className="px-2.5 py-1 rounded-full bg-surface-container-low hover:bg-surface-container hover:text-secondary transition-colors"
              >
                {tag.label}
              </a>
              {idx < quickFilters.length - 1 && (
                <span className="text-outline-variant">•</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
