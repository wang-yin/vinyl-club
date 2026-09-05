import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative h-120 overflow-hidden flex items-end">
      <Image
        src="https://images.unsplash.com/photo-1631692994457-622f31a30997?w=1800&h=800&fit=crop&auto=format"
        alt="Interior of Groovehaus record shop"
        className="absolute inset-0 w-full h-full object-cover brightness-[0.3]"
        fill
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--bg)_0%,rgba(12,11,10,0.2)_70%,transparent_100%)]"></div>
      <div className="relative z-2 max-w-7xl my-0 mx-auto w-full px-8 pb-14 pt-0">
        <p className="font-mono text-[0.7rem] tracking-[0.2em] text-vibrant-amber mb-4 uppercase">
          About Groovehaus
        </p>
        <h1 className="font-fraunces text-[clamp(2.5rem,5vw,5rem)] font-semibold tracking-[-0.035em] leading-[0.95] text-milk">
          The store for
          <br />
          <em className="italic text-vibrant-amber">believers in analog.</em>
        </h1>
      </div>
    </section>
  );
}
