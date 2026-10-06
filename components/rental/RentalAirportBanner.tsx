import React from "react";

export default function RentalAirportBanner() {
  return (
    <div className="w-full bg-primary-container rounded-2xl p-space-md text-on-primary flex flex-col md:flex-row items-center justify-between gap-space-md shadow-md">
      <div className="flex items-center gap-space-md">
        <div className="w-12 h-12 rounded-xl bg-surface-container-lowest/15 flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-[28px] text-on-primary">
            flight_takeoff
          </span>
        </div>
        <div className="flex flex-col">
          <h3 className="font-headline-lg text-label-md font-bold text-white">
            Tiba di Bandara Ngurah Rai Bali (DPS)?
          </h3>
          <p className="font-body-md text-label-md text-on-primary-container text-[13px] leading-snug">
            Gratis pengantaran &amp; serah terima kunci langsung di Pick-Up Zone Bandara DPS untuk reservasi min. 2 hari. Unit steril, dingin, dan wangi!
          </p>
        </div>
      </div>
      <div className="shrink-0 flex items-center gap-space-xs bg-surface-container-lowest text-primary-container font-label-md text-label-md px-space-md py-space-xs rounded-xl font-bold shadow-xs">
        <span className="material-symbols-outlined text-[18px]">
          check_circle
        </span>
        <span>Gratis Pengantaran</span>
      </div>
    </div>
  );
}
