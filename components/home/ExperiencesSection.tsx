"use client";

import React, { useState } from "react";
import { activities, activityFilterTabs } from "@/data/activities";

export default function ExperiencesSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredActivities =
    selectedCategory === "all"
      ? activities
      : activities.filter((act) => act.category === selectedCategory);

  return (
    <section id="activities" className="w-full flex flex-col gap-6 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
        <div>
          <span className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-wider">
            Aktivitas Terkurasi
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary font-bold mt-1">
            Petualangan &amp; Tur Lokal Terpopuler
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">
            Instruktur bersertifikasi, asuransi aktivitas disertakan, dan jaminan harga terbaik tanpa calo.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {activityFilterTabs.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3 py-1.5 rounded-lg font-title-sm text-title-sm transition-colors cursor-pointer ${
                  isActive
                    ? "text-on-primary font-semibold bg-secondary"
                    : "bg-surface-container-low hover:bg-surface-container text-on-surface"
                }`}
                type="button"
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 4 Experience Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredActivities.map((act) => (
          <div
            key={act.id}
            className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="relative w-full h-48 bg-surface-container overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={act.imageUrl}
                  alt={act.imageAlt}
                />
                <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded bg-primary-container text-on-primary font-label-caps text-label-caps font-bold">
                  {act.durationBadge}
                </span>
              </div>

              <div className="p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant">
                  <span>{act.location}</span>
                  <span className="inline-flex items-center gap-1 font-bold text-on-surface">
                    <span
                      className="material-symbols-outlined text-[15px] text-amber-500"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>{" "}
                    {act.rating} ({act.reviewCount})
                  </span>
                </div>
                <h3 className="font-title-md text-title-md font-bold text-on-surface line-clamp-2">
                  {act.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {act.description}
                </p>
              </div>
            </div>

            <div className="p-4 pt-2 border-t border-surface-container-highest flex items-center justify-between">
              <div>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Harga/org
                </span>
                <div className="font-title-md text-title-md font-bold text-secondary">
                  {act.formattedPrice}
                </div>
              </div>
              <button
                className="px-3.5 py-1.5 rounded-xl bg-secondary hover:bg-primary text-on-primary font-title-sm text-title-sm font-semibold transition-colors cursor-pointer"
                type="button"
              >
                Sewa
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
