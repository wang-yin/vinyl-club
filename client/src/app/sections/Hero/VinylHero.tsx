import Image from "next/image";

export default function VinylHero() {
  return (
    <section className="relative h-95 overflow-hidden flex items-end">
      <Image
        src="https://images.unsplash.com/photo-1631692994457-622f31a30997?w=1800&h=700&fit=crop&auto=format"
        alt="A room filled with vinyl records and crates"
        className="absolute inset-0 w-full h-full object-cover brightness-[0.35]"
        fill
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,#0c0b0a_0%,rgba(12,11,10,0.3)_70%,transparent_100%)]" />
      <div className="relative z-2 max-w-7xl my-0 mx-auto p-[0_2rem_3rem] w-full">
        <p className="font-mono text-[0.7rem] tracking-[0.2em] text-vibrant-amber mb-4 uppercase">
          Vinyl Records
        </p>
        <h1 className="font-fraunces text-[clamp(2.5rem,5vw,5rem)] font-semibold tracking-[-0.035em] leading-[0.95] text-milk">
          The Record
          <br />
          <em className="italic text-vibrant-amber">Catalogue.</em>
        </h1>
      </div>
    </section>
  );
}
