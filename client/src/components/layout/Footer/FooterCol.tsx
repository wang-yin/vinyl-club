import type { FooterColProps } from "@/app/types/Footer";

export default function FooterCol({ title, links }: FooterColProps) {
  return (
    <div>
      <p className="font-mono text-[0.65rem] tracking-[0.2em] mb-5 uppercase text-vibrant-amber">
        {title}
      </p>
      {links.map((l) => (
        <a
          key={l}
          href="#"
          className="block font-sans text-[0.875rem] no-underline mb-2.5 transition-colors duration-200 text-hurricane hover:text-milk"
        >
          {l}
        </a>
      ))}
    </div>
  );
}
