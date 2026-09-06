export function ContributionSection() {
  return (
    <section
      id="contribua"
      className="relative overflow-hidden bg-[var(--fontes-navy)]"
      aria-labelledby="contribua-title"
    >
      <div
        className="pointer-events-none absolute -left-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full border-[28px] border-white/8"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-[-5rem] h-64 w-64 rounded-full bg-[var(--fontes-blue)]/65"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-24 sm:py-28 lg:px-10 lg:py-32 xl:px-14 xl:py-36">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.68fr] lg:items-end lg:gap-20 xl:gap-28">
          <div className="max-w-[820px]">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-[2px] w-10 bg-[var(--fontes-yellow)] sm:w-12" aria-hidden="true" />
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--fontes-yellow)] sm:text-sm">
                Contribuição
              </p>
            </div>

            <h2
              id="contribua-title"
              className="text-[clamp(3rem,6vw,6.8rem)] font-bold leading-[0.92] tracking-[-0.055em] text-white"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              Ajude esses números a crescer.
            </h2>
          </div>

          <div className="max-w-[500px] lg:justify-self-end">
            <p className="text-lg leading-8 text-white/76 sm:text-xl sm:leading-9">
              Sua contribuição ajuda o Instituto Fontes a manter formação,
              desenvolvimento e oportunidades em movimento.
            </p>

            <a
              href="https://wa.me/5519997403018?text=Ol%C3%A1%2C%20quero%20saber%20como%20posso%20contribuir%20com%20o%20Instituto%20Fontes."
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--fontes-yellow)] px-7 text-sm font-semibold text-[var(--fontes-navy)] transition-transform hover:-translate-y-0.5"
            >
              Quero contribuir
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
