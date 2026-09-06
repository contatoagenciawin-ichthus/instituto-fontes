const contributionImage =
  "https://images.pexels.com/photos/3856026/pexels-photo-3856026.jpeg?auto=compress&cs=tinysrgb&w=1400";

export function ContributionSection() {
  return (
    <section
      id="contribua"
      className="relative overflow-hidden bg-[var(--fontes-navy)]"
      aria-labelledby="contribua-title"
    >
      <div className="pointer-events-none absolute -left-28 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full border-[28px] border-white/7" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-24 sm:py-28 lg:px-10 lg:py-32 xl:px-14 xl:py-36">
        <div className="grid gap-14 lg:grid-cols-[0.92fr_0.78fr] lg:items-center lg:gap-20 xl:gap-28">
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

            <p className="mt-8 max-w-[620px] text-lg leading-8 text-white/76 sm:text-xl sm:leading-9">
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

          <div className="relative min-h-[460px] sm:min-h-[560px] lg:min-h-[610px]" aria-hidden="true">
            <div className="absolute right-[2%] top-[0%] h-[82%] w-[76%] overflow-hidden rounded-[2.6rem] bg-[var(--fontes-blue)] shadow-[0_28px_90px_rgba(0,0,0,0.18)]">
              <img src={contributionImage} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--fontes-navy)]/64 via-transparent to-transparent" />
            </div>

            <div className="absolute left-[0%] top-[10%] h-36 w-36 rounded-full bg-[var(--fontes-yellow)] sm:h-44 sm:w-44 lg:h-48 lg:w-48" />

            <div className="absolute bottom-[2%] left-[3%] z-20 w-[54%] overflow-hidden rounded-[2rem] border-[9px] border-[var(--fontes-navy)] bg-[var(--fontes-blue)] shadow-[0_22px_70px_rgba(0,0,0,0.16)]">
              <div className="aspect-[1.15/1]">
                <img src={contributionImage} alt="" className="h-full w-full object-cover object-left grayscale contrast-[1.08]" />
                <div className="absolute inset-0 bg-[var(--fontes-blue)] mix-blend-color" />
                <div className="absolute inset-0 bg-[var(--fontes-navy)]/18 mix-blend-multiply" />
              </div>
            </div>

            <svg viewBox="0 0 460 150" className="absolute bottom-[5%] right-[-5%] z-30 w-[70%]" fill="none">
              <path d="M0 74C75 16 121 124 208 62C290 4 340 102 460 35" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
              <path d="M0 100C75 42 121 150 208 88C290 30 340 128 460 61" stroke="#74BCFF" strokeWidth="3" strokeLinecap="round" />
              <path d="M0 126C75 68 121 176 208 114C290 56 340 154 460 87" stroke="#FFFFFF" strokeOpacity="0.28" strokeWidth="2.5" strokeLinecap="round" />
            </svg>

            <div className="absolute right-[2%] top-[2%] z-20 text-right text-[10px] font-semibold uppercase leading-5 tracking-[0.28em] text-white/56 sm:text-xs sm:leading-6">
              Mais pessoas
              <br />
              mais horizontes
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
