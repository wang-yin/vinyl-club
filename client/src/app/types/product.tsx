export type Category = "all" | "vinyl" | "hardware";

export interface Product {
  id: number;
  category: "vinyl" | "hardware";
  title: string;
  artist: string;
  genre?: string;
  hwType?: string;
  label: string;
  year: number;
  price: number;
  image: string;
  description: string;
  badge: string | null;
}
