import React from "react";

export default function RentalWhatsAppSupport() {
  return (
    <div className="w-full rounded-2xl bg-surface-container-low p-space-md flex flex-col md:flex-row items-center justify-between gap-space-md border border-surface-container-high/60 shadow-xs">
      <div className="flex items-center gap-space-md">
        <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-[26px]">
            support_agent
          </span>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-space-xs">
            <h4 className="font-headline-lg text-label-md font-bold text-on-surface text-[15px]">
              Butuh Armada Mendadak di Bandara Bali?
            </h4>
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
          </div>
          <p className="font-body-md text-label-md text-on-surface-variant text-[13px]">
            Tim dispatcher kami standby 24 jam untuk serah terima unit di Bandara DPS tanpa antre.
          </p>
        </div>
      </div>

      <a
        href="https://wa.me/6281234567890?text=Halo%20Travelind%2C%20saya%20butuh%20armada%20rental%20di%20Bali%20segera"
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-xl bg-primary-container hover:bg-surface-tint text-on-primary font-label-md text-label-md font-bold transition-all shadow-sm"
      >
        <span className="material-symbols-outlined text-[20px]">chat</span>
        <span>Chat WhatsApp (+62 812-3456-7890)</span>
      </a>
    </div>
  );
}
