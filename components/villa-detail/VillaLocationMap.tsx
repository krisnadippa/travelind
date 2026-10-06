import React from "react";
import { VillaDetailData } from "@/data/villaDetails";

interface VillaLocationMapProps {
  locationInfo: VillaDetailData["locationInfo"];
}

export default function VillaLocationMap({
  locationInfo,
}: VillaLocationMapProps) {
  return (
    <section className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
      <div className="flex items-center gap-space-xs mb-space-md">
        <span className="w-1 h-6 bg-primary rounded-full" />
        <h2 className="font-headline-lg text-[22px] font-bold text-on-surface">
          Lokasi &amp; Akses Sekitar
        </h2>
      </div>

      <p className="font-body-md text-label-md text-on-surface-variant mb-space-md text-sm leading-relaxed">
        {locationInfo.description}
      </p>

      {/* Map Container */}
      <div
        className="w-full h-64 bg-cover bg-center rounded-xl shadow-inner relative overflow-hidden"
        data-location="Oberoi Seminyak Bali"
        style={{ backgroundImage: `url('${locationInfo.mapBgUrl}')` }}
      >
        <div className="absolute inset-0 bg-primary/10 flex items-center justify-center pointer-events-none">
          <div className="px-space-md py-space-xs bg-surface-container-lowest/90 backdrop-blur-md rounded-full shadow-md flex items-center gap-space-xs text-primary font-label-md text-sm font-semibold">
            <span
              className="material-symbols-outlined text-[20px] text-error"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              location_on
            </span>
            <span>{locationInfo.mapPinLabel}</span>
          </div>
        </div>
      </div>

      {/* Points of Interest Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-md mt-space-md">
        {locationInfo.pointsOfInterest.map((poi, idx) => (
          <div
            key={idx}
            className="p-space-sm rounded-lg bg-surface-container-low text-center"
          >
            <span className="material-symbols-outlined text-primary text-[22px]">
              {poi.icon}
            </span>
            <div className="font-label-md text-label-md font-bold text-on-surface mt-1 text-xs sm:text-sm">
              {poi.title}
            </div>
            <div className="font-body-md text-[12px] text-on-surface-variant">
              {poi.distance}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
