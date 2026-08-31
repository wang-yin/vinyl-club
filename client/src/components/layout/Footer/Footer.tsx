import FooterCol from "./FooterCol";

const shopLinks = [
  { label: "Vinyl Records", to: "/vinyl" },
  { label: "Audio Hardware", to: "/hardware" },
  { label: "New Arrivals", to: "/vinyl" },
  { label: "Classics", to: "/vinyl" },
];

const infoLinks = [
  { label: "About Us", to: "/about" },
  { label: "Grading Guide", to: "/about" },
  { label: "Turntable Setup", to: "/about" },
  { label: "FAQ", to: "/about" },
];

export default function Footer() {
  return (
    <footer className="border-t border-noir py-20 pl-8 pr-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12">
          <div>
            <p className="font-fraunces text-[1.375rem] font-semibold mb-4 tracking-tight">
              GROOVEHAUS
            </p>
            <p className="font-sans text-[0.875rem] leading-[1.75] max-w-70 text-hurricane">
              A curated destination for vinyl records and audiophile hardware.
              Based in Taipei, shipping worldwide since 2019.
            </p>
          </div>
          <FooterCol title="Shop" links={shopLinks} />
          <FooterCol title="Info" links={infoLinks} />

          <div>
            <p className="font-mono text-[0.65rem] text-vibrant-amber mb-5 tracking-widest uppercase">
              Contact
            </p>
            {[
              {
                label: "hello@groovehaus.com",
                href: "mailto:hello@groovehaus.com",
              },
              { label: "Instagram", href: "https://instagram.com" },
              { label: "Facebook", href: "https://facebook.com" },
              { label: "Discord", href: "https://discord.com" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="block font-sans text-[0.875rem] text-hurricane no-underline mb-2.5 transition-colors duration-200 hover:text-milk"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-noir pt-8 flex justify-between items-center flex-wrap gap-4">
          <p className="font-mono text-[0.65rem] tracking-wider text-whiskey-and-wine">
            © 2024 GROOVEHAUS. All rights reserved.
          </p>
          <p className="font-mono text-[0.65rem] tracking-wider text-whiskey-and-wine">
            Taipei, Taiwan · Worldwide Shipping
          </p>
        </div>
      </div>
    </footer>
  );
}
