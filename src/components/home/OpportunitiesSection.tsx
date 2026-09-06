const opportunityFrame =
  "https://res.cloudinary.com/iqlvzhdw/video/upload/so_9.1,w_980,h_1180,c_fill,g_auto,q_auto,f_auto/v1788725634/hero-approved-desktop.jpg";

const desktopSteps = [
  { number: "02", label: "Formação", x: "18%", y: "34%", accent: "blue" },
  { number: "03", label: "Empresa", x: "53%", y: "64%", accent: "blue" },
  { number: "04", label: "Oportunidade", x: "86%", y: "29%", accent: "yellow" },
];

const mobileSteps = [
  { number: "01", label: "Jovem", accent: "blue" },
  { number: "02", label: "Formação", accent: "blue" },
  { number: "03", label: "Empresa", accent: "blue" },
  { number: "04", label: "Oportunidade", accent: "yellow" },
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
              <span className="h-[2px] w-10 bg-[var(--fontes-blue)] sm:w-12" aria-hidden="true" />
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

        <div className="mt-16 overflow-hidden rounded-[2rem] border border-[var(--fontes-navy)]/10 bg-[var(--fontes-off-white)] sm:mt-20 lg:mt-24">
          <div className="hidden min-h-[540px] lg:grid lg:grid-cols-12">
            <div className="relative col-span-5 overflow-hidden bg-[var(--fontes-navy)]">
              <img src={opportunityFrame} alt="" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-[var(--fontes-blue)]/42 mix-blend-color" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--fontes-navy)]/78 via-transparent to-transparent" />

              <div className="absolute left-8 top-8 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/68">
                01 · Jovem
              </div>

              <div className="absolute bottom-9 left-9 right-9">
                <p
                  className="text-[clamp(2.3rem,4vw,4.6rem)] font-bold leading-[0.94] tracking-[-0.05em] text-white"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  O caminho começa com potencial.
                </p>
              </div>

              <div className="absolute -right-14 top-[14%] h-36 w-36 rounded-full bg-[var(--fontes-yellow)]" aria-hidden="true" />
            </div>

            <div className="relative col-span-7 overflow-hidden">
              <svg viewBox="0 0 760 540" className="absolute inset-0 h-full w-full" fill="none" preserveAspectRatio="none" aria-hidden="true">
                <path
                  d="M-40 330 C120 440 200 90 355 155 C505 218 455 430 610 335 C690 286 718 166 800 125"
                  stroke="var(--fontes-blue)"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <path
                  d="M-40 352 C120 462 202 116 360 179 C510 240 465 450 620 356 C700 308 730 188 800 148"
                  stroke="var(--fontes-blue)"
                  strokeOpacity="0.2"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>

              <div className="absolute left-8 top-8 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--fontes-navy)]/42">
                Formação que encontra oportunidade
              </div>

              {desktopSteps.map((step) => (
                <div
                  key={step.number}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: step.x, top: step.y }}
                >
                  <div
                    className={`flex h-28 w-28 items-center justify-center rounded-full border-[9px] bg-white shadow-[0_18px_60px_rgba(15,45,91,0.08)] xl:h-32 xl:w-32 ${
                      step.accent === "yellow" ? "border-[var(--fontes-yellow)]" : "border-[var(--fontes-blue)]"
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-[10px] font-semibold tracking-[0.22em] text-[var(--fontes-navy)]/40">{step.number}</div>
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

              <div className="absolute bottom-8 right-8 text-right text-[10px] font-semibold uppercase leading-5 tracking-[0.28em] text-[var(--fontes-navy)]/38">
                Jovem → formação<br />empresa → oportunidade
              </div>
            </div>
          </div>

          <div className="lg:hidden">
            <div className="relative h-[320px] overflow-hidden bg-[var(--fontes-navy)] sm:h-[390px]">
              <img src={opportunityFrame} alt="" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-[var(--fontes-blue)]/36 mix-blend-color" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--fontes-navy)]/78 to-transparent px-6 pb-6 pt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">O caminho começa com potencial</p>
              </div>
            </div>

            <div className="grid divide-y divide-[var(--fontes-navy)]/10">
              {mobileSteps.map((step, index) => (
                <div key={step.number} className="relative flex items-center gap-5 px-5 py-7 sm:px-7">
                  {index < mobileSteps.length - 1 ? (
                    <div className="absolute bottom-[-20px] left-[45px] h-10 w-[2px] bg-[var(--fontes-blue)]/35" aria-hidden="true" />
                  ) : null}

                  <div
                    className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-[7px] bg-white ${
                      step.accent === "yellow" ? "border-[var(--fontes-yellow)]" : "border-[var(--fontes-blue)]"
                    }`}
                  >
                    <span className="text-xs font-semibold tracking-[0.2em] text-[var(--fontes-navy)]/45">{step.number}</span>
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--fontes-blue)]">Caminho</p>
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
