export interface VehicleSpec {
  icon: string;
  label: string;
}

export interface RentalVehicle {
  id: string;
  name: string;
  brand: string;
  category: string;
  categoryType: "city-car" | "mpv" | "suv" | "scooter-maxi" | "scooter-retro";
  vehicleType: "car" | "motorcycle";
  year: number;
  highlightBadge: string;
  highlightBadgeColor?: "primary" | "tertiary" | "secondary" | "neutral";
  rating: number;
  reviewsCount: number;
  transmission: "matic" | "manual";
  transmissionLabel: string;
  seats: number;
  specs: VehicleSpec[];
  pickupPerk: string;
  pricePerDay: number;
  formattedPrice: string;
  totalDays: number;
  totalPriceFormatted: string;
  imageUrl: string;
  imageAlt: string;
  availableWithDriver: boolean;
  withDriverPricePerDay?: number;
}

export const rentalVehicles: RentalVehicle[] = [
  {
    id: "toyota-innova-zenix-hybrid-2024",
    name: "Toyota Kijang Innova Zenix Hybrid",
    brand: "Toyota",
    category: "MPV Premium Hybrid",
    categoryType: "mpv",
    vehicleType: "car",
    year: 2024,
    highlightBadge: "Terpopuler Keluarga",
    highlightBadgeColor: "primary",
    rating: 4.9,
    reviewsCount: 184,
    transmission: "matic",
    transmissionLabel: "Matic AT",
    seats: 7,
    specs: [
      { icon: "airline_seat_recline_normal", label: "7 Kursi" },
      { icon: "settings", label: "Matic AT" },
      { icon: "bolt", label: "Hybrid" },
      { icon: "ac_unit", label: "Double AC" },
    ],
    pickupPerk: "Bandara Ngurah Rai & Kuta",
    pricePerDay: 850000,
    formattedPrice: "Rp 850.000",
    totalDays: 3,
    totalPriceFormatted: "Rp 2.550.000",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB5z6gLP2NGt-xfNjYcm7bAFkiiDVwjFgj12BDhEKwVGeXKQb2LSegI-h3qlZSAHz3InoGMsNL1BIsZ0K7uoQBkB73XME5XGEXXhklipt7SM20jF4DLTZoKwtF1tX-x4FC7zEDDrO_7hvcdK8U8UOs4d-PS5Lp5FB9TNFKCMh6_5vNpPHF6MqSgvtq7p2GpyKmygkFgcYpZT3cdhSt5UwDpQX4qXIoJlP-QsYVAfOSMc3Zr_1VChevLNQ",
    imageAlt:
      "A modern metallic white Toyota Kijang Innova Zenix parked gracefully in front of a tropical Balinese resort with stone temple statues, palm fronds, soft morning sunlight, sharp focus, advertising automobile photography.",
    availableWithDriver: true,
    withDriverPricePerDay: 1100000,
  },
  {
    id: "honda-brio-rs-automatic-2024",
    name: "Honda Brio RS Automatic",
    brand: "Honda",
    category: "City Car Compact",
    categoryType: "city-car",
    vehicleType: "car",
    year: 2024,
    highlightBadge: "Hemat & Gesit Canggu",
    highlightBadgeColor: "tertiary",
    rating: 4.85,
    reviewsCount: 320,
    transmission: "matic",
    transmissionLabel: "Matic CVT",
    seats: 5,
    specs: [
      { icon: "airline_seat_recline_normal", label: "5 Kursi" },
      { icon: "settings", label: "Matic CVT" },
      { icon: "local_gas_station", label: "Irit 1:18 km/L" },
      { icon: "bluetooth", label: "Bluetooth" },
    ],
    pickupPerk: "Seminyak & Canggu",
    pricePerDay: 280000,
    formattedPrice: "Rp 280.000",
    totalDays: 3,
    totalPriceFormatted: "Rp 840.000",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDgG8l-d3kWJ9WVKSOpCKZC_paaE745kgxuJXstr73v5GyqNDCRGbDv_Gz79JWgaLTZQXk0nlRUZ90IscNbCdfVzNRRDVgzVfjl8F8SbkdeLx23xOUqZoXPDS3kw4Au-wCKSzVoQzX0n5yu8TDI5fgSNClFKBpe7vnnCnM9oszu6WAf5cCMIcbtxqLx5yAfvCzWzjMQg0TgMo1EJ29VV5-TZI8ZUoz3Z7M85ocDZdHvAoFYcEOZz6Z14w",
    imageAlt:
      "A clean vibrant yellow Honda Brio RS parked along a trendy cafe street in Seminyak Bali with lush frangipani trees, coastal sunshine, modern automotive commercial style, vivid colors.",
    availableWithDriver: false,
  },
  {
    id: "mitsubishi-xpander-ultimate-2024",
    name: "Mitsubishi Xpander Ultimate",
    brand: "Mitsubishi",
    category: "MPV Keluarga Nyaman",
    categoryType: "mpv",
    vehicleType: "car",
    year: 2024,
    highlightBadge: "Nyaman & Lega",
    highlightBadgeColor: "secondary",
    rating: 4.9,
    reviewsCount: 95,
    transmission: "matic",
    transmissionLabel: "Matic CVT",
    seats: 7,
    specs: [
      { icon: "airline_seat_recline_normal", label: "7 Kursi" },
      { icon: "settings", label: "Matic CVT" },
      { icon: "speed", label: "Cruise Control" },
      { icon: "usb", label: "Fast USB Port" },
    ],
    pickupPerk: "Bandara & Area Ubud",
    pricePerDay: 450000,
    formattedPrice: "Rp 450.000",
    totalDays: 3,
    totalPriceFormatted: "Rp 1.350.000",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAzEeo4jTZ2dAvpG3RRjo1FvExSv3NFFM4kSrCVIarCMPKXbKGIwDrt0w6L1hdUjee52jh4kalPtVaZMP6UqrwEDwj6kpzleDPH9fh1OrglHIevemlDq6vPWKQ6bbOJAPidsDXSfgcnWb7d6U-Q-gfOEy4VTebTFJcAStRJu_ikssK_q88MqshByBXD5mrKRtJqKmEHctnw1jxvExVA84MU8eYb4sOEfZd_pyT5mAGLhqObwupe3kcayg",
    imageAlt:
      "A sleek graphite gray Mitsubishi Xpander Ultimate car cruising smoothly on a scenic coastal highway overlooking the Uluwatu cliff ocean sunset in Bali, high-end travel cinematography style.",
    availableWithDriver: true,
    withDriverPricePerDay: 750000,
  },
  {
    id: "suzuki-jimny-4x4-allgrip-2024",
    name: "Suzuki Jimny 4x4 AllGrip",
    brand: "Suzuki",
    category: "Compact 4WD SUV",
    categoryType: "suv",
    vehicleType: "car",
    year: 2024,
    highlightBadge: "Petualangan Kintamani",
    highlightBadgeColor: "neutral",
    rating: 4.95,
    reviewsCount: 68,
    transmission: "matic",
    transmissionLabel: "Matic AT",
    seats: 4,
    specs: [
      { icon: "airline_seat_recline_normal", label: "4 Kursi" },
      { icon: "terrain", label: "4WD AllGrip" },
      { icon: "settings", label: "Matic AT" },
      { icon: "photo_camera", label: "Gaya Ikonik" },
    ],
    pickupPerk: "Hotel / Villa Seluruh Bali",
    pricePerDay: 950000,
    formattedPrice: "Rp 950.000",
    totalDays: 3,
    totalPriceFormatted: "Rp 2.850.000",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCHg_LLyjzqSrT4qGXH0ccBozZ0RKYmpMAQ1I7CynsklriF7sNw6w2NSLCP0rTymfJeeeXK5_hNypXB1RLBVYUx8VbY3fetVoa4WJuA65xjBZTdDIVpnn1q6Ne2yJr2H44IGvbjqhzC-TRlnBenvtpOAOLNPtzK8d0jkcI3d8pYc7wJOnHODEHyb9N6mKNSNi1Jn5rsPpk28A5gveIvqxlAIDSfi35XohbLHzA0aB-ak6ncK6MIo-YIzg",
    imageAlt:
      "A rugged jungle-green Suzuki Jimny 4x4 with roof racks parked on the black volcanic sands of Mount Batur Kintamani Bali, dramatic mountain backdrop, cinematic warm outdoor lighting.",
    availableWithDriver: false,
  },
  {
    id: "yamaha-nmax-155-connected-abs-2024",
    name: "Yamaha NMAX 155 Connected ABS",
    brand: "Yamaha",
    category: "Maxi Scooter 155cc",
    categoryType: "scooter-maxi",
    vehicleType: "motorcycle",
    year: 2024,
    highlightBadge: "Motor Matic Favorit Bali",
    highlightBadgeColor: "primary",
    rating: 4.95,
    reviewsCount: 510,
    transmission: "matic",
    transmissionLabel: "Matic",
    seats: 2,
    specs: [
      { icon: "sports_motorsports", label: "2 Helm SNI" },
      { icon: "umbrella", label: "2 Jas Hujan" },
      { icon: "phone_android", label: "Holder HP" },
      { icon: "key", label: "Keyless Remote" },
    ],
    pickupPerk: "Villa Canggu & Seminyak",
    pricePerDay: 130000,
    formattedPrice: "Rp 130.000",
    totalDays: 3,
    totalPriceFormatted: "Rp 390.000",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBEIiJSSB1KaZv_-O7Qw8xNAxF_Eco3brcZtWWzNK662VdoHa9DwXbSBG7XaZkI1Mg2HPwpP2rw_KUZ3nfHIoVjn6ZsnjvMaVLjKWlrsWWXVZ7XPADCWdQ2qzHMbFGHVwJbjHa05ZlZampXxJKeunpnju00S55DM_bKXP3AaqkOuCYVuVIuGQxGjxp0F8i8p0rxjEtQRU8FM0Coyw8NqPdPwl8ROP6zRlRLh_pjB8dRfB8C8zx2f7gCxw",
    imageAlt:
      "A modern matte black Yamaha NMAX 155 scooter with phone mount parked near a traditional Balinese carved temple gate in Canggu, bright tropical daylight, professional scooter rental product photo.",
    availableWithDriver: false,
  },
  {
    id: "vespa-sprint-s-150-iget-abs-2024",
    name: "Vespa Sprint S 150 i-Get ABS",
    brand: "Piaggio Vespa",
    category: "Koleksi Eksklusif Vespa",
    categoryType: "scooter-retro",
    vehicleType: "motorcycle",
    year: 2024,
    highlightBadge: "Gaya Estetik Kafe Canggu",
    highlightBadgeColor: "secondary",
    rating: 4.9,
    reviewsCount: 240,
    transmission: "matic",
    transmissionLabel: "Matic",
    seats: 2,
    specs: [
      { icon: "sports_motorsports", label: "2 Helm Bogo Retro" },
      { icon: "bolt", label: "150cc i-Get" },
      { icon: "usb", label: "USB Fast Charger" },
      { icon: "shield", label: "Rem ABS Depan" },
    ],
    pickupPerk: "Seminyak, Canggu & Uluwatu",
    pricePerDay: 220000,
    formattedPrice: "Rp 220.000",
    totalDays: 3,
    totalPriceFormatted: "Rp 660.000",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBY9i4FXKJ3qt0p8UmsQ8TQMJeKir3kZQ8vPisBwmipxlQsKfDY-QOaOhyzg0INGlyp2J6-CR7YjvxNcmNbTbDL2mLTYyY-EmDFRiPLSmUdwou40HYwFUtBCWdD8PRHR2HEjVQ7F_f1ncFOV--z0nK6I4oor_V4Ky8y1bObkPXl2-1dtX2FBaoi-Xvad-vVpywguHxRAHCVyBJ-UowM1ctgnjcA5pTsNLIO7KvAklIhDsy4mWAS213FcQ",
    imageAlt:
      "An Italian olive green Vespa Sprint S 150 scooter parked alongside a vibrant tropical cafe with terracotta bricks and bougainvillea in Pererenan Bali, sunny aesthetic holiday vibe.",
    availableWithDriver: false,
  },
];
