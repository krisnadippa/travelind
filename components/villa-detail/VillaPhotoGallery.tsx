"use client";

import React, { useState } from "react";
import { VillaDetailData } from "@/data/villaDetails";

interface VillaPhotoGalleryProps {
  photos: VillaDetailData["photos"];
}

export default function VillaPhotoGallery({ photos }: VillaPhotoGalleryProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const galleryList = [
    { url: photos.hero.url, title: photos.hero.caption },
    { url: photos.master.url, title: photos.master.caption },
    { url: photos.bathroom.url, title: photos.bathroom.caption },
    { url: photos.living.url, title: photos.living.caption },
    { url: photos.floatingBreakfast.url, title: photos.floatingBreakfast.caption },
  ];

  const openModal = (index: number) => {
    setActivePhotoIndex(index);
    setModalOpen(true);
  };

  return (
    <>
      <section className="w-full px-gutter my-space-md">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-space-sm h-auto lg:h-[520px] rounded-xl overflow-hidden shadow-sm">
          {/* Main Hero Showcase */}
          <div
            onClick={() => openModal(0)}
            className="lg:col-span-2 h-[340px] lg:h-full relative group cursor-pointer overflow-hidden"
          >
            <img
              alt="Main pool area Villa Seminyak Oasis"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              src={photos.hero.url}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-space-md left-space-md text-on-primary">
              <span className="px-space-sm py-0.5 rounded bg-primary/90 font-label-md text-[11px] uppercase tracking-wider font-semibold text-white">
                {photos.hero.badge}
              </span>
              <p className="font-label-md text-label-md font-medium mt-1 drop-shadow text-white">
                {photos.hero.caption}
              </p>
            </div>
          </div>

          {/* Secondary Photo Quadrant (Right Column 1) */}
          <div className="grid grid-rows-2 gap-space-sm h-[320px] lg:h-full">
            <div
              onClick={() => openModal(1)}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
            >
              <img
                alt="Master Bedroom"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={photos.master.url}
              />
              <span className="absolute bottom-space-xs left-space-xs px-2 py-0.5 bg-inverse-surface/75 text-inverse-on-surface rounded font-label-md text-[11px] text-white">
                {photos.master.caption}
              </span>
            </div>
            <div
              onClick={() => openModal(2)}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
            >
              <img
                alt="En-Suite Tropical Bathroom"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={photos.bathroom.url}
              />
              <span className="absolute bottom-space-xs left-space-xs px-2 py-0.5 bg-inverse-surface/75 text-inverse-on-surface rounded font-label-md text-[11px] text-white">
                {photos.bathroom.caption}
              </span>
            </div>
          </div>

          {/* Secondary Photo Quadrant (Right Column 2) */}
          <div className="grid grid-rows-2 gap-space-sm h-[320px] lg:h-full">
            <div
              onClick={() => openModal(3)}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
            >
              <img
                alt="Living & Dining Pavilion"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={photos.living.url}
              />
              <span className="absolute bottom-space-xs left-space-xs px-2 py-0.5 bg-inverse-surface/75 text-inverse-on-surface rounded font-label-md text-[11px] text-white">
                {photos.living.caption}
              </span>
            </div>

            <div
              onClick={() => openModal(4)}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
            >
              <img
                alt="Floating Breakfast Experience"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={photos.floatingBreakfast.url}
              />
              {/* Interactive Modal Trigger Badge */}
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors flex items-center justify-center">
                <button
                  type="button"
                  className="flex items-center gap-space-xs px-space-md py-space-sm bg-surface-container-lowest/90 backdrop-blur-md rounded-lg shadow-md text-on-surface font-label-md text-label-md font-semibold hover:bg-surface-container-lowest transition-transform group-hover:scale-105 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px] text-primary">
                    photo_library
                  </span>
                  <span>+{photos.floatingBreakfast.extraCount} Foto Lainnya</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-8">
          <div className="w-full flex items-center justify-between text-white pb-4">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-lg">
                {galleryList[activePhotoIndex].title}
              </span>
              <span className="text-sm text-gray-400">
                ({activePhotoIndex + 1} / {galleryList.length})
              </span>
            </div>
            <button
              onClick={() => setModalOpen(false)}
              className="p-2 rounded-full hover:bg-white/20 text-white cursor-pointer"
              aria-label="Close photo preview"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>

          <div className="relative flex-1 flex items-center justify-center w-full max-w-5xl max-h-[75vh]">
            <img
              src={galleryList[activePhotoIndex].url}
              alt={galleryList[activePhotoIndex].title}
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
            />

            <button
              onClick={() =>
                setActivePhotoIndex(
                  (prev) => (prev - 1 + galleryList.length) % galleryList.length
                )
              }
              className="absolute left-2 sm:left-4 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white cursor-pointer"
              aria-label="Previous image"
            >
              <span className="material-symbols-outlined text-2xl">
                chevron_left
              </span>
            </button>

            <button
              onClick={() =>
                setActivePhotoIndex((prev) => (prev + 1) % galleryList.length)
              }
              className="absolute right-2 sm:right-4 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white cursor-pointer"
              aria-label="Next image"
            >
              <span className="material-symbols-outlined text-2xl">
                chevron_right
              </span>
            </button>
          </div>

          {/* Thumbnails row */}
          <div className="flex items-center gap-2 overflow-x-auto py-4">
            {galleryList.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActivePhotoIndex(idx)}
                className={`w-16 h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                  activePhotoIndex === idx
                    ? "border-primary scale-105"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
