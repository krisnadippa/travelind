import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Travelind - Reservasi Villa Mewah, Rental Kendaraan & Tur Bali",
  description:
    "Reservasi villa privat, rental armada mobil & motor terverifikasi, serta tur autentik terbaik di Bali dengan jaminan harga transparan.",
  keywords: [
    "Travelind",
    "Sewa Villa Bali",
    "Rental Mobil Bali",
    "Rental Motor Bali",
    "Tur Nusa Penida",
    "Villa Seminyak",
    "Villa Ubud",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="bg-surface font-body-md text-on-surface antialiased">
        {children}
      </body>
    </html>
  );
}
