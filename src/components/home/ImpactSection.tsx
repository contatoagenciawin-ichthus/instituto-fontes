const movements = [
  { action: "Aprender", label: "novas habilidades", offset: "0s" },
  { action: "Desenvolver", label: "autonomia e repertório", offset: "-1.1s" },
  { action: "Criar", label: "possibilidades de futuro", offset: "-2.2s" },
  { action: "Avançar", label: "em direção a oportunidades", offset: "-3.3s" },
];

export function ImpactSection() {
  return (
    <section
      id="impacto"
      className="relative overflow-hidden bg-white"
      aria-labelledby="impacto-title"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-24 sm:py-28 lg:px-10 lg:py-32 xl:px-14 xl:py-36">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:gap-20 xl:gap-28">
          <div className="max-w-[620px]">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-[2px] w-10 bg-[var(--fontes-blue)] sm:w-12" aria-hidden="true" />
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--fontes-blue)] sm:text-sm">
                Impacto
              </p>
            </div>

            <h2
              id="impacto-title"
              className="text-[clamp(2.8rem,5vw,5.8rem)] font-bold leading-[0.94] tracking-[-0.055em] text-[var(--fontes-navy)]"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              Impacto que continua em <span className="text-[var(--fontes-blue)]">movimento.</span>
            </h2>
          </div>

          <div className="max-w-[650px] lg:pb-2">
            <p className="text-lg leading-8 text-[var(--fontes-black)]/68 sm:text-xl sm:leading-9">
              Cada etapa amplia repertório, fortalece escolhas e aproxima adolescentes e jovens de novas possibilidades.
            </p>
            <p className="mt-5 text-sm font-medium uppercase tracking-[0.18em] text-[var(--fontes-navy)]/42">
              Formação que se transforma em trajetória
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:mt-20 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4 lg:gap-5 xl:gap-7">
          {movements.map((movement, index) => (
            <div
              key={movement.action}
              className="group relative min-h-[280px] overflow-hidden border border-[var(--fontes-navy)]/8 bg-[var(--fontes-off-white)] px-6 py-7 sm:min-h-[310px] sm:px-7 sm:py-8 lg:min-h-[330px]"
            >
              <svg
                viewBox="0 0 220 220"
                className="absolute -right-12 -top-12 h-52 w-52 rotate-[-34deg] sm:h-60 sm:w-60"
                aria-hidden="true"
              >
                <circle cx="110" cy="110" r="82" fill="none" stroke="currentColor" strokeWidth="13" className="text-[var(--fontes-blue)]/8" />
                <circle
                  cx="110"
                  cy="110"
                  r="82"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="13"
                  strokeLinecap="round"
                  pathLength="100"
                  className="fontes-impact-arc text-[var(--fontes-blue)]/38"
                  style={{ animationDelay: movement.offset }}
                />
              </svg>

              <div
                className="fontes-impact-pulse absolute right-10 top-11 h-3 w-3 rounded-full bg-[var(--fontes-yellow)] shadow-[0_0_0_8px_rgba(255,183,3,0.13)]"
                style={{ animationDelay: movement.offset }}
                aria-hidden="true"
              />

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--fontes-blue)] sm:text-xs">
                  0{index + 1}
                </div>

                <div className="pt-20">
                  <div
                    className="text-[clamp(2.1rem,3vw,3.35rem)] font-bold leading-[0.95] tracking-[-0.055em] text-[var(--fontes-navy)]"
                    style={{ fontFamily: "var(--font-sora)" }}
                  >
                    {movement.action}
                  </div>
                  <p className="mt-4 max-w-[190px] text-lg font-medium leading-6 text-[var(--fontes-navy)] sm:text-xl sm:leading-7">
                    {movement.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-between gap-6 border-t border-[var(--fontes-navy)]/8 pt-6 sm:mt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--fontes-navy)]/46">
            Um percurso contínuo de formação, autonomia e futuro
          </p>
          <span className="hidden h-[2px] flex-1 bg-[var(--fontes-blue)]/25 sm:block" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
