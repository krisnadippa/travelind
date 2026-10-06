import React from "react";

interface VillaDescriptionProps {
  title: string;
  paragraphs: string[];
}

export default function VillaDescription({
  title,
  paragraphs,
}: VillaDescriptionProps) {
  return (
    <section className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
      <div className="flex items-center gap-space-xs mb-space-md">
        <span className="w-1 h-6 bg-primary rounded-full" />
        <h2 className="font-headline-lg text-[22px] font-bold text-on-surface">
          Tentang {title}
        </h2>
      </div>
      <div className="font-body-md text-body-md text-on-surface-variant flex flex-col gap-space-md leading-relaxed text-sm sm:text-base">
        {paragraphs.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </div>
    </section>
  );
}
