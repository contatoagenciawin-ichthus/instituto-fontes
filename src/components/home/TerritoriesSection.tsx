const territories = [
  {
    number: "01",
    title: "Formação profissional e empreendedorismo",
    description: "Habilidades hoje, mais oportunidades amanhã.",
    examples: ["Barbearia", "Manicure", "Cabeleireiro", "Maquiagem", "Moda", "Marketing digital", "Hardware"],
    image: "https://images.pexels.com/photos/3846554/pexels-photo-3846554.jpeg?auto=compress&cs=tinysrgb&w=1400",
    layout: "lg:col-span-7",
    treatment: "natural",
  },
  {
    number: "02",
    title: "Educação e tecnologia",
    description: "Conhecimento que transforma realidades.",
    examples: ["Reforço escolar", "Leitura e escrita", "Inglês", "Fotografia", "Informática"],
    image: "https://images.pexels.com/photos/5211441/pexels-photo-5211441.jpeg?auto=compress&cs=tinysrgb&w=1400",
    layout: "lg:col-span-5",
    treatment: "duotone",
  },
  {
    number: "03",
    title: "Arte e cultura",
    description: "Expressão que conecta pessoas.",
    examples: ["Teatro", "Desenho", "Música", "Violão", "Teclado", "Ballet", "Jazz"],
    image: "https://images.pexels.com/photos/8382271/pexels-photo-8382271.jpeg?auto=compress&cs=tinysrgb&w=1400",
    layout: "lg:col-span-4",
    treatment: "natural",
  },
  {
    number: "04",
    title: "Esporte",
    description: "Disciplina que impulsiona vidas.",
    examples: ["Jiu-jitsu", "Muay Thai", "Vôlei"],
    image: "https://images.pexels.com/photos/19180857/pexels-photo-19180857.jpeg?auto=compress&cs=tinysrgb&w=1400",
    layout: "lg:col-span-4",
    treatment: "duotone",
  },
  {
    number: "05",
    title: "Formação humana e espiritual",
    description: "Valores que sustentam o futuro.",
    examples: ["Estudo bíblico", "Acompanhamento", "Convivência", "Desenvolvimento humano"],
    image: "https://images.pexels.com/photos/34623518/pexels-photo-34623518.jpeg?auto=compress&cs=tinysrgb&w=1400",
    layout: "lg:col-span-4",
    treatment: "natural",
  },
] as const;

export function TerritoriesSection() {
  return (
    <section id="territorios" className="relative overflow-hidden bg-white" aria-labelledby="territorios-title">
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

        <div className="mt-14 grid gap-4 sm:mt-16 lg:grid-cols-12">
          {territories.map((territory, index) => (
            <article
              key={territory.title}
              className={`group relative min-h-[520px] overflow-hidden rounded-[2rem] bg-[var(--fontes-navy)] ${territory.layout}`}
            >
              <img
                src={territory.image}
                alt=""
                className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025] ${
                  territory.treatment === "duotone" ? "grayscale contrast-[1.08]" : ""
                }`}
              />

              {territory.treatment === "duotone" ? (
                <>
                  <div className="absolute inset-0 bg-[var(--fontes-blue)] mix-blend-color" />
                  <div className="absolute inset-0 bg-[var(--fontes-navy)]/24 mix-blend-multiply" />
                </>
              ) : (
                <div className="absolute inset-0 bg-[var(--fontes-navy)]/10" />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-[var(--fontes-navy)] via-[var(--fontes-navy)]/18 to-transparent" />

              <div className="absolute left-6 top-6 flex items-center gap-3 sm:left-8 sm:top-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-xs font-semibold tracking-[0.18em] text-[var(--fontes-blue)]">
                  {territory.number}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/76 sm:text-xs">
                  Território Fontes
                </span>
              </div>

              {index === 0 ? (
                <div className="absolute right-[-46px] top-[12%] h-40 w-40 rounded-full bg-[var(--fontes-yellow)] sm:h-48 sm:w-48" aria-hidden="true" />
              ) : null}

              {index === 2 ? (
                <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full border-[16px] border-[var(--fontes-yellow)]/85" aria-hidden="true" />
              ) : null}

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-9">
                <h3
                  className="max-w-[620px] text-[clamp(2rem,3.6vw,4rem)] font-bold leading-[0.95] tracking-[-0.05em] text-white"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  {territory.title}
                </h3>
                <p className="mt-4 max-w-[500px] text-base leading-7 text-white/78 sm:text-lg">
                  {territory.description}
                </p>
                <div className="mt-6 flex max-w-[760px] flex-wrap gap-x-4 gap-y-2 border-t border-white/22 pt-5">
                  {territory.examples.map((example) => (
                    <span key={example} className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/72 sm:text-[11px]">
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
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
