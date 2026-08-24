import Btn from "@/components/Button/Btn";
import Image from "next/image";

export default function EditorialBanner() {
  return (
    <section className="max-w-7xl mx-auto my-0 py-24 px-8">
      <p className="font-mono text-[0.7rem] tracking-widest text-vibrant-amber mb-14 uppercase">
        03 — Our Philosophy
      </p>
      <div className="grid grid-cols-2 gap-16 items-center">
        <div>
          <blockquote className="font-fraunces text-[clamp(1.5rem,3vw,2.5rem)] italic font-normal leading-[1.35] tracking-tight m-0 pl-8 border-l-2 border-vibrant-amber text-milk">
            &quot;Analog sound carries the room, the breath, the imperfection.
            That is the warmth no algorithm can reproduce.&quot;
          </blockquote>
          <p className="font-mono text-[0.7rem] mt-7 pl-8 tracking-widest text-hurricane">
            — GROOVEHAUS EDITORIAL, 2024
          </p>
          <div className="pl-8 mt-10 flex gap-4">
            <Btn href="#shop">Browse Vinyl</Btn>
          </div>
        </div>
        <div className="relative aspect-4/5 overflow-hidden bg-king-kong">
          <Image
            src={
              "https://images.unsplash.com/photo-1775569577652-4e69fb5c0b45?w=900&h=1125&fit=crop&auto=format"
            }
            alt="Record shelves illuminated by warm hanging lamps in a vinyl shop"
            className="w-100 h-100 object-cover brightness-[0.65] sepia-[0.2]"
            fill
          ></Image>
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(12,11,10,0.65)_0%,transparent_60%)]"></div>
          <div className=" absolute bottom-7 left-7 right-7">
            <p className="font-mono text-[0.65rem] tracking-[0.15em] mb-2 text-vibrant-amber">
              TAIPEI, TAIWAN
            </p>
            <p className="font-fraunces text-[1.125rem] font-medium leading-[1.3] text-milk">
              Visit our listening room by appointment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
