const territories = [
  {
    number: "01",
    title: "Formação profissional e empreendedorismo",
    description: "Habilidades hoje, mais oportunidades amanhã.",
    examples: ["Barbearia", "Manicure", "Cabeleireiro", "Maquiagem", "Moda", "Marketing digital", "Hardware"],
    image: "https://images.pexels.com/photos/20853652/pexels-photo-20853652.jpeg?auto=compress&cs=tinysrgb&w=1400",
    tone: "blue",
    icon: "work",
  },
  {
    number: "02",
    title: "Educação e tecnologia",
    description: "Conhecimento que transforma realidades.",
    examples: ["Reforço escolar", "Leitura e escrita", "Inglês", "Fotografia", "Informática"],
    image: "https://images.pexels.com/photos/12197311/pexels-photo-12197311.jpeg?auto=compress&cs=tinysrgb&w=1400",
    tone: "light",
    icon: "education",
  },
  {
    number: "03",
    title: "Arte e cultura",
    description: "Expressão que conecta pessoas.",
    examples: ["Teatro", "Desenho", "Música", "Violão", "Teclado", "Ballet", "Jazz"],
    image: "https://images.pexels.com/photos/8382271/pexels-photo-8382271.jpeg?auto=compress&cs=tinysrgb&w=1400",
    tone: "yellow",
    icon: "art",
  },
  {
    number: "04",
    title: "Esporte",
    description: "Disciplina que impulsiona vidas.",
    examples: ["Jiu-jitsu", "Muay Thai", "Vôlei"],
    image: "https://images.pexels.com/photos/19180857/pexels-photo-19180857.jpeg?auto=compress&cs=tinysrgb&w=1400",
    tone: "light",
    icon: "sport",
  },
  {
    number: "05",
    title: "Formação humana e espiritual",
    description: "Valores que sustentam o futuro.",
    examples: ["Estudo bíblico", "Acompanhamento", "Convivência", "Desenvolvimento humano"],
    image: "https://images.pexels.com/photos/34623518/pexels-photo-34623518.jpeg?auto=compress&cs=tinysrgb&w=1400",
    tone: "yellow",
    icon: "human",
  },
] as const;

const toneClasses = {
  blue: "bg-[#EEF7FF]",
  light: "bg-white",
  yellow: "bg-[#FFF8E5]",
} as const;

type TerritoryIconName = (typeof territories)[number]["icon"];

function TerritoryIcon({ name }: { name: TerritoryIconName }) {
  const shared = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
      {name === "work" ? (
        <>
          <path {...shared} d="M5 11.5h22v14H5zM11.5 11.5V8.8c0-1 .8-1.8 1.8-1.8h5.4c1 0 1.8.8 1.8 1.8v2.7" />
          <path {...shared} d="M5 16.5c5.8 3.2 16.2 3.2 22 0M14 18.8h4" />
        </>
      ) : null}
      {name === "education" ? (
        <>
          <path {...shared} d="m4.5 12.5 11.5-6 11.5 6L16 18.7zM9 15.2v6c4.5 3.4 9.5 3.4 14 0v-6" />
          <path {...shared} d="M27.5 12.5v8" />
        </>
      ) : null}
      {name === "art" ? (
        <>
          <path {...shared} d="M16 5.5C9.4 5.5 4 10.1 4 16c0 5.4 4.4 9.6 9.7 9.6h1.7c1.5 0 2.4-1.5 1.7-2.8-.7-1.4.3-3 1.9-3h3.7c3 0 5.3-2.3 5.3-5.2 0-5.2-5.4-9.1-12-9.1Z" />
          <circle cx="10" cy="14" r="1.3" fill="currentColor" /><circle cx="14.2" cy="10.4" r="1.3" fill="currentColor" /><circle cx="19.3" cy="10.4" r="1.3" fill="currentColor" /><circle cx="22.5" cy="14.3" r="1.3" fill="currentColor" />
        </>
      ) : null}
      {name === "sport" ? (
        <>
          <circle {...shared} cx="16" cy="16" r="11.5" />
          <path {...shared} d="m12 12.5 4-2.7 4 2.7-1.5 4.7h-5zM16 9.8V4.6M20 12.5l6.2-1.7M18.5 17.2l3.7 5.7M13.5 17.2l-3.7 5.7M12 12.5l-6.2-1.7" />
        </>
      ) : null}
      {name === "human" ? (
        <>
          <circle {...shared} cx="16" cy="10.5" r="4" />
          <circle {...shared} cx="8" cy="14" r="3" />
          <circle {...shared} cx="24" cy="14" r="3" />
          <path {...shared} d="M9.5 26v-2.2c0-4 2.9-7.3 6.5-7.3s6.5 3.3 6.5 7.3V26M3.8 25v-1.8c0-3 1.8-5.5 4.2-5.5 1.3 0 2.4.7 3.2 1.8M28.2 25v-1.8c0-3-1.8-5.5-4.2-5.5-1.3 0-2.4.7-3.2 1.8" />
        </>
      ) : null}
    </svg>
  );
}

export function TerritoriesSection() {
  return (
    <section id="territorios" className="relative overflow-hidden bg-white" aria-labelledby="territorios-title">
      <div className="pointer-events-none absolute -right-24 top-20 h-64 w-64 rounded-full bg-[var(--fontes-yellow)]/18" aria-hidden="true" />

      <div className="mx-auto max-w-[1440px] px-6 py-20 sm:py-24 lg:px-10 lg:py-28 xl:px-14 xl:py-32">
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

        <div className="relative mt-12 sm:mt-14 lg:mt-16">
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
                className={`group relative flex min-h-[540px] flex-col overflow-hidden border-[var(--fontes-navy)]/10 ${toneClasses[territory.tone]} ${
                  index > 0 ? "lg:border-l" : ""
                } ${index % 2 === 1 ? "md:border-l lg:border-l" : ""}`}
              >
                <div className="relative z-10 flex flex-1 flex-col px-6 pb-6 pt-7 sm:px-7 lg:px-5 xl:px-6">
                  <div className="flex items-center justify-between gap-4">
                    <div className="fontes-float flex h-16 w-16 items-center justify-center rounded-full bg-[#D9EEFF] text-[var(--fontes-navy)]">
                      <TerritoryIcon name={territory.icon} />
                    </div>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-[var(--fontes-blue)]">{territory.number}</span>
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

                  <div className="mt-6 flex flex-wrap gap-x-2 gap-y-1.5 border-t border-[var(--fontes-navy)]/12 pt-5">
                    {territory.examples.map((example, exampleIndex) => (
                      <span key={example} className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--fontes-navy)]/64">
                        {example}{exampleIndex < territory.examples.length - 1 ? " ·" : ""}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="fontes-territory-photo relative mt-auto h-[190px] overflow-hidden">
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
