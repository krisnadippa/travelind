import React from "react";
import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BookingPageClient from "@/components/booking/BookingPageClient";
import { villaSeminyakOasisDetail } from "@/data/villaDetails";

export const metadata: Metadata = {
  title: "Data Tamu & Reservasi - Travelind Bali",
  description:
    "Lengkapi data pemesan dan tamu menginap untuk reservasi villa di Seminyak Bali dengan konfirmasi instan dan garansi unit 100% terverifikasi.",
};

export default function BookingPage() {
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
