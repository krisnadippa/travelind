import React from "react";
import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BookingPageClient from "@/components/booking/BookingPageClient";
import { villaSeminyakOasisDetail } from "@/data/villaDetails";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `Data Tamu & Reservasi - ${villaSeminyakOasisDetail.name} | Travelind Bali`,
    description:
      "Lengkapi data pemesan dan tamu menginap untuk reservasi villa di Seminyak Bali dengan konfirmasi instan dan perlindungan pemesanan terenkripsi 256-bit.",
  };
}

export default async function VillaBookingPage({ params }: PageProps) {
  const { id } = await params;

  // Use the loaded villa detail
  const villa = villaSeminyakOasisDetail;

  return (
    <div className="flex min-h-screen flex-col bg-surface font-body-md text-on-surface antialiased">
      <Navbar />

      <main className="w-full pt-20 bg-surface">
        <BookingPageClient
          villaDetail={villa}
          reservationCode="#TVL-VIL-2026-8891"
        />
      </main>

      <Footer />
    </div>
  );
}
