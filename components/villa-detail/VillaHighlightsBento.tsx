import React from "react";
import { VillaDetailData } from "@/data/villaDetails";

interface VillaHighlightsBentoProps {
  highlights: VillaDetailData["highlights"];
}

export default function VillaHighlightsBento({
  highlights,
}: VillaHighlightsBentoProps) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
      {highlights.map((item, idx) => (
        <div
          key={idx}
          className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-start gap-space-md"
        >
          <div
            className={`w-12 h-12 rounded-lg ${item.bgClass} flex items-center justify-center shrink-0`}
          >
            <span className={`material-symbols-outlined ${item.textClass} text-[24px]`}>
              {item.icon}
            </span>
          </div>
          <div>
            <h2 className="font-label-md text-label-md font-semibold text-on-surface text-sm sm:text-base">
              {item.title}
            </h2>
            <p className="font-body-md text-label-md text-on-surface-variant mt-0.5 text-xs sm:text-sm">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
