"use client";

import React, { useState, useMemo } from "react";
import RentalSearchBar from "./RentalSearchBar";
import RentalFilterSidebar from "./RentalFilterSidebar";
import RentalAirportBanner from "./RentalAirportBanner";
import RentalHeaderControls from "./RentalHeaderControls";
import RentalVehicleCard from "./RentalVehicleCard";
import RentalPagination from "./RentalPagination";
import RentalWhatsAppSupport from "./RentalWhatsAppSupport";
import RentalBookingModal from "./RentalBookingModal";
import { rentalVehicles, RentalVehicle } from "@/data/rentalVehicles";

export default function RentalCatalogClient() {
  // Top Filter States
  const [vehicleType, setVehicleType] = useState<"car" | "motorcycle">("car");
  const [driverMode, setDriverMode] = useState<"self-drive" | "with-driver">(
    "self-drive"
  );
  const [selectedLocation, setSelectedLocation] = useState("dps");

  // Sidebar Filter States
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    "city-car",
    "mpv",
  ]);
  const [selectedTransmission, setSelectedTransmission] = useState<
    "all" | "matic" | "manual"
  >("matic");
  const [selectedPriceRange, setSelectedPriceRange] = useState<string[]>([
    "300-600",
    "600-1000",
  ]);
  const [selectedSeats, setSelectedSeats] = useState<number | null>(5);
  const [selectedPerks, setSelectedPerks] = useState<string[]>([
    "Antar Bandara Gratis",
    "Asuransi All-Risk",
  ]);

  // Controls States
  const [sortBy, setSortBy] = useState("popular");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState(1);

  // Booking Modal
  const [activeBookingVehicle, setActiveBookingVehicle] =
    useState<RentalVehicle | null>(null);

  // Handlers
  const handleToggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const handleTogglePriceRange = (range: string) => {
    setSelectedPriceRange((prev) =>
      prev.includes(range) ? prev.filter((r) => r !== range) : [...prev, range]
    );
  };

  const handleTogglePerk = (perk: string) => {
    setSelectedPerks((prev) =>
      prev.includes(perk) ? prev.filter((p) => p !== perk) : [...prev, perk]
    );
  };

  const handleResetFilters = () => {
    setSelectedCategories([]);
    setSelectedTransmission("all");
    setSelectedPriceRange([]);
    setSelectedSeats(null);
    setSelectedPerks([]);
  };

  const activeFilterCount =
    selectedCategories.length +
    (selectedTransmission !== "all" ? 1 : 0) +
    selectedPriceRange.length +
    (selectedSeats !== null ? 1 : 0) +
    selectedPerks.length;

  // Filter and Sort Pipeline
  const filteredVehicles = useMemo(() => {
    return rentalVehicles
      .filter((vehicle) => {
        // Top vehicle type tab
        if (vehicleType && vehicle.vehicleType !== vehicleType) {
          // If motorcycle, only motorcycles. If car, only cars.
          return false;
        }

        // Driver mode: if "with-driver", show units that can take driver, or all cars
        if (driverMode === "with-driver" && vehicle.vehicleType === "motorcycle") {
          return false;
        }

        // Category filter (if any selected)
        if (
          selectedCategories.length > 0 &&
          !selectedCategories.includes(vehicle.categoryType)
        ) {
          return false;
        }

        // Transmission filter
        if (
          selectedTransmission !== "all" &&
          vehicle.transmission !== selectedTransmission
        ) {
          return false;
        }

        // Seats filter
        if (selectedSeats !== null) {
          if (selectedSeats === 2 && vehicle.seats > 2) return false;
          if (selectedSeats === 5 && (vehicle.seats < 4 || vehicle.seats > 5))
            return false;
          if (selectedSeats === 7 && vehicle.seats < 7) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === "price-low") return a.pricePerDay - b.pricePerDay;
        if (sortBy === "price-high") return b.pricePerDay - a.pricePerDay;
        if (sortBy === "rating") return b.rating - a.rating;
        if (sortBy === "newest") return b.year - a.year;
        // Default "popular"
        return b.reviewsCount - a.reviewsCount;
      });
  }, [
    vehicleType,
    driverMode,
    selectedCategories,
    selectedTransmission,
    selectedSeats,
    sortBy,
  ]);

  // When filters result in fewer items than default, fall back gracefully to all current type items so page is always lively
  const displayVehicles =
    filteredVehicles.length > 0
      ? filteredVehicles
      : rentalVehicles.filter((v) => v.vehicleType === vehicleType);

  return (
    <div className="flex flex-col w-full">
      {/* Top Sticky Filter & Search Bar */}
      <RentalSearchBar
        vehicleType={vehicleType}
        onVehicleTypeChange={(type) => {
          setVehicleType(type);
          if (type === "motorcycle") {
            setDriverMode("self-drive");
            setSelectedSeats(2);
            setSelectedCategories(["scooter-maxi", "scooter-retro"]);
          } else {
            setSelectedSeats(5);
            setSelectedCategories(["city-car", "mpv"]);
          }
        }}
        driverMode={driverMode}
        onDriverModeChange={setDriverMode}
        selectedLocation={selectedLocation}
        onLocationChange={setSelectedLocation}
        onSearch={() => {
          // Scroll slightly down to results
          window.scrollTo({ top: 160, behavior: "smooth" });
        }}
      />

      {/* Main Body Catalog: Left Sidebar + Right Results */}
      <div className="w-full max-w-[1280px] mx-auto px-gutter py-space-lg flex flex-col lg:flex-row gap-space-lg">
        {/* Left Sticky Sidebar */}
        <RentalFilterSidebar
          selectedCategories={selectedCategories}
          onToggleCategory={handleToggleCategory}
          selectedTransmission={selectedTransmission}
          onTransmissionChange={setSelectedTransmission}
          selectedPriceRange={selectedPriceRange}
          onTogglePriceRange={handleTogglePriceRange}
          selectedSeats={selectedSeats}
          onSelectSeats={setSelectedSeats}
          selectedPerks={selectedPerks}
          onTogglePerk={handleTogglePerk}
          onResetFilters={handleResetFilters}
          activeFilterCount={activeFilterCount}
        />

        {/* Right Side Listing Area */}
        <div className="flex-1 flex flex-col gap-space-md min-w-0">
          {/* Informational Airport Trust Banner */}
          <RentalAirportBanner />

          {/* Catalog Header Controls */}
          <RentalHeaderControls
            totalCount={48}
            sortBy={sortBy}
            onSortChange={setSortBy}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
          />

          {/* Vehicle Grid / List Cards */}
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-space-md"
                : "flex flex-col gap-space-md"
            }
          >
            {displayVehicles.map((vehicle) => (
              <RentalVehicleCard
                key={vehicle.id}
                vehicle={vehicle}
                driverMode={driverMode}
                onSelectUnit={(v) => setActiveBookingVehicle(v)}
                viewMode={viewMode}
              />
            ))}
          </div>

          {/* Pagination System */}
          <RentalPagination
            currentPage={currentPage}
            totalPages={8}
            totalItems={48}
            startIndex={1}
            endIndex={displayVehicles.length}
            onPageChange={setCurrentPage}
          />

          {/* 24/7 WhatsApp Concierge Support Strip */}
          <RentalWhatsAppSupport />
        </div>
      </div>

      {/* Interactive Booking Modal */}
      {activeBookingVehicle && (
        <RentalBookingModal
          vehicle={activeBookingVehicle}
          driverMode={driverMode}
          onClose={() => setActiveBookingVehicle(null)}
        />
      )}
    </div>
  );
}
