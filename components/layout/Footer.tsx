import React from "react";
import Link from "next/link";
import {
  productCategories,
  popularDestinations,
  paymentMethods,
  footerLegalLinks,
} from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-surface-container-highest pt-space-xl pb-space-lg">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-surface-container-highest">
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-primary-container flex items-center justify-center text-on-primary font-bold shadow-sm">
                <span className="material-symbols-outlined text-secondary-fixed text-[22px]">
                  explore
                </span>
              </div>
              <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-primary-container">
                Travelind
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Platform spesialis akomodasi private villa mewah, rental mobil &amp; motor terverifikasi lepas kunci, serta pengalaman tur autentik di seluruh penjuru Bali.
            </p>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-low border border-surface-container-highest font-label-caps text-label-caps font-bold text-on-surface-variant">
                <span className="material-symbols-outlined text-[14px] text-secondary">
                  verified
                </span>{" "}
                PT Travelind Wisata Nusantara
              </span>
            </div>
            <div className="flex flex-col gap-2 pt-1 font-body-sm text-body-sm text-on-surface-variant">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[18px] text-secondary shrink-0 mt-0.5">
                  location_on
                </span>
                <span>
                  Jl. Sunset Road No. 88, Seminyak, Kuta, Badung, Bali 80361
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-secondary shrink-0">
                  support_agent
                </span>
                <span>
                  Bantuan 24/7:{" "}
                  <a
                    className="font-semibold text-secondary hover:underline"
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +62 812-3456-7890 (WhatsApp)
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Product Categories */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="font-title-sm text-title-sm font-bold text-primary-container uppercase tracking-wider">
              Kategori Produk
            </h4>
            <ul className="flex flex-col gap-2 font-body-sm text-body-sm">
              {productCategories.map((item, idx) => (
                <li key={idx}>
                  <a
                    className="text-on-surface-variant hover:text-secondary transition-colors"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Bali Destinations */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-title-sm text-title-sm font-bold text-primary-container uppercase tracking-wider">
              Destinasi Populer Bali
            </h4>
            <ul className="flex flex-col gap-2 font-body-sm text-body-sm">
              {popularDestinations.map((dest, idx) => (
                <li key={idx}>
                  <a
                    className="text-on-surface-variant hover:text-secondary transition-colors"
                    href={dest.href}
                  >
                    {dest.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Payment Methods & Trust */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <h4 className="font-title-sm text-title-sm font-bold text-primary-container uppercase tracking-wider">
                Metode Pembayaran
              </h4>
              <div className="flex flex-wrap items-center gap-1.5">
                {paymentMethods.map((method, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-surface-container-low border border-surface-container-highest font-label-caps text-label-caps font-bold text-on-surface"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2 pt-2 border-t border-surface-container-highest">
              <div className="inline-flex items-center gap-2 text-body-sm font-body-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-[16px] text-secondary">
                  lock
                </span>
                <span className="font-medium">
                  Transaksi Terenkripsi 256-Bit SSL
                </span>
              </div>
              <div className="inline-flex items-center gap-2 text-body-sm font-body-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-[16px] text-secondary">
                  verified_user
                </span>
                <span className="font-medium">
                  Jaminan Unit Terverifikasi 100%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-body-sm text-body-sm text-on-surface-variant">
          <p className="text-center sm:text-left">
            © 2026 PT Travelind Wisata Nusantara. Hak Cipta Dilindungi.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-medium">
            {footerLegalLinks.map((link, idx) => (
              <a
                key={idx}
                className="hover:text-secondary transition-colors"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
