import React from "react";
import { featuredVillas } from "@/data/villas";

export default function FeaturedVillasSection() {
  return (
    <section
      id="villas"
      className="w-full bg-secondary-fixed/20 rounded-[2rem] p-6 sm:p-10 flex flex-col gap-8 scroll-mt-24"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
        <div>
          <span className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-wider">
            Akomodasi Terverifikasi
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary font-bold mt-1">
            Pilihan Villa Eksklusif di Bali &amp; Sekitarnya
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">
            Pilihan villa privat dengan kolam renang pribadi, dapur lengkap, dan jaminan standar Travelind.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            className="font-title-sm text-title-sm text-secondary font-bold hover:underline whitespace-nowrap"
            href="#all-villas"
          >
            Lihat Semua Villa (240+) →
          </a>
          <div className="flex items-center gap-1">
            <button
              aria-label="Previous villa"
              className="w-9 h-9 rounded-full bg-surface-container-lowest hover:bg-surface text-on-surface flex items-center justify-center shadow-sm transition-colors cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">
                chevron_left
              </span>
            </button>
            <button
              aria-label="Next villa"
              className="w-9 h-9 rounded-full bg-surface-container-lowest hover:bg-surface text-on-surface flex items-center justify-center shadow-sm transition-colors cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">
                chevron_right
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* 3 Large Clean Villa Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredVillas.map((villa) => (
          <div
            key={villa.id}
            className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col"
          >
            <div className="relative w-full h-56 bg-surface-container overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={villa.imageUrl}
                alt={villa.imageAlt}
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary-container text-on-primary font-label-caps text-label-caps font-bold">
                {villa.tag}
              </div>
            </div>

            <div className="p-5 flex flex-col flex-1 justify-between gap-4">
              <div>
                <div className="flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant mb-1">
                  <span className="inline-flex items-center gap-1 font-semibold text-primary">
                    <span
                      className="material-symbols-outlined text-[16px] text-amber-500"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    {villa.rating}{" "}
                    <span className="font-normal text-on-surface-variant">
                      ({villa.reviewCount} ulasan)
                    </span>
                  </span>
                  <span>{villa.statusBadge}</span>
                </div>
                <h3 className="font-title-md text-title-md text-on-surface font-bold">
                  {villa.name}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  {villa.features}
                </p>
              </div>

              <div className="flex items-end justify-between pt-3 border-t border-surface-container-highest">
                <div>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Mulai dari
                  </span>
                  <div className="font-price-hero text-price-hero text-secondary font-bold">
                    {villa.formattedPrice}{" "}
                    <span className="font-body-sm text-body-sm text-on-surface-variant font-normal">
                      /malam
                    </span>
                  </div>
                </div>
                <a
                  href={`/villas/${villa.id}`}
                  className="px-4 py-2 rounded-xl bg-secondary hover:bg-primary text-on-primary font-title-sm text-title-sm font-semibold transition-colors cursor-pointer text-center"
                >
                  Detail
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
