export interface Villa {
  id: string;
  name: string;
  location: string;
  tag: string;
  rating: number;
  reviewCount: number;
  statusBadge: string;
  features: string;
  pricePerNight: number;
  formattedPrice: string;
  imageUrl: string;
  imageAlt: string;
}

export type VehicleCategory = 'car' | 'motorcycle';

export interface Vehicle {
  id: string;
  name: string;
  brand: string;
  category: string;
  type: VehicleCategory;
  tag: string;
  rating: number;
  specs: Array<{
    icon: string;
    label: string;
  }>;
  pricePerDay: number;
  formattedPrice: string;
  imageUrl: string;
  imageAlt: string;
  areas: string[];
}

export interface Activity {
  id: string;
  title: string;
  location: string;
  durationBadge: string;
  category: 'atv_rafting' | 'snorkeling_diving' | 'sunrise_trekking' | 'all';
  rating: number;
  reviewCount: string;
  description: string;
  pricePerPerson: number;
  formattedPrice: string;
  imageUrl: string;
  imageAlt: string;
}

export interface PromoCardData {
  id: string;
  badge: string;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  imageUrl: string;
  imageAlt: string;
  cardStyle: 'secondary-fixed' | 'surface-high' | 'surface-low';
}

export interface CuratedDestination {
  id: string;
  tag: string;
  title: string;
  description: string;
  linkUrl: string;
}

export interface AccommodationCategory {
  id: string;
  title: string;
  count: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  linkUrl: string;
}

export interface TrustItem {
  icon: string;
  title: string;
  description: string;
}

export interface VillaSpec {
  icon: string;
  text: string;
}

export interface VillaCatalogItem {
  id: string;
  name: string;
  location: string;
  area: string;
  type: string;
  rating: number;
  reviewCount: number;
  badge: string;
  secondaryBadge?: string;
  photoCount: string;
  specs: VillaSpec[];
  perks: string[];
  originalPrice?: number;
  formattedOriginalPrice?: string;
  discountPercentage?: number;
  pricePerNight: number;
  formattedPrice: string;
  priceNote: string;
  imageUrl: string;
  imageAlt: string;
  hasPrivatePool: boolean;
  hasButler: boolean;
  categoryTag: "private_pool" | "beachfront" | "family" | "romantic" | "all";
}

