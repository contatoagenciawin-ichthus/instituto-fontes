const territories = [
  {
    number: "01",
    title: "Formação profissional e empreendedorismo",
    description: "Habilidades hoje, mais oportunidades amanhã.",
    examples: ["Barbearia", "Manicure", "Cabeleireiro", "Maquiagem", "Moda", "Marketing digital", "Hardware"],
    image: "https://images.pexels.com/photos/3846554/pexels-photo-3846554.jpeg?auto=compress&cs=tinysrgb&w=1400",
    tone: "blue",
  },
  {
    number: "02",
    title: "Educação e tecnologia",
    description: "Conhecimento que transforma realidades.",
    examples: ["Reforço escolar", "Leitura e escrita", "Inglês", "Fotografia", "Informática"],
    image: "https://images.pexels.com/photos/5211441/pexels-photo-5211441.jpeg?auto=compress&cs=tinysrgb&w=1400",
    tone: "light",
  },
  {
    number: "03",
    title: "Arte e cultura",
    description: "Expressão que conecta pessoas.",
    examples: ["Teatro", "Desenho", "Música", "Violão", "Teclado", "Ballet", "Jazz"],
    image: "https://images.pexels.com/photos/8382271/pexels-photo-8382271.jpeg?auto=compress&cs=tinysrgb&w=1400",
    tone: "yellow",
  },
  {
    number: "04",
    title: "Esporte",
    description: "Disciplina que impulsiona vidas.",
    examples: ["Jiu-jitsu", "Muay Thai", "Vôlei"],
    image: "https://images.pexels.com/photos/19180857/pexels-photo-19180857.jpeg?auto=compress&cs=tinysrgb&w=1400",
    tone: "light",
  },
  {
    number: "05",
    title: "Formação humana e espiritual",
    description: "Valores que sustentam o futuro.",
    examples: ["Estudo bíblico", "Acompanhamento", "Convivência", "Desenvolvimento humano"],
    image: "https://images.pexels.com/photos/34623518/pexels-photo-34623518.jpeg?auto=compress&cs=tinysrgb&w=1400",
    tone: "yellow",
  },
] as const;

const toneClasses = {
  blue: "bg-[#EEF7FF]",
  light: "bg-white",
  yellow: "bg-[#FFF8E5]",
} as const;

export function TerritoriesSection() {
  return (
    <section id="territorios" className="relative overflow-hidden bg-white" aria-labelledby="territorios-title">
      <div className="pointer-events-none absolute -right-24 top-20 h-64 w-64 rounded-full bg-[var(--fontes-yellow)]/18" aria-hidden="true" />

      <div className="mx-auto max-w-[1440px] px-6 py-24 sm:py-28 lg:px-10 lg:py-32 xl:px-14 xl:py-36">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16 xl:gap-24">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="h-[2px] w-10 bg-[var(--fontes-blue)] sm:w-12" aria-hidden="true" />
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--fontes-blue)] sm:text-sm">Territórios Fontes</p>
            </div>
            <h2
              id="territorios-title"
              className="text-[clamp(3rem,5.5vw,6.2rem)] font-bold leading-[0.92] tracking-[-0.06em] text-[var(--fontes-navy)]"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              Cinco caminhos, um mesmo <span className="text-[var(--fontes-blue)]">propósito.</span>
            </h2>
          </div>

          <div className="max-w-[520px] lg:justify-self-end">
            <p className="text-lg leading-8 text-[var(--fontes-black)]/68 sm:text-xl sm:leading-9">
              Formação profissional, educação, arte, esporte e desenvolvimento humano se encontram para ampliar repertório, autonomia e futuro.
            </p>
          </div>
        </div>

        <div className="relative mt-14 sm:mt-16 lg:mt-20">
          <img
            src="/brand/pattern-pequeno.png"
            alt=""
            className="fontes-wave-drift pointer-events-none absolute -top-14 right-[2%] z-20 hidden w-[300px] opacity-80 lg:block"
            aria-hidden="true"
          />

          <div className="grid border-y border-[var(--fontes-navy)]/12 md:grid-cols-2 lg:grid-cols-5">
            {territories.map((territory, index) => (
              <article
                key={territory.title}
                className={`group relative flex min-h-[650px] flex-col overflow-hidden border-[var(--fontes-navy)]/10 ${toneClasses[territory.tone]} ${
                  index > 0 ? "lg:border-l" : ""
                } ${index % 2 === 1 ? "md:border-l lg:border-l" : ""}`}
              >
                <div className="relative z-10 flex flex-1 flex-col px-6 pb-7 pt-8 sm:px-7 lg:px-6 xl:px-7">
                  <div className="flex items-center justify-between gap-4">
                    <div className="fontes-float flex h-16 w-16 items-center justify-center rounded-full bg-[#D9EEFF] text-sm font-bold tracking-[0.16em] text-[var(--fontes-navy)]">
                      {territory.number}
                    </div>
                    <span className="h-[2px] w-8 bg-[var(--fontes-blue)]" aria-hidden="true" />
                  </div>

                  <h3
                    className="mt-7 text-[clamp(1.45rem,2vw,2rem)] font-bold leading-[1.02] tracking-[-0.045em] text-[var(--fontes-navy)]"
                    style={{ fontFamily: "var(--font-sora)" }}
                  >
                    {territory.title}
                  </h3>

                  <p className="mt-4 text-base leading-6 text-[var(--fontes-navy)]/68">
                    {territory.description}
                  </p>

                  <div className="mt-7 space-y-1.5 border-t border-[var(--fontes-navy)]/12 pt-5">
                    {territory.examples.map((example) => (
                      <p key={example} className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--fontes-navy)]/70 sm:text-[11px]">
                        {example}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="relative mt-auto h-[245px] overflow-hidden">
                  <div className={`fontes-breathe absolute -bottom-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full ${index === 2 || index === 4 ? "bg-[var(--fontes-yellow)]" : "bg-[var(--fontes-blue)]"}`} aria-hidden="true" />
                  <img
                    src={territory.image}
                    alt=""
                    className={`relative z-10 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.035] ${
                      index === 1 || index === 3 ? "grayscale contrast-[1.08]" : ""
                    }`}
                  />
                  {index === 1 || index === 3 ? (
                    <>
                      <div className="absolute inset-0 z-20 bg-[var(--fontes-blue)] mix-blend-color" />
                      <div className="absolute inset-0 z-20 bg-[var(--fontes-navy)]/10 mix-blend-multiply" />
                    </>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between gap-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[var(--fontes-navy)]/44 sm:text-xs">
            Pessoas em movimento · diferentes formas de aprender e crescer
          </p>
          <div className="hidden h-px flex-1 bg-[var(--fontes-navy)]/12 sm:block" aria-hidden="true" />
          <p className="hidden text-[10px] font-semibold uppercase tracking-[0.26em] text-[var(--fontes-blue)] lg:block lg:text-xs">
            Educação que abre caminhos
          </p>
        </div>
      </div>
    </section>
  );
}
