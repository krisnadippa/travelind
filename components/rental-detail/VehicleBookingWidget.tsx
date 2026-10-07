"use client";

import React, { useState } from "react";
import { VehicleDetailData } from "@/data/rentalVehicleDetails";

interface VehicleBookingWidgetProps {
  vehicle: VehicleDetailData;
  onInstantBook?: (totalPrice: number, details: any) => void;
}

export default function VehicleBookingWidget({
  vehicle,
  onInstantBook,
}: VehicleBookingWidgetProps) {
  // Location selection state
  const [locationExtra, setLocationExtra] = useState(0);
  const [selectedLocationName, setSelectedLocationName] = useState(
    "Bandara I Gusti Ngurah Rai (DPS)"
  );

  // Add-ons state (explicit boolean)
  const [addonSeat, setAddonSeat] = useState(false);
  const [addonZero, setAddonZero] = useState(false);
  const [addonDriver, setAddonDriver] = useState(false);
  const [isBooking, setIsBooking] = useState(false);

  const rentalDays = vehicle.defaultDays || 3;
  const baseSubtotal = vehicle.basePricePerDay * rentalDays;
  const earlyBirdDiscount = 100000;

  // Addons calculation
  let addonsTotal = 0;
  if (addonSeat) addonsTotal += 50000 * rentalDays;
  if (addonZero) addonsTotal += 75000 * rentalDays;
  if (addonDriver) addonsTotal += 250000 * rentalDays;
  addonsTotal += locationExtra;

  const finalTotal = baseSubtotal + addonsTotal - earlyBirdDiscount;

  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = parseInt(e.target.value) || 0;
    setLocationExtra(val);
    const selectedOption = e.target.options[e.target.selectedIndex];
    setSelectedLocationName(selectedOption.text.split(" - ")[0]);
  };

  const handleBooking = () => {
    setIsBooking(true);
    setTimeout(() => {
      if (onInstantBook) {
        onInstantBook(finalTotal, {
          location: selectedLocationName,
          addonSeat,
          addonZero,
          addonDriver,
        });
      } else {
        const message = `Halo Travelind Bali, saya ingin melakukan pemesanan instan untuk *${
          vehicle.name
        }* selama ${rentalDays} hari.%0ATotal Biaya: Rp ${finalTotal.toLocaleString(
          "id-ID"
        )}%0ATitik Pengantaran: ${encodeURIComponent(
          selectedLocationName
        )}%0AAddons: ${[
          addonSeat ? "Kursi Bayi" : null,
          addonZero ? "Zero Excess" : null,
          addonDriver ? "Supir Lokal" : null,
        ]
          .filter(Boolean)
          .join(", ") || "Standar Lepas Kunci"}`;

        window.open(`https://wa.me/6281234567890?text=${message}`, "_blank");
      }
      setIsBooking(false);
    }, 600);
  };

  return (
    <div className="lg:col-span-4 w-full">
      <div className="sticky top-24 bg-surface-container-lowest rounded-xl shadow-xl p-space-lg flex flex-col gap-space-md border border-surface-container-high/60">
        {/* Price Header */}
        <div className="flex items-baseline justify-between pb-space-xs border-b border-surface-container-high/40">
          <div>
            <span className="font-label-md text-label-md text-secondary line-through text-xs">
              Rp {vehicle.originalPrice.toLocaleString("id-ID")}
            </span>
            <div className="flex items-baseline gap-1">
              <span
                id="daily-rate-display"
                className="font-headline-lg text-headline-lg font-bold text-primary text-2xl"
              >
                Rp {vehicle.basePricePerDay.toLocaleString("id-ID")}
              </span>
              <span className="font-label-md text-label-md text-on-surface-variant text-xs">
                / hari
              </span>
            </div>
          </div>
          <span className="px-space-sm py-1 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-label-md text-xs font-bold">
            Hemat Rp 100k/hr
          </span>
        </div>

        {/* Trip Schedule Box */}
        <div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col gap-space-xs font-label-md text-label-md border border-surface-container-high/40">
          <div className="flex items-center justify-between text-xs text-on-surface-variant">
            <span>Jadwal Perjalanan di Bali</span>
            <span className="font-semibold text-primary">
              {rentalDays} Hari (72 Jam Sewa)
            </span>
          </div>

          {/* Pick-up */}
          <div className="p-space-xs bg-surface-container-lowest rounded flex items-center justify-between border border-surface-container-high/40">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-primary text-[20px]">
                calendar_today
              </span>
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-on-surface-variant uppercase font-medium">
                  Pengambilan Unit
                </span>
                <span
                  id="text-pickup"
                  className="font-semibold text-on-surface text-xs"
                >
                  {vehicle.defaultDates.pickup}
                </span>
              </div>
            </div>
            <span className="text-[11px] text-secondary font-medium">
              Bandara DPS
            </span>
          </div>

          {/* Return */}
          <div className="p-space-xs bg-surface-container-lowest rounded flex items-center justify-between border border-surface-container-high/40">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-primary text-[20px]">
                event_repeat
              </span>
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-on-surface-variant uppercase font-medium">
                  Pengembalian Unit
                </span>
                <span
                  id="text-return"
                  className="font-semibold text-on-surface text-xs"
                >
                  {vehicle.defaultDates.return}
                </span>
              </div>
            </div>
            <span className="text-[11px] text-secondary font-medium">
              Bandara DPS
            </span>
          </div>

          {/* Location Dropdown Choice */}
          <div className="pt-space-xs">
            <label className="block text-[11px] text-on-surface-variant font-medium mb-1">
              Titik Pengambilan Armada
            </label>
            <select
              id="location-select"
              value={locationExtra}
              onChange={handleLocationChange}
              className="w-full bg-surface-container-lowest text-on-surface text-xs py-2 px-space-sm rounded font-medium focus:outline-none border border-surface-container-high/60 cursor-pointer"
            >
              <option value="0">
                Bandara I Gusti Ngurah Rai (DPS) - Free
              </option>
              <option value="0">Seminyak / Legian / Kuta - Free</option>
              <option value="0">Canggu / Pererenan - Free</option>
              <option value="0">Sanur Harbour / Hotel - Free</option>
              <option value="100000">
                Ubud Center / Hotel (+Rp 100.000)
              </option>
              <option value="120000">
                Uluwatu / Pecatu Cliff (+Rp 120.000)
              </option>
            </select>
          </div>
        </div>

        {/* Add-ons Selection */}
        <div className="flex flex-col gap-space-xs">
          <span className="font-label-md text-label-md font-bold text-on-surface text-xs uppercase tracking-wider">
            Pilihan Layanan Tambahan (Opsional)
          </span>

          {/* Addon 1: Child Car Seat */}
          <label className="flex items-center justify-between p-2 rounded-lg hover:bg-surface-container-low cursor-pointer transition-colors border border-surface-container-high/40 select-none">
            <div className="flex items-center gap-2">
              <input
                id="addon-seat"
                type="checkbox"
                checked={Boolean(addonSeat)}
                onChange={(e) => setAddonSeat(e.target.checked)}
                className="w-4 h-4 rounded text-primary focus:ring-primary accent-primary cursor-pointer"
              />
              <div className="flex flex-col">
                <span className="font-label-md text-on-surface text-xs font-semibold">
                  Kursi Bayi (Child Car Seat)
                </span>
                <span className="text-[11px] text-on-surface-variant">
                  Standar keselamatan balita ISOFIX
                </span>
              </div>
            </div>
            <span className="font-label-md text-xs font-semibold text-on-surface">
              +Rp 50k
              <span className="text-[10px] text-on-surface-variant font-normal">
                /hr
              </span>
            </span>
          </label>

          {/* Addon 2: Zero Excess */}
          <label className="flex items-center justify-between p-2 rounded-lg hover:bg-surface-container-low cursor-pointer transition-colors border border-surface-container-high/40 select-none">
            <div className="flex items-center gap-2">
              <input
                id="addon-zero"
                type="checkbox"
                checked={Boolean(addonZero)}
                onChange={(e) => setAddonZero(e.target.checked)}
                className="w-4 h-4 rounded text-primary focus:ring-primary accent-primary cursor-pointer"
              />
              <div className="flex flex-col">
                <span className="font-label-md text-on-surface text-xs font-semibold">
                  Zero Excess Deductible
                </span>
                <span className="text-[11px] text-on-surface-variant">
                  Bebas klaim biaya risiko lecet/baret
                </span>
              </div>
            </div>
            <span className="font-label-md text-xs font-semibold text-on-surface">
              +Rp 75k
              <span className="text-[10px] text-on-surface-variant font-normal">
                /hr
              </span>
            </span>
          </label>

          {/* Addon 3: Driver */}
          <label className="flex items-center justify-between p-2 rounded-lg hover:bg-surface-container-low cursor-pointer transition-colors border border-surface-container-high/40 select-none">
            <div className="flex items-center gap-2">
              <input
                id="addon-driver"
                type="checkbox"
                checked={Boolean(addonDriver)}
                onChange={(e) => setAddonDriver(e.target.checked)}
                className="w-4 h-4 rounded text-primary focus:ring-primary accent-primary cursor-pointer"
              />
              <div className="flex flex-col">
                <span className="font-label-md text-on-surface text-xs font-semibold">
                  Opsi Tambahan Sopir Lokal
                </span>
                <span className="text-[11px] text-on-surface-variant">
                  Supir ramah &amp; paham rute Bali
                </span>
              </div>
            </div>
            <span className="font-label-md text-xs font-semibold text-on-surface">
              +Rp 250k
              <span className="text-[10px] text-on-surface-variant font-normal">
                /hr
              </span>
            </span>
          </label>
        </div>

        {/* Price Summary Breakdown */}
        <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-space-xs font-body-md text-label-md border border-surface-container-high/40">
          <div className="flex items-center justify-between text-xs text-on-surface-variant">
            <span>Sewa Unit Zenix Hybrid ({rentalDays} Hari)</span>
            <span className="text-on-surface font-semibold">
              Rp {baseSubtotal.toLocaleString("id-ID")}
            </span>
          </div>

          <div className="flex items-center justify-between text-xs text-on-surface-variant">
            <span>Antar-Jemput Bandara DPS</span>
            <span className="text-primary font-semibold">Gratis (Rp 0)</span>
          </div>

          <div className="flex items-center justify-between text-xs text-on-surface-variant">
            <span>Asuransi Proteksi All-Risk</span>
            <span className="text-primary font-semibold">Termasuk (Rp 0)</span>
          </div>

          {addonsTotal > 0 && (
            <div
              id="row-addons"
              className="flex items-center justify-between text-xs text-on-surface-variant"
            >
              <span>Layanan Tambahan Terpilih</span>
              <span id="label-addons" className="text-on-surface font-semibold">
                + Rp {addonsTotal.toLocaleString("id-ID")}
              </span>
            </div>
          )}

          <div className="flex items-center justify-between text-xs text-primary font-medium">
            <span>Diskon Reservasi Awal (Early Bird)</span>
            <span>- Rp {earlyBirdDiscount.toLocaleString("id-ID")}</span>
          </div>

          <div className="pt-space-xs border-t border-surface-container-high/60 flex items-center justify-between text-base font-bold text-on-surface">
            <span>Total Pembayaran</span>
            <span
              id="final-price-display"
              className="text-primary text-xl font-bold"
            >
              Rp {finalTotal.toLocaleString("id-ID")}
            </span>
          </div>
          <span className="text-[10px] text-outline text-right">
            *Termasuk PPN &amp; Biaya Asuransi Perjalanan
          </span>
        </div>

        {/* PRIMARY CTA BUTTON */}
        <button
          type="button"
          id="btn-instant-book"
          onClick={handleBooking}
          disabled={isBooking}
          className="w-full py-space-sm rounded-lg bg-primary-container hover:bg-surface-tint text-on-primary font-label-md text-base font-semibold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
        >
          {isBooking ? (
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px] animate-spin">
                progress_activity
              </span>
              Menyiapkan Pemesanan...
            </span>
          ) : (
            <>
              <span className="material-symbols-outlined text-[20px]">
                bolt
              </span>
              <span>Lanjutkan Pemesanan (Instant Booking)</span>
            </>
          )}
        </button>

        {/* SECONDARY WHATSAPP CTA */}
        <a
          href="https://wa.me/6281234567890?text=Halo%20Travelind%20Bali,%20saya%20ingin%20tanya%20ketersediaan%20Innova%20Zenix%20Hybrid%202024"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-space-xs rounded-lg bg-surface-container hover:bg-surface-container-high text-secondary font-label-md text-label-md font-medium text-center flex items-center justify-center gap-2 transition-colors border border-surface-container-high/40 text-xs sm:text-sm"
        >
          <span className="material-symbols-outlined text-secondary text-[18px]">
            chat
          </span>
          <span>Tanya Dispatcher via WhatsApp (+62 812-3456-7890)</span>
        </a>

        {/* Trust Badges & Guarantee */}
        <div className="flex flex-col gap-1.5 pt-space-xs font-label-md text-[11px] text-on-surface-variant border-t border-surface-container-high/40">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-primary text-[16px] shrink-0">
              lock_reset
            </span>
            <span>Garansi unit tersedia sesuai tipe yang dipesan</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-primary text-[16px] shrink-0">
              cancel
            </span>
            <span>
              Pembatalan gratis &amp; pengembalian dana hingga 24 jam sebelum tiba
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-primary text-[16px] shrink-0">
              credit_card_off
            </span>
            <span>Tanpa uang jaminan deposit yang memberatkan</span>
          </div>
        </div>
      </div>
    </div>
  );
}
