import React from "react";
import { VehicleDetailFeature } from "@/data/rentalVehicleDetails";

interface VehicleKeyFeaturesProps {
  features: VehicleDetailFeature[];
}

export default function VehicleKeyFeatures({
  features,
}: VehicleKeyFeaturesProps) {
  return (
    <section className="flex flex-col gap-space-md">
      <div className="flex items-center justify-between">
        <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold text-xl">
          Keunggulan Utama Armada
        </h2>
        <span className="font-label-md text-label-md text-secondary font-medium text-xs sm:text-sm">
          Standar Kenyamanan VVIP
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-xs hover:shadow-md transition-shadow border border-surface-container-high/60"
          >
            <div className="w-10 h-10 rounded-lg bg-secondary-container flex items-center justify-center text-on-secondary-container">
              <span className="material-symbols-outlined text-[24px] text-primary">
                {feature.icon}
              </span>
            </div>
            <h3 className="font-label-md text-on-surface font-bold text-base mt-1">
              {feature.title}
            </h3>
            <p className="font-body-md text-label-md text-on-surface-variant leading-relaxed text-xs sm:text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
