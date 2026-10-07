import React from "react";
import Link from "next/link";

interface VehicleBreadcrumbsProps {
  vehicleName: string;
  category: string;
}

export default function VehicleBreadcrumbs({
  vehicleName,
  category,
}: VehicleBreadcrumbsProps) {
  return (
    <div className="w-full bg-surface-container-lowest shadow-sm border-b border-surface-container-high/60">
      <div className="max-w-7xl mx-auto px-gutter py-space-sm flex items-center justify-between">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md overflow-x-auto whitespace-nowrap text-xs sm:text-sm"
        >
          <Link
            href="/"
            className="hover:text-primary transition-colors flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-primary text-[18px]">
              home
            </span>
            <span>Beranda</span>
          </Link>

          <span className="material-symbols-outlined text-[14px] text-outline-variant">
            chevron_right
          </span>

          <Link
            href="/rental"
            className="hover:text-primary transition-colors"
          >
            Rental Mobil Bali
          </Link>

          <span className="material-symbols-outlined text-[14px] text-outline-variant">
            chevron_right
          </span>

          <span className="text-secondary hover:text-primary transition-colors">
            {category}
          </span>

          <span className="material-symbols-outlined text-[14px] text-outline-variant">
            chevron_right
          </span>

          <span className="text-on-surface font-semibold truncate max-w-[240px] sm:max-w-none">
            {vehicleName}
          </span>
        </nav>

        <div className="hidden md:flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md">
          <span className="inline-flex items-center gap-1 px-space-sm py-1 rounded bg-secondary-fixed text-on-secondary-fixed font-semibold text-xs">
            <span className="material-symbols-outlined text-[16px] text-primary">
              verified
            </span>
            Armada Resmi Travelind
          </span>
        </div>
      </div>
    </div>
  );
}
