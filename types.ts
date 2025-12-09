export type Language = 'de' | 'en';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
}

export interface NavLink {
  path: string;
  label: string;
}

export interface Translations {
  [key: string]: {
    de: string;
    en: string;
  }
}