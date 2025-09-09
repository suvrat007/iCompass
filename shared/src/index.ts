// Shared types and utilities for Jharkhand Connect
export interface Destination {
  id: string;
  name: string;
  slug: string;
  description: string;
  rating: number;
  imageUrl: string;
  location: {
    lat: number;
    lng: number;
  };
  culturalSignificance?: string;
  bestTimeToVisit?: string;
}

export interface Experience {
  id: string;
  title: string;
  description: string;
  type: 'cultural' | 'adventure' | 'nature' | 'spiritual';
  duration: string;
  difficulty: 'easy' | 'medium' | 'hard';
  price: number;
  currency: 'INR';
}

export interface MarketplaceItem {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: 'INR';
  category: 'handicraft' | 'textile' | 'jewelry' | 'food' | 'art';
  seller: {
    name: string;
    location: string;
    rating: number;
  };
  images: string[];
}

// Utility functions
export const formatPrice = (price: number, currency: string = 'INR'): string => {
  return `₹${price.toLocaleString('en-IN')}`;
};

export const formatRating = (rating: number): string => {
  return `${rating.toFixed(1)} ⭐`;
};

export const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

