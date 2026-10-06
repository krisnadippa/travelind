"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { VillaDetailData } from "@/data/villaDetails";

interface VillaBookingWidgetProps {
  pricing: VillaDetailData["pricing"];
  villaName: string;
}

export default function VillaBookingWidget({
  pricing,
  villaName,
}: VillaBookingWidgetProps) {
  const router = useRouter();
  const [includeFloating, setIncludeFloating] = useState(false);
  const [includeCar, setIncludeCar] = useState(false);
  const [isReserving, setIsReserving] = useState(false);
  const [reservedSuccess, setReservedSuccess] = useState(false);

  const floatingPrice = 250000;
  const carPricePerDay = 850000;
  const totalCarPrice = carPricePerDay * pricing.defaultNights;

  // Base Calculation: 3 * 2,450,000 = 7,350,000 - 350,000 discount = 7,000,000
  const subtotal = pricing.basePricePerNight * pricing.defaultNights;
  const baseTotal = subtotal - pricing.discountAmount;

  const extraTotal =
    (includeFloating ? floatingPrice : 0) + (includeCar ? totalCarPrice : 0);
  const grandTotal = baseTotal + extraTotal;

  const formatRupiah = (num: number) => {
    return "Rp " + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const handleReserve = () => {
    setIsReserving(true);
    setTimeout(() => {
      setIsReserving(false);
      setReservedSuccess(true);
      router.push("/villas/villa-seminyak-oasis/booking");
    }, 600);
  };

  return (
    <div className="lg:col-span-5 xl:col-span-4 sticky top-24 self-start">
      <div className="bg-surface-container-lowest rounded-xl shadow-lg p-space-lg flex flex-col gap-space-md border border-outline-variant/20">
        {/* Pricing Header & Badge */}
        <div className="flex items-start justify-between pb-space-sm bg-surface-container-low/50 p-space-md rounded-xl border border-outline-variant/30">
          <div>
            <div className="flex items-baseline gap-space-xs">
              <span className="font-headline-lg text-[26px] font-bold text-primary">
                {pricing.formattedBasePrice}
              </span>
              <span className="font-label-md text-[13px] text-on-surface-variant font-medium">
                / malam
              </span>
            </div>
            <div className="flex items-center gap-space-xs mt-1">
              <span className="font-label-md text-[12px] line-through text-outline">
                {pricing.formattedOriginalPrice}
              </span>
              <span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-md text-[11px] font-bold">
                {pricing.formattedDiscount}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1 bg-surface-container-lowest px-2.5 py-1 rounded-full border border-outline-variant/30 shadow-sm text-on-surface font-label-md text-[13px] font-bold">
            <span
              className="material-symbols-outlined text-[16px] text-amber-500"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
            <span>4.92</span>
          </div>
        </div>

        {/* Date & Guest Selector Box */}
        <div className="rounded-xl border border-outline-variant/50 bg-surface-container-lowest p-space-sm shadow-sm flex flex-col gap-2">
          <div className="flex items-center justify-between px-1 pb-1 border-b border-surface-container">
            <div className="flex items-center gap-1.5 text-primary font-label-md text-[13px] font-bold">
              <span className="w-5 h-5 rounded-full bg-primary text-on-primary flex items-center justify-center text-[11px] font-bold">
                1
              </span>
              <span>Langkah 1: Tanggal &amp; Tamu</span>
            </div>
            <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 animate-pulse" />{" "}
              Unit Tersedia
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="p-2.5 rounded-lg bg-surface-container-low border border-outline-variant/30 flex flex-col">
              <div className="flex items-center gap-1 text-outline">
                <span className="material-symbols-outlined text-[14px]">
                  calendar_today
                </span>
                <span className="text-[10px] font-bold tracking-wider uppercase">
                  CHECK-IN
                </span>
              </div>
              <span className="font-label-md text-[13px] font-semibold text-on-surface mt-1">
                {pricing.defaultCheckIn}
              </span>
              <span className="text-[11px] text-on-surface-variant">
                Dari 14:00 WITA
              </span>
            </div>

            <div className="p-2.5 rounded-lg bg-surface-container-low border border-outline-variant/30 flex flex-col">
              <div className="flex items-center gap-1 text-outline">
                <span className="material-symbols-outlined text-[14px]">
                  event
                </span>
                <span className="text-[10px] font-bold tracking-wider uppercase">
                  CHECK-OUT
                </span>
              </div>
              <span className="font-label-md text-[13px] font-semibold text-on-surface mt-1">
                {pricing.defaultCheckOut}
              </span>
              <span className="text-[11px] text-on-surface-variant">
                Maks 12:00 WITA
              </span>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-surface-container-low border border-outline-variant/30 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-[20px]">
                group
              </span>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold tracking-wider text-outline uppercase">
                  TAMU &amp; PROPERTI
                </span>
                <span className="font-label-md text-[13px] font-semibold text-on-surface">
                  {pricing.defaultGuests}
                </span>
              </div>
            </div>
            <span className="text-[11px] font-semibold text-primary bg-primary-fixed/60 px-2 py-0.5 rounded-full shrink-0">
              1 Seluruh Villa
            </span>
          </div>
        </div>

        {/* Add-on Checklist & Free Perks */}
        <div className="flex flex-col gap-1.5 pt-space-xs">
          <label className="font-label-md text-[12px] uppercase tracking-wider text-on-surface-variant font-semibold mb-0.5">
            Paket Termasuk &amp; Tambahan:
          </label>
          <div className="flex items-center justify-between p-2 rounded-lg bg-primary-fixed/20 text-on-surface font-label-md text-[13px]">
            <span className="flex items-center gap-2 font-medium">
              <span className="material-symbols-outlined text-primary text-[18px]">
                task_alt
              </span>
              Sarapan Harian Al-a-Carte
            </span>
            <span className="font-bold text-primary text-[11px] px-2 py-0.5 rounded bg-primary-container/20">
              GRATIS
            </span>
          </div>

          <div className="flex items-center justify-between p-2 rounded-lg bg-primary-fixed/20 text-on-surface font-label-md text-[13px]">
            <span className="flex items-center gap-2 font-medium">
              <span className="material-symbols-outlined text-primary text-[18px]">
                task_alt
              </span>
              Antar-Jemput Bandara DPS PP
            </span>
            <span className="font-bold text-primary text-[11px] px-2 py-0.5 rounded bg-primary-container/20">
              GRATIS (3+ Malam)
            </span>
          </div>

          {/* Optional Toggles */}
          <label className="flex items-center justify-between p-2 rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer text-on-surface font-label-md text-[13px] border border-outline-variant/30">
            <span className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={includeFloating}
                onChange={(e) => setIncludeFloating(e.target.checked)}
                className="rounded text-primary focus:ring-primary w-4 h-4 cursor-pointer"
              />
              <span>Tambah Floating Breakfast</span>
            </span>
            <span className="font-semibold text-on-surface text-[12px]">
              +Rp 250.000
            </span>
          </label>

          <label className="flex items-center justify-between p-2 rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer text-on-surface font-label-md text-[13px] border border-outline-variant/30">
            <span className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={includeCar}
                onChange={(e) => setIncludeCar(e.target.checked)}
                className="rounded text-primary focus:ring-primary w-4 h-4 cursor-pointer"
              />
              <span>Sewa Innova Zenix + Driver</span>
            </span>
            <span className="font-semibold text-on-surface text-[12px]">
              +Rp 850.000/hari
            </span>
          </label>
        </div>

        {/* Price Calculation Breakdown */}
        <div className="flex flex-col gap-1.5 pt-space-xs font-label-md text-[13px] text-on-surface-variant bg-surface-container-low/30 p-space-sm rounded-xl border border-outline-variant/20">
          <div className="flex justify-between items-center py-0.5">
            <span>
              Sewa Villa ({pricing.defaultNights} Malam @ {pricing.formattedBasePrice})
            </span>
            <span className="font-semibold text-on-surface">
              {formatRupiah(subtotal)}
            </span>
          </div>
          <div className="flex justify-between items-center py-0.5">
            <span>Antar-Jemput VIP Bandara DPS</span>
            <span className="text-primary font-semibold">
              GRATIS (Promo 3+ Malam)
            </span>
          </div>
          <div className="flex justify-between items-center py-0.5 text-primary font-medium">
            <span>Diskon Promo Early Bird</span>
            <span className="font-semibold">
              -{formatRupiah(pricing.discountAmount)}
            </span>
          </div>
          <div className="flex justify-between items-center py-0.5 text-[11px] text-outline">
            <span>Pajak Daerah &amp; Jasa Wisata (11%)</span>
            <span className="font-medium">Sudah Termasuk</span>
          </div>

          {extraTotal > 0 && (
            <div className="flex justify-between items-center py-0.5 text-secondary font-medium">
              <span>Tambahan Layanan Pilihan</span>
              <span className="font-semibold">+{formatRupiah(extraTotal)}</span>
            </div>
          )}

          <div className="mt-space-xs pt-space-sm border-t border-surface-container flex items-center justify-between">
            <div className="flex flex-col">
              <span className="font-bold text-on-surface text-[14px]">
                Estimasi Total
              </span>
              <span className="text-[11px] text-on-surface-variant">
                Termasuk semua pajak &amp; promo
              </span>
            </div>
            <span className="font-headline-lg text-[22px] font-bold text-primary">
              {formatRupiah(grandTotal)}
            </span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-2 pt-space-xs">
          <button
            onClick={handleReserve}
            disabled={isReserving}
            className="w-full py-space-sm px-space-md rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md font-bold text-center transition-all shadow-[0_1px_8px_rgba(2,100,246,0.18)] flex items-center justify-center gap-space-xs cursor-pointer"
            type="button"
          >
            {isReserving ? (
              <>
                <span className="material-symbols-outlined animate-spin text-[20px]">
                  sync
                </span>
                <span>Memproses Reservasi...</span>
              </>
            ) : reservedSuccess ? (
              <>
                <span className="material-symbols-outlined text-[20px]">
                  check
                </span>
                <span>Menuju Pembayaran...</span>
              </>
            ) : (
              <>
                <span>Lanjut ke Langkah 2: Isi Data Tamu</span>
                <span className="material-symbols-outlined text-[20px]">
                  arrow_forward
                </span>
              </>
            )}
          </button>

          <a
            className="w-full py-2.5 px-space-md rounded-lg bg-surface-container-lowest hover:bg-surface-container-low border border-outline-variant/60 text-on-surface font-label-md text-[13px] font-semibold text-center transition-all flex items-center justify-center gap-space-xs"
            href={`https://wa.me/6281234567890?text=Halo%20Travelind,%20saya%20tertarik%20dengan%20${encodeURIComponent(
              villaName
            )}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-[18px] text-[#25D366]">
              chat
            </span>
            <span>Tanya Butler via WhatsApp</span>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-col gap-1.5 text-on-surface-variant font-label-md text-[12px] border-t border-surface-container pt-space-sm">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
              verified
            </span>
            <span>Garansi 100% Villa Terverifikasi Langsung di Seminyak</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
              lock
            </span>
            <span>Perlindungan Pembayaran Aman &amp; Escrow Travelind</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
              support_agent
            </span>
            <span>Dukungan Concierge Tamu Siaga 24 Jam</span>
          </div>
        </div>
      </div>
    </div>
  );
}
