export interface BedroomSuite {
  id: string;
  name: string;
  typeBadge: string;
  icon: string;
  badgeStyle: "primary" | "secondary" | "tertiary";
  features: string[];
}

export interface CuratedAddon {
  id: string;
  title: string;
  price: number;
  formattedPrice: string;
  unit: string;
  description: string;
}

export interface PointOfInterest {
  icon: string;
  title: string;
  distance: string;
}

export interface GuestReview {
  id: string;
  initials: string;
  author: string;
  origin: string;
  duration: string;
  date: string;
  avatarBg: string;
  rating: number;
  comment: string;
}

export interface VillaDetailData {
  id: string;
  name: string;
  area: string;
  fullLocation: string;
  rating: number;
  reviewCount: number;
  superhostTitle: string;
  badges: Array<{ label: string; icon: string }>;
  photos: {
    hero: {
      url: string;
      caption: string;
      badge: string;
    };
    master: {
      url: string;
      caption: string;
    };
    bathroom: {
      url: string;
      caption: string;
    };
    living: {
      url: string;
      caption: string;
    };
    floatingBreakfast: {
      url: string;
      caption: string;
      extraCount: number;
    };
  };
  highlights: Array<{
    icon: string;
    title: string;
    description: string;
    bgClass: string;
    textClass: string;
  }>;
  aboutParagraphs: string[];
  bedrooms: BedroomSuite[];
  facilityGroups: Array<{
    icon: string;
    title: string;
    items: string[];
  }>;
  addons: CuratedAddon[];
  locationInfo: {
    description: string;
    mapBgUrl: string;
    mapPinLabel: string;
    pointsOfInterest: PointOfInterest[];
  };
  houseRules: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  reviewsBreakdown: {
    overall: number;
    totalReviews: number;
    categories: Array<{ label: string; score: number; percentage: number }>;
    reviews: GuestReview[];
  };
  pricing: {
    basePricePerNight: number;
    formattedBasePrice: string;
    originalPricePerNight: number;
    formattedOriginalPrice: string;
    discountAmount: number;
    formattedDiscount: string;
    defaultNights: number;
    defaultCheckIn: string;
    defaultCheckOut: string;
    defaultGuests: string;
  };
}

export const villaSeminyakOasisDetail: VillaDetailData = {
  id: "villa-seminyak-oasis",
  name: "Villa Seminyak Oasis Tropical",
  area: "Seminyak",
  fullLocation: "Jl. Kayu Aya (Oberoi), Seminyak, Badung, Bali • 5 mnt ke Pantai & Ku De Ta",
  rating: 4.92,
  reviewCount: 312,
  superhostTitle: "Superhost Butler 24 Jam",
  badges: [
    { label: "Pilihan Terverifikasi", icon: "verified" },
    { label: "Villa Mewah Eksklusif", icon: "diamond" },
    { label: "Instant Confirmation", icon: "bolt" },
  ],
  photos: {
    hero: {
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaED1CI5CgKILlnHkRTmTSJqSYBcg3I5lhHchNx7p7v-oT1phB1l56fnA2bA_iOXfCftMwZYkSvCNosz1t5JBhqNloWKi99o9r0VMIfHxGgiga_WQ4yYnDL6UUJCz108H8AZZaptIBTEOmOiPx_gRAhhDDf1WuKddCWJCBjKPyOBfssLCbSbecBVHwqxEWIMPGY6-1i5h6rlFNgVzD7kEh95mVR_rifeFrS2UYAzZlQu0SmIBMhJl8IQ",
      caption: "Kolam Renang Privat 10x4m & Sunken Lounge",
      badge: "Area Utama",
    },
    master: {
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBL1lmQRO7Qbdavxn-tVdG2JWzW5sO4bENQgZpvJCP_NHK7mWgu3zNvljXZoc7XJdb2eFtbOBca0eq01f_mrahtlMC6B_nJLtKTrPP49aKxjdOfcyvFmKFxyrvxt5F_U9tT7Mu8blveOiW3yfn7wVj6RQwvdKOREo18MqL2Kwh3JfPcwxu-Qahb_-F_K5bRXFlzjx0ipAg5IxHjDtvo_hL8LSPocA1qwy0EmAGp1b1ZZk50xUDt01GrsQ",
      caption: "Master Suite King",
    },
    bathroom: {
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1fddYwUYNGmf8n7UfZecJxwYc8A3deZ1opxVSNx2Ww0WwDtiuRymRDU4CktE_5h4aHnsvIQ7q1eK4Sh3sDPDXEtOGzCQPuHqhTr7nle6gBXXURhxJvBmj5B9L9w--QgrcACi_FvmF-yn6qkb9mGBySr7mdwb9cho9C5sJVt1f44Kzgw9ltDJh6hJHqsAczwGeaQmJRoidHSJ1bCwB8GIxiMDnAPaJcOzvVjC83vsYBleFDUq58iclIw",
      caption: "En-Suite Terrazzo Tub",
    },
    living: {
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvqFNhALL8O5SrcH516e08K-5dtrP1CQf0sfSzYkO3KNCWdL7j86hNjH2DsNlw9gW4BtElQUHhr5Y2zxhmbpiMyG49DeIaQG6e86NgbZZBf0JH-Ic7nx7-mFYsKRXJjkMNRMJel6Xg15nk8ZzMeM6siuKEMc8u5P1p_QCcTCZ39U0ZHfbzF1Ne9PeVfYuv6GWGNLLprm3VSxNE7NUzRGZlucjiGDIv88qtSrQj2r98m7MzTt1hJLuS4Q",
      caption: "Open-Air Living Pavilion",
    },
    floatingBreakfast: {
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBq0CRhia_9vW-rK7Er_be26On5ocO11NHZnPYR84-1LClJW61B5s2s36Gypk7CJnyMP-s6et4vJs4o14K6qjNQi4099o-0lprkoY9WD-ynrIwGZNkC8614sTYTrrpA0c7ibOHWhX-7RznNDzYgFe45LH1Y5rLmDmJi6qK4SrseBY6NW3Ywylv_pieTJKNnMcZW58xFxkIaagIg0mKgSWzavu-uNGirhNgPmzUp3qXy4mJzfXBxomn5Q",
      caption: "Floating Breakfast Experience",
      extraCount: 28,
    },
  },
  highlights: [
    {
      icon: "villa",
      title: "Seluruh Villa Privat",
      description: "3 Kamar Tidur King • 3 Kamar Mandi • Kolam Privat 10x4m",
      bgClass: "bg-primary-fixed",
      textClass: "text-primary",
    },
    {
      icon: "groups",
      title: "Kapasitas Ideal",
      description: "Hingga 6 Dewasa + 2 Anak-anak (Ekstra kasur tersedia)",
      bgClass: "bg-secondary-fixed",
      textClass: "text-secondary",
    },
    {
      icon: "skillet",
      title: "Butler & Chef Khusus",
      description: "Sarapan harian hangat ala-carte & daily housekeeping 2x",
      bgClass: "bg-tertiary-fixed",
      textClass: "text-tertiary",
    },
    {
      icon: "explore",
      title: "Jantung Oberoi Seminyak",
      description: "Akses jalan kaki ke Ku De Ta, Sisterfields & butik fesyen",
      bgClass: "bg-primary-fixed-dim",
      textClass: "text-primary",
    },
  ],
  aboutParagraphs: [
    "Menawarkan surga ketenangan tropis tepat di denyut nadi Seminyak yang dinamis. Dirancang dengan kepekaan arsitektur modern Bali kontemporer, villa ini memadukan kehangatan kayu jati daur ulang, lantai semen poles abu-abu nan sejuk, dan langit-langit kubah alang-alang tinggi yang menghadirkan semilir angin alami pulau dewata.",
    "Setiap sudut villa dirancang mengelilingi oasis kolam renang privat seluas 40 meter persegi. Nikmati sunken lounge semi-tenggelam di kolam renang untuk menikmati koktail senja, ruang makan terbuka untuk jamuan makan malam privat bersama keluarga, serta ketenangan total di dalam kompleks pemukiman privat Oberoi yang dijaga keamanan 24 jam non-stop.",
  ],
  bedrooms: [
    {
      id: "bed-1",
      name: "Kamar Tidur 1",
      typeBadge: "Master Suite",
      icon: "king_bed",
      badgeStyle: "primary",
      features: [
        "1 Super King Bed (200x200)",
        "Smart TV 55\" Netflix",
        "Walk-in Closet Pribadi",
        "Akses Langsung Kolam Renang",
        "Kamar Mandi Bathtub Marmer",
      ],
    },
    {
      id: "bed-2",
      name: "Kamar Tidur 2",
      typeBadge: "Guest Suite 1",
      icon: "bed",
      badgeStyle: "secondary",
      features: [
        "1 King Bed (180x200)",
        "AC Daikin Inverter Whisper",
        "Kamar Mandi Semi-Outdoor",
        "Rain Shower Tropis Terbuka",
        "Brankas Safety Deposit Box",
      ],
    },
    {
      id: "bed-3",
      name: "Kamar Tidur 3",
      typeBadge: "Guest Suite 2",
      icon: "single_bed",
      badgeStyle: "tertiary",
      features: [
        "2 Twin Beds (Bisa disatukan)",
        "Meja Kerja Laptop Friendly",
        "Taman Privat Sudut Santai",
        "Lemari Jati Built-in",
        "En-Suite Modern Shower",
      ],
    },
  ],
  facilityGroups: [
    {
      icon: "pool",
      title: "Kenyamanan Villa & Hiburan",
      items: [
        "Kolam Renang Privat 10x4m & Sunken Sunbed",
        "High-Speed WiFi Optik 150 Mbps (Work from Bali)",
        "Smart TV 55\" dengan Akun Netflix Premium",
        "Marshall Stanmore Bluetooth Speaker",
        "Gazebo Santai & Bale Bengong Tradisional",
      ],
    },
    {
      icon: "countertops",
      title: "Dapur Modern & Ruang Makan",
      items: [
        "Mesin Kopi Nespresso & Gratis 10 Kapsul Kopi Bali",
        "Kulkas Inverter 2 Pintu + Freezer Es Batu Otomatis",
        "Dispenser Air Galon Higienis Panas, Dingin & Normal",
        "Meja Makan Kayu Jati Utuh untuk 8 Tamu",
        "Kompor Gas Tanam, Microwave & Cookware Lengkap",
      ],
    },
    {
      icon: "concierge",
      title: "Layanan Staf & Keamanan",
      items: [
        "Butler Siaga Pukul 07:00 - 22:00 WITA Setiap Hari",
        "Daily Housekeeping & Pembersihan Kolam Berkala",
        "Sarapan Segar Dimasak Setiap Pagi Sesuai Permintaan",
        "Keamanan Gerbang 24 Jam & Area Parkir Privat Mobil",
      ],
    },
    {
      icon: "spa",
      title: "Perlengkapan Mandi & Higienitas",
      items: [
        "Handuk Renang Tebal & Handuk Mandi Lembut 600 GSM",
        "Bathrobe Katun Lembut & Sandal Kamar Bali",
        "Sabun & Sampo Alami Beraroma Lemongrass Bali Asli",
        "Hairdryer Ionik di Setiap Kamar Mandi",
      ],
    },
  ],
  addons: [
    {
      id: "floating_breakfast",
      title: "Floating Breakfast Tropis",
      price: 250000,
      formattedPrice: "Rp 250.000",
      unit: "/ 2 pax",
      description: "Disajikan di atas nampan apung elegan di kolam renang, lengkap dengan jus segar, smoothie bowl, dan kopi.",
    },
    {
      id: "chef_bbq",
      title: "Private Chef BBQ Jimbaran",
      price: 450000,
      formattedPrice: "Rp 450.000",
      unit: "/ orang",
      description: "Chef eksklusif memasak lobster, udang windu, ikan kakap segar, dan sambal matah langsung di gazebo villa.",
    },
    {
      id: "balinese_massage",
      title: "Balinese Traditional Massage",
      price: 200000,
      formattedPrice: "Rp 200.000",
      unit: "/ 60 menit",
      description: "Terapis bersertifikasi datang langsung ke villa dengan minyak aromaterapi rempah murni Bali.",
    },
    {
      id: "airport_transfer",
      title: "Antar-Jemput Bandara DPS",
      price: 0,
      formattedPrice: "GRATIS",
      unit: "(Min. 3 Malam)",
      description: "Armada Toyota Innova Zenix ber-AC dingin dengan driver profesional Travelind siap menyambut di Gate Kedatangan.",
    },
  ],
  locationInfo: {
    description: "Berada di gang privat tenang di kawasan Kayu Aya (Oberoi), bebas dari kebisingan jalan raya namun hanya sepelemparan batu dari pusat hiburan kuliner Seminyak.",
    mapBgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfqVnA28V9No85JmBfHLHZVvVnV8K4wv5ssC4QcGMp2q7L5t0TicSUAb2aJ8sh4j60XfcpAuedaOGLYVqojqdx9z1JO-5FKbyG1OS2sPoaO0SmFFeTRgJgqnXf1eQjK69eXwA53a_gXU2TN5JuH6ohl1PCTjA8MlKCXnlKjUcphahmrzCHVX_dcE4lX8RsJcx2_HqsigIxjYuCclXt37c5eBWoISUP3kS8FrtiVfWw0AhsvncFa3fjzA",
    mapPinLabel: "Villa Seminyak Oasis Tropical",
    pointsOfInterest: [
      { icon: "beach_access", title: "Pantai Seminyak", distance: "600m (7 mnt jalan)" },
      { icon: "nightlife", title: "Ku De Ta & Potato Head", distance: "1.2 km (4 mnt motor)" },
      { icon: "local_grocery_store", title: "Bintang Supermarket", distance: "900m (3 mnt jalan)" },
      { icon: "flight", title: "Bandara DPS Ngurah Rai", distance: "11 km (25-30 mnt)" },
    ],
  },
  houseRules: [
    {
      icon: "schedule",
      title: "Jadwal Check-in & Check-out",
      description: "Check-in: Mulai 14:00 WITA\nCheck-out: Maksimal 12:00 WITA (Early check-in sesuai ketersediaan)",
    },
    {
      icon: "verified_user",
      title: "Pembatalan Fleksibel",
      description: "Pengembalian dana 100% jika dibatalkan hingga 7 hari sebelum tanggal kedatangan.",
    },
    {
      icon: "volume_off",
      title: "Jam Ketenangan (Quiet Hours)",
      description: "Pukul 22:00 - 07:00 WITA untuk kenyamanan dan keharmonisan lingkungan residential.",
    },
    {
      icon: "smoke_free",
      title: "Ketentuan Merokok",
      description: "Dilarang merokok di dalam kamar tidur ber-AC. Merokok diperkenankan di gazebo & sun deck luar.",
    },
  ],
  reviewsBreakdown: {
    overall: 4.92,
    totalReviews: 312,
    categories: [
      { label: "Kebersihan", score: 4.98, percentage: 99 },
      { label: "Layanan Butler", score: 4.95, percentage: 97 },
      { label: "Lokasi", score: 4.9, percentage: 94 },
      { label: "Kesesuaian Nilai", score: 4.88, percentage: 92 },
    ],
    reviews: [
      {
        id: "rev-1",
        initials: "BW",
        author: "Budi Wicaksono & Keluarga",
        origin: "Jakarta",
        duration: "Menginap 4 Malam",
        date: "Februari 2026",
        avatarBg: "bg-primary-fixed text-primary",
        rating: 5,
        comment: "\"Pengalaman menginap yang luar biasa! Lokasinya sangat tenang padahal jalan kaki 5 menit sudah sampai deretan restoran Oberoi. Butler kami, Bli Wayan, sangat ramah dan tanggap. Sarapan pancake pisang dan floating breakfast-nya segar sekali. Pasti akan kembali lagi bersama keluarga besar.\"",
      },
      {
        id: "rev-2",
        initials: "CL",
        author: "Clara Lindqvist",
        origin: "Stockholm",
        duration: "Menginap 6 Malam",
        date: "Januari 2026",
        avatarBg: "bg-secondary-fixed text-secondary",
        rating: 5,
        comment: "\"Surpassed every expectation. The outdoor bathroom and the master suite opening directly to the private pool felt like a movie set. WiFi was remarkably fast for my remote client calls. The airport pickup with Innova Zenix made arrival so effortless.\"",
      },
    ],
  },
  pricing: {
    basePricePerNight: 2450000,
    formattedBasePrice: "Rp 2.450.000",
    originalPricePerNight: 2800000,
    formattedOriginalPrice: "Rp 2.800.000",
    discountAmount: 350000,
    formattedDiscount: "Hemat Rp 350.000",
    defaultNights: 3,
    defaultCheckIn: "19 Mar 2026",
    defaultCheckOut: "22 Mar 2026",
    defaultGuests: "5 Dewasa, 1 Anak • 3 Kamar",
  },
};
