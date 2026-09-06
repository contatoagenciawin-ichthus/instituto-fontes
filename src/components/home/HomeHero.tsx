import Image from "next/image";
import Link from "next/link";

const heroImage =
  "https://images.unsplash.com/photo-1762158007836-25d13ab34c1c?auto=format&fit=crop&w=1800&q=85";

export function HomeHero() {
  return (
    <section id="hero" className="hero-viewport overflow-hidden bg-[var(--fontes-off-white)]">
      <div className="mx-auto grid h-full max-w-[1440px] items-center gap-8 px-6 py-8 lg:grid-cols-[0.94fr_1.06fr] lg:gap-10 lg:px-10 lg:py-7 xl:gap-14 xl:px-14">
        <div className="relative z-10 max-w-[690px] self-center">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--fontes-yellow)]" aria-hidden="true" />
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--fontes-blue)] sm:text-sm">
              Pessoas em movimento
            </p>
          </div>

          <h1
            className="max-w-[680px] text-[clamp(2.8rem,4.5vw,5.35rem)] font-bold leading-[0.98] tracking-[-0.045em] text-[var(--fontes-black)]"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            Formação, desenvolvimento e oportunidades para mais futuros.
          </h1>

          <p className="mt-6 max-w-[620px] text-base leading-7 text-black/65 sm:text-lg sm:leading-8 lg:mt-5">
            O Instituto Fontes oferece formação, desenvolvimento e oportunidades
            para crianças, adolescentes e jovens, com ações abertas à comunidade
            em projetos específicos.
          </p>

          <div className="mt-7 flex flex-wrap gap-3 lg:mt-6">
            <Link
              href="/#instituto"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--fontes-blue)] px-6 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--fontes-blue)]"
            >
              Conheça o Instituto
            </Link>
            <Link
              href="/#contribua"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-black/15 bg-white/55 px-6 text-sm font-semibold text-[var(--fontes-black)] transition-colors hover:border-[var(--fontes-blue)] hover:text-[var(--fontes-blue)]"
            >
              Contribua
            </Link>
          </div>
        </div>

        <div className="relative hidden h-full min-h-[420px] self-stretch lg:block">
          <div className="absolute inset-y-5 left-8 right-0 bg-[var(--fontes-blue)]" aria-hidden="true" />

          <div className="absolute inset-y-0 left-0 right-8 overflow-hidden bg-[var(--fontes-navy)]">
            <Image
              src={heroImage}
              alt="Jovens participando de uma atividade de formação"
              fill
              priority
              sizes="(min-width: 1280px) 48vw, 52vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[var(--fontes-blue)]/55 mix-blend-multiply" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--fontes-navy)]/50 via-transparent to-transparent" aria-hidden="true" />
          </div>

          <div className="absolute -bottom-3 -left-10 w-[190px] opacity-95 xl:w-[230px]" aria-hidden="true">
            <Image
              src="/brand/pattern-medio.png"
              alt=""
              width={420}
              height={420}
              className="h-auto w-full"
            />
          </div>

          <div className="absolute right-0 top-0 h-16 w-3 bg-[var(--fontes-yellow)]" aria-hidden="true" />

          <div className="absolute bottom-8 right-10 max-w-[240px] text-right text-xs font-semibold uppercase tracking-[0.17em] text-white/90">
            Potencial. Caminhos. Oportunidades.
          </div>
        </div>

        <div className="relative mt-2 aspect-[4/3] overflow-hidden bg-[var(--fontes-navy)] lg:hidden">
          <Image
            src={heroImage}
            alt="Jovens participando de uma atividade de formação"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[var(--fontes-blue)]/50 mix-blend-multiply" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
