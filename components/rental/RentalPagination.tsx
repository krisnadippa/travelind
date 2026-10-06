"use client";

import React from "react";

interface RentalPaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  startIndex: number;
  endIndex: number;
  onPageChange: (page: number) => void;
}

export default function RentalPagination({
  currentPage = 1,
  totalPages = 8,
  totalItems = 48,
  startIndex = 1,
  endIndex = 6,
  onPageChange,
}: RentalPaginationProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md bg-surface-container-lowest p-space-md rounded-2xl shadow-sm border border-surface-container-high/60 mt-space-sm">
      <span className="font-body-md text-label-md text-on-surface-variant text-[13px]">
        Menampilkan <strong className="text-on-surface">{startIndex} - {endIndex}</strong> dari{" "}
        <strong className="text-on-surface">{totalItems}</strong> armada di Bali
      </span>

      <div className="flex items-center gap-space-xs">
        <button
          type="button"
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage <= 1}
          className="w-9 h-9 rounded-lg bg-surface-container-low text-on-surface-variant flex items-center justify-center hover:bg-surface-container transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          title="Previous Page"
        >
          <span className="material-symbols-outlined text-[18px]">
            chevron_left
          </span>
        </button>

        <button
          type="button"
          onClick={() => onPageChange(1)}
          className={`w-9 h-9 rounded-lg font-label-md text-label-md font-bold flex items-center justify-center transition-all cursor-pointer ${
            currentPage === 1
              ? "bg-primary-container text-on-primary shadow-sm"
              : "bg-surface-container-low text-on-surface hover:bg-surface-container"
          }`}
        >
          1
        </button>

        <button
          type="button"
          onClick={() => onPageChange(2)}
          className={`w-9 h-9 rounded-lg font-label-md text-label-md font-medium flex items-center justify-center transition-all cursor-pointer ${
            currentPage === 2
              ? "bg-primary-container text-on-primary shadow-sm"
              : "bg-surface-container-low text-on-surface hover:bg-surface-container"
          }`}
        >
          2
        </button>

        <button
          type="button"
          onClick={() => onPageChange(3)}
          className={`w-9 h-9 rounded-lg font-label-md text-label-md font-medium flex items-center justify-center transition-all cursor-pointer ${
            currentPage === 3
              ? "bg-primary-container text-on-primary shadow-sm"
              : "bg-surface-container-low text-on-surface hover:bg-surface-container"
          }`}
        >
          3
        </button>

        <span className="px-space-xs text-on-surface-variant text-xs">...</span>

        <button
          type="button"
          onClick={() => onPageChange(totalPages)}
          className={`w-9 h-9 rounded-lg font-label-md text-label-md font-medium flex items-center justify-center transition-all cursor-pointer ${
            currentPage === totalPages
              ? "bg-primary-container text-on-primary shadow-sm"
              : "bg-surface-container-low text-on-surface hover:bg-surface-container"
          }`}
        >
          {totalPages}
        </button>

        <button
          type="button"
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage >= totalPages}
          className="w-9 h-9 rounded-lg bg-surface-container-low text-on-surface flex items-center justify-center hover:bg-surface-container transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          title="Next Page"
        >
          <span className="material-symbols-outlined text-[18px]">
            chevron_right
          </span>
        </button>
      </div>
    </div>
  );
}
