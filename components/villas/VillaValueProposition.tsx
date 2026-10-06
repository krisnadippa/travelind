import React from "react";

const valueFeatures = [
  {
    icon: "verified_user",
    title: "100% Inspeksi Fisik Nyata",
    description:
      "Setiap unit diuji langsung oleh tim Travelind. Kebersihan air kolam renang, kasur hotel grade, dan foto 1:1 akurat bergaransi.",
  },
  {
    icon: "price_check",
    title: "Bebas Biaya Tersembunyi",
    description:
      "Harga final yang Anda lihat sudah mencakup PPN 11%, service charge hotel, kebersihan harian, dan layanan butler.",
  },
  {
    icon: "support_agent",
    title: "Butler Siaga 24 Jam",
    description:
      "Dukungan concierge instan via WhatsApp untuk reservasi beach club, sewa kendaraan, pesan chef private, atau kebutuhan darurat.",
  },
  {
    icon: "security",
    title: "Garansi Pembatalan Fleksibel",
    description:
      "Rencana mendadak berubah? Nikmati opsi reschedule mudah atau pengembalian dana penuh hingga H-3 sebelum jadwal check-in.",
  },
];

export default function VillaValueProposition() {
  return (
    <section className="w-full bg-surface-container-lowest py-space-xl">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="text-center max-w-2xl mx-auto mb-space-xl">
          <span className="font-label-md text-xs font-bold uppercase tracking-wider text-primary-container">
            Standar Kualitas Travelind
          </span>
          <h3 className="font-headline-lg text-2xl md:text-3xl font-bold text-on-surface mt-1">
            Kenapa Memilih Booking Villa di Travelind?
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2 text-sm md:text-base">
            Kami memberikan kepastian liburan tanpa kompromi melalui proses kurasi fisik langsung dan layanan butler terlatih.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
          {valueFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="bg-surface-container-low rounded-xl p-space-lg space-y-space-xs hover:shadow-md transition-all"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-space-sm"
                style={{
                  backgroundColor: "rgb(235, 243, 254)",
                  color: "rgb(2, 100, 246)",
                }}
              >
                <span className="material-symbols-outlined text-2xl">
                  {feature.icon}
                </span>
              </div>
              <h4 className="font-label-md text-base font-bold text-on-surface">
                {feature.title}
              </h4>
              <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
