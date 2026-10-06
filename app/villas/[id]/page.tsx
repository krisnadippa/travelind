import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import VillaDetailHeader from "@/components/villa-detail/VillaDetailHeader";
import VillaBookingStepper from "@/components/villa-detail/VillaBookingStepper";
import VillaPhotoGallery from "@/components/villa-detail/VillaPhotoGallery";
import VillaHighlightsBento from "@/components/villa-detail/VillaHighlightsBento";
import VillaDescription from "@/components/villa-detail/VillaDescription";
import VillaBedroomLayout from "@/components/villa-detail/VillaBedroomLayout";
import VillaFacilities from "@/components/villa-detail/VillaFacilities";
import VillaAddons from "@/components/villa-detail/VillaAddons";
import VillaLocationMap from "@/components/villa-detail/VillaLocationMap";
import VillaHouseRules from "@/components/villa-detail/VillaHouseRules";
import VillaGuestReviews from "@/components/villa-detail/VillaGuestReviews";
import VillaBookingWidget from "@/components/villa-detail/VillaBookingWidget";
import { villaSeminyakOasisDetail } from "@/data/villaDetails";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function VillaDetailPage({ params }: PageProps) {
  const { id } = await params;

  // Currently we showcase the rich detail for villaSeminyakOasisDetail
  const villa = villaSeminyakOasisDetail;

  return (
    <div className="flex min-h-screen flex-col bg-surface font-body-md text-on-surface antialiased">
      <Navbar />

      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-20rem)]">
        <div className="flex flex-col w-full">
          {/* Top Navigation Trail & Quick Meta */}
          <VillaDetailHeader villa={villa} />

          {/* Booking Stepper */}
          <VillaBookingStepper />

          {/* 5-Photo Modern Grid Gallery */}
          <VillaPhotoGallery photos={villa.photos} />

          {/* Core Content & Sticky Widget Grid */}
          <div className="w-full px-gutter py-space-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
              {/* LEFT COLUMN: Detailed Information & Experience Narrative (7-8 Cols) */}
              <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-space-xl">
                {/* Key Highlights / Pill Bento */}
                <VillaHighlightsBento highlights={villa.highlights} />

                {/* Deskripsi Properti */}
                <VillaDescription
                  title={villa.name}
                  paragraphs={villa.aboutParagraphs}
                />

                {/* Detail Kamar & Tempat Tidur */}
                <VillaBedroomLayout bedrooms={villa.bedrooms} />

                {/* Fasilitas Premium Lengkap */}
                <VillaFacilities groups={villa.facilityGroups} />

                {/* Pengalaman Eksklusif Tambahan */}
                <VillaAddons addons={villa.addons} />

                {/* Lokasi & Akses Sekitar */}
                <VillaLocationMap locationInfo={villa.locationInfo} />

                {/* Aturan Menginap & Kebijakan */}
                <VillaHouseRules rules={villa.houseRules} />

                {/* Ulasan Wisatawan Terverifikasi */}
                <VillaGuestReviews reviewsBreakdown={villa.reviewsBreakdown} />
              </div>

              {/* RIGHT COLUMN: Sticky Booking & Reservation Widget (4-5 Cols) */}
              <VillaBookingWidget
                pricing={villa.pricing}
                villaName={villa.name}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
