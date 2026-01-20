import React from 'react';

export interface MenuItem {
  name: string;
  description: string;
  image: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  items: MenuItem[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface GeneratedMenu {
  title: string;
  description: string;
  starters: string[];
  mainCourses: string[];
  desserts: string[];
  estimatedPriceRange: string;
  chefNote: string;
}

export interface EventDetails {
  eventType: string;
  guestCount: number;
  season: string;
  preferences: string;
}