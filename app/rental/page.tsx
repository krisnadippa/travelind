import React from "react";
import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RentalCatalogClient from "@/components/rental/RentalCatalogClient";

export const metadata: Metadata = {
  title: "Rental Kendaraan Bali - Sewa Mobil & Motor Bebas Ribet | Travelind",
  description:
    "Rental mobil lepas kunci / dengan supir dan sewa motor matic & Vespa di Bali. Gratis antar bandara Ngurah Rai DPS, asuransi all-risk, dan unit tahun muda 2024.",
};

export default function RentalPage() {
  return (
    <div className="flex min-h-screen flex-col bg-surface font-body-md text-on-surface antialiased">
      <Navbar />

      <main className="w-full pt-20 bg-surface">
        <RentalCatalogClient />
      </main>

      <Footer />
    </div>
  );
}
