import { HomeHero } from "@/components/home/HomeHero";
import { ImpactSection } from "@/components/home/ImpactSection";
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
    </main>
  );
}
