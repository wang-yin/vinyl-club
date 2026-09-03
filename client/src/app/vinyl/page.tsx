"use client";

import { useState } from "react";
import VinylHero from "../sections/Hero/VinylHero";
import { MOCK_PRODUCTS } from "@/mocks/products";
import ProductCard from "@/components/cards/ProductCard";

type VinylGenre = "all" | "jazz" | "soul" | "rock" | "electronic" | "classical";

const GENRES: { value: VinylGenre; label: string }[] = [
  { value: "all", label: "All Genres" },
  { value: "jazz", label: "Jazz" },
  { value: "soul", label: "Soul & R&B" },
  { value: "rock", label: "Rock & Pop" },
  { value: "electronic", label: "Electronic" },
  { value: "classical", label: "Classical" },
];

const SORT_OPTIONS = [
  { value: "default", label: "Featured" },
  { value: "price-asc", label: "Price: Low–High" },
  { value: "price-desc", label: "Price: High–Low" },
  { value: "year-asc", label: "Oldest First" },
  { value: "year-desc", label: "Newest First" },
];

export default function Vinyl() {
  const [genre, setGenre] = useState<VinylGenre>("all");
  const [sort, setSort] = useState("default");

  const vinyl = MOCK_PRODUCTS.filter((p) => p.category === "vinyl");
  const filtered = vinyl
    .filter((p) => genre === "all" || p.genre === genre)
    .toSorted((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "year-asc") return a.year - b.year;
      if (sort === "year-desc") return b.year - a.year;
      return 0;
    });
  return (
    <>
      <VinylHero />
      <section className="py-16 px-8 max-w-7xl my-0 mx-auto">
        <div className="flex items-center justify-between mb-10 flex-wrap gap-6">
          <div className="flex flex-wrap gap-0">
            {GENRES.map((g, i) => (
              <button
                key={g.value}
                onClick={() => setGenre(g.value)}
                className={`py-2 px-4 font-sans text-[0.8125rem] ${genre === g.value ? "font-semibold bg-vibrant-amber text-bg" : "font-normal bg-transparent text-hurricane"} border border-solid border-noir last:border-r last:border-solid last:border-noir cursor-pointer transition-all duration-200 whitespace-nowrap ${genre !== g.value ? "hover:text-milk" : ""}`}
              >
                {g.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <span className="font-mono text-[0.7rem] tracking-[0.08em] text-hurricane">
              {filtered.length} {filtered.length === 1 ? "record" : "records"}
            </span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="font-sans text-[0.8125rem] bg-king-kong text-milk border border-solid border-noir py-2 px-3.5 cursor-pointer appearance-none bg-chevron-down bg-no-repeat bg-position-[right_0.75rem_center] pr-8"
            >
              {SORT_OPTIONS.map((O) => (
                <option key={O.value} value={O.value}>
                  {O.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="py-24 px-8 text-center">
            <p className="font-fraunces text-[1.25rem] italic text-hurricane">
              No records in this genre yet.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-px bg-noir border-noir">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}

        <div className="mt-20 flex flex-wrap items-center justify-between gap-8 border border-king-kong bg-twilight-zone p-12 ">
          <div>
            <p className="mb-3 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-yakitori">
              Understanding Condition
            </p>
            <h3 className="mb-2.5 font-serif text-[1.5rem] font-medium tracking-tight text-milk">
              Our Vinyl Grading Scale
            </h3>
            <p className="max-w-120 font-sans text-[0.875rem] leading-[1.7] text-hurricane">
              Every record is graded by our team using the Goldmine standard:
              Mint (M), Near Mint (NM/M−), Very Good Plus (VG+), Very Good (VG).
              We only sell VG+ and above.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            {[
              ["M", "Mint — unplayed, perfect"],
              ["NM", "Near Mint — barely played"],
              ["VG+", "Very Good Plus — light surface marks"],
            ].map(([grade, desc]) => (
              <div key={grade} className="flex items-center gap-4">
                <span className="w-9 shrink-0 font-mono text-[0.75rem] text-yakitori">
                  {grade}
                </span>
                <span className="font-sans text-[0.8125rem] text-hurricane">
                  {desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
