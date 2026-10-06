"use client";

import React, { useState } from "react";
import Image from "next/image";
import { RentalVehicle } from "@/data/rentalVehicles";

interface RentalBookingModalProps {
  vehicle: RentalVehicle | null;
  driverMode: "self-drive" | "with-driver";
  onClose: () => void;
}

export default function RentalBookingModal({
  vehicle,
  driverMode,
  onClose,
}: RentalBookingModalProps) {
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [deliveryNote, setDeliveryNote] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!vehicle) return null;

  const isWithDriver = driverMode === "with-driver" && vehicle.availableWithDriver;
  const activeDailyPrice = isWithDriver
    ? vehicle.withDriverPricePerDay || vehicle.pricePerDay + 250000
    : vehicle.pricePerDay;

  const totalCalculated = activeDailyPrice * vehicle.totalDays;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      const message = `Halo Travelind, saya ingin konfirmasi sewa *${vehicle.name}* (${
        isWithDriver ? "Dengan Driver" : "Lepas Kunci"
      }) untuk 3 hari (Total: Rp ${totalCalculated.toLocaleString(
        "id-ID"
      )}).%0ANama: ${encodeURIComponent(customerName || "Tamu")}%0AWA: ${encodeURIComponent(
        customerPhone || "-"
      )}%0ACatatan: ${encodeURIComponent(deliveryNote || "Bandara Ngurah Rai")}`;

      window.open(`https://wa.me/6281234567890?text=${message}`, "_blank");
      onClose();
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div
        className="relative w-full max-w-lg bg-surface-container-lowest rounded-2xl shadow-xl border border-surface-container-high overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header with Close */}
        <div className="flex items-center justify-between p-space-md border-b border-surface-container-high/60 bg-surface-container-low">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary-container text-[22px]">
              directions_car
            </span>
            <span className="font-headline-lg text-body-md font-bold text-on-surface">
              Konfirmasi Sewa Armada
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-surface-container hover:bg-surface-container-highest flex items-center justify-center text-on-surface-variant cursor-pointer transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Vehicle Preview Card */}
        <div className="p-space-md flex gap-space-md border-b border-surface-container-high/60 bg-surface-container-lowest">
          <div className="relative w-28 h-20 rounded-xl overflow-hidden bg-surface-container shrink-0">
            <Image
              src={vehicle.imageUrl}
              alt={vehicle.imageAlt}
              fill
              className="object-cover"
              sizes="112px"
            />
          </div>
          <div className="flex flex-col justify-center min-w-0">
            <span className="font-label-md text-secondary text-[11px] uppercase font-bold">
              {vehicle.category} • Tahun {vehicle.year}
            </span>
            <h3 className="font-headline-lg text-label-md font-bold text-on-surface truncate">
              {vehicle.name}
            </h3>
            <span className="font-label-md text-xs text-primary font-bold mt-0.5">
              Rp {activeDailyPrice.toLocaleString("id-ID")}{" "}
              <span className="text-secondary font-normal">/hari</span> (
              {isWithDriver ? "Dengan Driver" : "Lepas Kunci"})
            </span>
          </div>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="p-space-md flex flex-col gap-space-md">
          {/* Summary Box */}
          <div className="p-space-sm rounded-xl bg-surface-container-low border border-surface-container-high/60 flex items-center justify-between text-xs font-label-md">
            <div>
              <span className="text-secondary block">Durasi Sewa:</span>
              <strong className="text-on-surface">18 - 21 Mar 2026 (3 Hari)</strong>
            </div>
            <div className="text-right">
              <span className="text-secondary block">Estimasi Total:</span>
              <strong className="text-primary font-bold text-sm">
                Rp {totalCalculated.toLocaleString("id-ID")}
              </strong>
            </div>
          </div>

          {/* Name & Phone */}
          <div className="flex flex-col gap-space-xs">
            <label className="font-label-md text-xs font-semibold text-on-surface">
              Nama Lengkap Penyewa <span className="text-error">*</span>
            </label>
            <input
              type="text"
              required
              value={customerName || ""}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="Contoh: Budi Pratama"
              className="w-full px-space-md py-space-xs rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-xs border border-surface-container-high focus:outline-none focus:border-primary-container"
            />
          </div>

          <div className="flex flex-col gap-space-xs">
            <label className="font-label-md text-xs font-semibold text-on-surface">
              Nomor WhatsApp Aktif <span className="text-error">*</span>
            </label>
            <input
              type="tel"
              required
              value={customerPhone || ""}
              onChange={(e) => setCustomerPhone(e.target.value)}
              placeholder="Contoh: 081234567890"
              className="w-full px-space-md py-space-xs rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-xs border border-surface-container-high focus:outline-none focus:border-primary-container"
            />
          </div>

          <div className="flex flex-col gap-space-xs">
            <label className="font-label-md text-xs font-semibold text-on-surface">
              Titik Pengantaran Kunci (Opsional)
            </label>
            <input
              type="text"
              value={deliveryNote || ""}
              onChange={(e) => setDeliveryNote(e.target.value)}
              placeholder="Contoh: Gate Kedatangan Domestik Bandara DPS / Villa Seminyak"
              className="w-full px-space-md py-space-xs rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-xs border border-surface-container-high focus:outline-none focus:border-primary-container"
            />
          </div>

          {/* Submit Action */}
          <button
            type="submit"
            disabled={isSubmitted}
            className="w-full py-space-sm rounded-xl bg-primary-container hover:bg-surface-tint text-on-primary font-label-md text-label-md font-bold shadow-md transition-all flex items-center justify-center gap-space-xs cursor-pointer disabled:opacity-50 mt-space-xs"
          >
            {isSubmitted ? (
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] animate-spin">
                  progress_activity
                </span>
                Menghubungkan ke Tim Rental...
              </span>
            ) : (
              <>
                <span className="material-symbols-outlined text-[18px]">
                  check_circle
                </span>
                <span>
                  Konfirmasi &amp; Chat via WhatsApp (Rp{" "}
                  {totalCalculated.toLocaleString("id-ID")})
                </span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
