import Image from "next/image";
import Btn from "./Btn";

export default function Hero() {
  return (
    <section className="relative min-h-140 h-[calc(100vh-64px)] overflow-hidden flex items-end">
      <Image
        className="absolute inset-0 w-full h-full object-cover brightness-[0.38]"
        src="https://images.unsplash.com/photo-1601148071764-8c3f50e9ab20?w=1800&h=1000&fit=crop&auto=format"
        alt="Vinyl record player on a wooden table in warm light"
        fill
        priority
      ></Image>
      <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--color-bg)_0%,rgba(12,11,10,0.45)_55%,transparent_100%)]"></div>
      <div className="relative z-2 max-w-7xl my-0 mx-auto w-full pt-0 px-8 pb-20">
        <p className="text-vibrant-amber font-mono text-[0.7rem] mb-7 tracking-widest uppercase">
          01 — Premium Audio Goods · Est. 2019
        </p>
        <h1 className="text-[clamp(3rem,8vw,7.5rem)] text-milk font-fraunces leading-[0.9] tracking-[-0.035em] font-semibold max-w-205 mb-10">
          Hear it the
          <br />
          <em className="italic text-vibrant-amber">way it was</em>
          <br />
          meant to be.
        </h1>
        <p className="font-sans text-[1rem] max-w-105 leading-[1.65] mb-10 text-hurricane">
          Curated vinyl pressings and audiophile hardware for the listener who
          refuses to compromise.
        </p>
        <div className="flex gap-4 items-center flex-wrap">
          <Btn href="#shop">Explore All</Btn>
        </div>
      </div>
      <div className="absolute right-8 bottom-20 z-2 flex items-center gap-20 flex-col">
        <div className="w-px h-20 bg-[linear-gradient(to_bottom,transparent,var(--vibrant-amber))]"></div>
        <p className="font-mono text-[0.6rem] tracking-[0.2em] uppercase rotate-90 whitespace-nowrap text-hurricane">
          Scroll to Explore
        </p>
      </div>
    </section>
  );
}
