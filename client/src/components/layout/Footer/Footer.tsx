import FooterCol from "./FooterCol";

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
          <FooterCol
            title="Shop"
            links={[
              "All Records",
              "New Arrivals",
              "Classics",
              "Hardware",
              "Accessories",
            ]}
          />
          <FooterCol
            title="Info"
            links={[
              "About Us",
              "Blog",
              "Grading Guide",
              "Turntable Setup",
              "FAQ",
            ]}
          />
          <FooterCol
            title="Contact"
            links={["hello@groovehaus.com", "Instagram", "Facebook", "Discord"]}
          />
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
