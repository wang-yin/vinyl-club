import HomeHero from "@/app/sections/Hero/HomeHero";
import ShopSection from "@/app/sections/ShopSection/ShopSection";
import FeatureStrip from "@/app/sections/FeatureStrip/FeatureStrip";
import EditorialBanner from "@/app/sections/EditorialBanner/EditorialBanner";

export default function Home() {
  return (
    <>
      <HomeHero />
      <ShopSection />
      <FeatureStrip />
      <EditorialBanner />
    </>
  );
}
