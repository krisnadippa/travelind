import React from "react";

export default function HeroBanner() {
  return (
    <div className="relative w-full h-[280px] sm:h-[340px] md:h-[380px] rounded-[2rem] overflow-hidden shadow-md flex flex-col items-center justify-start pt-10 sm:pt-14 px-4 text-center bg-surface-container">
      <img
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgGNC6xgxrShUekhWp5WErq1vU2-Qs7apKKb1vmtDvGGhoITiS7rseDuBBXXuI4G98iZCZJWDc_TkCCsQE5ubho_RuC7wLiaWSxnNE2jCYRP1ZjfU-Xd8zVvhAin2Uq5pUt4BsWlNZ6AYzX6PYKhmJn8jsf-7tmyZ9gPCG3tq1eKNTI0IQYzHXJUEeSJNTA8asl2aE50z-DBSUwnqk3_0Wtx-5ezOWQGMnDhvzBLKrmZTZB53si0X6wA"
        alt="Bali Panoramic Ocean and Island"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/30 to-primary/20 pointer-events-none" />

      {/* Agoda-style Centered Bold White Headline */}
      <div className="relative z-10 flex flex-col items-center gap-2 max-w-2xl">
        <h1 className="font-headline-lg text-[28px] sm:text-[36px] md:text-[40px] font-bold text-white tracking-wide uppercase drop-shadow-md">
          LIHAT DUNIA LEBIH MURAH
        </h1>
        <p className="font-body-md text-white/90 text-sm sm:text-base drop-shadow hidden sm:block">
          Reservasi villa privat, rental armada, &amp; tur autentik terbaik di Bali dengan jaminan harga transparan.
        </p>
      </div>
    </div>
  );
}
