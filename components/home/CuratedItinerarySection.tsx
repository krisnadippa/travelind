import React from "react";
import { curatedDestinations } from "@/data/curated";

export default function CuratedItinerarySection() {
  return (
    <section className="w-full rounded-[2rem] p-8 sm:p-12 text-on-primary bg-primary-container">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Content */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container text-on-primary font-label-caps text-label-caps uppercase font-bold w-fit">
            <span className="material-symbols-outlined text-[14px]">
              auto_awesome
            </span>
            <span>Kurasi Itinerary Cerdas</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-primary font-bold leading-tight">
            Rencana Liburan Lebih Mudah &amp; Fleksibel Bersama Travelind.
          </h2>
          <p className="font-body-md text-body-md text-on-primary-container leading-relaxed">
            Tidak perlu pusing membandingkan ratusan tab. Tim kurasi Travelind mengintegrasikan villa privat berstandar tinggi, unit kendaraan terverifikasi, serta pemandu tur resmi dalam satu kemudahan reservasi.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-4">
            <button
              className="px-5 py-3 rounded-xl hover:bg-primary text-on-primary font-title-sm text-title-sm font-bold transition-colors bg-secondary cursor-pointer"
              type="button"
            >
              Mulai Konsultasi Rencana
            </button>
            <a
              className="px-5 py-3 rounded-xl bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-on-primary font-title-sm text-title-sm font-semibold transition-colors inline-flex items-center gap-2"
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>WhatsApp Concierge</span>
            </a>
          </div>
        </div>

        {/* Right Curation Grid (Solid Dark Navy Tiles) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {curatedDestinations.map((dest) => (
            <div
              key={dest.id}
              className="bg-surface-container-lowest/10 rounded-2xl p-5 hover:bg-surface-container-lowest/15 transition-colors flex flex-col justify-between h-44"
            >
              <div>
                <span className="font-label-caps text-label-caps uppercase text-secondary-fixed font-bold">
                  {dest.tag}
                </span>
                <h3 className="font-title-md text-title-md font-bold text-on-primary mt-1">
                  {dest.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-primary-container mt-1">
                  {dest.description}
                </p>
              </div>
              <div className="flex items-center justify-between text-body-sm font-body-sm">
                <span className="text-secondary-fixed">Lihat Kurasi</span>
                <span className="material-symbols-outlined text-[18px] text-secondary-fixed">
                  arrow_forward
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
