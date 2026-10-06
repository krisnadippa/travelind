"use client";

import React, { useState } from "react";

export default function BookerInfoForm() {
  const [salutation, setSalutation] = useState("Tuan / Mr.");
  const [bookerName, setBookerName] = useState("Arief Rahman Dewanto");
  const [phone, setPhone] = useState("812-9844-3321");
  const [email, setEmail] = useState("arief.dewanto@company.co.id");
  const [bookingFor, setBookingFor] = useState<"self" | "other">("self");
  const [idType, setIdType] = useState("WNI - Indonesia (KTP Elektronik)");
  const [idNumber, setIdNumber] = useState("3174052809910004");
  const [guest2, setGuest2] = useState("Maya Indriastuti");
  const [guest3, setGuest3] = useState("");

  return (
    <section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-lg">
      {/* Card Header Banner */}
      <div className="flex items-center justify-between pb-space-sm bg-surface-container-low -mx-space-lg -mt-space-lg p-space-lg rounded-t-xl">
        <div className="flex items-center gap-space-sm">
          <span className="w-9 h-9 rounded-lg bg-secondary-container text-primary-container flex items-center justify-center">
            <span className="material-symbols-outlined text-[20px]">badge</span>
          </span>
          <div>
            <h2 className="font-headline-lg text-body-md text-on-surface font-bold text-base sm:text-lg">
              Informasi Pemesan &amp; Tamu Utama Menginap
            </h2>
            <p className="font-label-md text-label-md text-secondary text-xs sm:text-sm">
              Data verifikasi check-in villa dan penerima e-voucher resmi Travelind.
            </p>
          </div>
        </div>
        <span className="hidden sm:inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-container-lowest text-primary font-label-md text-label-md font-semibold text-xs">
          <span className="material-symbols-outlined text-[16px]">lock</span>{" "}
          Terenkripsi 256-Bit
        </span>
      </div>

      {/* Info Alert Box */}
      <div className="p-space-md rounded-lg bg-secondary-fixed text-on-secondary-fixed flex items-start gap-space-sm">
        <span className="material-symbols-outlined text-primary-container shrink-0 text-[20px]">
          mark_chat_read
        </span>
        <p className="font-label-md text-label-md text-on-secondary-fixed-variant leading-relaxed text-xs sm:text-sm">
          Konfirmasi pemesanan, Google Maps pin villa, dan voucher digital instan dikirim otomatis ke{" "}
          <strong className="text-on-secondary-fixed">WhatsApp Prioritas</strong> dan{" "}
          <strong className="text-on-secondary-fixed">Email</strong> pemesan di bawah ini.
        </p>
      </div>

      {/* Bagian A: Data Kontak Pemesan */}
      <div className="flex flex-col gap-space-md border-b border-surface-container-highest pb-space-lg">
        <div className="flex items-center justify-between">
          <h3 className="font-label-md text-label-md text-on-surface font-bold flex items-center gap-space-xs text-sm sm:text-base">
            <span className="material-symbols-outlined text-primary-container text-[18px]">
              contact_mail
            </span>
            <span>Bagian A: Data Kontak Pemesan (Penerima Tiket &amp; Notifikasi)</span>
          </h3>
          <span className="text-xs text-secondary">* Wajib diisi</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
          {/* Full Name */}
          <div className="flex flex-col gap-space-xs md:col-span-2">
            <label className="font-label-md text-label-md text-on-surface font-semibold flex items-center justify-between text-xs sm:text-sm">
              <span>
                Nama Lengkap Pemesan <span className="text-error">*</span>
              </span>
              <span className="text-secondary font-normal text-xs">
                Sesuai KTP / Paspor
              </span>
            </label>
            <div className="flex gap-space-xs">
              <select
                value={salutation}
                onChange={(e) => setSalutation(e.target.value)}
                className="w-28 px-space-sm py-space-sm rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-label-md border border-outline-variant/40 focus:outline-none shadow-sm cursor-pointer text-sm"
              >
                <option>Tuan / Mr.</option>
                <option>Nyonya / Mrs.</option>
                <option>Nona / Ms.</option>
              </select>
              <input
                type="text"
                value={bookerName || ""}
                onChange={(e) => setBookerName(e.target.value)}
                placeholder="Nama lengkap pemesan"
                className="flex-1 px-space-md py-space-sm rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-label-md border border-outline-variant/40 focus:bg-surface-bright focus:outline-none shadow-sm text-sm"
              />
            </div>
          </div>

          {/* WhatsApp Phone */}
          <div className="flex flex-col gap-space-xs">
            <label className="font-label-md text-label-md text-on-surface font-semibold flex items-center justify-between text-xs sm:text-sm">
              <span>
                Nomor WhatsApp Aktif <span className="text-error">*</span>
              </span>
              <span className="inline-flex items-center gap-space-xs px-space-xs py-0.5 text-tertiary-container bg-surface-container-low rounded text-[10px] font-bold">
                <span className="material-symbols-outlined text-[12px]">
                  verified
                </span>{" "}
                Terverifikasi
              </span>
            </label>
            <div className="flex items-center rounded-lg bg-surface-container-low px-space-sm shadow-sm border border-outline-variant/40">
              <span className="font-label-md text-label-md text-on-surface font-bold pr-space-xs flex items-center gap-space-xs text-sm">
                <span className="w-4 h-3 bg-red-600 inline-block rounded-xs shadow-xs" />{" "}
                +62
              </span>
              <input
                type="tel"
                value={phone || ""}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="812-xxxx-xxxx"
                className="w-full py-space-sm bg-transparent font-body-md text-label-md text-on-surface focus:outline-none text-sm"
              />
            </div>
          </div>

          {/* Email Address */}
          <div className="flex flex-col gap-space-xs">
            <label className="font-label-md text-label-md text-on-surface font-semibold flex items-center justify-between text-xs sm:text-sm">
              <span>
                Alamat Email <span className="text-error">*</span>
              </span>
              <span className="inline-flex items-center gap-space-xs px-space-xs py-0.5 text-primary bg-primary-fixed rounded text-[10px] font-bold">
                Pengiriman E-Voucher
              </span>
            </label>
            <input
              type="email"
              value={email || ""}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@domain.com"
              className="w-full px-space-md py-space-sm rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-label-md border border-outline-variant/40 focus:bg-surface-bright focus:outline-none shadow-sm text-sm"
            />
          </div>
        </div>
      </div>

      {/* Bagian B: Rincian Tamu Menginap */}
      <div className="flex flex-col gap-space-md">
        <div className="flex items-center justify-between">
          <h3 className="font-label-md text-label-md text-on-surface font-bold flex items-center gap-space-xs text-sm sm:text-base">
            <span className="material-symbols-outlined text-primary-container text-[18px]">
              person_pin
            </span>
            <span>Bagian B: Rincian Tamu Menginap (Check-in Utama)</span>
          </h3>
          <span className="text-xs text-secondary">
            Villa Seminyak Oasis Tropical
          </span>
        </div>

        {/* Radio Option */}
        <div className="flex flex-col sm:flex-row gap-space-md">
          <label
            className={`flex items-center gap-space-sm p-space-sm rounded-lg cursor-pointer flex-1 transition-all border ${
              bookingFor === "self"
                ? "bg-secondary-fixed/50 border-primary-container shadow-xs"
                : "bg-surface-container-low border-transparent"
            }`}
          >
            <input
              type="radio"
              name="booking_for"
              value="self"
              checked={bookingFor === "self"}
              onChange={() => setBookingFor("self")}
              className="w-4 h-4 text-primary-container accent-primary-container cursor-pointer"
            />
            <div className="flex flex-col">
              <span className="font-label-md text-label-md text-on-surface font-semibold text-sm">
                Saya memesan untuk diri sendiri
              </span>
              <span className="font-body-md text-label-md text-secondary text-xs">
                Pemesan juga sebagai tamu check-in utama di villa
              </span>
            </div>
          </label>

          <label
            className={`flex items-center gap-space-sm p-space-sm rounded-lg cursor-pointer flex-1 transition-all border ${
              bookingFor === "other"
                ? "bg-secondary-fixed/50 border-primary-container shadow-xs"
                : "bg-surface-container-low border-transparent"
            }`}
          >
            <input
              type="radio"
              name="booking_for"
              value="other"
              checked={bookingFor === "other"}
              onChange={() => setBookingFor("other")}
              className="w-4 h-4 text-primary-container accent-primary-container cursor-pointer"
            />
            <div className="flex flex-col">
              <span className="font-label-md text-label-md text-on-surface font-semibold text-sm">
                Saya memesan untuk orang lain
              </span>
              <span className="font-body-md text-label-md text-secondary text-xs">
                Tamu menginap berbeda dengan nama pemesan
              </span>
            </div>
          </label>
        </div>

        {/* Identity Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
          <div className="flex flex-col gap-space-xs">
            <label className="font-label-md text-label-md text-on-surface font-semibold text-xs sm:text-sm">
              Kewarganegaraan &amp; Tipe Identitas <span className="text-error">*</span>
            </label>
            <select
              value={idType || "WNI - Indonesia (KTP Elektronik)"}
              onChange={(e) => setIdType(e.target.value)}
              className="w-full px-space-md py-space-sm rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-label-md border border-outline-variant/40 focus:bg-surface-bright focus:outline-none shadow-sm cursor-pointer text-sm"
            >
              <option>WNI - Indonesia (KTP Elektronik)</option>
              <option>WNI - Paspor Indonesia</option>
              <option>WNA / Foreigner - International Passport</option>
              <option>KITAS / KITAP Holder</option>
            </select>
          </div>

          <div className="flex flex-col gap-space-xs">
            <label className="font-label-md text-label-md text-on-surface font-semibold text-xs sm:text-sm">
              Nomor Identitas (NIK / Paspor) <span className="text-error">*</span>
            </label>
            <input
              type="text"
              value={idNumber || ""}
              onChange={(e) => setIdNumber(e.target.value)}
              placeholder="16 digit NIK atau nomor paspor"
              className="w-full px-space-md py-space-sm rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-label-md border border-outline-variant/40 focus:bg-surface-bright focus:outline-none shadow-sm text-sm"
            />
          </div>
        </div>

        {/* Companion Guests */}
        <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-space-sm">
          <div className="flex items-center justify-between">
            <span className="font-label-md text-label-md text-on-surface font-bold flex items-center gap-space-xs text-xs sm:text-sm">
              <span className="material-symbols-outlined text-primary text-[18px]">
                group_add
              </span>
              Daftar Tamu Pendamping (Total 6 Tamu: 5 Dewasa, 1 Anak)
            </span>
            <span className="px-space-xs py-0.5 rounded bg-surface-container-highest text-secondary text-[10px] font-bold uppercase">
              Opsional Sekarang
            </span>
          </div>

          <p className="font-body-md text-label-md text-secondary text-xs leading-relaxed">
            Tamu utama bertanggung jawab atas reservasi seluruh rombongan. Anda dapat mencantumkan nama 1 tamu dewasa pendamping di bawah ini, atau melengkapinya nanti saat disambut Butler saat proses check-in.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm">
            <input
              type="text"
              value={guest2 || ""}
              onChange={(e) => setGuest2(e.target.value)}
              placeholder="Nama Tamu Dewasa 2 (Opsional)"
              className="w-full px-space-md py-space-xs rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-label-md border border-outline-variant/40 text-xs focus:outline-none"
            />
            <input
              type="text"
              value={guest3 || ""}
              onChange={(e) => setGuest3(e.target.value)}
              placeholder="Nama Tamu Dewasa 3 (Opsional)"
              className="w-full px-space-md py-space-xs rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-label-md border border-outline-variant/40 text-xs focus:outline-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
