import React from "react";
import { VillaDetailData } from "@/data/villaDetails";

interface VillaGuestReviewsProps {
  reviewsBreakdown: VillaDetailData["reviewsBreakdown"];
}

export default function VillaGuestReviews({
  reviewsBreakdown,
}: VillaGuestReviewsProps) {
  return (
    <section className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md mb-space-lg">
        <div className="flex items-center gap-space-xs">
          <span className="w-1 h-6 bg-primary rounded-full" />
          <h2 className="font-headline-lg text-[22px] font-bold text-on-surface">
            Ulasan Tamu Terverifikasi
          </h2>
        </div>
        <div className="flex items-center gap-space-xs px-space-md py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-md text-sm font-bold text-primary">
          <span className="material-symbols-outlined text-[18px]">star</span>
          <span>
            {reviewsBreakdown.overall} dari 5.0 ({reviewsBreakdown.totalReviews} ulasan)
          </span>
        </div>
      </div>

      {/* Rating Breakdown Progress */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-md mb-space-lg p-space-md rounded-lg bg-surface-container-low">
        {reviewsBreakdown.categories.map((cat, idx) => (
          <div key={idx}>
            <div className="flex justify-between font-label-md text-[13px] text-on-surface mb-1">
              <span>{cat.label}</span>
              <span className="font-bold">{cat.score.toFixed(2)}</span>
            </div>
            <div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
              <div
                className="bg-primary h-full"
                style={{ width: `${cat.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* In-depth Guest Reviews */}
      <div className="flex flex-col gap-space-lg">
        {reviewsBreakdown.reviews.map((rev) => (
          <div
            key={rev.id}
            className="flex flex-col gap-space-xs pb-space-md bg-surface-container-low/50 p-space-md rounded-xl"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-space-sm">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-label-md text-sm font-bold ${rev.avatarBg}`}
                >
                  {rev.initials}
                </div>
                <div>
                  <h4 className="font-label-md text-sm font-semibold text-on-surface">
                    {rev.author}
                  </h4>
                  <span className="font-body-md text-[12px] text-on-surface-variant">
                    {rev.origin} • {rev.duration} • {rev.date}
                  </span>
                </div>
              </div>
              <div className="flex text-amber-500">
                {[...Array(rev.rating)].map((_, starIdx) => (
                  <span
                    key={starIdx}
                    className="material-symbols-outlined text-[18px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>
            </div>
            <p className="font-body-md text-sm text-on-surface-variant mt-space-xs leading-relaxed">
              {rev.comment}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
