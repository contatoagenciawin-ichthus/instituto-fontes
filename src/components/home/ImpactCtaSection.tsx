import Link from "next/link";

export function ImpactCtaSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--fontes-off-white)]">
      <div className="mx-auto max-w-[1440px] px-6 py-24 sm:py-28 lg:px-10 lg:py-32 xl:px-14 xl:py-36">
        <div className="relative overflow-hidden rounded-[2rem] bg-[var(--fontes-blue)] px-7 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20 xl:px-20">
          <div
            className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full border-[34px] border-white/10 sm:h-96 sm:w-96"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-20 right-[18%] h-44 w-44 rounded-full bg-[var(--fontes-yellow)]/90"
            aria-hidden="true"
          />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.2fr_0.62fr] lg:items-end lg:gap-20">
            <div className="max-w-[820px]">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-white/72 sm:text-sm">
                O impacto continua
              </p>
              <h2
                className="text-[clamp(2.9rem,5.8vw,6.4rem)] font-bold leading-[0.92] tracking-[-0.055em] text-white"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                Potencial precisa de oportunidade.
              </h2>
            </div>

            <div className="max-w-[460px] lg:justify-self-end">
              <p className="text-lg leading-8 text-white/82 sm:text-xl sm:leading-9">
                Ajude o Instituto Fontes a continuar criando caminhos de formação,
                desenvolvimento e novas oportunidades.
              </p>

              <Link
                href="#contribua"
                className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[var(--fontes-blue)] transition-transform hover:-translate-y-0.5"
              >
                Quero contribuir
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
