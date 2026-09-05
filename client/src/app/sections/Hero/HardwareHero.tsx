import Image from "next/image";

export default function HardwareHero() {
  return (
    <section className="relative h-95 overflow-hidden flex items-end">
      <Image
        src="https://images.unsplash.com/photo-1609702847389-b8aec1b0b929?w=1800&h=700&fit=crop&auto=format"
        alt="Hi-fi speakers and audio equipment on a wooden table"
        className="absolute inset-0 w-full h-full object-cover brightness-[0.3] object-[center_40%]"
        fill
      />
      <div className="absolute inset-0 bg-linear-to-t from-[#0c0b0a] via-[rgba(12,11,10,0.3)] via-70% to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-8 pb-12 w-full">
        <p className="font-mono text-[0.7rem] tracking-[0.2em] text-[#c9922a] mb-4 uppercase">
          Audio Hardware
        </p>
        <h1 className="font-serif text-[clamp(2.5rem,5vw,5rem)] font-semibold tracking-[-0.035em] leading-[0.95] text-[#f0ece4]">
          Build Your
          <br />
          <em className="italic text-[#c9922a]">System.</em>
        </h1>
      </div>
    </section>
  );
}
