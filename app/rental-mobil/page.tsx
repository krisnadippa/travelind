import React from "react";
import { Metadata } from "next";
import RentalPage, { metadata as rentalMetadata } from "@/app/rental/page";

export const metadata: Metadata = {
  ...rentalMetadata,
  title: "Rental Mobil & Kendaraan Bali - Lepas Kunci & Driver | Travelind",
};

export default RentalPage;
