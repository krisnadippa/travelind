import React from "react";
import { trustPoints } from "@/data/trust";

export default function TrustAndMobileAppSection() {
  return (
    <section className="w-full flex flex-col gap-8 pb-8">
      {/* 4-Point Trust Banner */}
      <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 shadow-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {trustPoints.map((item, idx) => (
          <div key={idx} className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed shrink-0">
              <span className="material-symbols-outlined text-[24px]">
                {item.icon}
              </span>
            </div>
            <div>
              <h3 className="font-title-md text-title-md font-bold text-on-surface">
                {item.title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Travelind Mobile App Promo Banner */}
      <div className="bg-surface-container rounded-2xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col gap-2 max-w-xl text-center md:text-left">
          <span className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-wider">
            Aplikasi Mobile Travelind
          </span>
          <h2 className="font-headline-md text-headline-md font-bold text-primary">
            Akses Kunci Digital &amp; Pantau Unit Rental Dari Genggaman
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Unduh aplikasi Travelind untuk aktivasi check-in mandiri villa, pelacakan live GPS serah terima motor, dan penawaran eksklusif aplikasi hingga Rp 250.000.
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-4">
            <button
              className="px-5 py-2.5 rounded-xl bg-primary-container text-on-primary font-title-sm text-title-sm font-semibold flex items-center gap-2 hover:bg-primary transition-colors cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">
                phone_iphone
              </span>
              <span>App Store</span>
            </button>
            <button
              className="px-5 py-2.5 rounded-xl bg-primary-container text-on-primary font-title-sm text-title-sm font-semibold flex items-center gap-2 hover:bg-primary transition-colors cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">
                shop
              </span>
              <span>Google Play</span>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-surface-container-lowest p-4 rounded-xl shadow-sm shrink-0">
          {/* Inline QR Code SVG */}
          <svg
            className="w-24 h-24 text-primary"
            fill="currentColor"
            viewBox="0 0 100 100"
          >
            <path d="M10 10h30v30h-30zM15 15v20h20v-20zM22 22h6v6h-6zM60 10h30v30h-30zM65 15v20h20v-20zM72 22h6v6h-6zM10 60h30v30h-30zM15 65v20h20v-20zM22 72h6v6h-6zM50 15h6v6h-6zM50 30h6v6h-6zM50 45h6v6h-6zM65 50h6v6h-6zM80 50h6v6h-6zM50 65h6v6h-6zM65 65h6v6h-6zM80 65h6v6h-6zM65 80h6v6h-6zM80 80h6v6h-6zM20 45h6v6h-6zM35 45h6v6h-6zM45 80h6v6h-6z" />
          </svg>
          <div className="flex flex-col text-left">
            <span className="font-title-sm text-title-sm font-bold text-on-surface">
              Scan untuk Unduh
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Kompatibel iOS &amp; Android
            </span>
            <span className="font-label-caps text-label-caps text-secondary font-bold mt-1">
              Gratis Bonus Poin
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
