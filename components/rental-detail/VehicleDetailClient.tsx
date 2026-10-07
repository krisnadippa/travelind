"use client";

import React, { useRef } from "react";
import VehicleBreadcrumbs from "./VehicleBreadcrumbs";
import VehicleHeaderBar from "./VehicleHeaderBar";
import VehicleGalleryShowcase from "./VehicleGalleryShowcase";
import VehicleKeyFeatures from "./VehicleKeyFeatures";
import VehicleTechSpecs from "./VehicleTechSpecs";
import VehicleFacilities from "./VehicleFacilities";
import VehicleRentalTerms from "./VehicleRentalTerms";
import VehicleCoverageMap from "./VehicleCoverageMap";
import VehicleReviews from "./VehicleReviews";
import VehicleBookingWidget from "./VehicleBookingWidget";
import VehicleMobileBottomBar from "./VehicleMobileBottomBar";
import { VehicleDetailData } from "@/data/rentalVehicleDetails";

interface VehicleDetailClientProps {
  vehicle: VehicleDetailData;
}

export default function VehicleDetailClient({
  vehicle,
}: VehicleDetailClientProps) {
  const bookingWidgetRef = useRef<HTMLDivElement>(null);

  const handleMobileBookNow = () => {
    if (bookingWidgetRef.current) {
      bookingWidgetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col w-full pb-16 lg:pb-0">
      {/* Breadcrumbs */}
      <VehicleBreadcrumbs
        vehicleName={vehicle.name}
        category={vehicle.category}
      />

      {/* Header Action Bar */}
      <VehicleHeaderBar vehicle={vehicle} />

      {/* Media Gallery Showcase */}
      <VehicleGalleryShowcase photos={vehicle.photos} />

      {/* Main Content: Two-Column Layout */}
      <div className="w-full max-w-7xl mx-auto px-gutter py-space-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
          {/* LEFT COLUMN: Specs, Features, Facilities, Terms, Map, Reviews */}
          <div className="lg:col-span-8 flex flex-col gap-space-xl">
            {/* Quick Key Features */}
            <VehicleKeyFeatures features={vehicle.features} />

            {/* Technical Specifications */}
            <VehicleTechSpecs specs={vehicle.specs} />

            {/* Complimentary Facilities */}
            <VehicleFacilities facilities={vehicle.facilities} />

            {/* Rental Requirements & Terms */}
            <VehicleRentalTerms requirements={vehicle.requirements} />

            {/* Coverage & Delivery Map */}
            <VehicleCoverageMap locations={vehicle.locations} />

            {/* Verified Reviews */}
            <VehicleReviews
              rating={vehicle.rating}
              reviewCount={vehicle.reviewCount}
              reviews={vehicle.reviews}
            />
          </div>

          {/* RIGHT COLUMN: Sticky Booking & Price Calculator */}
          <div ref={bookingWidgetRef} className="lg:col-span-4 w-full">
            <VehicleBookingWidget vehicle={vehicle} />
          </div>
        </div>
      </div>

      {/* Floating Bottom Bar for Mobile */}
      <VehicleMobileBottomBar
        totalFormatted="Rp 2.450.000"
        onBookNow={handleMobileBookNow}
      />
    </div>
  );
}
