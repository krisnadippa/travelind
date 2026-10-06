import React from "react";
import { VillaDetailData } from "@/data/villaDetails";

interface VillaHouseRulesProps {
  rules: VillaDetailData["houseRules"];
}

export default function VillaHouseRules({ rules }: VillaHouseRulesProps) {
  return (
    <section className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
      <div className="flex items-center gap-space-xs mb-space-md">
        <span className="w-1 h-6 bg-primary rounded-full" />
        <h2 className="font-headline-lg text-[22px] font-bold text-on-surface">
          Aturan Menginap &amp; Kebijakan Villa
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md text-on-surface-variant font-label-md text-sm">
        {rules.map((rule, idx) => (
          <div
            key={idx}
            className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container-low"
          >
            <span className="material-symbols-outlined text-primary text-[22px] shrink-0">
              {rule.icon}
            </span>
            <div>
              <span className="font-semibold text-on-surface">{rule.title}</span>
              <p className="text-[13px] mt-0.5 whitespace-pre-line leading-relaxed">
                {rule.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
