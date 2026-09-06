const detailImage =
  "https://images.pexels.com/photos/5676666/pexels-photo-5676666.jpeg?auto=compress&cs=tinysrgb&w=1000";

const steps = [
  { number: "01", label: "Jovem", text: "Potencial, interesse e vontade de avançar." },
  { number: "02", label: "Formação", text: "Conhecimento, prática e desenvolvimento." },
  { number: "03", label: "Empresa", text: "Conexão com quem pode abrir portas." },
  { number: "04", label: "Oportunidade", text: "Experiência, trabalho e novos caminhos." },
];

export function OpportunitiesSection() {
  return (
    <section
      id="oportunidades"
      className="relative overflow-hidden bg-white"
      aria-labelledby="oportunidades-title"
    >
      <div className="pointer-events-none absolute -left-24 top-28 h-64 w-64 rounded-full border-[24px] border-[var(--fontes-blue)]/7" aria-hidden="true" />

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

        <div className="mt-16 grid border-y border-[var(--fontes-navy)]/12 lg:grid-cols-12 sm:mt-20 lg:mt-24">
          <div className="relative min-h-[520px] overflow-hidden bg-[var(--fontes-navy)] lg:col-span-5 lg:min-h-[610px]">
            <video
              className="absolute inset-0 hidden h-full w-full object-cover md:block motion-reduce:hidden"
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              aria-hidden="true"
            >
              <source src="/media/instituto_fontes_secao_intermediaria_02.mp4" type="video/mp4" />
            </video>
            <video
              className="absolute inset-0 h-full w-full object-cover md:hidden motion-reduce:hidden"
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              aria-hidden="true"
            >
              <source src="/media/instituto_fontes_secao_mobile_02.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-[var(--fontes-navy)]/8 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--fontes-navy)]/94 via-[var(--fontes-navy)]/8 to-transparent" />

            <img
              src="/brand/pattern-pequeno.png"
              alt=""
              className="fontes-wave-drift absolute -right-14 top-[9%] z-10 w-[330px] opacity-75"
              aria-hidden="true"
            />

            <div className="absolute left-7 top-7 z-20 border-l-2 border-[var(--fontes-yellow)] pl-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-white sm:left-9 sm:top-9 sm:text-xs">
              Potencial em movimento
            </div>
            <div className="absolute inset-x-0 bottom-0 z-20 p-7 sm:p-9 lg:p-10">
              <p
                className="max-w-[520px] text-[clamp(2.4rem,4vw,4.8rem)] font-bold leading-[0.93] tracking-[-0.055em] text-white"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                O caminho começa com gente preparada.
              </p>
            </div>
          </div>

          <div className="relative bg-[#F7FBFF] lg:col-span-7 lg:border-l lg:border-[var(--fontes-navy)]/12">
            <div className="grid min-h-[260px] border-b border-[var(--fontes-navy)]/12 sm:grid-cols-[1.2fr_0.8fr]">
              <div className="flex flex-col justify-between p-7 sm:p-9 lg:p-10 xl:p-12">
                <p className="text-[10px] font-semibold uppercase tracking-[0.27em] text-[var(--fontes-blue)] sm:text-xs">
                  Formação que encontra oportunidade
                </p>
                <p
                  className="mt-12 max-w-[520px] text-[clamp(2rem,3.5vw,3.8rem)] font-bold leading-[0.95] tracking-[-0.05em] text-[var(--fontes-navy)]"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  Aprender. Praticar. Conectar. Avançar.
                </p>
              </div>

              <div className="relative min-h-[250px] overflow-hidden sm:min-h-0">
                <img src={detailImage} alt="" className="h-full w-full object-cover grayscale contrast-[1.08]" />
                <div className="absolute inset-0 bg-[var(--fontes-blue)] mix-blend-color" />
                <div className="absolute inset-0 bg-[var(--fontes-navy)]/12 mix-blend-multiply" />
                <div className="fontes-breathe absolute -bottom-16 -left-16 h-48 w-48 rounded-full border-[18px] border-[var(--fontes-yellow)]/90" aria-hidden="true" />
              </div>
            </div>

            <div className="relative px-7 py-9 sm:px-9 lg:px-10 lg:py-11 xl:px-12">
              <div className="relative hidden h-8 lg:block" aria-hidden="true">
                <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-[var(--fontes-blue)]/35" />
                <div className="fontes-route-dot absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[var(--fontes-blue)] shadow-[0_0_0_6px_rgba(0,123,255,0.10)]" />
              </div>

              <div className="grid gap-7 sm:grid-cols-2 lg:mt-2 lg:grid-cols-4 lg:gap-0">
                {steps.map((step, index) => (
                  <div
                    key={step.number}
                    className={`relative pr-5 ${index > 0 ? "lg:border-l lg:border-[var(--fontes-navy)]/12 lg:pl-5" : ""}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold tracking-[0.2em] text-[var(--fontes-blue)]">{step.number}</span>
                      <span className="h-[2px] w-6 bg-[var(--fontes-blue)]" aria-hidden="true" />
                    </div>
                    <h3
                      className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-[var(--fontes-navy)]"
                      style={{ fontFamily: "var(--font-sora)" }}
                    >
                      {step.label}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--fontes-navy)]/62">
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>
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
