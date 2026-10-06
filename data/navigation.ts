export interface NavLink {
  label: string;
  href: string;
  path: string;
  isActive?: boolean;
}

export const headerNavLinks: NavLink[] = [
  { label: "Villas & Stays", href: "/villas", path: "villas-and-stays", isActive: true },
  { label: "Rental Kendaraan", href: "/rental", path: "rental-mobil" },
  { label: "Aktivitas & Tur", href: "/#activities", path: "aktivitas-and-tur" },
  { label: "Destinasi", href: "/#destinasi", path: "destinasi" },
];

export const productCategories = [
  { label: "Sewa Villa Mewah", href: "#villas" },
  { label: "Rental Mobil Lepas Kunci", href: "#vehicles" },
  { label: "Rental Mobil + Sopir", href: "#vehicles" },
  { label: "Sewa Motor Matic", href: "#vehicles" },
  { label: "Tur & Wisata Alam", href: "#activities" },
];

export const popularDestinations = [
  { label: "Seminyak & Kerobokan", href: "#" },
  { label: "Canggu & Pererenan", href: "#" },
  { label: "Ubud & Gianyar", href: "#" },
  { label: "Uluwatu & Pecatu", href: "#" },
  { label: "Nusa Penida & Lembongan", href: "#" },
];

export const footerLegalLinks = [
  { label: "Tentang Kami", href: "#" },
  { label: "Standar Verifikasi Mitra", href: "#" },
  { label: "Blog Cerita Bali", href: "#" },
  { label: "Karier", href: "#" },
  { label: "Kebijakan Privasi", href: "#" },
  { label: "Syarat & Ketentuan", href: "#" },
  { label: "Peta Situs", href: "#" },
];

export const paymentMethods = [
  "BCA",
  "MANDIRI",
  "BNI",
  "QRIS",
  "VISA",
  "MASTERCARD",
];
