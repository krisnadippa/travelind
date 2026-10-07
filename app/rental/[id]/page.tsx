import React from "react";
import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import VehicleDetailClient from "@/components/rental-detail/VehicleDetailClient";
import { innovaZenixDetail } from "@/data/rentalVehicleDetails";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `${innovaZenixDetail.name} - Rental Mobil Bali | Travelind`,
    description: `Sewa ${innovaZenixDetail.name} lepas kunci atau dengan supir di Bali. Gratis antar bandara Ngurah Rai DPS, asuransi all-risk, dan unit tahun muda 2024.`,
  };
}

export default async function VehicleDetailPage({ params }: PageProps) {
  const { id } = await params;

  // Currently showcase the rich detail for innovaZenixDetail
  const vehicle = innovaZenixDetail;

  return (
    <div className="flex min-h-screen flex-col bg-surface font-body-md text-on-surface antialiased">
      <Navbar />

      <main className="w-full pt-20 bg-surface">
        <VehicleDetailClient vehicle={vehicle} />
      </main>

      <Footer />
    </div>
  );
}
