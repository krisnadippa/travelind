# Travelind - Platform Reservasi Villa, Rental & Tur Bali

Proyek web resmi **Travelind** dibangun menggunakan **Next.js 16 (App Router)**, **TypeScript**, dan **Tailwind CSS v4** dengan arsitektur komponen modular yang bersih, terstruktur, dan mudah dikembangkan oleh tim.

---

## 📁 Struktur Direktori Proyek

```text
travelind/
├── app/
│   ├── globals.css              # Setup Design Tokens (Warna Material 3, Tipografi, Spacing, Overrides)
│   ├── layout.tsx               # Root Layout: Next/Font (Inter, Outfit), Material Symbols, Metadata SEO
│   ├── page.tsx                 # Halaman Beranda Utama
│   ├── booking/
│   │   └── page.tsx             # Halaman Formulir Reservasi & Data Tamu Langsung (/booking)
│   ├── rental/
│   │   └── page.tsx             # Halaman Katalog Rental Mobil & Motor Bali (/rental)
│   ├── rental-mobil/
│   │   └── page.tsx             # Alias rute (/rental-mobil)
│   ├── villas/
│   │   ├── page.tsx             # Halaman Katalog & Listing Villa Terkurasi (/villas)
│   │   └── [id]/
│   │       ├── page.tsx         # Halaman Detail Properti Villa (/villas/[id])
│   │       └── booking/
│   │           └── page.tsx     # Alur Checkout & Data Tamu Spesifik Villa (/villas/[id]/booking)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx           # Sticky Header, Logo, Navigasi Desktop & Mobile Drawer, Switcher Mata Uang
│   │   └── Footer.tsx           # Footer lengkap: Profil, Kontak WA, Kategori, Destinasi, Metode Pembayaran
│   ├── rental/
│   │   ├── RentalCatalogClient.tsx  # Client Orchestrator untuk filter, sorting, grid/list & modal
│   │   ├── RentalSearchBar.tsx      # Top Sticky Search Bar: Tab Mobil/Motor, Toggle Driver, Lokasi & Tanggal
│   │   ├── RentalFilterSidebar.tsx  # Sidebar Filter: Kategori, Transmisi, Rentang Harga, Kursi & Jaminan
│   │   ├── RentalAirportBanner.tsx  # Banner Penjemputan Gratis Bandara Ngurah Rai (DPS)
│   │   ├── RentalHeaderControls.tsx # Header Kontrol: Dropdown Sortir & Toggle Grid/List
│   │   ├── RentalVehicleCard.tsx    # Kartu Armada: Gambar, Spesifikasi, Badge, Tarif & Tombol Pilih Unit
│   │   ├── RentalPagination.tsx     # Paginasi Halaman Armada
│   │   ├── RentalWhatsAppSupport.tsx# Banner Dispatcher 24/7 Bandara DPS
│   │   └── RentalBookingModal.tsx   # Modal Formulir Pemesanan Cepat & Integrasi WhatsApp
│   ├── booking/
│   │   ├── BookingPageClient.tsx    # Client Orchestrator untuk data tamu & kalkulasi harga dinamis
│   │   ├── BookingStepperHeader.tsx # Stepper Bar 4 Langkah & Nomor Reservasi #TVL-VIL-2026-8891
│   │   ├── BookerInfoForm.tsx       # Kartu 1: Bagian A (Kontak Pemesan) & Bagian B (Tamu Menginap & NIK/Paspor)
│   │   ├── BookingAddonsForm.tsx    # Kartu 2: Add-on (Floating Breakfast, BBQ Chef, Innova Gratis, Extra Bed) & Catatan Khusus
│   │   ├── BookingPoliciesCard.tsx  # Kartu 3: 4 Pilar Kebijakan Menginap, Higienitas & Jam Tenang
│   │   └── BookingSummarySidebar.tsx# Sidebar Sticky Ringkasan Villa, Rincian Biaya Real-Time & Tombol Pembayaran
│   ├── home/
│   │   ├── HeroBanner.tsx       # Banner panoramik Bali + Headline & Subheadline
│   │   ├── SearchFilterCard.tsx # Filter konsol pencarian interaktif (Villa, Mobil, Motor, Tur)
│   │   ├── PromoSection.tsx     # 3 Kartu Promo Utama (Diskon Villa, Bebas Deposit, Paket Ayung+Penida)
│   │   ├── FeaturedVillasSection.tsx # Kartu Villa Pilihan (Rating, Fasilitas, Harga per malam, Status)
│   │   ├── VehicleRentalSection.tsx  # Marketplace Rental Mobil & Motor dengan filter area Bali
│   │   ├── ExperiencesSection.tsx    # Tur & Petualangan terpopuler (ATV, Rafting, Snorkeling, Trekking)
│   │   ├── CuratedItinerarySection.tsx # Banner Itinerary Kurasi Cerdas & Tombol WhatsApp Concierge
│   │   ├── CategoryGridSection.tsx   # Grid Visual 4 Kategori Akomodasi Paling Diminati
│   │   └── TrustAndMobileAppSection.tsx # 4 Poin Jaminan Kepercayaan & Banner Promo Download Aplikasi Mobile
│   ├── villas/
│   │   ├── VillaSearchStrip.tsx # Breadcrumb & Strip Formulasi Pencarian Villa
│   │   ├── VillaFilterSidebar.tsx # Sidebar Filter: Harga Slider, Tipe Villa, Area, Fasilitas, Rating
│   │   ├── VillaListingsHeader.tsx # Header Katalog: Toggle Grid/Map, Quick Filter Pills, Dropdown Sortir
│   │   ├── VillaListingCard.tsx # Kartu Horizontal Lengkap: Galeri, Badge, Spesifikasi, Free Perks, Harga
│   │   ├── VillaPagination.tsx  # Kontrol Paginasi Halaman Katalog
│   │   ├── VillaValueProposition.tsx # 4 Pilar Standar Kualitas Travelind
│   │   └── VillaPartnerStrip.tsx # Strip Akreditasi Resmi (ASITA, Kemenparekraf) & Pembayaran
│   └── villa-detail/
│       ├── VillaDetailHeader.tsx # Breadcrumb, Tombol Share & Wishlist, Judul & Rating
│       ├── VillaBookingStepper.tsx # Stepper 4 Langkah Reservasi & Indikator Ketersediaan Real-Time
│       ├── VillaPhotoGallery.tsx # Galeri 5 Foto Modern Grid + Lightbox Modal Viewer
│       ├── VillaHighlightsBento.tsx # 4 Bento Kartu Sorotan Utama Villa
│       ├── VillaDescription.tsx # Narasi & Deskripsi Properti
│       ├── VillaBedroomLayout.tsx # Rincian Fasilitas 3 Kamar Tidur Ber-AC
│       ├── VillaFacilities.tsx # Fasilitas Terkurasi (Kenyamanan, Dapur, Butler, Higienitas)
│       ├── VillaAddons.tsx     # Add-on Layanan Tambahan (Floating Breakfast, BBQ Chef, Massage, Airport)
│       ├── VillaLocationMap.tsx # Peta Lokasi Oberoi Seminyak & 4 Point of Interest Sekitar
│       ├── VillaHouseRules.tsx # Aturan Menginap (Jadwal Check-in/out, Quiet Hours, Smoking Policy)
│       ├── VillaGuestReviews.tsx # Ulasan Wisatawan Terverifikasi & Progress Bar Kategori
│       └── VillaBookingWidget.tsx # Sticky Widget Reservasi dengan Kalkulasi Otomatis Add-on & WhatsApp
├── data/
│   ├── villas.ts                # Data mock daftar villa eksklusif beranda
│   ├── villaCatalog.ts          # Dataset lengkap 6 properti katalog villa (/villas)
│   ├── villaDetails.ts          # Dataset spesifikasi mendalam detail villa (/villas/[id])
│   ├── vehicles.ts              # Data mock armada mobil & motor + tab filter area
│   ├── activities.ts            # Data mock tur & petualangan + tab filter kategori
│   ├── promos.ts                # Data promo & voucher
│   ├── categories.ts            # Data koleksi tipe akomodasi
│   ├── curated.ts               # Data rekomendasi destinasi & itinerary
│   ├── trust.ts                 # Data poin kepercayaan & keunggulan Travelind
│   └── navigation.ts            # Data link navigasi header, footer, & metode pembayaran
├── types/
│   └── travelind.ts             # TypeScript definitions & interfaces (VillaCatalogItem, Villa, Vehicle, dll)
├── next.config.ts               # Konfigurasi Next.js (Remote image patterns untuk Google UserContent)
├── package.json
└── tsconfig.json
```

---

## 🚀 Panduan Memulai (Development)

1. **Install dependensi (jika baru di-clone):**
   ```bash
   npm install
   ```

2. **Jalankan server development:**
   ```bash
   npm run dev
   ```
   Buka [http://localhost:3000](http://localhost:3000) di browser.

3. **Build untuk Production:**
   ```bash
   npm run build
   npm run start
   ```

---

## 🎨 Panduan Untuk Tim

- **Menambahkan Properti Villa Baru**: Buka [`data/villas.ts`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/data/villas.ts) dan tambahkan objek baru mengikuti tipe `Villa`.
- **Menambahkan Armada Kendaraan**: Buka [`data/vehicles.ts`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/data/vehicles.ts) untuk menambahkan mobil / motor dan area operasionalnya.
- **Menghubungkan ke API / Backend**: Ganti impor data dari folder `data/` dengan fetcher atau Server Component async query di `app/page.tsx` atau component terkait.
- **Kustomisasi Tema**: Variabel warna tema, tipografi, dan spasi dapat diubah secara terpusat di [`app/globals.css`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/app/globals.css).
