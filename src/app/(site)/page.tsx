import { FeaturedTerritorySection } from "@/components/home/FeaturedTerritorySection";
import { FoundersSection } from "@/components/home/FoundersSection";
import { HomeHero } from "@/components/home/HomeHero";
import { ImpactSection } from "@/components/home/ImpactSection";
import { MotionSection } from "@/components/home/MotionSection";
import { OpportunitiesSection } from "@/components/home/OpportunitiesSection";
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
      <FoundersSection />
      <OpportunitiesSection />
    </main>
  );
}
