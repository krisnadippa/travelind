"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import VillaSearchStrip from "@/components/villas/VillaSearchStrip";
import VillaFilterSidebar from "@/components/villas/VillaFilterSidebar";
import VillaListingsHeader from "@/components/villas/VillaListingsHeader";
import VillaListingCard from "@/components/villas/VillaListingCard";
import VillaPagination from "@/components/villas/VillaPagination";
import VillaValueProposition from "@/components/villas/VillaValueProposition";
import VillaPartnerStrip from "@/components/villas/VillaPartnerStrip";
import { villaCatalog } from "@/data/villaCatalog";

export default function VillasPage() {
  const [activePill, setActivePill] = useState("all");
  const [sortOption, setSortOption] = useState("recommended");

  // Filter villas based on pill selection
  let displayedVillas = [...villaCatalog];

  if (activePill !== "all") {
    displayedVillas = displayedVillas.filter(
      (v) => v.categoryTag === activePill || (activePill === "private_pool" && v.hasPrivatePool)
    );
  }

  // Sort villas
  if (sortOption === "price_low") {
    displayedVillas.sort((a, b) => a.pricePerNight - b.pricePerNight);
  } else if (sortOption === "price_high") {
    displayedVillas.sort((a, b) => b.pricePerNight - a.pricePerNight);
  } else if (sortOption === "rating_high") {
    displayedVillas.sort((a, b) => b.rating - a.rating);
  } else if (sortOption === "most_booked") {
    displayedVillas.sort((a, b) => b.reviewCount - a.reviewCount);
  }

  return (
    <div className="flex min-h-screen flex-col bg-background font-body-md text-on-surface antialiased">
      <Navbar />

      <main className="w-full pt-20 bg-background min-h-screen">
        <div className="flex flex-col w-full">
          {/* Search Modifier Strip */}
          <VillaSearchStrip />

          {/* Main Content Layout (Sidebar + Listings) */}
          <section className="w-full max-w-7xl mx-auto px-margin py-space-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
              {/* Left Sticky Sidebar Filters */}
              <VillaFilterSidebar />

              {/* Right Main Content: Listings Area */}
              <div className="lg:col-span-9 space-y-space-lg">
                <VillaListingsHeader
                  totalCount={68}
                  activePill={activePill}
                  onSelectPill={(pill) => setActivePill(pill)}
                  onSortChange={(sort) => setSortOption(sort)}
                />

                {/* Listing Cards */}
                <div className="space-y-space-lg">
                  {displayedVillas.map((villa) => (
                    <VillaListingCard key={villa.id} villa={villa} />
                  ))}
                </div>

                {/* Pagination */}
                <VillaPagination totalCount={68} currentPage={1} totalPages={6} />
              </div>
            </div>
          </section>

          {/* Travelind Value Proposition Section */}
          <VillaValueProposition />

          {/* Official Accreditation & Partner Strip */}
          <VillaPartnerStrip />
        </div>
      </main>

      <Footer />
    </div>
  );
}
