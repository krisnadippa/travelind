import React from "react";
import Image from "next/image";
import { VehicleDetailData } from "@/data/rentalVehicleDetails";

interface VehicleCoverageMapProps {
  locations: VehicleDetailData["locations"];
}

export default function VehicleCoverageMap({
  locations,
}: VehicleCoverageMapProps) {
  return (
    <section className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md border border-surface-container-high/60">
      <div className="flex items-center gap-space-xs">
        <span className="material-symbols-outlined text-primary text-[24px]">
          pin_drop
        </span>
        <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold text-xl">
          Titik Serah Terima &amp; Pengantaran Armada
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm">
        <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-1 border border-surface-container-high/40">
          <div className="flex items-center gap-1.5 text-primary font-bold font-label-md text-sm">
            <span className="material-symbols-outlined text-[18px]">
              check_circle
            </span>
            <span>Bandara DPS (Gratis)</span>
          </div>
          <p className="font-body-md text-label-md text-on-surface-variant text-xs mt-1">
            Terminal Kedatangan Domestik, Internasional, &amp; Gedung Parkir Bertingkat.
          </p>
        </div>

        <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-1 border border-surface-container-high/40">
          <div className="flex items-center gap-1.5 text-primary font-bold font-label-md text-sm">
            <span className="material-symbols-outlined text-[18px]">
              check_circle
            </span>
            <span>Area Kuta - Canggu (Gratis)</span>
          </div>
          <p className="font-body-md text-label-md text-on-surface-variant text-xs mt-1">
            Seminyak, Kerobokan, Canggu, Legian, Sanur, Jimbaran, Nusa Dua.
          </p>
        </div>

        <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-1 border border-surface-container-high/40">
          <div className="flex items-center gap-1.5 text-secondary font-bold font-label-md text-sm">
            <span className="material-symbols-outlined text-[18px]">info</span>
            <span>Ubud &amp; Sekitarnya (+Rp 100k)</span>
          </div>
          <p className="font-body-md text-label-md text-on-surface-variant text-xs mt-1">
            Antar langsung ke lobi resort/villa di kawasan Ubud, Payangan, dan Uluwatu.
          </p>
        </div>
      </div>

      {/* Bali Service Map Visual */}
      <div className="relative w-full h-56 rounded-xl overflow-hidden bg-surface-container border border-surface-container-high/60 flex items-end p-space-md">
        <Image
          src={locations.mapImageUrl}
          alt="Peta Layanan Pengantaran Bandara Ngurah Rai DPS Bali"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 800px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="relative z-10 bg-surface-container-lowest/95 backdrop-blur-md p-space-sm rounded-lg shadow-md max-w-md border border-surface-container-high/60">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-primary-container animate-ping" />
            <span className="font-label-md text-label-md font-bold text-on-surface text-xs sm:text-sm">
              Hub Utama: Ngurah Rai Hub (DPS)
            </span>
          </div>
          <p className="font-body-md text-label-md text-on-surface-variant text-xs mt-0.5">
            Petugas kami siap menunggu kedatangan Anda langsung di pintu keluar penerbangan.
          </p>
        </div>
      </div>
    </section>
  );
}
