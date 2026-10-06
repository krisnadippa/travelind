"use client";

import React, { useState } from "react";
import BookingStepperHeader from "./BookingStepperHeader";
import BookerInfoForm from "./BookerInfoForm";
import BookingAddonsForm from "./BookingAddonsForm";
import BookingPoliciesCard from "./BookingPoliciesCard";
import BookingSummarySidebar from "./BookingSummarySidebar";
import { VillaDetailData } from "@/data/villaDetails";

interface BookingPageClientProps {
  villaDetail: VillaDetailData;
  reservationCode?: string;
}

export default function BookingPageClient({
  villaDetail,
  reservationCode = "#TVL-VIL-2026-8891",
}: BookingPageClientProps) {
  // Add-on selection state - default with floating_breakfast
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    "floating_breakfast",
  ]);
  const [specialRequests, setSpecialRequests] = useState("");

  const handleToggleAddon = (addonId: string) => {
    setSelectedAddons((prev) =>
      prev.includes(addonId)
        ? prev.filter((id) => id !== addonId)
        : [...prev, addonId]
    );
  };

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Top Stepper Header */}
      <BookingStepperHeader reservationCode={reservationCode} />

      {/* Main Booking Workspace Grid */}
      <div className="w-full px-gutter py-space-xl max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
          {/* LEFT COLUMN: Forms, Selections & Policies (~65%) */}
          <div className="lg:col-span-8 flex flex-col gap-space-xl min-w-0">
            {/* CARD 1: Guest & Booker Information */}
            <BookerInfoForm />

            {/* CARD 2: Stay Configuration, Add-ons & Special Requests */}
            <BookingAddonsForm
              selectedAddons={selectedAddons}
              onToggleAddon={handleToggleAddon}
              specialRequests={specialRequests}
              onChangeSpecialRequests={setSpecialRequests}
            />

            {/* CARD 3: Property Policies, Health & Safety Guarantee */}
            <BookingPoliciesCard />
          </div>

          {/* RIGHT COLUMN: Sticky Villa Summary & Pricing (~35%) */}
          <BookingSummarySidebar
            villaId={villaDetail.id}
            villaName={villaDetail.name}
            villaLocation={villaDetail.fullLocation}
            villaRating={villaDetail.rating}
            villaReviewsCount={villaDetail.reviewCount}
            villaImage={villaDetail.photos.hero.url}
            basePricePerNight={villaDetail.pricing.basePricePerNight}
            nights={villaDetail.pricing.defaultNights}
            checkInDate={villaDetail.pricing.defaultCheckIn}
            checkOutDate={villaDetail.pricing.defaultCheckOut}
            selectedAddons={selectedAddons}
          />
        </div>
      </div>
    </div>
  );
}
