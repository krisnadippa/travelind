import React from "react";
import { VehicleFacility } from "@/data/rentalVehicleDetails";

interface VehicleFacilitiesProps {
  facilities: VehicleFacility[];
}

export default function VehicleFacilities({
  facilities,
}: VehicleFacilitiesProps) {
  return (
    <section className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md border border-surface-container-high/60">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-primary text-[24px]">
            card_giftcard
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold text-xl">
            Fasilitas Termasuk dalam Sewa (Gratis)
          </h2>
        </div>
        <span className="self-start sm:self-center px-2.5 py-1 rounded bg-secondary-fixed text-on-secondary-fixed text-xs font-semibold">
          Nilai Tambah Senilai Rp 450.000
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs">
        {facilities.map((facility, idx) => (
          <div
            key={idx}
            className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container-low border border-surface-container-high/40 hover:border-primary/30 transition-colors"
          >
            <span className="material-symbols-outlined text-primary text-[22px] shrink-0 mt-0.5">
              {facility.icon}
            </span>
            <div>
              <h4 className="font-label-md text-on-surface font-semibold text-sm">
                {facility.title}
              </h4>
              <p className="font-body-md text-label-md text-on-surface-variant text-xs mt-0.5 leading-relaxed">
                {facility.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
