export type Category = "all" | "vinyl" | "hardware";

export interface Product {
  id: number;
  category: "vinyl" | "hardware";
  title: string;
  artist: string;
  label: string;
  year: number;
  price: number;
  image: string;
  badge: string | null;
}
