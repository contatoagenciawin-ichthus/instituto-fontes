const territories = [
  {
    number: "01",
    title: "Formação profissional e empreendedorismo",
    concept: "Habilidade → profissão → oportunidade",
    examples: [
      "Barbearia",
      "Manicure",
      "Cabeleireiro",
      "Maquiagem",
      "Moda",
      "Marketing digital",
      "Hardware",
    ],
    tone: "bg-[#F2F8FF]",
  },
  {
    number: "02",
    title: "Educação e tecnologia",
    concept: "Conhecimento → transformação",
    examples: [
      "Reforço escolar",
      "Leitura e escrita",
      "Inglês",
      "Fotografia",
      "Informática",
    ],
    tone: "bg-white",
  },
  {
    number: "03",
    title: "Arte e cultura",
    concept: "Expressão → encontro",
    examples: [
      "Teatro",
      "Desenho",
      "Música",
      "Violão",
      "Teclado",
      "Ballet",
      "Jazz",
    ],
    tone: "bg-[#FFF8E8]",
  },
  {
    number: "04",
    title: "Esporte",
    concept: "Movimento → disciplina → desenvolvimento",
    examples: ["Jiu-jitsu", "Muay Thai", "Vôlei"],
    tone: "bg-[#F2F8FF]",
  },
  {
    number: "05",
    title: "Formação humana e espiritual",
    concept: "Valores → pessoas → propósito",
    examples: [
      "Estudo bíblico",
      "Acompanhamento",
      "Convivência",
      "Desenvolvimento humano",
    ],
    tone: "bg-[#FFF8E8]",
  },
];

export function TerritoriesSection() {
  return (
    <section
      id="territorios"
      className="relative overflow-hidden bg-[var(--fontes-off-white)]"
      aria-labelledby="territorios-title"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-24 sm:py-28 lg:px-10 lg:py-32 xl:px-14 xl:py-36">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.72fr] lg:items-end lg:gap-20 xl:gap-28">
          <div className="max-w-[760px]">
            <div className="mb-6 flex items-center gap-4">
              <span
                className="h-[2px] w-10 bg-[var(--fontes-blue)] sm:w-12"
                aria-hidden="true"
              />
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--fontes-blue)] sm:text-sm">
                Territórios
              </p>
            </div>

            <h2
              id="territorios-title"
              className="text-[clamp(2.8rem,5vw,5.8rem)] font-bold leading-[0.94] tracking-[-0.055em] text-[var(--fontes-navy)]"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              Cinco caminhos, um mesmo <span className="text-[var(--fontes-blue)]">propósito.</span>
            </h2>
          </div>

          <p className="max-w-[520px] text-lg leading-8 text-[var(--fontes-black)]/64 sm:text-xl sm:leading-9 lg:pb-2">
            Diferentes caminhos, um mesmo propósito. Pessoas em movimento para mais futuro.
          </p>
        </div>

        <div className="mt-16 border-y border-[var(--fontes-navy)]/10 sm:mt-20 lg:mt-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-5">
            {territories.map((territory, index) => (
              <article
                key={territory.title}
                className={`relative min-h-[460px] overflow-hidden px-6 py-8 sm:min-h-[500px] sm:px-7 sm:py-9 lg:min-h-[620px] lg:px-5 xl:px-7 ${territory.tone} ${
                  index > 0 ? "border-t border-[var(--fontes-navy)]/10 md:border-t-0 lg:border-l" : ""
                } ${index === 2 ? "md:border-t md:border-[var(--fontes-navy)]/10 lg:border-t-0" : ""} ${
                  index === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-semibold tracking-[0.22em] text-[var(--fontes-blue)]">
                      {territory.number}
                    </span>
                    <span className="h-[2px] w-7 bg-[var(--fontes-blue)]" aria-hidden="true" />
                  </div>

                  <h3
                    className="mt-10 text-[clamp(1.55rem,2vw,2.15rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-[var(--fontes-navy)]"
                    style={{ fontFamily: "var(--font-sora)" }}
                  >
                    {territory.title}
                  </h3>

                  <p className="mt-6 min-h-[48px] text-sm font-medium leading-6 text-[var(--fontes-blue)] lg:text-[0.92rem]">
                    {territory.concept}
                  </p>

                  <div className="mt-8 border-t border-[var(--fontes-navy)]/10 pt-6">
                    <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--fontes-navy)]/42">
                      Alguns caminhos
                    </p>
                    <ul className="space-y-2.5">
                      {territory.examples.map((example) => (
                        <li
                          key={example}
                          className="text-sm leading-5 text-[var(--fontes-navy)]/68"
                        >
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-10" aria-hidden="true">
                    <div className="relative h-20 overflow-hidden">
                      <div className="absolute -bottom-16 left-[-18%] h-32 w-[136%] rounded-[50%] border-[4px] border-[var(--fontes-blue)]/70" />
                      <div className="absolute -bottom-12 left-[-10%] h-28 w-[120%] rounded-[50%] border-[3px] border-[var(--fontes-blue)]/34" />
                      {index === 2 || index === 4 ? (
                        <div className="absolute bottom-1 right-1 h-4 w-4 rounded-full bg-[var(--fontes-yellow)]" />
                      ) : null}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between gap-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--fontes-navy)]/42">
            Diferentes caminhos. Um mesmo futuro em movimento.
          </p>
          <span className="hidden h-[2px] w-16 bg-[var(--fontes-blue)] sm:block" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
