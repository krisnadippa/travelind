import React from "react";

const POLICIES = [
  {
    icon: "schedule",
    title: "Waktu Check-in & Check-out",
    description:
      "Check-in resmi dibuka pukul 14:00 WITA dan check-out maksimal pukul 12:00 WITA. Layanan penitipan bagasi gratis tersedia melalui Butler.",
  },
  {
    icon: "event_available",
    title: "Kebijakan Pembatalan Fleksibel",
    description:
      "Pembatalan gratis hingga 7 hari sebelum kedatangan dengan pengembalian dana 100%. Reschedule tanggal menginap diperbolehkan 1x.",
  },
  {
    icon: "volume_off",
    title: "Jam Ketenangan Lingkungan",
    description:
      "Ketenangan lingkungan diatur mulai pukul 22:00 WITA guna menghormati kenyamanan sesama tamu di area residensial Seminyak.",
  },
  {
    icon: "sanitizer",
    title: "Jaminan Higienitas & Sanitasi",
    description:
      "Disinfeksi menyeluruh, penggantian linen baru bintang lima, dan pembersihan filter sirkulasi kolam renang sebelum Anda tiba.",
  },
];

export default function BookingPoliciesCard() {
  return (
    <section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-surface-container-high/60 flex flex-col gap-space-md">
      {/* Header */}
      <div className="flex items-center gap-space-sm pb-space-sm bg-surface-container-low -mx-space-lg -mt-space-lg p-space-lg rounded-t-xl">
        <span className="w-9 h-9 rounded-lg bg-secondary-container text-primary-container flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-[20px]">policy</span>
        </span>
        <div>
          <h2 className="font-headline-lg text-body-md text-on-surface font-bold">
            Kebijakan Menginap &amp; Garansi Kenyamanan
          </h2>
          <p className="font-label-md text-xs text-secondary">
            Ketentuan operasional properti dan jaminan mutu higienitas Travelind.
          </p>
        </div>
      </div>

      {/* Policies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
        {POLICIES.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-space-sm p-space-md rounded-lg bg-surface-container-low border border-surface-container-high/40 hover:border-primary/20 transition-colors"
          >
            <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">
              {item.icon}
            </span>
            <div>
              <span className="font-label-md text-label-md text-on-surface font-bold block">
                {item.title}
              </span>
              <p className="font-body-md text-on-surface-variant text-xs mt-space-xs leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
