"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RentalVehicle } from "@/data/rentalVehicles";

interface RentalVehicleCardProps {
  vehicle: RentalVehicle;
  driverMode: "self-drive" | "with-driver";
  onSelectUnit: (vehicle: RentalVehicle) => void;
  viewMode?: "grid" | "list";
}

export default function RentalVehicleCard({
  vehicle,
  driverMode,
  onSelectUnit,
  viewMode = "grid",
}: RentalVehicleCardProps) {
  const isWithDriver = driverMode === "with-driver" && vehicle.availableWithDriver;
  const activeDailyPrice = isWithDriver
    ? vehicle.withDriverPricePerDay || vehicle.pricePerDay + 250000
    : vehicle.pricePerDay;

  const totalCalculated = activeDailyPrice * vehicle.totalDays;

  const badgeColorClass =
    vehicle.highlightBadgeColor === "tertiary"
      ? "text-tertiary-container"
      : vehicle.highlightBadgeColor === "secondary"
      ? "text-secondary"
      : vehicle.highlightBadgeColor === "neutral"
      ? "text-on-surface"
      : "text-primary";

  if (viewMode === "list") {
    return (
      <div className="flex flex-col md:flex-row bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-surface-container-high/60 group">
        {/* Left Image */}
        <div className="relative w-full md:w-72 h-52 bg-surface-container shrink-0 overflow-hidden">
          <Image
            src={vehicle.imageUrl}
            alt={vehicle.imageAlt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, 300px"
          />
          <div className="absolute top-space-sm left-space-sm flex flex-col gap-space-xs">
            <span
              className={`px-space-sm py-space-xs rounded-lg bg-surface-container-lowest/90 backdrop-blur-md font-label-md text-[11px] font-bold shadow-sm ${badgeColorClass}`}
            >
              {vehicle.highlightBadge}
            </span>
          </div>
          <div className="absolute bottom-space-sm right-space-sm bg-inverse-surface/80 backdrop-blur-md text-inverse-on-surface px-space-sm py-space-xs rounded-lg font-label-md text-[11px]">
            Tahun {vehicle.year}
          </div>
        </div>

        {/* Content */}
        <div className="p-space-md flex flex-col flex-1 justify-between gap-space-sm">
          <div className="flex flex-col gap-space-xs">
            <div className="flex items-center justify-between">
              <span className="font-label-md text-secondary font-medium text-[12px]">
                {vehicle.category}
              </span>
              <div className="flex items-center gap-space-xs text-on-surface font-label-md font-bold text-xs">
                <span
                  className="material-symbols-outlined text-primary-container text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span>{vehicle.rating}</span>
                <span className="text-on-surface-variant font-normal text-[12px]">
                  ({vehicle.reviewsCount})
                </span>
              </div>
            </div>

            <h2 className="font-headline-lg text-body-md text-on-surface font-bold leading-snug">
              <Link
                href={`/rental/${vehicle.id}`}
                className="hover:text-primary transition-colors"
              >
                {vehicle.name}
              </Link>
            </h2>

            {/* Feature Specs Pills */}
            <div className="flex flex-wrap gap-space-xs my-space-xs">
              {vehicle.specs.map((spec, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-space-xs px-space-xs py-[2px] rounded bg-surface-container-low text-secondary font-label-md text-[11px]"
                >
                  <span className="material-symbols-outlined text-[14px]">
                    {spec.icon}
                  </span>
                  <span>{spec.label}</span>
                </span>
              ))}
            </div>

            {/* Pickup perk */}
            <div className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-[12px]">
              <span className="material-symbols-outlined text-primary-container text-[16px] shrink-0">
                pin_drop
              </span>
              <span>
                Gratis antar: <strong>{vehicle.pickupPerk}</strong>
              </span>
            </div>
          </div>

          {/* Price & CTA */}
          <div className="pt-space-sm border-t border-surface-container-high/60 flex items-end justify-between mt-auto">
            <div className="flex flex-col">
              <span className="font-label-md text-secondary text-[11px]">
                {isWithDriver ? "Tarif + Driver & BBM" : "Tarif Lepas Kunci"}
              </span>
              <div className="flex items-baseline gap-space-xs">
                <span className="font-headline-lg text-primary font-bold text-[18px]">
                  Rp {activeDailyPrice.toLocaleString("id-ID")}
                </span>
                <span className="text-on-surface-variant font-label-md text-[11px]">
                  /hari
                </span>
              </div>
              <span className="text-on-surface-variant font-label-md text-[11px]">
                Total {vehicle.totalDays} Hari: Rp{" "}
                {totalCalculated.toLocaleString("id-ID")}
              </span>
            </div>

            <button
              type="button"
              onClick={() => onSelectUnit(vehicle)}
              className="px-space-md py-space-xs rounded-xl bg-primary-container hover:bg-surface-tint text-on-primary font-label-md text-label-md font-bold transition-all shadow-sm cursor-pointer"
            >
              Pilih Unit
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Grid View (Default)
  return (
    <div className="flex flex-col bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-surface-container-high/60 group">
      {/* Top Image */}
      <div className="relative w-full h-48 bg-surface-container overflow-hidden">
        <Image
          src={vehicle.imageUrl}
          alt={vehicle.imageAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
        />
        <div className="absolute top-space-sm left-space-sm flex flex-col gap-space-xs">
          <span
            className={`px-space-sm py-space-xs rounded-lg bg-surface-container-lowest/90 backdrop-blur-md font-label-md text-[11px] font-bold shadow-sm ${badgeColorClass}`}
          >
            {vehicle.highlightBadge}
          </span>
        </div>
        <div className="absolute bottom-space-sm right-space-sm bg-inverse-surface/80 backdrop-blur-md text-inverse-on-surface px-space-sm py-space-xs rounded-lg font-label-md text-[11px]">
          Tahun {vehicle.year}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-space-md flex flex-col flex-1 justify-between gap-space-sm">
        <div className="flex flex-col gap-space-xs">
          <div className="flex items-center justify-between">
            <span className="font-label-md text-secondary font-medium text-[12px]">
              {vehicle.category}
            </span>
            <div className="flex items-center gap-space-xs text-on-surface font-label-md font-bold text-xs">
              <span
                className="material-symbols-outlined text-primary-container text-[18px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span>{vehicle.rating}</span>
              <span className="text-on-surface-variant font-normal text-[12px]">
                ({vehicle.reviewsCount})
              </span>
            </div>
          </div>

          <h2 className="font-headline-lg text-label-md text-on-surface font-bold leading-snug">
            <Link
              href={`/rental/${vehicle.id}`}
              className="hover:text-primary transition-colors"
            >
              {vehicle.name}
            </Link>
          </h2>

          {/* Feature Specs Pills */}
          <div className="flex flex-wrap gap-space-xs my-space-xs">
            {vehicle.specs.map((spec, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-space-xs px-space-xs py-[2px] rounded bg-surface-container-low text-secondary font-label-md text-[11px]"
              >
                <span className="material-symbols-outlined text-[14px]">
                  {spec.icon}
                </span>
                <span>{spec.label}</span>
              </span>
            ))}
          </div>

          {/* Pickup perk */}
          <div className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-[12px]">
            <span className="material-symbols-outlined text-primary-container text-[16px] shrink-0">
              pin_drop
            </span>
            <span>
              Gratis antar: <strong>{vehicle.pickupPerk}</strong>
            </span>
          </div>
        </div>

        {/* Price & CTA */}
        <div className="pt-space-sm border-t border-surface-container-high/60 flex items-end justify-between mt-auto">
          <div className="flex flex-col">
            <span className="font-label-md text-secondary text-[11px]">
              {isWithDriver ? "Tarif + Driver & BBM" : "Tarif Lepas Kunci"}
            </span>
            <div className="flex items-baseline gap-space-xs">
              <span className="font-headline-lg text-primary font-bold text-[18px]">
                Rp {activeDailyPrice.toLocaleString("id-ID")}
              </span>
              <span className="text-on-surface-variant font-label-md text-[11px]">
                /hari
              </span>
            </div>
            <span className="text-on-surface-variant font-label-md text-[11px]">
              Total {vehicle.totalDays} Hari: Rp{" "}
              {totalCalculated.toLocaleString("id-ID")}
            </span>
          </div>

          <button
            type="button"
            onClick={() => onSelectUnit(vehicle)}
            className="px-space-md py-space-xs rounded-xl bg-primary-container hover:bg-surface-tint text-on-primary font-label-md text-label-md font-bold transition-all shadow-sm cursor-pointer"
          >
            Pilih Unit
          </button>
        </div>
      </div>
    </div>
  );
}
