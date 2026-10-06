"use client";

import React, { useState } from "react";
import { vehicles, vehicleAreaTabs } from "@/data/vehicles";

export default function VehicleRentalSection() {
  const [selectedArea, setSelectedArea] = useState("all");

  const filteredVehicles =
    selectedArea === "all"
      ? vehicles
      : vehicles.filter((v) => v.areas.includes(selectedArea));

  return (
    <section id="vehicles" className="w-full flex flex-col gap-6 scroll-mt-24">
      {/* Section Title & Tabs */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
        <div>
          <span className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-wider">
            Khusus Area Pulau Bali (Antar Bandara Ngurah Rai, Kuta, Seminyak, Canggu &amp; Ubud)
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary font-bold mt-1">
            Rental Mobil &amp; Motor Bebas Ribet
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">
            Unit tahun muda (2023-2025), bersih terawat, asuransi penuh, dan opsi antar langsung ke hotel atau bandara.
          </p>
        </div>

        {/* City Filter Chips */}
        <div className="flex flex-wrap items-center gap-1.5">
          {vehicleAreaTabs.map((tab) => {
            const isActive = selectedArea === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedArea(tab.id)}
                className={`px-3 py-1.5 rounded-lg font-title-sm text-title-sm transition-colors cursor-pointer ${
                  isActive
                    ? "text-on-primary font-semibold bg-secondary"
                    : "bg-surface-container-low hover:bg-surface-container text-on-surface"
                }`}
                type="button"
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Vehicle Cards Grid (2 Cars, 2 Scooters) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredVehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="relative w-full h-44 bg-surface-container-low flex items-center justify-center p-3">
                <img
                  className="w-full h-full object-contain"
                  src={vehicle.imageUrl}
                  alt={vehicle.imageAlt}
                />
                <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded bg-surface-container-highest text-on-surface font-label-caps text-label-caps font-bold">
                  {vehicle.tag}
                </span>
              </div>

              <div className="p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="font-label-caps text-label-caps font-bold text-secondary uppercase">
                    {vehicle.brand} · {vehicle.category}
                  </span>
                  <span className="inline-flex items-center gap-1 font-body-sm text-body-sm font-bold text-on-surface">
                    <span
                      className="material-symbols-outlined text-[15px] text-amber-500"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>{" "}
                    {vehicle.rating}
                  </span>
                </div>
                <h3 className="font-title-md text-title-md font-bold text-on-surface">
                  {vehicle.name}
                </h3>
                <div className="flex flex-wrap items-center gap-2 font-body-sm text-body-sm text-on-surface-variant">
                  {vehicle.specs.map((spec, idx) => (
                    <span key={idx} className="inline-flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">
                        {spec.icon}
                      </span>{" "}
                      {spec.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 pt-2 border-t border-surface-container-highest flex items-center justify-between">
              <div>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Mulai
                </span>
                <div className="font-title-md text-title-md font-bold text-secondary">
                  {vehicle.formattedPrice}{" "}
                  <span className="font-body-sm text-body-sm text-on-surface-variant font-normal">
                    /hari
                  </span>
                </div>
              </div>
              <button
                className="px-3.5 py-1.5 rounded-xl bg-secondary hover:bg-primary text-on-primary font-title-sm text-title-sm font-semibold transition-colors cursor-pointer"
                type="button"
              >
                Pesan
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
