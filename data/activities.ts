import { Activity } from "@/types/travelind";

export const activityFilterTabs = [
  { id: "all", label: "Semua" },
  { id: "atv_rafting", label: "ATV & Rafting" },
  { id: "snorkeling_diving", label: "Snorkeling & Diving" },
  { id: "sunrise_trekking", label: "Sunrise Trekking" },
];

export const activities: Activity[] = [
  {
    id: "atv-quad-gorilla-cave",
    title: "ATV Quad Bike & Goa Gorilla Waterfall Ubud",
    location: "Ubud, Gianyar",
    durationBadge: "Durasi: 2 Jam",
    category: "atv_rafting",
    rating: 4.9,
    reviewCount: "840",
    description: "Termasuk makan siang buffet, loker mandi, & instruktur pendamping.",
    pricePerPerson: 375000,
    formattedPrice: "Rp 375.000",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCsrVHSRx5T423lHZa-ron4eMzeZX0vnU6WQKHTlULHg5aNET1XQ94zAWeb9Bm_ucOtSjvo8XH_4e20q2e5a6IN2F0SORPatdKX_G6DsSCi66tiBm8cl0jh3-GzCBOK0Dc9REuCamxQwVQxjp4oAEi4EftvCcVnJpxH7G27-2EM1cWRZfp1BLesQe8mnWxcgey-ty08Jc4gmrws5eiKM8n_H-gd_eofjTDbRzG0IuhFW042nkRch_CnaQ",
    imageAlt:
      "Muddy thrill ATV quad bike riders splashing through dark rock cave waterfall tunnel in Ubud jungle Bali, action adventure photography",
  },
  {
    id: "ayung-river-rafting",
    title: "Ayung River White Water Rafting Ubud",
    location: "Sungai Ayung, Ubud",
    durationBadge: "Durasi: 2.5 Jam",
    category: "atv_rafting",
    rating: 4.85,
    reviewCount: "1.2k",
    description: "Jeram grade 2-3 ramah pemula, pemandangan air terjun alami & ukiran tebing.",
    pricePerPerson: 275000,
    formattedPrice: "Rp 275.000",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAvguCvBSJlAroOvIa5P7sJ2GexCgJhpY_dpYDxK9MeFpVETu3D4XiyLh-GQWKLM-d6vcS9Xh-UBHfcc6kT2tl4BG0GTgwHHVf9hNzngDGedyQg2RX0qgveswbmuKfV5yYij9Vb9eDdhoyIBq4fAsUaNrcsrVEzw95VYqz4hoLJQYtW52vfh4dIlCdxf1OSkrc4Zr9LTjYOZtIMR1jydEnVwqrB3ZwMo1JXFkdMGXKbL4tIMusCWdWzDA",
    imageAlt:
      "Exciting white water rafting crew navigating gentle rapids along lush jungle carved stone walls of Ayung River Ubud Bali, high energy outdoor activity",
  },
  {
    id: "snorkeling-manta-bay",
    title: "Snorkeling Manta Bay & 3 Spot Nusa Penida",
    location: "Nusa Penida",
    durationBadge: "Full Day Tour",
    category: "snorkeling_diving",
    rating: 4.95,
    reviewCount: "650",
    description: "Termasuk speed boat PP Sanur, pemandu berenang, & dokumentasi GoPro HD.",
    pricePerPerson: 650000,
    formattedPrice: "Rp 650.000",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCQ3rfmYXYSRVuiG48SA3nJ80iLcD2KH48PxGHkTLquXrxzZHjKWPWKWcfJ8g5PjZtMZcHzqfztkIToz6ojyNNHZYbTQ2yrS7PhPnWpdIl_XD1ASXY96FmGhsal0sB9GUX5nWfEK6Sf3jPhjqi3Ws971aQeIlwmJEm-L3IG_RZlWguDqUvKrO-OgULvnUVjMFdyJqUzttPDjJnqPZForNh0HoT3VLa1PsO7MNrALaiBVyX7dqE4W7XDFw",
    imageAlt:
      "Majestic manta ray gliding through deep blue coastal waters of Nusa Penida Island Bali with snorkelers swimming above, sunlight rays through ocean water",
  },
  {
    id: "mount-batur-sunrise-trekking",
    title: "Mount Batur Sunrise Trekking & Sarapan Telur Vulkanik",
    location: "Kintamani, Bangli",
    durationBadge: "Durasi: 6 Jam",
    category: "sunrise_trekking",
    rating: 4.9,
    reviewCount: "910",
    description: "Termasuk senter kepala, pemandu lokal resmi, & sarapan di atas awan.",
    pricePerPerson: 420000,
    formattedPrice: "Rp 420.000",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDZpzf9EFloQ6L6HNRxiTn5eAKwFpba-SddGfNVkKu5OCu0kPXrWDKBqDyWKqfOeBzGghIj2_ShHhoJ3lmFblwqOEEKmAi73j7p5OJo_C2hrVCzXSibhjpFzshi8_JhMVNXRetSEdSttQYb-07LQpYIH8WxDXbz6fJTneBAogD58vOOIQ7VoUZ1x-J7YkhNIWMVVsM2SzoMUpPMHcrAJ8bGtWqXUF7jt0nO_4k_UvVAsTj1ZTwKWbFX_w",
    imageAlt:
      "Breathtaking golden orange sunrise above the clouds seen from Mount Batur volcanic summit Kintamani Bali, silhouettes of hikers celebrating the peak",
  },
];
