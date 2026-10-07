import React from "react";
import { VehicleRequirement } from "@/data/rentalVehicleDetails";

interface VehicleRentalTermsProps {
  requirements: VehicleRequirement[];
}

export default function VehicleRentalTerms({
  requirements,
}: VehicleRentalTermsProps) {
  return (
    <section className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md border border-surface-container-high/60">
      <div className="flex items-center gap-space-xs">
        <span className="material-symbols-outlined text-primary text-[24px]">
          assignment
        </span>
        <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold text-xl">
          Syarat Sewa Lepas Kunci (Mudah &amp; Transparan)
        </h2>
      </div>

      <p className="font-body-md text-label-md text-on-surface-variant text-xs sm:text-sm">
        Proses verifikasi kilat via WhatsApp dalam 15 menit. Tanpa jaminan sertifikat atau uang tunai yang memberatkan wisatawan.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md pt-space-xs">
        {requirements.map((req) => (
          <div key={req.step} className="flex items-start gap-space-sm">
            <span className="w-6 h-6 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
              {req.step}
            </span>
            <div>
              <h4 className="font-label-md text-on-surface font-bold text-sm">
                {req.title}
              </h4>
              <p className="font-body-md text-label-md text-on-surface-variant text-xs mt-0.5 leading-relaxed">
                {req.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
