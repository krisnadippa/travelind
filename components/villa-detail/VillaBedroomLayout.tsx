import React from "react";
import { BedroomSuite } from "@/data/villaDetails";

interface VillaBedroomLayoutProps {
  bedrooms: BedroomSuite[];
}

export default function VillaBedroomLayout({
  bedrooms,
}: VillaBedroomLayoutProps) {
  return (
    <section className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
      <div className="flex items-center justify-between mb-space-lg">
        <div className="flex items-center gap-space-xs">
          <span className="w-1 h-6 bg-primary rounded-full" />
          <h2 className="font-headline-lg text-[22px] font-bold text-on-surface">
            Pengaturan Kamar Tidur
          </h2>
        </div>
        <span className="font-label-md text-label-md text-primary font-medium text-sm">
          3 Suite Ber-AC
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
        {bedrooms.map((bed) => {
          let badgeColor = "bg-primary-fixed text-on-primary-fixed text-primary";
          let iconColor = "text-primary";

          if (bed.badgeStyle === "secondary") {
            badgeColor = "bg-secondary-fixed text-on-secondary-fixed text-secondary";
            iconColor = "text-secondary";
          } else if (bed.badgeStyle === "tertiary") {
            badgeColor = "bg-tertiary-fixed text-on-tertiary-fixed text-tertiary";
            iconColor = "text-tertiary";
          }

          return (
            <div
              key={bed.id}
              className="p-space-md rounded-lg bg-surface-container-low flex flex-col justify-between"
            >
              <div>
                <div className={`flex items-center justify-between ${iconColor} mb-space-sm`}>
                  <span className="material-symbols-outlined text-[28px]">
                    {bed.icon}
                  </span>
                  <span className={`px-2 py-0.5 rounded ${badgeColor} font-label-md text-[11px] font-semibold`}>
                    {bed.typeBadge}
                  </span>
                </div>
                <h3 className="font-label-md text-label-md font-semibold text-on-surface mb-space-xs text-base">
                  {bed.name}
                </h3>
                <ul className="font-body-md text-[13px] text-on-surface-variant flex flex-col gap-1">
                  {bed.features.map((feature, fIdx) => (
                    <li key={fIdx}>• {feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
