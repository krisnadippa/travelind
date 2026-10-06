import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/home/HeroBanner";
import SearchFilterCard from "@/components/home/SearchFilterCard";
import PromoSection from "@/components/home/PromoSection";
import FeaturedVillasSection from "@/components/home/FeaturedVillasSection";
import VehicleRentalSection from "@/components/home/VehicleRentalSection";
import ExperiencesSection from "@/components/home/ExperiencesSection";
import CuratedItinerarySection from "@/components/home/CuratedItinerarySection";
import CategoryGridSection from "@/components/home/CategoryGridSection";
import TrustAndMobileAppSection from "@/components/home/TrustAndMobileAppSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-surface font-body-md text-on-surface antialiased">
      <Navbar />

      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
        <div className="flex flex-col w-full">
          {/* MAIN WRAPPER CONTAINER */}
          <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 py-6 flex flex-col gap-14">
            {/* 1. HERO SECTION WITH SEARCH CARD */}
            <section className="relative w-full flex flex-col items-center">
              <HeroBanner />
              <SearchFilterCard />
            </section>

            {/* 2. PROMO & VALUE TRIO CARDS */}
            <PromoSection />

            {/* 3. VILLA PILIHAN TERBAIK */}
            <FeaturedVillasSection />

            {/* 4. VEHICLE MARKETPLACE SECTION */}
            <VehicleRentalSection />

            {/* 5. EXPERIENCES & TOURS */}
            <ExperiencesSection />

            {/* 6. SOLID DEEP NAVY CURATED SECTION */}
            <CuratedItinerarySection />

            {/* 7. VISUAL ACCOMMODATION CATEGORIES GRID */}
            <CategoryGridSection />

            {/* 8. TRUST, SECURITY & MOBILE APP BAR */}
            <TrustAndMobileAppSection />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
