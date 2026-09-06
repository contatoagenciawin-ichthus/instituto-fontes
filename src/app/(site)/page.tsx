import { HomeHero } from "@/components/home/HomeHero";
import { HomeHero2 } from "@/components/home/HomeHero2";
import { SiteHeader } from "@/components/site/SiteHeader";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[var(--fontes-off-white)] text-[var(--fontes-black)]">
      <SiteHeader />
      <HomeHero />
      <HomeHero2 />
    </main>
  );
}
