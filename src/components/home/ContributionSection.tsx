const contributionImage =
  "https://images.pexels.com/photos/3856026/pexels-photo-3856026.jpeg?auto=compress&cs=tinysrgb&w=1400";
const contributionDetail =
  "https://images.pexels.com/photos/3856035/pexels-photo-3856035.jpeg?auto=compress&cs=tinysrgb&w=1200";

export function ContributionSection() {
  return (
    <section
      id="contribua"
      className="relative overflow-hidden bg-[var(--fontes-navy)]"
      aria-labelledby="contribua-title"
    >
      <div className="fontes-breathe pointer-events-none absolute -left-28 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full border-[28px] border-white/7" aria-hidden="true" />
      <img
        src="/brand/pattern-medio.png"
        alt=""
        className="fontes-wave-drift-slow pointer-events-none absolute -right-20 bottom-4 w-[720px] opacity-[0.13] lg:w-[980px]"
        aria-hidden="true"
      />

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

          <div className="relative min-h-[470px] sm:min-h-[570px] lg:min-h-[620px]" aria-hidden="true">
            <div className="fontes-breathe absolute left-[2%] top-[5%] h-40 w-40 rounded-full bg-[var(--fontes-yellow)] sm:h-48 sm:w-48" />
            <div className="absolute right-[0%] top-[0%] h-[82%] w-[76%] overflow-hidden bg-[var(--fontes-blue)] shadow-[0_28px_90px_rgba(0,0,0,0.18)]">
              <img src={contributionImage} alt="" className="fontes-image-breathe h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--fontes-navy)]/62 via-transparent to-transparent" />
            </div>

            <div className="absolute bottom-[0%] left-[0%] z-20 h-[44%] w-[50%] overflow-hidden border-[9px] border-[var(--fontes-navy)] bg-[var(--fontes-blue)] shadow-[0_22px_70px_rgba(0,0,0,0.16)]">
              <img src={contributionDetail} alt="" className="h-full w-full object-cover grayscale contrast-[1.08]" />
              <div className="absolute inset-0 bg-[var(--fontes-blue)] mix-blend-color" />
              <div className="absolute inset-0 bg-[var(--fontes-navy)]/18 mix-blend-multiply" />
            </div>

            <img
              src="/brand/pattern-pequeno.png"
              alt=""
              className="fontes-wave-drift absolute bottom-[6%] right-[-4%] z-30 w-[58%] brightness-[4] saturate-0 opacity-90"
            />

            <div className="absolute right-[1%] top-[2%] z-20 text-right text-[10px] font-semibold uppercase leading-5 tracking-[0.28em] text-white/56 sm:text-xs sm:leading-6">
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
