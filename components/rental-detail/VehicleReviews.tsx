import React from "react";
import { VehicleReview } from "@/data/rentalVehicleDetails";

interface VehicleReviewsProps {
  rating: number;
  reviewCount: number;
  reviews: VehicleReview[];
}

export default function VehicleReviews({
  rating,
  reviewCount,
  reviews,
}: VehicleReviewsProps) {
  return (
    <section className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-lg border border-surface-container-high/60">
      {/* Header & Overall Score */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md pb-space-sm border-b border-surface-container-high/60">
        <div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[28px]">
              reviews
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold text-xl">
              Ulasan Wisatawan Terverifikasi
            </h2>
          </div>
          <p className="font-body-md text-label-md text-on-surface-variant text-xs mt-1">
            Berdasarkan {reviewCount} pelanggan yang telah menyelesaikan perjalanan di Bali
          </p>
        </div>

        {/* Score Badge */}
        <div className="flex items-center gap-space-sm bg-surface-container-low px-space-md py-space-xs rounded-xl border border-surface-container-high/40">
          <div className="text-right">
            <div className="font-headline-lg text-headline-lg font-bold text-primary leading-none text-2xl">
              {rating}
            </div>
            <div className="font-label-md text-label-md text-secondary text-xs">
              Luar Biasa
            </div>
          </div>
          <div className="flex flex-col text-primary text-sm">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="material-symbols-outlined text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              ))}
            </div>
            <span className="text-[11px] text-on-surface-variant font-medium">
              100% Puas
            </span>
          </div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="flex flex-col gap-space-md">
        {reviews.map((rev) => (
          <div
            key={rev.id}
            className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs border border-surface-container-high/40"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-space-sm">
                <div
                  className={`w-10 h-10 rounded-full font-bold flex items-center justify-center font-label-md text-sm ${rev.avatarBg}`}
                >
                  {rev.initials}
                </div>
                <div>
                  <h4 className="font-label-md text-on-surface font-semibold text-sm">
                    {rev.author}
                  </h4>
                  <span className="font-body-md text-label-md text-on-surface-variant text-xs">
                    {rev.location}
                  </span>
                </div>
              </div>

              <div className="flex items-center text-primary text-xs">
                {[...Array(rev.rating)].map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-[16px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-space-xs mt-1">
              <span className="px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed text-[11px] font-medium">
                {rev.tripInfo}
              </span>
              <span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed text-[11px] font-medium">
                {rev.rentalType}
              </span>
              <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant text-[11px]">
                {rev.pickupInfo}
              </span>
            </div>

            <p className="font-body-md text-label-md text-on-surface mt-1 leading-relaxed text-xs sm:text-sm">
              {rev.comment}
            </p>

            <span className="font-label-md text-outline text-xs mt-1">
              {rev.date}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
