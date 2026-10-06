"use client";

import React, { useState } from "react";
import { VillaCatalogItem } from "@/types/travelind";

interface VillaListingCardProps {
  villa: VillaCatalogItem;
}

export default function VillaListingCard({ villa }: VillaListingCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <article className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
        {/* Image Showcase */}
        <div className="md:col-span-5 relative overflow-hidden h-64 md:h-full min-h-[280px]">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            src={villa.imageUrl}
            alt={villa.imageAlt}
          />

          {/* Badges Top Left */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
            {villa.badge && (
              <span
                className="text-[11px] font-label-md font-bold px-2 py-1 rounded-full shadow-sm"
                style={{
                  backgroundColor: "rgb(235, 243, 254)",
                  color: "rgb(2, 100, 246)",
                }}
              >
                {villa.badge}
              </span>
            )}
            {villa.secondaryBadge && (
              <span className="bg-surface-container-lowest text-on-surface text-[11px] font-label-md font-bold px-2 py-1 rounded-full shadow-sm">
                {villa.secondaryBadge}
              </span>
            )}
          </div>

          {/* Favorite Button */}
          <button
            onClick={() => setIsFavorited(!isFavorited)}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm hover:bg-surface-container-lowest text-on-surface flex items-center justify-center transition-all z-10 cursor-pointer"
            aria-label="Add to favorites"
            type="button"
          >
            <span
              className={`material-symbols-outlined text-lg ${
                isFavorited ? "text-error" : ""
              }`}
              style={isFavorited ? { fontVariationSettings: "'FILL' 1" } : {}}
            >
              favorite
            </span>
          </button>

          {/* Photo Counter */}
          <div className="absolute bottom-3 left-3 bg-inverse-surface/85 backdrop-blur-sm text-inverse-on-surface text-[11px] font-label-md px-2.5 py-1 rounded-md flex items-center gap-1">
            <span className="material-symbols-outlined text-xs">
              photo_camera
            </span>
            <span>{villa.photoCount}</span>
          </div>
        </div>

        {/* Content Details */}
        <div className="md:col-span-7 p-space-md flex flex-col justify-between">
          <div>
            {/* Location & Rating */}
            <div className="flex items-center justify-between gap-space-xs mb-1">
              <span className="text-xs font-label-md text-primary font-semibold flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">
                  pin_drop
                </span>
                <span className="truncate">{villa.location}</span>
              </span>

              <div
                className="flex items-center gap-1 px-2 py-0.5 rounded text-xs font-label-md font-bold shrink-0"
                style={{
                  backgroundColor: "rgb(235, 243, 254)",
                  color: "rgb(2, 100, 246)",
                }}
              >
                <span
                  className="material-symbols-outlined text-xs"
                  style={{
                    color: "rgb(2, 100, 246)",
                    fontVariationSettings: "'FILL' 1",
                  }}
                >
                  star
                </span>
                <span>{villa.rating.toFixed(2)}</span>
                <span className="text-outline font-normal">
                  ({villa.reviewCount} ulasan)
                </span>
              </div>
            </div>

            {/* Villa Title */}
            <h2 className="font-headline-lg text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
              {villa.name}
            </h2>

            {/* Key Specifications */}
            <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs font-label-md text-on-surface-variant my-2.5">
              {villa.specs.map((spec, idx) => (
                <React.Fragment key={idx}>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm text-outline">
                      {spec.icon}
                    </span>
                    <span>{spec.text}</span>
                  </span>
                  {idx < villa.specs.length - 1 && <span>•</span>}
                </React.Fragment>
              ))}
            </div>

            {/* Free Perks Box */}
            {villa.perks && villa.perks.length > 0 && (
              <div className="bg-surface-container-low rounded-lg p-2.5 my-space-xs space-y-1">
                {villa.perks.map((perk, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-1.5 text-xs font-label-md text-on-surface"
                  >
                    <span
                      className="material-symbols-outlined text-sm shrink-0"
                      style={{ color: "rgb(2, 100, 246)" }}
                    >
                      check_circle
                    </span>
                    <span className="font-medium">{perk}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Price & CTA Section */}
          <div className="pt-space-sm flex flex-col sm:flex-row sm:items-end justify-between gap-space-sm border-t border-surface-container-highest mt-3">
            <div>
              {villa.originalPrice && (
                <div className="flex items-center gap-2">
                  <span className="text-xs line-through text-outline font-label-md">
                    {villa.formattedOriginalPrice}
                  </span>
                  {villa.discountPercentage && (
                    <span
                      className="text-[10px] font-bold px-1.5 py-0.5 rounded"
                      style={{
                        backgroundColor: "rgb(235, 243, 254)",
                        color: "rgb(2, 100, 246)",
                        border: "1px solid rgb(196, 220, 255)",
                      }}
                    >
                      Hemat {villa.discountPercentage}%
                    </span>
                  )}
                </div>
              )}
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="font-headline-lg text-2xl font-bold text-on-surface">
                  {villa.formattedPrice}
                </span>
                <span className="font-label-md text-xs text-on-surface-variant font-medium">
                  / malam
                </span>
              </div>
              <span className="text-[11px] text-outline font-label-md block">
                {villa.priceNote}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={`/villas/${villa.id}`}
                className="w-full sm:w-auto px-4 py-2.5 rounded-lg font-label-md text-label-md font-semibold flex items-center justify-center gap-1.5 shadow-sm transition-all text-center cursor-pointer hover:opacity-95"
                style={{
                  backgroundColor: "rgb(2, 100, 246)",
                  color: "rgb(255, 255, 255)",
                }}
              >
                <span>Lihat Detail Villa</span>
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
