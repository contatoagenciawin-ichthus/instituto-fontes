import { FeaturedTerritorySection } from "@/components/home/FeaturedTerritorySection";
import { HomeHero } from "@/components/home/HomeHero";
import { ImpactSection } from "@/components/home/ImpactSection";
import { MotionSection } from "@/components/home/MotionSection";
import { TerritoriesSection } from "@/components/home/TerritoriesSection";
import { WhoWeAre } from "@/components/home/WhoWeAre";
import { SiteHeader } from "@/components/site/SiteHeader";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[var(--fontes-off-white)] text-[var(--fontes-black)]">
      <SiteHeader />
      <HomeHero />
      <WhoWeAre />
      <ImpactSection />
      <TerritoriesSection />
      <FeaturedTerritorySection />
      <MotionSection />
    </main>
  );
}
