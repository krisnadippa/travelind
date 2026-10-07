import React from "react";
import { VehicleTechSpec } from "@/data/rentalVehicleDetails";

interface VehicleTechSpecsProps {
  specs: VehicleTechSpec[];
}

export default function VehicleTechSpecs({ specs }: VehicleTechSpecsProps) {
  return (
    <section className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md border border-surface-container-high/60">
      <div className="flex items-center gap-space-xs">
        <span className="material-symbols-outlined text-primary text-[24px]">
          tune
        </span>
        <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold text-xl">
          Spesifikasi Teknis Lengkap
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-space-xl gap-y-space-sm pt-space-xs font-body-md text-label-md">
        {specs.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between py-space-xs bg-surface-container-low px-space-md rounded-lg text-xs sm:text-sm border border-surface-container-high/40"
          >
            <span className="text-on-surface-variant">{item.label}</span>
            <span className="text-on-surface font-semibold text-right">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
