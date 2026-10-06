import React from "react";
import { accommodationCategories } from "@/data/categories";

export default function CategoryGridSection() {
  return (
    <section className="w-full flex flex-col gap-6">
      <div>
        <span className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-wider">
          Koleksi Terpopuler
        </span>
        <h2 className="font-headline-lg text-headline-lg text-primary font-bold mt-1">
          Kategori Akomodasi Paling Diminati
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant mt-1">
          Eksplorasi tipe penginapan sesuai dengan gaya liburan Anda bersama keluarga atau pasangan.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {accommodationCategories.map((category) => (
          <a
            key={category.id}
            className="group relative rounded-2xl overflow-hidden h-72 shadow-sm bg-surface-container block"
            href={category.linkUrl}
          >
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              src={category.imageUrl}
              alt={category.imageAlt}
            />
            <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/30 transition-colors p-5 flex flex-col justify-end text-white">
              <span className="font-label-caps text-label-caps uppercase font-bold text-secondary-fixed">
                {category.count}
              </span>
              <h3 className="font-headline-sm text-headline-sm font-bold text-white mt-1">
                {category.title}
              </h3>
              <p className="font-body-sm text-body-sm text-white/80">
                {category.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
