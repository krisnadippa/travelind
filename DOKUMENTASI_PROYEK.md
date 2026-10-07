# 📘 DOKUMENTASI LENGKAP PROYEK TRAVELIND BALI
> **Platform Reservasi Pariwisata Premium Pulau Dewata**  
> *Versi Rilis: 1.0.0 (Production-Ready)* • *Next.js 16 (App Router) + TypeScript + Tailwind CSS v4*  
> *Repositori GitHub:* [https://github.com/krisnadippa/travelind](https://github.com/krisnadippa/travelind)

---

## 📑 DAFTAR ISI
1. [Ringkasan Eksekutif Platform](#1-ringkasan-eksekutif-platform)
2. [Tech Stack & Arsitektur Sistem](#2-tech-stack--arsitektur-sistem)
3. [Daftar Halaman & Rute Aplikasi (Sitemap)](#3-daftar-halaman--rute-aplikasi-sitemap)
4. [Rincian Arsitektur Komponen Modular](#4-rincian-arsitektur-komponen-modular)
5. [Skema Data & State Management (`/data`)](#5-skema-data--state-management-data)
6. [Design System & Tokens (`app/globals.css`)](#6-design-system--tokens-appglobalscss)
7. [Panduan Integrasi Backend & API (Untuk Developer)](#7-panduan-integrasi-backend--api-untuk-developer)
8. [Panduan Onboarding & Menjalankan Proyek](#8-panduan-onboarding--menjalankan-proyek)
9. [Status Pengujian & Keamanan Kode](#9-status-pengujian--keamanan-kode)

---

## 1. Ringkasan Eksekutif Platform

**Travelind Wisata Bali (Bali Travel Hub)** adalah platform pariwisata modern terpadu yang dirancang khusus untuk memfasilitasi wisatawan lokal maupun mancanegara dalam merencanakan dan memesan kebutuhan liburan mereka di Pulau Bali dalam satu ekosistem:
- **Villas & Stays**: Kurasi vila eksklusif bintang lima di Seminyak, Canggu, Ubud, dan Uluwatu dengan fasilitas *private pool* dan layanan *butler* pribadi.
- **Rental Kendaraan**: Layanan sewa mobil (lepas kunci atau dengan supir) serta motor matic dan vespa retro dengan jaminan unit tahun muda (2024), gratis antar-jemput di Bandara I Gusti Ngurah Rai (DPS), dan asuransi *all-risk*.
- **Aktivitas & Tur**: Pengalaman wisata alam terkurasi (rafting, ATV, snorkeling Nusa Penida, trekking gunung).
- **Alur Pemesanan Cepat & Transparan**: Kalkulasi harga otomatis secara *real-time*, tanpa biaya tersembunyi, terintegrasi langsung dengan konfirmasi WhatsApp Concierge 24/7.

---

## 2. Tech Stack & Arsitektur Sistem

| Komponen | Teknologi yang Digunakan | Penjelasan & Keunggulan |
| :--- | :--- | :--- |
| **Framework Utama** | Next.js 16.3.8 (App Router) | Server Components & Client Components hybrid untuk performa SEO dan rendering kilat. |
| **Compiler / Bundler** | Next.js Turbopack | Kompilasi build super cepat (kurang dari 1 detik untuk ratusan komponen). |
| **Bahasa Pemrograman** | TypeScript 5+ | Strict type checking di seluruh antarmuka data dan properti komponen. |
| **Library UI & Core** | React 19 | State manajemen reaktif, hooks modern, dan integrasi modal portal. |
| **Styling & Desain** | Tailwind CSS v4 | Berbasis CSS variables modern dengan token spasi dan palet warna Material 3. |
| **Ikonografi** | Google Material Symbols | Akses ratusan simbol vektor modern dengan variasi *weight* dan *fill*. |
| **Tipografi** | Google Fonts (Inter & Outfit) | Tipografi bersih, mudah dibaca, dioptimalkan lewat `next/font`. |
| **Optimasi Gambar** | `next/image` | Otomatis WebP/AVIF format, lazy loading, dan *responsive sizes*. |

---

## 3. Daftar Halaman & Rute Aplikasi (Sitemap)

Seluruh halaman dibangun mengikuti konvensi **Next.js App Router** dengan URL yang ramah SEO (*search engine friendly*):

| No | Halaman | URL Rute | Tipe Render | Deskripsi Fitur Utama |
| :---: | :--- | :--- | :---: | :--- |
| **1** | **Beranda Utama** | `/` | Static (○) | Hero Banner, Search Engine Interaktif 4 Kategori, Promo Eksklusif, Highlight Vila, Showcase Rental, Tur Alam, Smart Itinerary, Trust Pillars, Footer. |
| **2** | **Katalog Vila** | `/villas` | Static (○) | Search Bar Strip, Sidebar Filter (Harga Slider, Tipe Vila, Fasilitas, Rating), Header View (Grid/Map), 6 Kartu Listing Lengkap, Paginasi, Mitra ASITA & Kemenparekraf. |
| **3** | **Detail Properti Vila** | `/villas/[id]` | Dynamic (ƒ) | Header Meta & Wishlist, Stepper 4 Langkah, Galeri 5 Foto + Lightbox Modal, Bento Highlight, Denah Kamar, Fasilitas Lengkap, Add-ons, Peta Oberoi & POI, Aturan Menginap, Ulasan Tamu, Sticky Booking Widget. |
| **4** | **Formulir Data Tamu** | `/villas/[id]/booking`<br>`/booking` | Dynamic (ƒ)<br>Static (○) | Stepper Reservasi `#TVL-VIL-2026-8891`, Formulir Kontak Pemesan, Data Tamu Check-in (KTP/Paspor), Add-ons (Floating Breakfast, BBQ Chef, Innova Gratis), Kebijakan Menginap 4 Pilar, Sticky Summary dengan Kalkulasi Harga Bersih. |
| **5** | **Katalog Rental Kendaraan** | `/rental`<br>`/rental-mobil` | Static (○) | Top Sticky Filter Bar (Tab Mobil/Motor, Toggle Lepas Kunci/Driver, Lokasi DPS & Tanggal), Sidebar Filter, Banner Promosi Antar Bandara DPS, Sortir & Toggle Grid/List, 6 Kartu Armada Lengkap, Paginasi, Modal Pemesanan Cepat. |
| **6** | **Detail Spesifikasi Kendaraan** | `/rental/[id]`<br>`/rental-mobil/[id]` | Dynamic (ƒ) | Breadcrumbs Resmi, Header Action Bar, Galeri 5 Foto + Lightbox Modal, 4 Keunggulan Utama, Tabel Spesifikasi Mesin & Bagasi, Fasilitas Gratis Rp 450k, 4 Syarat Sewa Lepas Kunci, Titik Serah Terima & Peta Bali Hub, Ulasan Skor 4.95, Sticky Calculator Dinamis, Floating Mobile Bar. |

---

## 4. Rincian Arsitektur Komponen Modular

Proyek menggunakan struktur folder yang terisolasi berdasarkan domain fitur, memudahkan kolaborasi multi-developer:

### A. Layout Global (`components/layout/`)
- [`Navbar.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/layout/Navbar.tsx): Header navigasi *sticky* dengan deteksi aktif otomatis (`pathname.startsWith(...)`), tombol ganti mata uang, menu bantuan, dan *drawer mobile* responsif.
- [`Footer.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/layout/Footer.tsx): Informasi legal PT Travelind Wisata Bali, kontak WhatsApp 24/7, tautan kategori layanan, destinasi populer Bali, badge metode pembayaran (BCA, Mandiri, BNI, QRIS), dan sertifikat SSL 256-bit.

### B. Beranda (`components/home/`)
- [`HeroBanner.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/home/HeroBanner.tsx): Banner panorama Bali resolusi tinggi dengan headline dan subheadline brand.
- [`SearchFilterCard.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/home/SearchFilterCard.tsx): Konsol pencarian interaktif yang mendukung 4 tab (Vila, Mobil, Motor, Tur).
- [`PromoSection.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/home/PromoSection.tsx): 3 Kartu promosi utama dengan voucher diskon dan penawaran waktu terbatas.
- [`FeaturedVillasSection.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/home/FeaturedVillasSection.tsx): Grid vila pilihan terbaik dengan lencana status ketersediaan.
- [`VehicleRentalSection.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/home/VehicleRentalSection.tsx): Showcase armada mobil & motor dengan tab filter area operasional Bali.
- [`ExperiencesSection.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/home/ExperiencesSection.tsx): Penawaran tur dan atraksi alam terpopuler.
- [`CuratedItinerarySection.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/home/CuratedItinerarySection.tsx): Banner konsultasi rencana perjalanan gratis bersama *concierge* lokal.
- [`CategoryGridSection.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/home/CategoryGridSection.tsx): Grid visual 4 kategori akomodasi paling diminati.
- [`TrustAndMobileAppSection.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/home/TrustAndMobileAppSection.tsx): 4 pilar jaminan mutu Travelind & banner promosi aplikasi mobile.

### C. Katalog Vila (`components/villas/`)
- [`VillaSearchStrip.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/villas/VillaSearchStrip.tsx): Strip ringkasan formulasi pencarian tanggal, area, dan jumlah tamu.
- [`VillaFilterSidebar.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/villas/VillaFilterSidebar.tsx): Kontrol filter harga (*slider range*), tipe akomodasi, kamar tidur, fasilitas privat, dan rating bintang.
- [`VillaListingsHeader.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/villas/VillaListingsHeader.tsx): Penghitung total vila, filter cepat (*pills*), dan sakelar mode tampilan (*Grid vs Map*).
- [`VillaListingCard.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/villas/VillaListingCard.tsx): Kartu vila horizontal kaya informasi (galeri foto, spesifikasi kamar, fasilitas gratis, harga per malam, dan tombol lihat detail).
- [`VillaPagination.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/villas/VillaPagination.tsx): Navigasi nomor halaman katalog.
- [`VillaValueProposition.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/villas/VillaValueProposition.tsx): 4 pilar standar kualitas kurasi vila Travelind.
- [`VillaPartnerStrip.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/villas/VillaPartnerStrip.tsx): Lencana akreditasi resmi ASITA, Kemenparekraf, dan perbankan nasional.

### D. Detail Properti Vila (`components/villa-detail/`)
- [`VillaDetailHeader.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/villa-detail/VillaDetailHeader.tsx): Breadcrumb, judul properti, rating, serta tombol aksi bagikan dan simpan ke wishlist.
- [`VillaBookingStepper.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/villa-detail/VillaBookingStepper.tsx): Indikator 4 tahapan alur reservasi villa & jaminan ketersediaan instan.
- [`VillaPhotoGallery.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/villa-detail/VillaPhotoGallery.tsx): Galeri 5 foto simetris dengan penampil modal Lightbox beresolusi tinggi.
- [`VillaHighlightsBento.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/villa-detail/VillaHighlightsBento.tsx): Kartu bento 4 keunggulan utama properti.
- [`VillaDescription.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/villa-detail/VillaDescription.tsx): Narasi mendalam mengenai suasana, privasi, dan arsitektur vila.
- [`VillaBedroomLayout.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/villa-detail/VillaBedroomLayout.tsx): Rincian spesifikasi 3 kamar tidur *king-size* ber-AC dengan kamar mandi *en-suite*.
- [`VillaFacilities.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/villa-detail/VillaFacilities.tsx): Pengelompokan fasilitas lengkap (kenyamanan, kolam renang, dapur gourmet, media & koneksi).
- [`VillaAddons.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/villa-detail/VillaAddons.tsx): Pilihan add-on khas Bali (*Floating Breakfast*, *Private Chef BBQ*, *Spa in-villa*).
- [`VillaLocationMap.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/villa-detail/VillaLocationMap.tsx): Peta lokasi Kayu Aya Oberoi Seminyak dan jarak ke titik penting (Pantai Seminyak, Ku De Ta, dll.).
- [`VillaHouseRules.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/villa-detail/VillaHouseRules.tsx): Ketentuan jam check-in/out, kebijakan bebas rokok, dan jam ketenangan malam.
- [`VillaGuestReviews.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/villa-detail/VillaGuestReviews.tsx): Ulasan wisatawan terverifikasi dan skor kepuasan 4.92.
- [`VillaBookingWidget.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/villa-detail/VillaBookingWidget.tsx): Widget *sticky* dengan kalkulasi harga harian otomatis dan tombol pengalihan ke langkah reservasi.

### E. Checkout / Booking Langkah 2 (`components/booking/`)
- [`BookingStepperHeader.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/booking/BookingStepperHeader.tsx): Header nomor reservasi resmi `#TVL-VIL-2026-8891` dan status 4 langkah.
- [`BookerInfoForm.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/booking/BookerInfoForm.tsx): Formulir Bagian A (Kontak Pemesan: Gelar, Nama, WhatsApp terverifikasi, Email) dan Bagian B (Data Tamu Menginap: Opsi sewa untuk diri sendiri/orang lain, NIK/Paspor, dan tamu pendamping).
- [`BookingAddonsForm.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/booking/BookingAddonsForm.tsx): Konfigurasi layanan tambahan (Floating Breakfast +250k, Chef BBQ +450k, Free Innova Transfer, Extra Bed +300k/malam) dan textarea catatan khusus ke Butler.
- [`BookingPoliciesCard.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/booking/BookingPoliciesCard.tsx): 4 Pilar garansi (Jadwal Check-in/out, Pembatalan Fleksibel 100% refund H-7, Jam Ketenangan 22:00 WITA, Higienitas bintang 5).
- [`BookingSummarySidebar.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/booking/BookingSummarySidebar.tsx): Sidebar *sticky* ringkasan properti, kalkulasi biaya *real-time* saat add-on dipilih, diskon *Early Bird* (-Rp 350.000), total bersih **Rp 7.250.000 IDR Net**, checkbox persetujuan syarat & ketentuan, tombol menuju gerbang pembayaran Bank Indonesia, dan tombol chat WA.
- [`BookingPageClient.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/booking/BookingPageClient.tsx): Orkestrator *state* interaktif client-side yang menghubungkan formulir dan kalkulator biaya.

### F. Katalog Rental Kendaraan (`components/rental/`)
- [`RentalSearchBar.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/rental/RentalSearchBar.tsx): Bilah pencarian *sticky* atas dengan tab beralih *Rental Mobil* vs *Rental Motor*, toggle *Lepas Kunci* vs *Dengan Driver*, lokasi penjemputan Bandara DPS / area Bali, dan pemilih tanggal sewa.
- [`RentalFilterSidebar.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/rental/RentalFilterSidebar.tsx): Sidebar filter kategori armada (City Car, MPV, SUV, Maxi Scooter, Vespa Retro), transmisi (Matic/Manual), rentang harga harian, kapasitas kursi, fasilitas, dan boks syarat cepat wisatawan.
- [`RentalAirportBanner.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/rental/RentalAirportBanner.tsx): Banner promosi serah terima kunci gratis langsung di Pick-Up Zone Bandara Ngurah Rai (DPS).
- [`RentalHeaderControls.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/rental/RentalHeaderControls.tsx): Penghitung unit tersedia (48 unit), kontrol dropdown sortir harga/rating, dan toggle tampilan Grid vs List.
- [`RentalVehicleCard.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/rental/RentalVehicleCard.tsx): Kartu armada interaktif dengan gambar unit, badge tahun 2024, spesifikasi teknis, perk antar gratis, kalkulasi harga harian & total 3 hari, tautan langsung ke halaman detail, dan tombol *Pilih Unit*.
- [`RentalPagination.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/rental/RentalPagination.tsx): Paginasi halaman armada 1 sampai 8.
- [`RentalWhatsAppSupport.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/rental/RentalWhatsAppSupport.tsx): Strip bantuan darurat dispatcher 24 jam di Bandara Bali.
- [`RentalBookingModal.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/rental/RentalBookingModal.tsx): Modal formulir pemesanan cepat dengan konfirmasi instan via WhatsApp API.
- [`RentalCatalogClient.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/rental/RentalCatalogClient.tsx): Orkestrator client-side untuk filter gabungan kategori, transmisi, harga, kapasitas, dan modal pemesanan.

### G. Detail Rental Kendaraan (`components/rental-detail/`)
- [`VehicleBreadcrumbs.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/rental-detail/VehicleBreadcrumbs.tsx): Navigasi breadcrumbs dan badge *Armada Resmi Travelind*.
- [`VehicleHeaderBar.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/rental-detail/VehicleHeaderBar.tsx): Judul Toyota Innova Zenix Modelista 2024, badge verifikasi, rating 4.95, serta tombol Bagikan & Simpan (Wishlist).
- [`VehicleGalleryShowcase.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/rental-detail/VehicleGalleryShowcase.tsx): Galeri 5 foto modern (eksterior, captain seat, cockpit sunroof, bagasi, dan serah terima bandara) dilengkapi penampil modal Lightbox interaktif.
- [`VehicleKeyFeatures.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/rental-detail/VehicleKeyFeatures.tsx): 4 kartu keunggulan VVIP (Mesin hybrid irit 1:21 km/L, captain seat ottoman, Toyota Safety Sense TSS 3.0, unit steril higienis).
- [`VehicleTechSpecs.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/rental-detail/VehicleTechSpecs.tsx): Tabel spesifikasi teknis lengkap (mesin 2.0L Dual VVT-i, transmisi 10-speed e-CVT, 7 kursi 2-2-3, bagasi 4 koper besar, tenaga 186 PS, Apple CarPlay, dan panoramic sunroof).
- [`VehicleFacilities.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/rental-detail/VehicleFacilities.tsx): 6 fasilitas gratis senilai Rp 450.000 (Antar bandara 24 jam, asuransi all-risk, ERA darurat 24 jam, holder gadget & charger, welcome drink, dan wewangian aromaterapi Bali).
- [`VehicleRentalTerms.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/rental-detail/VehicleRentalTerms.tsx): 4 langkah syarat sewa lepas kunci tanpa jaminan kartu kredit (KTP/Paspor, SIM A/IDP, tiket pesawat PP, voucher hotel).
- [`VehicleCoverageMap.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/rental-detail/VehicleCoverageMap.tsx): Area pengantaran gratis vs berbayar serta visual peta Bali Service Hub Bandara DPS dengan pin berkedip (*pulsing*).
- [`VehicleReviews.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/rental-detail/VehicleReviews.tsx): Skor kepuasan 4.95 (100% puas, 184 ulasan) dan ulasan detail dari wisatawan terverifikasi.
- [`VehicleBookingWidget.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/rental-detail/VehicleBookingWidget.tsx): Widget *sticky* pemesanan dengan kalkulator dinamis saat memilih titik lokasi dan add-ons (Child Car Seat +50k/hari, Zero Excess +75k/hari, Sopir Lokal +250k/hari), diskon *Early Bird* (-Rp 100.000), total bersih **Rp 2.450.000**, tombol Instant Booking, dan WhatsApp CTA.
- [`VehicleMobileBottomBar.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/rental-detail/VehicleMobileBottomBar.tsx): Bar pemesanan melayang (*floating bottom bar*) khusus tampilan layar smartphone.
- [`VehicleDetailClient.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/rental-detail/VehicleDetailClient.tsx): Orkestrator seluruh komponen halaman detail kendaraan.

---

## 5. Skema Data & State Management (`/data`)

Struktur data mock dibuat terpisah dan sangat mudah dihubungkan dengan REST API / Headless CMS / Database:

| File Sumber | Interface TypeScript | Cakupan Data |
| :--- | :--- | :--- |
| [`data/villas.ts`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/data/villas.ts) | `Villa` | 4 Vila unggulan beranda utama (Seminyak, Canggu, Ubud, Uluwatu). |
| [`data/villaCatalog.ts`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/data/villaCatalog.ts) | `VillaCatalogItem` | 6 Vila katalog `/villas` lengkap dengan filter tags, badges, foto galeri, kapasitas, dan harga. |
| [`data/villaDetails.ts`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/data/villaDetails.ts) | `VillaDetailData` | Spesifikasi mendalam vila Seminyak Oasis Tropical (Bento highlights, 3 kamar tidur, fasilitas, aturan rumah, review, kalkulasi harga). |
| [`data/rentalVehicles.ts`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/data/rentalVehicles.ts) | `RentalVehicle` | 6 Unit katalog rental mobil & motor (Innova Zenix, Brio RS, Xpander Ultimate, Suzuki Jimny 4x4, Yamaha NMAX 155, Vespa Sprint 150). |
| [`data/rentalVehicleDetails.ts`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/data/rentalVehicleDetails.ts) | `VehicleDetailData` | Spesifikasi teknis mendalam Innova Zenix Modelista 2024 (Foto galeri, spesifikasi mesin, fasilitas gratis, syarat lepas kunci, review, add-ons). |
| [`data/navigation.ts`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/data/navigation.ts) | `NavLink` | Data tautan header navigasi, kategori produk, destinasi populer, dan tautan legal footer. |
| [`data/activities.ts`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/data/activities.ts) | `Activity` | 4 Tur terpopuler (ATV Ubud, Rafting Ayung, Nusa Penida Snorkeling, Batur Sunrise). |
| [`data/promos.ts`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/data/promos.ts) | `PromoBanner` | 3 Penawaran promo waktu terbatas beranda. |

---

## 6. Design System & Tokens (`app/globals.css`)

Sistem desain Travelind mengadopsi standar **Material Design 3 (M3)** dengan penyesuaian estetika bertema resor tropis Bali:

### Palet Warna Utama
- **Primary**: `#004ec3` (Biru Samudera khas Travelind)
- **Primary Container**: `#0264f6` (Biru Aksen Tombol Utama & CTA)
- **On Primary**: `#ffffff`
- **Secondary**: `#49607e` (Slate Biru Elegan untuk Subtitle & Label)
- **Secondary Container**: `#c4dcff` (Aksen Latar Badge & Pills)
- **Surface**: `#f9f9f9` (Latar Belakang Bersih & Lembut)
- **Surface Container Lowest**: `#ffffff` (Latar Kartu Konten Utama)
- **Surface Container Low**: `#f3f3f4` (Latar Kontras Sekunder)
- **Surface Container High**: `#e8e8e8` (Garis Tepi & Separator)

### Sistem Spasi & Radius
- **Gutter**: `1.5rem` (24px)
- **Space SM / MD / LG / XL**: `0.5rem` / `1rem` / `1.5rem` / `2.5rem`
- **Border Radius**: `rounded-xl` (12px) & `rounded-2xl` (16px) untuk kartu, `rounded-full` untuk badge status.

### Ikonografi & Konfigurasi Eksternal
- **Material Symbols Outlined** dimuat secara global melalui Google Fonts di [`app/layout.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/app/layout.tsx).
- Domain gambar `lh3.googleusercontent.com` telah didaftarkan dalam `remotePatterns` pada [`next.config.ts`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/next.config.ts) untuk mengizinkan pemrosesan `next/image` secara aman.

---

## 7. Panduan Integrasi Backend & API (Untuk Developer)

Untuk menghubungkan antarmuka Travelind ke backend (misalnya REST API Express/NestJS, Supabase, PostgreSQL, atau GraphQL):

1. **Penggantian Data Statis dengan Server Fetch**:
   Pada file halaman seperti `app/villas/[id]/page.tsx` atau `app/rental/[id]/page.tsx`, ubah pengambilan data dari import lokal menjadi asynchronous fetch:
   ```tsx
   // Contoh integrasi API di app/villas/[id]/page.tsx
   export default async function VillaDetailPage({ params }: PageProps) {
     const { id } = await params;
     const res = await fetch(`https://api.travelind.co.id/v1/villas/${id}`, {
       next: { revalidate: 3600 }, // Cache ISR 1 jam
     });
     const villa = await res.json();
     return <VillaDetailClient villa={villa} />;
   }
   ```

2. **Integrasi Form Reservasi ke Payment Gateway**:
   Pada komponen [`BookingSummarySidebar.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/booking/BookingSummarySidebar.tsx) dan [`VehicleBookingWidget.tsx`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/components/rental-detail/VehicleBookingWidget.tsx), gantikan fungsi `handleProceed` atau `handleBooking` dengan pemanggilan endpoint checkout (misalnya Midtrans / Xendit / DOKU):
   ```tsx
   const handleProceedToPayment = async () => {
     const response = await fetch("/api/checkout", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({ reservationCode, guestData, selectedAddons, finalTotal }),
     });
     const { paymentRedirectUrl } = await response.json();
     window.location.href = paymentRedirectUrl;
   };
   ```

3. **Audit Input Controlled vs Uncontrolled**:
   Seluruh input teks, checkbox, dan radio pada komponen formulir telah diproteksi dengan fallback `value || ""` dan `checked={Boolean(...)}` sehingga terbebas dari peringatan state React.

---

## 8. Panduan Onboarding & Menjalankan Proyek

### A. Prasyarat Sistem
- **Node.js**: Versi 18.18.0 atau yang lebih baru (disarankan v20 LTS).
- **Package Manager**: `npm` (atau `pnpm` / `yarn`).
- **Git**: Terpasang di komputer lokal.

### B. Langkah Instalasi & Menjalankan Lokal
1. **Clone repositori dari GitHub:**
   ```bash
   git clone https://github.com/krisnadippa/travelind.git
   cd travelind
   ```

2. **Install dependensi:**
   ```bash
   npm install
   ```

3. **Jalankan server pengembangan (Development):**
   ```bash
   npm run dev
   ```
   Buka peramban Anda di [http://localhost:3000](http://localhost:3000).

4. **Uji kompilasi rilis produksi (Production Build):**
   ```bash
   npm run build
   npm run start
   ```

### C. Konvensi Git Tim
- **Branch Utama**: `main` (hanya kode yang telah teruji build tanpa error).
- **Format Commit**: Menggunakan standar Conventional Commits:
  - `feat: ...` untuk fitur atau halaman baru.
  - `fix: ...` untuk perbaikan bug / peringatan runtime.
  - `refactor: ...` untuk restrukturisasi kode tanpa mengubah fungsionalitas.
  - `docs: ...` untuk pembaruan dokumentasi.

---

## 9. Status Pengujian & Keamanan Kode

- ✅ **Build Status**: **100% Passed** (`npm run build` berhasil tanpa peringatan Turbopack).
- ✅ **Type Safety**: **Zero TypeScript Errors** (seluruh interface ketat dan valid).
- ✅ **SEO & Metadata**: Seluruh halaman menyertakan tag `<title>`, `<meta description>`, OpenGraph, dan semantik HTML5 (`<main>`, `<header>`, `<footer>`, `<section>`, `<aside>`).
- ✅ **Keamanan Konfigurasi**: File instruksi agen lokal (`AGENTS.md` dan `CLAUDE.md`) telah dimasukkan ke dalam [`.gitignore`](file:///c:/Users/krisn/OneDrive/Documents/CREATIFIN/GLORIOUS/travelind/.gitignore) dan tidak ter-push ke repositori publik.
- ✅ **Aksesibilitas & UI Responsif**: Desain telah diuji pada resolusi Desktop (1440px+), Tablet (768px - 1024px), dan Mobile (<768px).

---

*Dokumentasi ini disusun secara resmi untuk tim engineering, tim produk, dan desainer PT Travelind Wisata Bali.*  
*Untuk pertanyaan teknis lebih lanjut, silakan buka Issue atau Pull Request di repositori GitHub.*
