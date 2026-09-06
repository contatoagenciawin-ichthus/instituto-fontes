const steps = [
  { number: "01", label: "Jovem", x: "8%", y: "58%", accent: "blue" },
  { number: "02", label: "Formação", x: "35%", y: "31%", accent: "blue" },
  { number: "03", label: "Empresa", x: "64%", y: "62%", accent: "blue" },
  { number: "04", label: "Oportunidade", x: "90%", y: "28%", accent: "yellow" },
];

export function OpportunitiesSection() {
  return (
    <section
      id="oportunidades"
      className="relative overflow-hidden bg-white"
      aria-labelledby="oportunidades-title"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-24 sm:py-28 lg:px-10 lg:py-32 xl:px-14 xl:py-36">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.72fr] lg:items-end lg:gap-20 xl:gap-28">
          <div className="max-w-[780px]">
            <div className="mb-6 flex items-center gap-4">
              <span
                className="h-[2px] w-10 bg-[var(--fontes-blue)] sm:w-12"
                aria-hidden="true"
              />
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--fontes-blue)] sm:text-sm">
                Programa de Oportunidades Fontes
              </p>
            </div>

            <h2
              id="oportunidades-title"
              className="text-[clamp(2.8rem,5vw,5.8rem)] font-bold leading-[0.94] tracking-[-0.055em] text-[var(--fontes-navy)]"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              Da formação para novas <span className="text-[var(--fontes-blue)]">oportunidades.</span>
            </h2>
          </div>

          <p className="max-w-[560px] text-lg leading-8 text-[var(--fontes-black)]/68 sm:text-xl sm:leading-9 lg:pb-2">
            O Programa de Oportunidades Fontes aproxima jovens preparados pelo Instituto de empresas e novas possibilidades profissionais.
          </p>
        </div>

        <div className="relative mt-16 overflow-hidden border-y border-[var(--fontes-navy)]/10 bg-[var(--fontes-off-white)] sm:mt-20 lg:mt-24">
          <div className="relative hidden h-[500px] lg:block" aria-hidden="true">
            <svg
              viewBox="0 0 1200 500"
              className="absolute inset-0 h-full w-full"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M50 315 C180 420 275 120 430 155 C585 190 575 390 770 330 C930 280 960 90 1150 125"
                stroke="var(--fontes-blue)"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <path
                d="M50 337 C185 442 282 143 438 178 C590 212 588 414 782 351 C940 300 972 113 1150 148"
                stroke="var(--fontes-blue)"
                strokeOpacity="0.22"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>

            <div className="absolute left-[3%] top-10 text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--fontes-navy)]/38">
              caminhos que conectam
            </div>

            <div className="absolute right-[3%] bottom-10 text-right text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--fontes-navy)]/38">
              formação que encontra oportunidade
            </div>

            {steps.map((step) => (
              <div
                key={step.number}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: step.x, top: step.y }}
              >
                <div
                  className={`flex h-28 w-28 items-center justify-center rounded-full border-[10px] bg-white shadow-[0_18px_60px_rgba(15,45,91,0.08)] xl:h-32 xl:w-32 ${
                    step.accent === "yellow"
                      ? "border-[var(--fontes-yellow)]"
                      : "border-[var(--fontes-blue)]"
                  }`}
                >
                  <div className="text-center">
                    <div className="text-[10px] font-semibold tracking-[0.22em] text-[var(--fontes-navy)]/40">
                      {step.number}
                    </div>
                    <div
                      className="mt-1 text-base font-semibold tracking-[-0.03em] text-[var(--fontes-navy)] xl:text-lg"
                      style={{ fontFamily: "var(--font-sora)" }}
                    >
                      {step.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid divide-y divide-[var(--fontes-navy)]/10 lg:hidden">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex items-center gap-5 px-5 py-7 sm:px-7">
                {index < steps.length - 1 ? (
                  <div
                    className="absolute bottom-[-20px] left-[45px] h-10 w-[2px] bg-[var(--fontes-blue)]/35"
                    aria-hidden="true"
                  />
                ) : null}

                <div
                  className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-[7px] bg-white ${
                    step.accent === "yellow"
                      ? "border-[var(--fontes-yellow)]"
                      : "border-[var(--fontes-blue)]"
                  }`}
                >
                  <span className="text-xs font-semibold tracking-[0.2em] text-[var(--fontes-navy)]/45">
                    {step.number}
                  </span>
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--fontes-blue)]">
                    Caminho
                  </p>
                  <p
                    className="mt-1 text-2xl font-semibold tracking-[-0.035em] text-[var(--fontes-navy)]"
                    style={{ fontFamily: "var(--font-sora)" }}
                  >
                    {step.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between gap-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--fontes-navy)]/42">
            Jovem → formação → empresa → oportunidade
          </p>
          <span className="hidden h-[2px] w-16 bg-[var(--fontes-blue)] sm:block" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
