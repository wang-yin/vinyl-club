"use client";

import HardwareHero from "../sections/Hero/HardwareHero";
import { useState } from "react";
import { MOCK_PRODUCTS } from "@/mocks/products";
import ProductCard from "@/components/cards/ProductCard";

type HardwareType = "all" | "turntable" | "amplifier" | "speaker" | "accessory";

const TYPES: { value: HardwareType; label: string }[] = [
  { value: "all", label: "All Categories" },
  { value: "turntable", label: "Turntables" },
  { value: "amplifier", label: "Amplifiers" },
  { value: "speaker", label: "Speakers" },
  { value: "accessory", label: "Accessories" },
];

const SYSTEMS = [
  {
    name: "Starter System",
    price: "$827",
    items: [
      "Audio-Technica AT-LP120XUSB",
      "Cambridge Audio AXR100D",
      "ELAC Debut 2.0 B6.2",
    ],
    desc: "Everything you need to start your analog journey. A balanced, musical system with no compromises.",
    tag: "Best Value",
  },
  {
    name: "Audiophile System",
    price: "$1,773",
    items: [
      "Pro-Ject Debut Carbon EVO",
      "Marantz PM6007",
      "Q Acoustics Monitor 100",
    ],
    desc: "A serious upgrade path. Each component rewards better source material with noticeably improved sound.",
    tag: "Recommended",
  },
  {
    name: "Reference System",
    price: "$2,673",
    items: ["Rega Planar 3", "Marantz PM6007", "Q Acoustics Monitor 100"],
    desc: "For the committed listener. The Rega Planar 3 extracts detail most turntables simply cannot reach.",
    tag: "Top Tier",
  },
];

export default function Hardware() {
  const [hwType, setHwType] = useState<HardwareType>("all");

  const hardware = MOCK_PRODUCTS.filter((p) => p.category === "hardware");
  const filtered = hardware.filter(
    (p) => hwType === "all" || p.hwType === hwType,
  );
  return (
    <>
      <HardwareHero />
      <section className="py-16 px-8 max-w-7xl my-0 mx-auto">
        <div className="flex items-center justify-between mb-10 flex-wrap gap-6">
          <div className="flex flex-wrap gap-0">
            {TYPES.map((t) => (
              <button
                key={t.value}
                onClick={() => setHwType(t.value)}
                className={`py-2 px-4 font-sans text-[0.8125rem] ${hwType === t.value ? "font-semibold bg-vibrant-amber text-bg" : "font-normal bg-transparent text-hurricane"} border border-solid border-noir last:border-r last:border-solid last:border-noir cursor-pointer transition-all duration-200 whitespace-nowrap ${hwType !== t.value ? "hover:text-milk" : ""}`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <span className="font-mono text-[0.7rem] tracking-[0.08em] text-hurricane">
              {filtered.length} {filtered.length === 1 ? "record" : "records"}
            </span>
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
      </section>
      <section className="border border-noir py-24 px-8">
        <div className="max-w-7xl my-0 mx-auto">
          <p className="font-mono text-[0.7rem] tracking-widest text-vibrant-amber mb-4 uppercase">
            Don't know where to start?
          </p>
          <h2 className="font-fraunces text-[clamp(1.75rem,3.5vw,3rem)] font-semibold tracking-[-0.03em] mb-12 leading-[1.05]">
            Curated
            <br />
            <em className="italic">complete systems.</em>
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-px bg-noir">
            {SYSTEMS.map((sys) => (
              <div key={sys.name} className="p-10 bg-king-kong">
                <div className="flex justify-between items-start mb-6">
                  <span className="font-mono text-[0.65rem] tracking-widest text-vibrant-amber uppercase border border-noir py-1 px-2.5">
                    {sys.tag}
                  </span>
                  <span className="font-mono text-[1rem] text-milk">
                    {sys.price}
                  </span>
                </div>
                <h3 className="font-fraunces text-[1.375rem] font-medium mb-3 tracking-widest">
                  {sys.name}
                </h3>
                <p className="font-sans text-[0.8125rem] text-hurricane leading-[1.7] mb-6">
                  {sys.desc}
                </p>
                <ul className="list-none mb-8">
                  {sys.items.map((item) => (
                    <li
                      key={item}
                      className="font-sans text-[0.8125rem] text-hurricane py-2 border-b border-noir flex items-center gap-2.5"
                    >
                      <span className="w-1 h-1 rounded-full bg-vibrant-amber shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="w-full p-3 bg-transparent border border-noir text-fg font-sans text-[0.8125rem] font-medium cursor-pointer transition-all duration-200 tracking-[0.04em] hover:border-vibrant-amber hover:text-vibrant-amber">
                  View System Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
