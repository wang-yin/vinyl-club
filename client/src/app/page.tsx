import Hero from "@/app/sections/Hero/Hero";
import ShopSection from "@/app/sections/ShopSection/ShopSection";
import FeatureStrip from "@/app/sections/FeatureStrip/FeatureStrip";
import EditorialBanner from "@/app/sections/EditorialBanner/EditorialBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <ShopSection />
      <FeatureStrip />
      <EditorialBanner />
    </>
  );
}
