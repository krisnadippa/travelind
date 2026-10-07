"use client";

import React, { useState } from "react";
import { VehicleDetailData } from "@/data/rentalVehicleDetails";

interface VehicleHeaderBarProps {
  vehicle: VehicleDetailData;
}

export default function VehicleHeaderBar({ vehicle }: VehicleHeaderBarProps) {
  const [isSaved, setIsSaved] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined" && navigator.share) {
      navigator
        .share({
          title: `${vehicle.name} - Travelind Bali`,
          url: window.location.href,
        })
        .catch(() => {});
    } else if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2500);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-gutter pt-space-md pb-space-sm">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-space-md">
        {/* Left Title and Metadata */}
        <div className="flex flex-col gap-space-xs">
          {/* Badge Pills */}
          <div className="flex flex-wrap items-center gap-space-xs">
            <span className="px-space-sm py-0.5 rounded-full bg-primary-container text-on-primary font-label-md text-label-md font-semibold tracking-wide uppercase text-xs">
              Unit Terpopuler Keluarga
            </span>
            <span className="px-space-sm py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-md text-label-md flex items-center gap-1 text-xs">
              <span className="material-symbols-outlined text-primary text-[15px]">
                verified_user
              </span>
              Terverifikasi 100% Travelind
            </span>
            <span className="px-space-sm py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-label-md text-xs font-semibold">
              {vehicle.editionBadge}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight text-2xl sm:text-3xl lg:text-[32px]">
            {vehicle.name}
          </h1>

          {/* Metadata Specs Strip */}
          <div className="flex flex-wrap items-center gap-y-1 gap-x-space-md font-body-md text-label-md text-on-surface-variant text-xs sm:text-sm">
            <div className="flex items-center gap-1 font-semibold text-on-surface">
              <span
                className="material-symbols-outlined text-primary text-[18px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span>{vehicle.rating}</span>
              <span className="text-on-surface-variant font-normal">
                ({vehicle.reviewCount} ulasan wisatawan terverifikasi)
              </span>
            </div>

            <span className="text-outline-variant">•</span>

            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-secondary text-[18px]">
                settings
              </span>
              <span>{vehicle.transmission}</span>
            </div>

            <span className="text-outline-variant">•</span>

            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-secondary text-[18px]">
                airline_seat_recline_extra
              </span>
              <span>{vehicle.seats}</span>
            </div>

            <span className="text-outline-variant">•</span>

            <div className="flex items-center gap-1 text-primary font-medium">
              <span className="material-symbols-outlined text-[18px]">eco</span>
              <span>{vehicle.fuelEfficiency}</span>
            </div>

            <span className="text-outline-variant">•</span>

            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-secondary text-[18px]">
                flight_land
              </span>
              <span>{vehicle.deliveryPerk}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons: Share & Save */}
        <div className="flex items-center gap-space-xs self-start lg:self-center">
          <button
            type="button"
            onClick={handleShare}
            className="px-space-md py-space-xs rounded-lg bg-surface-container-low hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">
              {copiedShare ? "check" : "share"}
            </span>
            <span>{copiedShare ? "Disalin!" : "Bagikan"}</span>
          </button>

          <button
            type="button"
            onClick={() => setIsSaved(!isSaved)}
            className="px-space-md py-space-xs rounded-lg bg-surface-container-low hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
          >
            <span
              className={`material-symbols-outlined text-[18px] ${
                isSaved ? "text-error" : "text-error"
              }`}
              style={isSaved ? { fontVariationSettings: "'FILL' 1" } : undefined}
            >
              {isSaved ? "favorite" : "favorite_border"}
            </span>
            <span>{isSaved ? "Tersimpan" : "Simpan"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
