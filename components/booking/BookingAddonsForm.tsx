"use client";

import React from "react";

export interface AddonItem {
  id: string;
  name: string;
  badge?: string;
  badgeType?: "primary" | "promo";
  description: string;
  price: number;
  priceFormatted: string;
  priceUnit: string;
  originalPrice?: string;
  isFree?: boolean;
  disabled?: boolean;
}

interface BookingAddonsFormProps {
  selectedAddons: string[];
  onToggleAddon: (id: string) => void;
  specialRequests: string;
  onChangeSpecialRequests: (value: string) => void;
}

export const AVAILABLE_ADDONS: AddonItem[] = [
  {
    id: "floating_breakfast",
    name: "Floating Breakfast di Kolam Renang Privat",
    badge: "Favorit",
    badgeType: "primary",
    description:
      "Sajian nampan apung rotan mewah dengan jus segar, pastry, avocado toast, dan pilihan kopi Bali untuk 2 tamu.",
    price: 250000,
    priceFormatted: "+ Rp 250.000",
    priceUnit: "per hari",
  },
  {
    id: "private_chef_bbq",
    name: "Private Chef BBQ Seafood Dinner di Gazebo",
    description:
      "Koki pribadi memasak langsung tangkapan laut Jimbaran: lobster, udang windu, ikan kakap, & sambal matah otentik.",
    price: 450000,
    priceFormatted: "+ Rp 450.000",
    priceUnit: "per porsi / tamu",
  },
  {
    id: "airport_transfer",
    name: "Antar-Jemput VIP Bandara Ngurah Rai (DPS)",
    badge: "BONUS STAY 3+ MALAM",
    badgeType: "promo",
    description:
      "Kendaraan Toyota Innova Zenix ber-AC + supir ramah menyambut di gate kedatangan domestik / internasional.",
    price: 0,
    priceFormatted: "GRATIS",
    originalPrice: "Rp 350.000",
    priceUnit: "Promo 3M",
    isFree: true,
    disabled: true,
  },
  {
    id: "extra_bed",
    name: "Extra Bed Mewah King Koil + Bantal Goose Feather",
    description:
      "Termasuk set sprei linen premium dan handuk mandi cadangan untuk tamu tambahan.",
    price: 300000,
    priceFormatted: "+ Rp 300.000",
    priceUnit: "per malam",
  },
];

export default function BookingAddonsForm({
  selectedAddons,
  onToggleAddon,
  specialRequests,
  onChangeSpecialRequests,
}: BookingAddonsFormProps) {
  return (
    <section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-surface-container-high/60 flex flex-col gap-space-lg">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-space-sm bg-surface-container-low -mx-space-lg -mt-space-lg p-space-lg rounded-t-xl gap-2">
        <div className="flex items-center gap-space-sm">
          <span className="w-9 h-9 rounded-lg bg-secondary-container text-primary-container flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[20px]">
              room_service
            </span>
          </span>
          <div>
            <h2 className="font-headline-lg text-body-md text-on-surface font-bold">
              Kamar, Waktu Kedatangan &amp; Pengalaman
            </h2>
            <p className="font-label-md text-xs text-secondary">
              Kustomisasi fasilitas liburan Bali Anda sebelum check-in.
            </p>
          </div>
        </div>
        <span className="self-start sm:self-center px-space-sm py-space-xs rounded bg-surface-container text-secondary font-label-md text-xs font-bold shrink-0">
          3 Kamar Tidur • King Bed
        </span>
      </div>

      {/* Add-on Experiences Selection */}
      <div className="flex flex-col gap-space-sm">
        <div className="flex items-center justify-between">
          <h3 className="font-label-md text-label-md text-on-surface font-bold">
            Layanan Tambahan Khas Villa Bali (Add-ons)
          </h3>
          <span className="font-label-md text-secondary text-xs">
            Pilihan opsional yang dapat dibatalkan
          </span>
        </div>

        <div className="flex flex-col gap-space-xs">
          {AVAILABLE_ADDONS.map((addon) => {
            const isSelected = selectedAddons.includes(addon.id) || Boolean(addon.disabled);
            const isDisabled = Boolean(addon.disabled);
            return (
              <label
                key={addon.id}
                className={`flex items-start gap-space-md p-space-md rounded-lg transition-all border ${
                  isDisabled
                    ? "bg-secondary-fixed/30 border-primary-container/20 cursor-default"
                    : isSelected
                    ? "bg-primary-fixed/20 border-primary-container shadow-xs cursor-pointer"
                    : "bg-surface-container-lowest hover:bg-surface-container-low border-surface-container-high/60 cursor-pointer shadow-xs"
                }`}
              >
                <input
                  type="checkbox"
                  checked={isSelected}
                  disabled={isDisabled}
                  onChange={() => {
                    if (!isDisabled) {
                      onToggleAddon(addon.id);
                    }
                  }}
                  className="mt-1 w-5 h-5 text-primary-container accent-primary-container rounded shrink-0 cursor-pointer disabled:cursor-not-allowed"
                />
                <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-space-xs">
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-on-surface font-bold flex flex-wrap items-center gap-space-xs">
                      {addon.name}
                      {addon.badge && (
                        <span
                          className={`px-space-xs py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                            addon.badgeType === "promo"
                              ? "bg-tertiary-fixed text-on-tertiary-fixed"
                              : "bg-primary-fixed text-on-primary-fixed"
                          }`}
                        >
                          {addon.badge}
                        </span>
                      )}
                    </span>
                    <span className="font-body-md text-on-surface-variant text-xs mt-0.5 leading-relaxed">
                      {addon.description}
                    </span>
                  </div>

                  <div className="text-left md:text-right shrink-0 mt-1 md:mt-0">
                    <span
                      className={`font-label-md text-label-md font-bold ${
                        addon.isFree
                          ? "text-primary"
                          : isSelected
                          ? "text-primary-container"
                          : "text-on-surface"
                      }`}
                    >
                      {addon.priceFormatted}
                    </span>
                    {addon.originalPrice && (
                      <span className="line-through text-outline text-[11px] block">
                        {addon.originalPrice}
                      </span>
                    )}
                    <span className="block text-secondary text-[11px]">
                      {addon.priceUnit}
                    </span>
                  </div>
                </div>
              </label>
            );
          })}
        </div>
      </div>

      {/* Special Request Field */}
      <div className="flex flex-col gap-space-xs pt-space-xs border-t border-surface-container-high/60">
        <label className="font-label-md text-label-md text-on-surface font-semibold flex items-center justify-between">
          <span>Catatan atau Permintaan Khusus ke Butler (Opsional)</span>
          <span className="text-secondary text-xs">Tergantung ketersediaan villa</span>
        </label>
        <textarea
          value={specialRequests || ""}
          onChange={(e) => onChangeSpecialRequests(e.target.value)}
          className="w-full p-space-md rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-label-md border border-surface-container-high/80 focus:border-primary-container focus:bg-surface-bright focus:outline-none shadow-xs transition-all"
          placeholder="Contoh: Tolong siapkan honeymoon flower petals di kasur utama, bebas kacang untuk salah satu menu sarapan, atau request baby cot..."
          rows={3}
        />
      </div>
    </section>
  );
}
