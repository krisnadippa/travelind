import React from "react";
import { VillaDetailData } from "@/data/villaDetails";

interface VillaFacilitiesProps {
  groups: VillaDetailData["facilityGroups"];
}

export default function VillaFacilities({ groups }: VillaFacilitiesProps) {
  return (
    <section className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
      <div className="flex items-center gap-space-xs mb-space-lg">
        <span className="w-1 h-6 bg-primary rounded-full" />
        <h2 className="font-headline-lg text-[22px] font-bold text-on-surface">
          Fasilitas Premium Terkurasi
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
        {groups.map((group, idx) => (
          <div key={idx} className="flex flex-col gap-space-sm">
            <h3 className="font-label-md text-label-md font-semibold text-secondary flex items-center gap-1.5 uppercase tracking-wide text-xs sm:text-sm">
              <span className="material-symbols-outlined text-[20px]">
                {group.icon}
              </span>
              <span>{group.title}</span>
            </h3>

            <div className="flex flex-col gap-space-xs text-on-surface-variant font-label-md text-sm">
              {group.items.map((item, itemIdx) => (
                <div key={itemIdx} className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
                    check_circle
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
