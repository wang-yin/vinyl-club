"use client";

import NavLink from "./NavLink";
import { FiShoppingCart } from "react-icons/fi";
import { useCartStore } from "@/app/hooks/useCartStore";
import Link from "next/link";

export default function Nav() {
  const totalItems = useCartStore((state) => state.getTotalItems());
  const openCart = useCartStore((state) => state.openCart);
  return (
    <nav className="sticky top-0 z-50 border-b-noir bg-raven backdrop-blur-md">
      <div className="flex justify-between max-w-7xl my-0 mx-auto py-0 px-8 items-center h-16 text-white">
        <Link
          href="/"
          className="font-fraunces text-[1.375rem] font-semibold no-underline tracking-tight text-milk"
        >
          GROOVEHAUS
        </Link>
        <div className="flex gap-8 items-center">
          {["Vinyl", "Hardware", "About"].map((label) => (
            <NavLink key={label} href={`/${label.toLowerCase()}`}>
              {label}
            </NavLink>
          ))}
        </div>
        <button
          className="relative flex items-center gap-2 py-2 px-4.5 bg-transparent border border-noir text-milk font-mono text-[0.7rem] tracking-widest transition-colors duration-200 hover:text-vibrant-amber hover:border-vibrant-amber cursor-pointer"
          onClick={openCart}
        >
          <FiShoppingCart size={14} />
          CART
          {totalItems > 0 && (
            <span className="absolute -top-1.75 -right-1.75 w-4.5 h-4.5 rounded-full bg-vibrant-amber text-noir text-[0.6rem] font-bold flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}
