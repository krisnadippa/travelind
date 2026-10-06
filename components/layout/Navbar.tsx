"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { headerNavLinks } from "@/data/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface-container-lowest border-b border-surface-container-highest shadow-[0_1px_2px_rgba(10,37,64,0.04)]">
      <div className="h-20 max-w-[1280px] mx-auto px-6 lg:px-12 flex items-center justify-between gap-space-md">
        {/* Logo & Desktop Nav */}
        <div className="flex items-center gap-space-lg">
          <Link
            className="flex items-center gap-space-sm"
            data-path="villas-and-stays"
            href="/"
          >
            <div className="w-9 h-9 rounded-xl bg-primary-container flex items-center justify-center text-on-primary font-headline-md font-bold">
              <span className="material-symbols-outlined text-secondary-fixed text-[22px]">
                explore
              </span>
            </div>
            <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-primary-container">
              Travelind
            </span>
          </Link>

          <nav
            className="hidden xl:flex items-center gap-space-md ml-space-sm"
            data-active-classes="text-secondary border-b-2 border-secondary font-semibold"
          >
            {headerNavLinks.map((link) => {
              const isActive =
                link.href === "/villas"
                  ? pathname.startsWith("/villas")
                  : link.href === "/rental"
                  ? pathname.startsWith("/rental")
                  : pathname === "/" && link.path === "villas-and-stays" && !pathname.startsWith("/villas")
                  ? false
                  : pathname === link.href;

              return (
                <Link
                  key={link.path}
                  href={link.href}
                  className={`py-space-sm font-body-md text-body-md transition-colors ${
                    isActive
                      ? "text-secondary border-b-2 border-secondary font-semibold"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-space-sm">
          <button
            className="hidden sm:flex items-center gap-space-xs px-space-sm py-space-xs rounded-full border border-surface-container-highest bg-surface hover:bg-surface-container hover:text-on-surface text-on-surface-variant font-body-sm text-body-sm transition-colors cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-[16px]">
              language
            </span>
            <span>IDR (Rp) · ID</span>
          </button>

          <a
            className="hidden md:inline-block px-space-sm py-space-xs text-on-surface-variant hover:text-on-surface font-title-sm text-title-sm transition-colors"
            data-path="pusat-bantuan"
            href="#bantuan"
          >
            Bantuan
          </a>

          <a
            className="inline-flex items-center justify-center px-space-md py-space-sm rounded-full text-on-primary hover:bg-primary font-title-sm text-title-sm font-semibold transition-colors shadow-none bg-secondary"
            data-path="auth-masuk-daftar"
            href="#auth"
          >
            Masuk / Daftar
          </a>

          <div className="flex items-center ml-space-xs pl-space-xs border-l border-surface-container-highest">
            <img
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover ring-1 ring-surface-container-highest"
              src="https://lh3.googleusercontent.com/aida/AEtjO1XImIVuFdD4v3qX_nSjxA2y_kZUOnfizU0I72C7oMvv-a97nRI_ssOLC16AtCjdrji68KOYj_QcD7VIg3-G5SzRgKojYucpDMrBNlx77vvHXjFrh1Ch1z3pTvnjwzNOdrTlHFl-dVZr7J7CTEO6tFTUOHfEObPx9vvsw757Pyds5x7HPtFYpIOzDrabBtG6nIuGWgrjFuTXkDcLlIQXcwL32BsCDss3EruEld5Jwk2jgUE_Bo9Aa5-q3VhGWb9nOjGYDM_y0lXW-w"
            />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-on-surface-variant hover:text-on-surface focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-surface-container-lowest border-b border-surface-container-highest px-6 py-4 flex flex-col gap-3 shadow-lg">
          {headerNavLinks.map((link) => {
            const isActive =
              link.href === "/villas"
                ? pathname.startsWith("/villas")
                : link.href === "/rental"
                ? pathname.startsWith("/rental")
                : pathname === "/" && link.path === "villas-and-stays" && !pathname.startsWith("/villas")
                ? false
                : pathname === link.href;

            return (
              <Link
                key={link.path}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-secondary font-semibold"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-2 border-t border-surface-container-highest flex items-center justify-between text-xs text-on-surface-variant">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">
                language
              </span>
              IDR (Rp) · ID
            </span>
            <a href="#bantuan" className="font-semibold text-secondary">
              Pusat Bantuan
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
