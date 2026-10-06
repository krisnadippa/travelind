"use client";

import React, { useState } from "react";
import Link from "next/link";
import { VillaDetailData } from "@/data/villaDetails";

interface VillaDetailHeaderProps {
  villa: VillaDetailData;
}

export default function VillaDetailHeader({ villa }: VillaDetailHeaderProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (typeof window !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: `${villa.name} - Travelind Bali`,
          url: window.location.href,
        });
        return;
      } catch (err) {
        // Fallback to clipboard
      }
    }

    if (typeof window !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="w-full px-gutter pt-space-lg pb-space-md">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
        {/* Breadcrumb Hierarchy */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center flex-wrap gap-space-xs font-label-md text-label-md text-on-surface-variant text-sm"
        >
          <Link
            className="hover:text-primary transition-colors flex items-center gap-1"
            href="/"
          >
            <span className="material-symbols-outlined text-[16px]">home</span>
            <span>Beranda</span>
          </Link>
          <span className="text-outline-variant">/</span>
          <Link className="hover:text-primary transition-colors" href="/villas">
            Villas &amp; Stays Bali
          </Link>
          <span className="text-outline-variant">/</span>
          <span className="hover:text-primary transition-colors cursor-pointer">
            {villa.area}
          </span>
          <span className="text-outline-variant">/</span>
          <span className="text-on-surface font-semibold truncate max-w-xs sm:max-w-md">
            {villa.name}
          </span>
        </nav>

        {/* Action Utilities */}
        <div className="flex items-center gap-space-sm self-start lg:self-auto">
          <button
            onClick={handleShare}
            className="flex items-center gap-space-xs px-space-md py-space-xs rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-sm transition-all cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">
              {copied ? "done" : "share"}
            </span>
            <span>{copied ? "Tautan Disalin!" : "Bagikan"}</span>
          </button>

          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className="flex items-center gap-space-xs px-space-md py-space-xs rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-sm transition-all group cursor-pointer"
            type="button"
          >
            <span
              className={`material-symbols-outlined text-[18px] transition-colors ${
                isWishlisted ? "text-error" : "group-hover:text-error"
              }`}
              style={isWishlisted ? { fontVariationSettings: "'FILL' 1" } : {}}
            >
              {isWishlisted ? "favorite" : "favorite_border"}
            </span>
            <span>{isWishlisted ? "Tersimpan" : "Simpan"}</span>
          </button>
        </div>
      </div>

      {/* Title, Badges & Micro-meta */}
      <div className="mt-space-md flex flex-col gap-space-sm">
        <div className="flex flex-wrap items-center gap-space-xs">
          <span className="inline-flex items-center gap-1 px-space-sm py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-md text-[12px] font-semibold">
            <span className="material-symbols-outlined text-[14px]">verified</span>{" "}
            Pilihan Terverifikasi
          </span>
          <span className="inline-flex items-center gap-1 px-space-sm py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-[12px] font-semibold">
            <span className="material-symbols-outlined text-[14px]">diamond</span>{" "}
            Villa Mewah Eksklusif
          </span>
          <span className="inline-flex items-center gap-1 px-space-sm py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-md text-[12px] font-semibold">
            <span className="material-symbols-outlined text-[14px]">bolt</span>{" "}
            Instant Confirmation
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
          <div>
            <h1 className="font-headline-lg text-2xl md:text-3xl lg:text-4xl font-bold text-on-surface tracking-tight">
              {villa.name}
            </h1>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-space-md mt-space-xs text-on-surface-variant font-body-md text-sm">
              <span className="flex items-center gap-1 text-on-surface font-semibold">
                <span
                  className="material-symbols-outlined text-[18px] text-amber-500"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                {villa.rating}
                <span className="font-normal text-on-surface-variant">
                  ({villa.reviewCount} ulasan wisatawan terverifikasi)
                </span>
              </span>
              <span className="hidden sm:inline text-outline-variant">•</span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[18px] text-secondary">
                  room_service
                </span>
                {villa.superhostTitle}
              </span>
              <span className="hidden sm:inline text-outline-variant">•</span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[18px] text-primary">
                  pin_drop
                </span>
                {villa.fullLocation}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
