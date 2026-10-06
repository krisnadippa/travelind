import { Vehicle } from "@/types/travelind";

export const vehicleAreaTabs = [
  { id: "all", label: "Semua Area Bali" },
  { id: "seminyak-canggu", label: "Seminyak & Canggu" },
  { id: "ubud-sanur", label: "Ubud & Sanur" },
  { id: "uluwatu-jimbaran", label: "Uluwatu & Jimbaran" },
  { id: "airport", label: "Bandara Ngurah Rai" },
];

export const vehicles: Vehicle[] = [
  {
    id: "innova-zenix-hybrid-2024",
    name: "Innova Zenix Hybrid 2024",
    brand: "Toyota",
    category: "Mobil Keluarga",
    type: "car",
    tag: "Lepas Kunci / Driver",
    rating: 4.9,
    specs: [
      { icon: "airline_seat_recline_normal", label: "7 Kursi" },
      { icon: "settings", label: "Matic" },
      { icon: "ac_unit", label: "AC Dingin" },
    ],
    pricePerDay: 850000,
    formattedPrice: "Rp 850.000",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBpxEXafwxLoJ_UIDvwqlVfHql_pOZhOTjGuWcY_Fy8imfuHI5hw8y9UCw36Ltmkox9mqxIE2T5Or6JLI3FeJNsUc0foIPiW4isPEGeeIs3kPDqhRoG0CfdC21SWBURqG0KSvy5IFQZ4Bi-lU3oKHlKcJMBQxdaNver-eiZff-2Vn8YyrCnkO200v0-BSLrr50bOU7if5ey2vHGVNhs1Q4-YEPKMjzAAUjYabSxQv4yuW4FsaQFFyC2pA",
    imageAlt:
      "Studio commercial angle photo of white Toyota Innova Zenix Hybrid minivan isolated against neutral studio background, crisp modern Indonesian family car",
    areas: ["all", "seminyak-canggu", "ubud-sanur", "uluwatu-jimbaran", "airport"],
  },
  {
    id: "brio-rs-automatic-2024",
    name: "Brio RS Automatic 2024",
    brand: "Honda",
    category: "City Compact",
    type: "car",
    tag: "Lepas Kunci",
    rating: 4.8,
    specs: [
      { icon: "airline_seat_recline_normal", label: "5 Kursi" },
      { icon: "local_gas_station", label: "Sangat Irit" },
      { icon: "bluetooth", label: "Audio BT" },
    ],
    pricePerDay: 280000,
    formattedPrice: "Rp 280.000",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDuQWuHxgz7CRiftIsHzHb3P3Wei0XrM_hza-M0KEBpVmmYHZQ-DMZEOVB2ATeU3GGFAjmwmJebkaVfgVHOq6QQ-2i5FP9kD_fotNRRR2XKh27NzXFVwjzjTnt87OZoyf2ZaUBol4gqgboqffhOm8qjrfT9RqDkLYv2DNBck654Cdl7ySHuuwTvon8OCpJdmc_Lb_9Iulk8hC1G-fyQoBQT3wcVLqzQjpjSb6qlZPkiehfqCc2hN8jqTw",
    imageAlt:
      "Clean yellow and modern compact Honda Brio hatchback parked on smooth tarmac, bright crisp Indonesian city car rental photography",
    areas: ["all", "seminyak-canggu", "airport"],
  },
  {
    id: "yamaha-nmax-155-abs",
    name: "Yamaha NMAX 155 ABS",
    brand: "Yamaha",
    category: "Maxi Matic",
    type: "motorcycle",
    tag: "Free Antar Hotel",
    rating: 4.95,
    specs: [
      { icon: "sports_motorsports", label: "2 Helm Bersih" },
      { icon: "phone_android", label: "Holder HP" },
    ],
    pricePerDay: 130000,
    formattedPrice: "Rp 130.000",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAR75256_q61_iKEphhixQYg6wNnE587jY2BLYT-5Eyzb8bVVfnEM9tWel__zB6q21zjbUccpkx4Ui5GvUb2M1oIOY55jKju64xB1Nzts2r_Zin9zsgGQOjBJX2RjkG8CaWG1WQchKxHoW7TENVDjQIWaVlhUOT4G6LoWcJR3K-DL-8oeoYRrQbtjZcxPeO7ujnJZlu501BRsdP5oHSSAOwimUbKUTI5YxIkxB4wrTWFiZTvcPXL7hH4A",
    imageAlt:
      "Matte black modern Yamaha NMAX 155 maxi scooter parked by Bali beach road, sleek sharp lighting, Indonesian travel motorcycle rental",
    areas: ["all", "seminyak-canggu", "ubud-sanur", "uluwatu-jimbaran"],
  },
  {
    id: "vespa-sprint-150-i-get",
    name: "Vespa Sprint 150 i-Get",
    brand: "Piaggio",
    category: "Vespa Klasik",
    type: "motorcycle",
    tag: "Retro Style",
    rating: 4.9,
    specs: [
      { icon: "sports_motorsports", label: "2 Helm Retro" },
      { icon: "umbrella", label: "Jas Hujan" },
    ],
    pricePerDay: 220000,
    formattedPrice: "Rp 220.000",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAvMRjY27NTIw2ZcoMVc4ETEdLIiUSvPBQbtcTyRKCo1Kes24TpAOrnRP_agODObjouDFO74S8nqZIJ1RTHc0brdrbDC3z8UKNo4Q0RjOzWLxK9DI7FJxL74EA3E14O2FGnVAcKNND2ZJD0boUjG6hpsGvSNh3bntrZr7p9tc4To7CEsgviRnsSWldG0_gkKa1GSF9GRcpo8EcM03fOuY-NxXpGltmMYQhYVlsUBPI6ZK1vHHVdiMXl9w",
    imageAlt:
      "Classic modern mint green Vespa Sprint 150 scooter parked in front of tropical aesthetic cafe in Canggu, bright lifestyle Bali photo",
    areas: ["all", "seminyak-canggu", "ubud-sanur"],
  },
];
