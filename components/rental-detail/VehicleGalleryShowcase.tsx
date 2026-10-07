"use client";

import React, { useState } from "react";
import Image from "next/image";
import { VehicleDetailData } from "@/data/rentalVehicleDetails";

interface VehicleGalleryShowcaseProps {
  photos: VehicleDetailData["photos"];
}

export default function VehicleGalleryShowcase({
  photos,
}: VehicleGalleryShowcaseProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const allPhotos = [photos.hero, ...photos.thumbnails];

  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-gutter py-space-sm">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-space-sm rounded-xl overflow-hidden bg-surface-container-low p-space-xs border border-surface-container-high/60">
          {/* Main Featured Image (2 Cols x 2 Rows) */}
          <div
            onClick={() => setLightboxIndex(0)}
            className="lg:col-span-2 lg:row-span-2 relative group cursor-pointer overflow-hidden rounded-lg min-h-[340px] lg:min-h-[460px] bg-surface-container"
          >
            <Image
              src={photos.hero.url}
              alt={photos.hero.alt}
              fill
              priority
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 1024px) 100vw, 640px"
            />

            {/* Bottom Caption Pill */}
            <div className="absolute bottom-space-md left-space-md bg-inverse-surface/85 backdrop-blur-sm px-space-md py-1.5 rounded-lg text-inverse-on-surface font-label-md text-label-md flex items-center gap-2 text-xs sm:text-sm">
              <span className="material-symbols-outlined text-[18px] text-tertiary-fixed">
                directions_car
              </span>
              <span>{photos.hero.caption}</span>
            </div>

            {/* Top Badge */}
            {photos.hero.badge && (
              <div className="absolute top-space-md left-space-md bg-primary-container text-on-primary text-xs font-semibold px-space-sm py-1 rounded shadow-sm">
                {photos.hero.badge}
              </div>
            )}
          </div>

          {/* 4 Thumbnails */}
          {photos.thumbnails.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setLightboxIndex(idx + 1)}
              className="relative group cursor-pointer overflow-hidden rounded-lg h-[220px] bg-surface-container"
            >
              <Image
                src={item.url}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 50vw, 320px"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/75 via-transparent to-transparent flex items-end justify-between p-space-sm">
                <span className="text-on-primary font-label-md text-label-md font-medium text-xs flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">
                    {idx === 0
                      ? "airline_seat_recline_extra"
                      : idx === 1
                      ? "wb_sunny"
                      : idx === 2
                      ? "luggage"
                      : "flight_land"}
                  </span>
                  <span>{item.caption}</span>
                </span>

                {item.badge && (
                  <span className="bg-primary-container text-on-primary text-[10px] font-bold px-2 py-0.5 rounded shrink-0">
                    {item.badge}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer z-50"
            title="Tutup Galeri"
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>

          <button
            type="button"
            onClick={() =>
              setLightboxIndex((prev) =>
                prev !== null
                  ? (prev - 1 + allPhotos.length) % allPhotos.length
                  : 0
              )
            }
            className="absolute left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer z-50"
            title="Foto Sebelumnya"
          >
            <span className="material-symbols-outlined text-[24px]">
              chevron_left
            </span>
          </button>

          <button
            type="button"
            onClick={() =>
              setLightboxIndex((prev) =>
                prev !== null ? (prev + 1) % allPhotos.length : 0
              )
            }
            className="absolute right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer z-50"
            title="Foto Selanjutnya"
          >
            <span className="material-symbols-outlined text-[24px]">
              chevron_right
            </span>
          </button>

          <div className="relative max-w-5xl max-h-[85vh] w-full h-[70vh] flex flex-col items-center justify-center">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image
                src={allPhotos[lightboxIndex].url}
                alt={allPhotos[lightboxIndex].alt}
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
            <p className="text-white text-center font-label-md mt-4 text-sm bg-black/60 px-4 py-1.5 rounded-full">
              {allPhotos[lightboxIndex].caption} ({lightboxIndex + 1} dari{" "}
              {allPhotos.length})
            </p>
          </div>
        </div>
      )}
    </>
  );
}
