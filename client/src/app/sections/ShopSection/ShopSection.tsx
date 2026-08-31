"use client";

import { useState } from "react";
import { MOCK_PRODUCTS } from "@/mocks/products";
import ProductCard from "./ProductCard";
import { Category } from "@/app/types/product";
import GoldLink from "@/components/Button/GoldLink";
import OutlineLink from "@/components/Button/OutlineLink";

export default function ShopSection() {
  const [category, setCategory] = useState<Category>("all");

  const tabs: { value: Category; label: string }[] = [
    { value: "all", label: "All Items" },
    { value: "vinyl", label: "Vinyl Records" },
    { value: "hardware", label: "Audio Hardware" },
  ];

  const filteredProducts = MOCK_PRODUCTS.filter((product) => {
    if (category === "all") return true;
    return product.category === category;
  });

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto my-0">
      <div className="flex items-end justify-between mb-12 flex-wrap gap-8">
        <div>
          <p className="text-vibrant-amber font-mono text-[0.7rem] mb-4 tracking-widest uppercase">
            02 — The Collection
          </p>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-[-0.035em] leading-none font-fraunces">
            Curated for
            <br />
            <em className="italic">serious listeners.</em>
          </h2>
        </div>
        <div className="flex border border-noir">
          {tabs.map((tab, i) => (
            <button
              key={tab.value}
              className={`py-2.5 px-5 font-sans text-[0.8125rem] tracking-wide cursor-pointer transition-all duration-200 whitespace-nowrap ${
                category === tab.value
                  ? "font-semibold bg-vibrant-amber text-bg"
                  : "font-normal bg-transparent text-hurricane hover:text-milk"
              } ${i < tabs.length - 1 ? "border-r border-noir" : ""}`}
              onClick={() => setCategory(tab.value)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] bg-noir border border-noir gap-px">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-12">
        <GoldLink href="/vinyl">Browse All Vinyl</GoldLink>
        <OutlineLink href="/hardware">Browse Hardware</OutlineLink>
      </div>
    </section>
  );
}
