import React from "react";
import { promoCards } from "@/data/promos";

export default function PromoSection() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {promoCards.map((promo) => {
          let bgClass = "bg-secondary-fixed/30";
          let badgeClass = "bg-secondary-fixed text-on-secondary-fixed";
          let linkClass = "text-secondary";

          if (promo.cardStyle === "surface-high") {
            bgClass = "bg-surface-container-high";
            badgeClass = "bg-surface-container-highest text-primary-container";
            linkClass = "text-primary-container";
          } else if (promo.cardStyle === "surface-low") {
            bgClass = "bg-surface-container-low";
            badgeClass = "bg-surface-container text-on-surface";
            linkClass = "text-secondary";
          }

          return (
            <div
              key={promo.id}
              className={`${bgClass} rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow`}
            >
              <div>
                <div
                  className={`inline-block px-3 py-1 rounded-full ${badgeClass} font-label-caps text-label-caps uppercase font-bold mb-3`}
                >
                  {promo.badge}
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold leading-snug">
                  {promo.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                  {promo.description}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between pt-4">
                <a
                  className={`inline-flex items-center gap-1 font-title-sm text-title-sm ${linkClass} font-bold hover:underline`}
                  href={promo.linkUrl}
                >
                  <span>{promo.linkText}</span>
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </a>
                <div className="w-16 h-16 rounded-xl overflow-hidden shadow-sm shrink-0">
                  <img
                    className="w-full h-full object-cover"
                    src={promo.imageUrl}
                    alt={promo.imageAlt}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
