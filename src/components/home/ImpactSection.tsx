const metrics = [
  { value: "XX", label: "jovens atendidos" },
  { value: "XX", label: "cursos ativos" },
  { value: "XX", label: "voluntários" },
  { value: "XX", label: "oportunidades geradas" },
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
              Cada número representa uma trajetória que ganhou formação, repertório e novas possibilidades.
            </p>
            <p className="mt-5 text-sm font-medium uppercase tracking-[0.18em] text-[var(--fontes-navy)]/42">
              Dados em confirmação para publicação
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:mt-20 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4 lg:gap-5 xl:gap-7">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className="group relative min-h-[280px] overflow-hidden border border-[var(--fontes-navy)]/8 bg-[var(--fontes-off-white)] px-6 py-7 sm:min-h-[310px] sm:px-7 sm:py-8 lg:min-h-[330px]"
            >
              <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border-[12px] border-[var(--fontes-blue)]/14 sm:h-52 sm:w-52" aria-hidden="true" />
              <div className="absolute -right-2 top-4 h-32 w-32 rounded-full border-[8px] border-[var(--fontes-blue)]/8 sm:h-40 sm:w-40" aria-hidden="true" />

              {index === 2 && (
                <div className="absolute right-6 top-7 h-9 w-9 rounded-full bg-[var(--fontes-yellow)]" aria-hidden="true" />
              )}

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--fontes-blue)] sm:text-xs">
                  0{index + 1}
                </div>

                <div className="pt-16">
                  <div
                    className="text-[clamp(4rem,6vw,6.8rem)] font-bold leading-none tracking-[-0.065em] text-[var(--fontes-navy)]"
                    style={{ fontFamily: "var(--font-sora)" }}
                  >
                    {metric.value}
                  </div>
                  <p className="mt-4 max-w-[190px] text-lg font-medium leading-6 text-[var(--fontes-navy)] sm:text-xl sm:leading-7">
                    {metric.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-between gap-6 border-t border-[var(--fontes-navy)]/8 pt-6 sm:mt-12">
          <p className="max-w-[620px] text-sm leading-6 text-[var(--fontes-black)]/48">
            Os valores acima são marcadores visuais e serão substituídos pelos dados oficiais confirmados pelo Instituto.
          </p>
          <span className="hidden h-[2px] w-16 bg-[var(--fontes-blue)] sm:block" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
