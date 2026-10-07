export interface VehicleDetailPhoto {
  url: string;
  alt: string;
  caption: string;
  badge?: string;
}

export interface VehicleDetailFeature {
  icon: string;
  title: string;
  description: string;
}

export interface VehicleTechSpec {
  label: string;
  value: string;
}

export interface VehicleFacility {
  icon: string;
  title: string;
  description: string;
}

export interface VehicleRequirement {
  step: number;
  title: string;
  description: string;
}

export interface VehicleReview {
  id: string;
  initials: string;
  author: string;
  location: string;
  tripInfo: string;
  rentalType: string;
  pickupInfo: string;
  comment: string;
  date: string;
  rating: number;
  avatarBg: string;
}

export interface VehicleDetailData {
  id: string;
  name: string;
  brand: string;
  category: string;
  editionBadge: string;
  rating: number;
  reviewCount: number;
  transmission: string;
  seats: string;
  fuelEfficiency: string;
  deliveryPerk: string;
  originalPrice: number;
  basePricePerDay: number;
  discountPerDay: number;
  defaultDays: number;
  defaultDates: {
    pickup: string;
    return: string;
    pickupLocation: string;
    returnLocation: string;
  };
  photos: {
    hero: VehicleDetailPhoto;
    thumbnails: VehicleDetailPhoto[];
  };
  features: VehicleDetailFeature[];
  specs: VehicleTechSpec[];
  facilities: VehicleFacility[];
  requirements: VehicleRequirement[];
  locations: {
    freeAreas: string[];
    paidAreas: { name: string; extraPrice: number; description: string }[];
    mapImageUrl: string;
  };
  reviews: VehicleReview[];
  addons: {
    id: string;
    name: string;
    description: string;
    pricePerDay: number;
    priceFormatted: string;
  }[];
}

export const innovaZenixDetail: VehicleDetailData = {
  id: "toyota-innova-zenix-hybrid-2024",
  name: "Toyota Kijang Innova Zenix 2.0 Q HV Modelista 2024",
  brand: "Toyota",
  category: "MPV Premium Keluarga",
  editionBadge: "Modelista Edition 2024",
  rating: 4.95,
  reviewCount: 184,
  transmission: "Matic E-CVT 10-Speed",
  seats: "7 Kursi Captain Seat",
  fuelEfficiency: "Hybrid Super Irit (1:21 km/L)",
  deliveryPerk: "Free Delivery DPS & Seminyak",
  originalPrice: 950000,
  basePricePerDay: 850000,
  discountPerDay: 100000,
  defaultDays: 3,
  defaultDates: {
    pickup: "18 Mar 2026, 09:00 WITA",
    return: "21 Mar 2026, 18:00 WITA",
    pickupLocation: "Bandara DPS",
    returnLocation: "Bandara DPS",
  },
  photos: {
    hero: {
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5A3oabsszu4uxmhaTNhUyudFwHtzjQzAyVvCtabUKJ-m_LG1JEXYwHZBmi9qPNNO9ys1ukUWWtom2CPS2ykaaVtyy3Nz62ZU0MN_Cb5PPgVNrXZkJ7O72yQjum1IbjrGgpdGzSxf5MbsMe6RvNqaHjU9a1cjW_gWWE-6t3MPiGXKITAZ1JDTEp-ZvXSccXHWymxLlNoEKiB9loVfrMlLcsCAj4uMY63fd1rXgJ7FWj_gcQbVFJU_RgA",
      alt: "Toyota Kijang Innova Zenix 2024 Eksterior Bali",
      caption: "Tampilan Luar Modelista Bodykit 2024",
      badge: "Armada Baru Odometer Rendah (<15.000 KM)",
    },
    thumbnails: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCPlagq81-RwAi0nQ7RFJ5CgrrHNrlRHLOV6n8cIcgW7BcC__w-QIwU-kAKj-YKmYOcIswAu0sohXiLxnNn1cxPAFzq4e4begHDHgscAmTdKVI-yio2_hL1c4EezIwtEwnaKFYoBCK_e5ElUm0sUm9ra-fJTudOWW15FGIqGyXRMFb29_LSQgO_EzpIq2_VXti4J5hOzkYu2KI4N0VD9qjnGr4KV9dkJZHz-RJgz2hmvZUXdNHVVqO9Q",
        alt: "Interior Captain Seat Luxury",
        caption: "Captain Seat Ottoman + Dual Rear Screen",
      },
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7HXrIYv10jJesTRnM5ZypCX0F3GodFjfYyxFNWmGzt2qUBba-Uc56yt7v-uZFL1ScyQWYKYDoIZOrlfQaQmDiPMSziwd6n56mC-trmk0XBp0T3JZUnNxkY1WFPx9dvWE5UHL8Ohz7W5bl3RjNF7o2jzsOb3LpEgKOl_JzkhQuppjcsIBGuhvtOYS0LFN0RD53cakKZB7VAj-C3jaXDK3KIafLXKFUqhnzIIViQQkRLXeRaZT-3UTQAA",
        alt: "Dashboard Digital dan Panoramic Sunroof",
        caption: "Panoramic Sunroof & Digital Cockpit",
      },
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXt4VteWZntuBgyKE5aSRIEHfRhvuZVr8dX636fw71Q_83qVaZB5RgvRSC6nrSAek5YFlldIYl0eLvZeNapidTd0Wy1ha14ylp2hDwdOLpcT3TmqxddgOvTFn2nGYkSiRQRbbepl5TpWS77erigOV7YNcf1JlWTiXIOmdJQ3jBU_q-j2MGjS7d0JLFiSVdQ3yGGJDStRsGm4FxUiHEaS0sr4KIs3aLaTUd4q0LM-5Vs_iSF2DEQXFOig",
        alt: "Bagasi Luas 4 Koper Besar",
        caption: "Bagasi Luas Muat 4 Koper Besar",
      },
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOeX-1aQL39TqYiR_pMS5vEjNAfzpjy6f6CArzVL9v5BLi97d6KPCKUYg4X2pXhkb2pSgfv8wmGOuFSPgAeOifx10D_4KV8aGhem_IYDsAGFH6KYjPGQ-zA0XoMNEN3Jc2PxMWpF2u1f8jhpdlWMfmG494Uw5M4tB1JQV250YmEaRC8Q05PftdWQ2E4ddmpxb6d0vo7Lg721iptsw-bbkq0NHtH6hRfvIZpBgvVNbShDnjfiKq4Oucfw",
        alt: "Serah Terima Bandara DPS",
        caption: "Serah Terima Zona Kedatangan DPS",
        badge: "+18 Foto",
      },
    ],
  },
  features: [
    {
      icon: "local_gas_station",
      title: "Bensin Hybrid Super Irit",
      description:
        "Efisiensi konsumsi BBM mencapai 21 km/Liter. Jelajahi Kuta hingga Kintamani dan Bedugul tanpa was-was boros bensin.",
    },
    {
      icon: "chair",
      title: "Kenyamanan Captain Seat Ottoman",
      description:
        "Kursi baris kedua independen dengan sandaran kaki elektrik. AC Double Blower hembusan merata hingga baris ketiga.",
    },
    {
      icon: "security",
      title: "Toyota Safety Sense (TSS 3.0)",
      description:
        "Dilengkapi Pre-Collision System, Lane Tracing Assist, Dynamic Radar Cruise Control, dan kamera panorama 360 view.",
    },
    {
      icon: "clean_hands",
      title: "Unit Baru 2024 & Steril Higienis",
      description:
        "Kondisi kabin bebas aroma rokok, interior selalu disterilisasi sebelum diserahkan, wangi segar aroma aromaterapi Bali.",
    },
  ],
  specs: [
    {
      label: "Tipe Mesin",
      value: "2.0L M20A-FXS DOHC Dual VVT-i + EV Mode",
    },
    {
      label: "Transmisi",
      value: "10-Speed Direct Shift e-CVT Matic",
    },
    {
      label: "Kapasitas Penumpang",
      value: "7 Orang (Konfigurasi 2-2-3)",
    },
    {
      label: "Kapasitas Bagasi",
      value: "4 Koper Ukuran Large (28\") + 2 Cabin Bag",
    },
    {
      label: "Bahan Bakar",
      value: "Bensin (Pertamax RON 92 / RON 98)",
    },
    {
      label: "Tenaga Maksimum",
      value: "186 PS (Kombinasi Mesin + Motor Listrik)",
    },
    {
      label: "Fitur Hiburan",
      value: "Apple CarPlay & Android Auto Nirkabel",
    },
    {
      label: "Kenyamanan Atap",
      value: "Power Panoramic Sunroof dengan LED Light",
    },
  ],
  facilities: [
    {
      icon: "flight_takeoff",
      title: "Antar-Jemput Bandara DPS 24 Jam",
      description:
        "Petugas standby langsung di terminal kedatangan Domestik / Internasional tanpa biaya tambahan.",
    },
    {
      icon: "health_and_safety",
      title: "Asuransi All-Risk Comprehensive",
      description:
        "Proteksi kerusakan bodi dan benturan, berkendara tenang di jalanan Bali yang sempit.",
    },
    {
      icon: "support_agent",
      title: "Bantuan Darurat 24 Jam (ERA Bali)",
      description:
        "Tim mekanik dan towing cepat tanggap melayani seluruh area pulau Bali (Denpasar s/d Singaraja).",
    },
    {
      icon: "battery_charging_full",
      title: "Gadget Kit & Holder Mobil",
      description:
        "Holder smartphone navigasi Google Maps + Kabel Fast Charge Type-C & Lightning multi-device.",
    },
    {
      icon: "local_drink",
      title: "Complimentary Welcome Drink",
      description:
        "Air mineral dingin higienis untuk seluruh anggota rombongan saat serah-terima kunci.",
    },
    {
      icon: "sanitizer",
      title: "Sanitary & Bali Fragrance",
      description:
        "Tissue basah antiseptic, hand sanitizer, dan wewangian mobil floral khas pulau Dewata.",
    },
  ],
  requirements: [
    {
      step: 1,
      title: "Identitas Resmi (KTP / Paspor)",
      description:
        "E-KTP asli bagi WNI atau Paspor yang masih berlaku minimal 6 bulan bagi wisatawan mancanegara.",
    },
    {
      step: 2,
      title: "Surat Izin Mengemudi (SIM A)",
      description:
        "SIM A aktif yang sah di Indonesia. Wisatawan asing dapat menyertakan International Driving Permit (IDP).",
    },
    {
      step: 3,
      title: "Bukti Tiket Pesawat Pulang-Pergi",
      description:
        "E-ticket penerbangan kedatangan dan kepulangan (Bandara DPS) yang terverifikasi.",
    },
    {
      step: 4,
      title: "Voucher Reservasi Villa / Hotel",
      description:
        "Konfirmasi booking penginapan di Bali selama masa periode sewa berlangsung.",
    },
  ],
  locations: {
    freeAreas: [
      "Bandara DPS (Terminal Kedatangan Domestik & Internasional)",
      "Area Kuta - Canggu (Seminyak, Kerobokan, Legian, Sanur, Jimbaran, Nusa Dua)",
    ],
    paidAreas: [
      {
        name: "Ubud & Sekitarnya",
        extraPrice: 100000,
        description:
          "Antar langsung ke lobi resort/villa di kawasan Ubud, Payangan, dan Gianyar.",
      },
      {
        name: "Uluwatu & Pecatu Cliff",
        extraPrice: 120000,
        description:
          "Antar langsung ke area bukit Uluwatu, Bingin, Padang Padang, dan Nyang Nyang.",
      },
    ],
    mapImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCUD1z9klytsrhSiLeP5txRHXOkRN42QkZT6YFSgD3zNxis26FkVEKTz1zYiGm5gKgQY_T_pZFzjCjRF388eb6MQZ9W9pkKsZfyxOKUgoDjZWCvpaffmSarBuABegAHGagFRI6Th9qlrYilyFq9gifk_uTWZmFaRESnhJfGq2CpAJov6EUkp7R_BACAFY7PghwSane0w3vBCJEDZzDERDKcGclWpN-JujkxO1PHxXk69VWFpnkh4dpKbw",
  },
  reviews: [
    {
      id: "rev-1",
      initials: "BP",
      author: "Bambang Prakoso",
      location: "Wisatawan Jakarta • Menginap di Seminyak",
      tripInfo: "Liburan Keluarga 5 Hari",
      rentalType: "Lepas Kunci",
      pickupInfo: "Serah Terima Bandara DPS",
      comment:
        '"Zenix Q Hybrid ini luar biasa nyaman untuk bawa orang tua dan anak-anak keliling Bali! Captain seat baris kedua sangat empuk dan bisa rebahan santai. Bensinnya irit banget, 5 hari bolak-balik Kuta, Ubud, dan Pandawa hanya habis 350 ribu rupiah. Pelayanan Travelind sangat rapi, mobil diantar tepat di lobi terminal kedatangan DPS dalam keadaan kinclong dan wangi."',
      date: "Ditinjau pada 04 Maret 2026",
      rating: 5,
      avatarBg: "bg-primary text-on-primary",
    },
    {
      id: "rev-2",
      initials: "SA",
      author: "Sarah Amanda & Rekan",
      location: "Surabaya • Rombongan 6 Orang",
      tripInfo: "Antar Villa Canggu",
      rentalType: "Lepas Kunci",
      pickupInfo: "Lepas Kunci",
      comment:
        '"Proses verifikasi dokumennya tercepat yang pernah saya alami di Bali, gak ribet sama sekali. Fitur TSS adaptive cruise control sangat membantu pas lewat jalan By Pass Ngurah Rai dan Tol Bali Mandara. Sunroof-nya bikin vibes foto liburan makin estetik. Pasti langganan di Travelind lagi!"',
      date: "Ditinjau pada 26 Februari 2026",
      rating: 5,
      avatarBg: "bg-secondary text-on-secondary",
    },
  ],
  addons: [
    {
      id: "addon-seat",
      name: "Kursi Bayi (Child Car Seat)",
      description: "Standar keselamatan balita ISOFIX",
      pricePerDay: 50000,
      priceFormatted: "+Rp 50k",
    },
    {
      id: "addon-zero",
      name: "Zero Excess Deductible",
      description: "Bebas klaim biaya risiko lecet/baret",
      pricePerDay: 75000,
      priceFormatted: "+Rp 75k",
    },
    {
      id: "addon-driver",
      name: "Opsi Tambahan Sopir Lokal",
      description: "Supir ramah & paham rute Bali",
      pricePerDay: 250000,
      priceFormatted: "+Rp 250k",
    },
  ],
};
