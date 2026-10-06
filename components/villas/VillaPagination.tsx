"use client";

import React, { useState } from "react";

interface VillaPaginationProps {
  currentPage?: number;
  totalPages?: number;
  totalItems?: number;
  totalCount?: number;
  itemsPerPage?: number;
  onPageChange?: (page: number) => void;
}

export default function VillaPagination({
  currentPage = 1,
  totalPages = 6,
  totalItems,
  totalCount = 68,
  itemsPerPage = 6,
  onPageChange,
}: VillaPaginationProps) {
  const [activePage, setActivePage] = useState(currentPage);
  const count = totalItems ?? totalCount;

  const handlePage = (page: number) => {
    setActivePage(page);
    if (onPageChange) {
      onPageChange(page);
    }
  };

  return (
    <nav
      aria-label="Pagination"
      className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col sm:flex-row items-center justify-between gap-space-md"
    >
      <p className="font-label-md text-xs text-outline">
        Menampilkan{" "}
        <span className="font-bold text-on-surface">
          {(activePage - 1) * itemsPerPage + 1} -{" "}
          {Math.min(activePage * itemsPerPage, count)}
        </span>{" "}
        dari <span className="font-bold text-on-surface">{count}</span> villa
        privat di Bali
      </p>

      <div className="flex items-center gap-1 font-label-md text-sm">
        <button
          onClick={() => handlePage(Math.max(1, activePage - 1))}
          disabled={activePage === 1}
          className={`w-9 h-9 rounded-lg bg-surface-container-low flex items-center justify-center transition-colors ${
            activePage === 1
              ? "text-outline cursor-not-allowed"
              : "hover:bg-surface-container text-on-surface cursor-pointer"
          }`}
          aria-label="Previous Page"
        >
          <span className="material-symbols-outlined text-base">
            chevron_left
          </span>
        </button>

        {[1, 2, 3, 4].map((page) => {
          const isActive = activePage === page;
          return (
            <button
              key={page}
              onClick={() => handlePage(page)}
              className={`w-9 h-9 rounded-lg font-bold shadow-sm flex items-center justify-center transition-colors cursor-pointer ${
                isActive
                  ? "text-on-primary"
                  : "bg-surface-container-low hover:bg-surface-container text-on-surface"
              }`}
              style={
                isActive
                  ? {
                      backgroundColor: "rgb(2, 100, 246)",
                      color: "rgb(255, 255, 255)",
                    }
                  : {}
              }
            >
              {page}
            </button>
          );
        })}

        <span className="px-1 text-outline">...</span>

        <button
          onClick={() => handlePage(totalPages)}
          className={`w-9 h-9 rounded-lg font-bold flex items-center justify-center transition-colors cursor-pointer ${
            activePage === totalPages
              ? "text-on-primary"
              : "bg-surface-container-low hover:bg-surface-container text-on-surface"
          }`}
          style={
            activePage === totalPages
              ? {
                  backgroundColor: "rgb(2, 100, 246)",
                  color: "rgb(255, 255, 255)",
                }
              : {}
          }
        >
          {totalPages}
        </button>

        <button
          onClick={() => handlePage(Math.min(totalPages, activePage + 1))}
          disabled={activePage === totalPages}
          className={`w-9 h-9 rounded-lg bg-surface-container-low flex items-center justify-center transition-colors ${
            activePage === totalPages
              ? "text-outline cursor-not-allowed"
              : "hover:bg-surface-container text-on-surface cursor-pointer"
          }`}
          aria-label="Next Page"
        >
          <span className="material-symbols-outlined text-base">
            chevron_right
          </span>
        </button>
      </div>
    </nav>
  );
}
