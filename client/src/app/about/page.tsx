import Image from "next/image";
import AboutHero from "../sections/Hero/AboutHero";
import Link from "next/link";

const TEAM = [
  {
    name: "Yuki Tanaka",
    role: "Founder & Chief Curator",
    since: "2019",
    image:
      "https://images.unsplash.com/photo-1615621734603-04c156e22380?w=400&h=500&fit=crop&auto=format",
    bio: "Former recording engineer at Sony Music Taipei. Collected records for 20 years before opening the shop.",
  },
  {
    name: "Marcus Chen",
    role: "Hardware Specialist",
    since: "2020",
    image:
      "https://images.unsplash.com/photo-1615621720189-29bd695f0a6c?w=400&h=500&fit=crop&auto=format",
    bio: "Certified by Pro-Ject and Rega. Spent five years at an audio importer before joining the team.",
  },
  {
    name: "Lena Wu",
    role: "Editorial & Buyer",
    since: "2021",
    image:
      "https://images.unsplash.com/photo-1766353862019-03216f50cd27?w=400&h=500&fit=crop&auto=format",
    bio: "Jazz pianist and avid digger. Sources rare pressings across Asia and Europe for the catalogue.",
  },
];

const VALUES = [
  {
    num: "01",
    title: "No Compromises",
    body: "We sell nothing we wouldn't buy ourselves. If a pressing doesn't meet our standard, it doesn't make the catalogue — regardless of how sought-after the title is.",
  },
  {
    num: "02",
    title: "Honest Grading",
    body: "Every record is graded in natural light under a magnifying loupe using the Goldmine standard. Our grades tend to be conservative. Surprises should always be pleasant.",
  },
  {
    num: "03",
    title: "Educate, Don't Upsell",
    body: "We recommend what fits your setup and budget, not what has the highest margin. Our goal is a customer who comes back for thirty years.",
  },
  {
    num: "04",
    title: "Community First",
    body: "We run monthly listening sessions and an open workshop for turntable setup and cartridge alignment. The store is a space for music lovers, not just transactions.",
  },
];

export default function About() {
  return (
    <>
      <AboutHero />
      <section className="max-w-7xl my-0 mx-auto py-24 px-8">
        <div className="grid gap-16 items-center grid-cols-2">
          <div>
            <p className="font-mono text-[0.7rem] tracking-[0.2em] text-vibrant-amber mb-8 uppercase">
              Our Story
            </p>
            <p className="font-fraunces text-[clamp(1.25rem,2.5vw,1.75rem)] italic leading-normal tracking-[-0.02em] text-milk mb-7">
              Groovehaus opened in 2019 from a simple frustration: finding
              quality vinyl in Taipei meant dealing with inflated prices, poor
              grading, and zero advice.
            </p>
            <p className="font-sans text-[0.9375rem] text-hurricane leading-[1.8] mb-5">
              We set out to build the shop we always wished existed. A place
              where a first-time buyer gets the same honest counsel as a
              seasoned collector. Where hardware recommendations come from
              experience, not commission. Where every record in the bins has
              been listened to, inspected, and graded with care.
            </p>
            <p className="font-sans text-[0.9375rem] text-hurricane leading-[1.8]">
              Five years on, we ship to 38 countries and host a monthly
              listening session that's become a quiet institution in Taipei's
              music community. The mission hasn't changed: help more people hear
              music the way it was recorded.
            </p>
          </div>
          <div className="relative overflow-hidden aspect-4/5 bg-king-kong">
            <Image
              src="https://images.unsplash.com/photo-1775569577652-4e69fb5c0b45?w=900&h=1125&fit=crop&auto=format"
              alt="Shelves of records in the Groovehaus store"
              className="w-full h-full object-cover brightness-70 sepia-[0.15]"
              fill
            />
          </div>
        </div>
      </section>
      <section className="border-t border-noir px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-[0.7rem] tracking-[0.2em] text-vibrant-amber mb-4 uppercase">
            What We Stand For
          </p>
          <h2 className="font-fraunces text-[clamp(1.75rem,3.5vw,3rem)] font-semibold tracking-[-0.03em] mb-14 leading-[1.05]">
            Four principles we
            <br />
            <em className="italic">don't negotiate on.</em>
          </h2>
          <div className="grid grid-cols-2 gap-px bg-noir">
            {VALUES.map((v) => (
              <div key={v.num} className="bg-king-kong px-10 py-12">
                <p className="font-mono text-[0.65rem] tracking-[0.25em] text-vibrant-amber mb-6">
                  {v.num}
                </p>
                <h3 className="font-fraunces text-[1.375rem] font-medium tracking-tight mb-3.5">
                  {v.title}
                </h3>
                <p className="font-sans text-sm text-hurricane leading-[1.75]">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="border-t border-noir py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-[0.7rem] tracking-[0.2em] text-vibrant-amber mb-4 uppercase">
            The Team
          </p>
          <h2 className="font-fraunces text-[clamp(1.75rem,3.5vw,3rem)] font-semibold tracking-[-0.03em] mb-14 leading-[1.05]">
            People who live
            <br />
            <em className="italic">for this music.</em>
          </h2>
          <div className="grid grid-cols-3 gap-px bg-noir">
            {TEAM.map((member) => (
              <div key={member.name} className="bg-king-kong">
                <div className="aspect-4/5 overflow-hidden bg-bg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover brightness-[0.75] sepia-[0.1]"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="px-7 py-8">
                  <p className="font-mono text-[0.65rem] tracking-[0.15em] text-vibrant-amber mb-2 uppercase">
                    Since {member.since}
                  </p>
                  <h3 className="font-fraunces text-[1.1875rem] font-medium mb-1 tracking-[-0.02em]">
                    {member.name}
                  </h3>
                  <p className="font-sans text-[0.8125rem] text-vibrant-amber mb-3.5">
                    {member.role}
                  </p>
                  <p className="font-sans text-[0.8125rem] text-hurricane leading-[1.7]">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="border-t border-noir py-24 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-24 items-start">
          <div>
            <p className="font-mono text-[0.7rem] tracking-[0.2em] text-vibrant-amber mb-6 uppercase">
              Visit Us
            </p>
            <h2 className="font-fraunces text-[clamp(1.5rem,3vw,2.5rem)] font-semibold tracking-[-0.03em] mb-8 leading-[1.1]">
              Come in and
              <br />
              <em className="italic">stay a while.</em>
            </h2>
            <p className="font-sans text-[0.9375rem] text-hurricane leading-[1.8] mb-10">
              Our listening room seats four. Bring a record you're curious about
              and we'll spin it on the reference system before you commit.
              Appointments recommended on weekends.
            </p>
            <Link
              href="/vinyl"
              className="px-8 py-3.5 bg-vibrant-amber text-bg font-sans font-semibold text-sm tracking-[0.04em] inline-block transition-colors duration-200 hover:bg-yakitori"
            >
              Shop Online
            </Link>
          </div>
          <div className="flex flex-col gap-8">
            {[
              {
                label: "Address",
                value: "Taipei City, Taiwan",
              },
              {
                label: "Hours",
                value:
                  "Tue – Fri · 12:00 – 20:00\nSat – Sun · 11:00 – 19:00\nMonday Closed",
              },
              {
                label: "Contact",
                value: "hello@groovehaus.com\n+886 2 2700 0000",
              },
            ].map(({ label, value }) => (
              <div key={label} className="pb-8 border-b border-noir">
                <p className="font-mono text-[0.65rem] tracking-[0.2em] text-vibrant-amber mb-2.5 uppercase">
                  {label}
                </p>
                <p className="font-sans text-[0.9375rem] text-milk leading-[1.7] whitespace-pre-line">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
