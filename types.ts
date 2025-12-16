export enum Category {
  ALL = 'Alle',
  FASHION = 'Fashion',
  TECH = 'Tech',
  BEAUTY = 'Beauty',
  GAMING = 'Gaming',
  VIRAL = 'Viral',
  HOME = 'Home',
}

export interface Deal {
  id: string;
  title: string;
  shopName: string;
  image: string;
  priceOld: number;
  priceNew: number;
  discountPercentage: number;
  category: Category;
  isHot?: boolean; // Trending
  isNew?: boolean;
  expiresAt?: string; // ISO date string
  description?: string;
  highlights?: string[];
  link: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
}

export interface FilterState {
  category: Category;
  maxPrice: number;
  onlyToday: boolean;
  freeShipping: boolean;
}