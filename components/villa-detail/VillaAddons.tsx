import React from "react";
import { CuratedAddon } from "@/data/villaDetails";

interface VillaAddonsProps {
  addons: CuratedAddon[];
}

export default function VillaAddons({ addons }: VillaAddonsProps) {
  return (
    <section className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
      <div className="flex items-center justify-between mb-space-md">
        <div className="flex items-center gap-space-xs">
          <span className="w-1 h-6 bg-primary rounded-full" />
          <h2 className="font-headline-lg text-[22px] font-bold text-on-surface">
            Layanan &amp; Pengalaman Tambahan
          </h2>
        </div>
        <span className="px-space-sm py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-md text-[12px] font-semibold">
          Tersedia Sesuai Permintaan
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
        {addons.map((addon) => (
          <div
            key={addon.id}
            className="p-space-md rounded-lg bg-surface-container-low flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-label-md text-label-md font-semibold text-on-surface text-sm sm:text-base">
                  {addon.title}
                </span>
                <span className="font-label-md text-label-md font-bold text-primary text-sm sm:text-base">
                  {addon.formattedPrice}{" "}
                  <span className="font-normal text-on-surface-variant text-[12px]">
                    {addon.unit}
                  </span>
                </span>
              </div>
              <p className="font-body-md text-[13px] text-on-surface-variant mt-1 leading-relaxed">
                {addon.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
