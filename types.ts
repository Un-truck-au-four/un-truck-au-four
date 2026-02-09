export interface MenuItem {
  id: string;
  name: string;
  price: number | string; // String allowed for range (e.g., "9€ - 10€") or complex pricing
  ingredients?: string;
  image: string; // Path to image
  tag?: string; // Optional tag like "Nouveau", "Végé"
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}