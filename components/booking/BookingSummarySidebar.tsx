"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AVAILABLE_ADDONS } from "./BookingAddonsForm";

interface BookingSummarySidebarProps {
  villaId?: string;
  villaName?: string;
  villaLocation?: string;
  villaRating?: number;
  villaReviewsCount?: number;
  villaImage?: string;
  basePricePerNight?: number;
  nights?: number;
  checkInDate?: string;
  checkOutDate?: string;
  selectedAddons?: string[];
  onSubmitBooking?: () => void;
}

export default function BookingSummarySidebar({
  villaId = "villa-seminyak-oasis",
  villaName = "Villa Seminyak Oasis Tropical",
  villaLocation = "Jl. Kayu Aya / Oberoi, Seminyak, Bali",
  villaRating = 4.92,
  villaReviewsCount = 312,
  villaImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuCdZ_1eMqEh3xyigT6RWgmY1P08tASAcfll4z0u6rohPyx25L6r_JRxr1JUa90Srgi7qRw2CykOdWk0K2ZAvgd-Vmy7uxsKx2Q3nEtHqrCmgcu3CQsnNEZ0hjWj8gbLbsnuf6f3Ot-SQyV-Yx2fFtHcTvQbcXZpxeKwrkXfqDhRy1CvpCb7DBbLtb6f01AemVSHQr13dtPtQka16UyqmpiqXS9enTdqaaYYFyfXY1X9VcTB42zWRFj9BA",
  basePricePerNight = 2450000,
  nights = 3,
  checkInDate = "Kamis, 19 Mar 2026",
  checkOutDate = "Minggu, 22 Mar 2026",
  selectedAddons = ["floating_breakfast"],
  onSubmitBooking,
}: BookingSummarySidebarProps) {
  const [agreedToTerms, setAgreedToTerms] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Price calculations
  const villaBaseTotal = basePricePerNight * nights;
  const earlyBirdDiscount = 350000;

  // Calculate dynamic addons
  let addonsTotal = 0;
  const activeAddonDetails: { name: string; priceFormatted: string; isFree?: boolean }[] = [];

  AVAILABLE_ADDONS.forEach((addon) => {
    if (addon.isFree) {
      activeAddonDetails.push({
        name: addon.name,
        priceFormatted: "GRATIS",
        isFree: true,
      });
    } else if (selectedAddons.includes(addon.id)) {
      // Extra bed is per night
      const cost = addon.id === "extra_bed" ? addon.price * nights : addon.price;
      addonsTotal += cost;
      activeAddonDetails.push({
        name:
          addon.id === "floating_breakfast"
            ? "Floating Breakfast (1 hari / 2 pax)"
            : addon.id === "extra_bed"
            ? `Extra Bed Mewah (${nights} malam)`
            : addon.name,
        priceFormatted: `Rp ${cost.toLocaleString("id-ID")}`,
        isFree: false,
      });
    }
  });

  const finalTotal = villaBaseTotal + addonsTotal - earlyBirdDiscount;

  const handleProceed = () => {
    if (!agreedToTerms) {
      alert("Mohon centang persetujuan Syarat & Ketentuan untuk melanjutkan.");
      return;
    }
    setIsSubmitting(true);
    if (onSubmitBooking) {
      onSubmitBooking();
    } else {
      setTimeout(() => {
        alert(
          `Melanjutkan ke Gateway Pembayaran Bank Indonesia untuk reservasi ${villaName} dengan total Rp ${finalTotal.toLocaleString(
            "id-ID"
          )}`
        );
        setIsSubmitting(false);
      }, 600);
    }
  };

  return (
    <aside className="lg:col-span-4 sticky top-24 flex flex-col gap-space-md">
      {/* Summary Card Container */}
      <div className="bg-surface-container-lowest rounded-xl shadow-md border border-surface-container-high/60 overflow-hidden flex flex-col">
        {/* Villa Image & Headline Meta */}
        <div className="relative w-full h-48 bg-surface-container overflow-hidden">
          <Image
            src={villaImage}
            alt={villaName}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 380px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-on-surface/85 via-on-surface/20 to-transparent" />

          {/* Verified Badge */}
          <div className="absolute top-space-sm left-space-sm flex flex-wrap gap-1">
            <span className="px-space-sm py-0.5 rounded-full bg-surface-container-lowest/95 backdrop-blur-md text-primary font-label-md text-xs font-bold flex items-center gap-1 shadow-xs">
              <span className="material-symbols-outlined text-[14px]">
                verified
              </span>
              Pilihan Terverifikasi
            </span>
          </div>

          {/* Villa Details on Thumbnail */}
          <div className="absolute bottom-space-sm left-space-sm right-space-sm text-on-primary">
            <div className="flex items-center gap-space-xs text-xs font-semibold mb-0.5">
              <span
                className="material-symbols-outlined text-amber-400 text-[16px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span className="text-on-primary font-bold">{villaRating}</span>
              <span className="text-primary-fixed opacity-90 text-[11px]">
                ({villaReviewsCount} ulasan terkonfirmasi)
              </span>
            </div>
            <h3 className="font-headline-lg text-body-md font-bold leading-tight drop-shadow-sm text-white">
              {villaName}
            </h3>
            <p className="font-body-md text-label-md text-on-primary/90 text-xs flex items-center gap-1 truncate mt-0.5">
              <span className="material-symbols-outlined text-[14px] shrink-0 text-primary-fixed">
                location_on
              </span>
              <span className="truncate">{villaLocation}</span>
            </p>
          </div>
        </div>

        {/* Stay Overview Details */}
        <div className="p-space-lg flex flex-col gap-space-md">
          {/* Dates and Duration Badge */}
          <div className="p-space-md rounded-lg bg-surface-container-low border border-surface-container-high/40 flex flex-col gap-space-xs">
            <div className="flex items-center justify-between text-on-surface font-label-md text-label-md">
              <div className="flex flex-col">
                <span className="text-secondary text-[11px] uppercase tracking-wider font-semibold">
                  Check-in
                </span>
                <span className="font-bold text-xs sm:text-label-md">
                  {checkInDate}
                </span>
                <span className="text-secondary text-xs">Mulai 14:00 WITA</span>
              </div>

              <div className="flex flex-col items-center px-space-xs">
                <span className="px-space-sm py-0.5 rounded-full bg-secondary-container text-on-secondary-container text-[11px] font-bold">
                  {nights} Malam
                </span>
                <span className="material-symbols-outlined text-secondary text-[18px]">
                  trending_flat
                </span>
              </div>

              <div className="flex flex-col items-end">
                <span className="text-secondary text-[11px] uppercase tracking-wider font-semibold">
                  Check-out
                </span>
                <span className="font-bold text-xs sm:text-label-md">
                  {checkOutDate}
                </span>
                <span className="text-secondary text-xs">Maksimal 12:00 WITA</span>
              </div>
            </div>

            <div className="pt-space-xs border-t border-surface-container-high/60 flex items-center gap-space-xs text-xs text-on-surface-variant">
              <span className="material-symbols-outlined text-[16px] text-primary shrink-0">
                villa
              </span>
              <span>1 Seluruh Villa • 3 KT King Bed • Kolam Renang Privat 10x4m</span>
            </div>
          </div>

          {/* Complimentary Included Perks */}
          <div className="flex flex-col gap-space-xs">
            <span className="font-label-md text-label-md text-on-surface font-bold">
              Fasilitas Termasuk (Complimentary):
            </span>
            <ul className="flex flex-col gap-1 text-xs text-on-surface-variant">
              <li className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-primary text-[16px] shrink-0">
                  check_circle
                </span>
                <span>Sarapan Harian A-la-Carte untuk 6 Tamu</span>
              </li>
              <li className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-primary text-[16px] shrink-0">
                  check_circle
                </span>
                <span>Daily Housekeeping &amp; Butler Khusus</span>
              </li>
              <li className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-primary text-[16px] shrink-0">
                  check_circle
                </span>
                <span>WiFi Fiber Cepat 150 Mbps &amp; Smart TV Netflix</span>
              </li>
              <li className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-primary text-[16px] shrink-0">
                  check_circle
                </span>
                <span>Free Antar-Jemput Bandara DPS (Innova Zenix)</span>
              </li>
            </ul>
          </div>

          {/* Price Breakdown */}
          <div className="flex flex-col gap-space-xs pt-space-xs border-t border-surface-container-high/60">
            {/* Base Villa Rate */}
            <div className="flex items-center justify-between text-xs font-body-md text-on-surface-variant">
              <span>
                Tarif Villa (Rp {basePricePerNight.toLocaleString("id-ID")} × {nights} malam)
              </span>
              <span className="font-medium text-on-surface">
                Rp {villaBaseTotal.toLocaleString("id-ID")}
              </span>
            </div>

            {/* Active Addons */}
            {activeAddonDetails.map((addon, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between text-xs font-body-md text-on-surface-variant"
              >
                <span className="flex items-center gap-1">
                  {addon.name}
                  {addon.isFree && (
                    <span className="text-[10px] text-primary font-bold">
                      Promo 3M
                    </span>
                  )}
                </span>
                <span
                  className={`font-medium ${
                    addon.isFree ? "text-primary font-bold" : "text-on-surface"
                  }`}
                >
                  {addon.priceFormatted}
                </span>
              </div>
            ))}

            {/* Fees and Taxes */}
            <div className="flex items-center justify-between text-xs font-body-md text-on-surface-variant">
              <span>Biaya Layanan &amp; Kebersihan</span>
              <span className="font-medium text-secondary">Rp 0 (Ditanggung)</span>
            </div>
            <div className="flex items-center justify-between text-xs font-body-md text-on-surface-variant">
              <span>Pajak Daerah &amp; Layanan (PPN 11%)</span>
              <span className="font-medium text-secondary">Sudah Termasuk</span>
            </div>

            {/* Discount */}
            <div className="flex items-center justify-between text-xs font-body-md text-tertiary-container">
              <span>Diskon Early Bird Booking Staycation</span>
              <span className="font-bold">
                - Rp {earlyBirdDiscount.toLocaleString("id-ID")}
              </span>
            </div>

            {/* Total Clean Accent Box */}
            <div className="mt-space-sm p-space-md rounded-lg bg-surface-container-low border border-primary-container/20 flex items-center justify-between shadow-xs">
              <div>
                <span className="text-[11px] text-secondary uppercase tracking-wider font-semibold block">
                  Total Pembayaran Bersih
                </span>
                <span className="text-xs text-on-surface-variant">
                  Tanpa biaya tersembunyi
                </span>
              </div>
              <div className="text-right">
                <span className="font-headline-lg text-body-md text-primary font-bold block leading-none">
                  Rp {finalTotal.toLocaleString("id-ID")}
                </span>
                <span className="text-[11px] text-secondary">IDR Net</span>
              </div>
            </div>
          </div>

          {/* Terms & Conditions Agreement */}
          <div className="py-space-xs">
            <label className="flex items-start gap-space-sm cursor-pointer select-none">
              <input
                type="checkbox"
                checked={Boolean(agreedToTerms)}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="mt-0.5 w-4 h-4 text-primary-container accent-primary-container rounded shrink-0 cursor-pointer"
              />
              <span className="font-body-md text-[11px] text-on-surface-variant leading-snug">
                Saya telah membaca dan menyetujui{" "}
                <Link
                  href="/terms"
                  className="text-primary-container font-semibold hover:underline"
                >
                  Syarat &amp; Ketentuan Sewa Villa Travelind
                </Link>
                ,{" "}
                <Link
                  href="/privacy"
                  className="text-primary-container font-semibold hover:underline"
                >
                  Kebijakan Privasi
                </Link>
                , dan peraturan ketenangan Seminyak.
              </span>
            </label>
          </div>

          {/* Big Primary CTA Button */}
          <button
            type="button"
            onClick={handleProceed}
            disabled={isSubmitting}
            className="w-full py-space-md px-space-lg rounded-xl bg-primary-container text-on-primary font-headline-lg text-label-md font-bold shadow-md hover:bg-surface-tint hover:shadow-lg transition-all flex items-center justify-center gap-space-sm cursor-pointer disabled:opacity-50"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px] animate-spin">
                  progress_activity
                </span>
                Memproses Reservasi...
              </span>
            ) : (
              <>
                <span>
                  Lanjut ke Langkah 3: Pembayaran (Rp{" "}
                  {finalTotal.toLocaleString("id-ID")})
                </span>
                <span className="material-symbols-outlined text-[20px]">
                  arrow_forward
                </span>
              </>
            )}
          </button>

          {/* Secondary CTA disclaimer */}
          <p className="text-center font-body-md text-[11px] text-secondary leading-tight">
            Dengan mengklik tombol di atas, Anda akan dialihkan ke gerbang pembayaran aman Bank Indonesia.
          </p>

          {/* Trust and Security Badges */}
          <div className="pt-space-sm border-t border-surface-container-high/60 flex flex-col gap-space-xs text-secondary font-label-md text-xs">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
                verified_user
              </span>
              <span>Garansi Unit Sesuai Foto 100% atau Uang Kembali</span>
            </div>
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
                lock
              </span>
              <span>Enkripsi Bank-Grade 256-Bit SSL Protection</span>
            </div>
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
                support_agent
              </span>
              <span>Concierge Butler Siaga 24 Jam di Seminyak Bali</span>
            </div>
          </div>
        </div>
      </div>

      {/* Help contact card */}
      <div className="p-space-md rounded-xl bg-surface-container-low border border-surface-container-high/60 flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-space-sm">
          <span className="w-8 h-8 rounded-full bg-secondary-container text-primary-container flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[18px]">chat</span>
          </span>
          <div>
            <span className="font-label-md text-label-md text-on-surface font-bold block">
              Butuh Bantuan Reservasi?
            </span>
            <span className="text-secondary text-xs">Tim Travelind Seminyak siap 24/7</span>
          </div>
        </div>
        <a
          href="https://wa.me/6281234567890?text=Halo%20Travelind%2C%20saya%20butuh%20bantuan%20reservasi%20Villa%20Seminyak%20Oasis%20Tropical"
          target="_blank"
          rel="noopener noreferrer"
          className="px-space-sm py-space-xs rounded-lg bg-surface-container-lowest text-primary font-label-md text-xs font-bold shadow-xs hover:bg-primary hover:text-on-primary transition-all border border-primary/20"
        >
          Chat WA
        </a>
      </div>
    </aside>
  );
}
