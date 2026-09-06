const opportunityImage =
  "https://images.pexels.com/photos/29461098/pexels-photo-29461098.jpeg?auto=compress&cs=tinysrgb&w=1500";
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

        <div className="mt-16 grid gap-4 lg:grid-cols-12 lg:grid-rows-[290px_290px] sm:mt-20 lg:mt-24">
          <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] bg-[var(--fontes-navy)] lg:col-span-5 lg:row-span-2 lg:min-h-0">
            <img src={opportunityImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--fontes-navy)]/92 via-[var(--fontes-navy)]/16 to-transparent" />
            <div className="absolute left-7 top-7 rounded-full bg-[var(--fontes-yellow)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--fontes-navy)] sm:left-9 sm:top-9 sm:text-xs">
              Potencial em movimento
            </div>
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
              <p
                className="max-w-[520px] text-[clamp(2.4rem,4vw,4.8rem)] font-bold leading-[0.93] tracking-[-0.055em] text-white"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                O caminho começa com gente preparada.
              </p>
            </div>
          </div>

          <div className="relative min-h-[260px] overflow-hidden rounded-[2rem] bg-[#EEF7FF] lg:col-span-7 lg:min-h-0">
            <div className="absolute right-0 top-0 h-full w-[44%] overflow-hidden sm:w-[40%]">
              <img src={detailImage} alt="" className="h-full w-full object-cover grayscale contrast-[1.08]" />
              <div className="absolute inset-0 bg-[var(--fontes-blue)] mix-blend-color" />
              <div className="absolute inset-0 bg-[var(--fontes-navy)]/14 mix-blend-multiply" />
            </div>
            <div className="relative z-10 flex h-full max-w-[62%] flex-col justify-between p-7 sm:p-9 lg:p-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.27em] text-[var(--fontes-blue)] sm:text-xs">
                Formação que encontra oportunidade
              </p>
              <p
                className="max-w-[520px] text-[clamp(2rem,3.6vw,3.8rem)] font-bold leading-[0.95] tracking-[-0.05em] text-[var(--fontes-navy)]"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                Aprender. Praticar. Conectar. Avançar.
              </p>
            </div>
          </div>

          <div className="grid gap-3 lg:col-span-7 sm:grid-cols-2 lg:min-h-0">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative overflow-hidden rounded-[1.6rem] border border-[var(--fontes-navy)]/10 p-6 sm:p-7 ${
                  index === steps.length - 1 ? "bg-[var(--fontes-yellow)]" : "bg-white"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[10px] font-semibold tracking-[0.23em] text-[var(--fontes-blue)] sm:text-xs">
                    {step.number}
                  </span>
                  <span className={`h-[2px] w-8 ${index === steps.length - 1 ? "bg-[var(--fontes-navy)]/32" : "bg-[var(--fontes-blue)]"}`} aria-hidden="true" />
                </div>
                <h3
                  className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-[var(--fontes-navy)] sm:text-[1.75rem]"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  {step.label}
                </h3>
                <p className="mt-2 max-w-[260px] text-sm leading-6 text-[var(--fontes-navy)]/64 sm:text-base">
                  {step.text}
                </p>
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
