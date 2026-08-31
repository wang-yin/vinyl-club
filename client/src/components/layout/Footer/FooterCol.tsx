import type { FooterColumnProps } from "@/app/types/Footer";
import Link from "next/link";

export default function FooterCol({ title, links }: FooterColumnProps) {
  return (
    <div>
      <p className="font-mono text-[0.65rem] text-vibrant-amber mb-5 tracking-widest uppercase">
        {title}
      </p>
      {links.map(({ label, to }) => (
        <Link
          key={label}
          href={to}
          className=" block font-sans text-[0.875rem] text-hurricane no-underline mb-2.5 transition-colors duration-200 hover:text-milk"
        >
          {label}
        </Link>
      ))}
    </div>
  );
}
