const territories = [
  {
    number: "01",
    title: "Formação profissional e empreendedorismo",
    description: "Habilidades hoje, mais oportunidades amanhã.",
    examples: [
      "Barbearia",
      "Manicure",
      "Cabeleireiro",
      "Maquiagem",
      "Moda",
      "Marketing digital",
      "Hardware",
    ],
    tone: "bg-[#EEF7FF]",
    accent: "blue",
    icon: "briefcase",
  },
  {
    number: "02",
    title: "Educação e tecnologia",
    description: "Conhecimento que transforma realidades.",
    examples: [
      "Reforço escolar",
      "Leitura e escrita",
      "Inglês",
      "Fotografia",
      "Informática",
    ],
    tone: "bg-[#F7FBFF]",
    accent: "blue",
    icon: "education",
  },
  {
    number: "03",
    title: "Arte e cultura",
    description: "Expressão que conecta pessoas.",
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
    accent: "yellow",
    icon: "art",
  },
  {
    number: "04",
    title: "Esporte",
    description: "Disciplina que impulsiona vidas.",
    examples: ["Jiu-jitsu", "Muay Thai", "Vôlei"],
    tone: "bg-[#EEF7FF]",
    accent: "blue",
    icon: "sport",
  },
  {
    number: "05",
    title: "Formação humana e espiritual",
    description: "Valores que sustentam o futuro.",
    examples: [
      "Estudo bíblico",
      "Acompanhamento",
      "Convivência",
      "Desenvolvimento humano",
    ],
    tone: "bg-[#FFF8E8]",
    accent: "yellow",
    icon: "people",
  },
] as const;

function TerritoryIcon({ icon, accent }: { icon: string; accent: "blue" | "yellow" }) {
  const stroke = accent === "yellow" ? "#A45113" : "#0F2D5B";

  const common = {
    width: 56,
    height: 56,
    viewBox: "0 0 56 56",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke,
    strokeWidth: 2.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (icon === "briefcase") {
    return (
      <svg {...common} aria-hidden="true">
        <path d="M13 20.5h30a3 3 0 0 1 3 3v19a3 3 0 0 1-3 3H13a3 3 0 0 1-3-3v-19a3 3 0 0 1 3-3Z" />
        <path d="M21 20.5v-4.3a3.2 3.2 0 0 1 3.2-3.2h7.6a3.2 3.2 0 0 1 3.2 3.2v4.3" />
        <path d="M10 29.5c8.4 4.8 27.6 4.8 36 0" />
        <path d="M25 31.5h6" />
      </svg>
    );
  }

  if (icon === "education") {
    return (
      <svg {...common} aria-hidden="true">
        <path d="m7 23 21-11 21 11-21 11L7 23Z" />
        <path d="M15 27v10.5c4.6 4.6 8.9 6.5 13 6.5s8.4-1.9 13-6.5V27" />
        <path d="M49 23v12" />
      </svg>
    );
  }

  if (icon === "art") {
    return (
      <svg {...common} aria-hidden="true">
        <path d="M28 9c-11.1 0-20 8.1-20 18.1C8 37 16.8 45 27.7 45H31c3 0 4.7-3.4 2.9-5.8l-1.1-1.4c-1.8-2.3-.2-5.7 2.8-5.7H40c5.4 0 8-3.9 8-8.2C48 15.6 39.2 9 28 9Z" />
        <circle cx="19" cy="22" r="2" />
        <circle cx="28" cy="17" r="2" />
        <circle cx="37" cy="21" r="2" />
        <circle cx="19" cy="31" r="2" />
      </svg>
    );
  }

  if (icon === "sport") {
    return (
      <svg {...common} aria-hidden="true">
        <circle cx="28" cy="28" r="19" />
        <path d="m28 18 7 5-2.5 8h-9L21 23l7-5Z" />
        <path d="m28 9 0 9M10.5 21.5 21 23M45.5 21.5 35 23M15.5 42 23.5 31M40.5 42 32.5 31" />
      </svg>
    );
  }

  return (
    <svg {...common} aria-hidden="true">
      <circle cx="28" cy="18" r="6" />
      <circle cx="15" cy="23" r="4.5" />
      <circle cx="41" cy="23" r="4.5" />
      <path d="M17 45v-9c0-6 4.9-10.8 11-10.8S39 30 39 36v9" />
      <path d="M7.5 45v-7.2c0-4.7 3.6-8.5 8-8.5 1.7 0 3.2.5 4.5 1.4M48.5 45v-7.2c0-4.7-3.6-8.5-8-8.5-1.7 0-3.2.5-4.5 1.4" />
    </svg>
  );
}

export function TerritoriesSection() {
  return (
    <section
      id="territorios"
      className="relative overflow-hidden bg-white"
      aria-labelledby="territorios-title"
    >
      <div className="mx-auto max-w-[1440px] px-6 pt-24 sm:pt-28 lg:px-10 lg:pt-32 xl:px-14 xl:pt-36">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16 xl:gap-24">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="h-[2px] w-10 bg-[var(--fontes-blue)] sm:w-12" aria-hidden="true" />
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--fontes-blue)] sm:text-sm">
                Territórios Fontes
              </p>
            </div>

            <h2
              id="territorios-title"
              className="text-[clamp(3rem,5.5vw,6.2rem)] font-bold leading-[0.92] tracking-[-0.06em] text-[var(--fontes-navy)]"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              Cinco caminhos, um mesmo <span className="text-[var(--fontes-blue)]">propósito.</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-8 pb-2 text-[10px] font-semibold uppercase leading-5 tracking-[0.28em] text-[var(--fontes-navy)]/48 sm:text-xs sm:leading-6">
            <p>
              Conhecimento
              <br />
              oportunidades
              <br />
              comunidade
              <br />
              transformação
            </p>
            <p>
              Pessoas
              <br />
              que fazem
              <br />
              novos caminhos
              <br />
              sempre
            </p>
          </div>
        </div>

        <p className="mt-7 max-w-[760px] text-xs font-semibold uppercase tracking-[0.28em] text-[var(--fontes-navy)]/58 sm:text-sm">
          Diferentes caminhos. Pessoas em movimento para mais futuro.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-[1440px] px-0 sm:mt-20 lg:mt-24 lg:px-10 xl:px-14">
        <div className="grid border-y border-[var(--fontes-navy)]/10 md:grid-cols-2 lg:grid-cols-5">
          {territories.map((territory, index) => {
            const iconBg =
              territory.accent === "yellow" ? "bg-[#FFD77A]" : "bg-[#CDEBFF]";
            const lineColor =
              territory.accent === "yellow"
                ? "bg-[var(--fontes-yellow)]"
                : "bg-[var(--fontes-blue)]";

            return (
              <article
                key={territory.title}
                className={`relative min-h-[650px] overflow-hidden px-7 py-8 text-center sm:min-h-[680px] sm:px-8 sm:py-10 lg:min-h-[720px] lg:px-5 xl:px-7 ${territory.tone} ${
                  index > 0 ? "border-t border-[var(--fontes-navy)]/8 md:border-l md:border-t-0" : ""
                } ${index === 2 ? "md:border-t md:border-[var(--fontes-navy)]/8 lg:border-t-0" : ""} ${
                  index === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="relative z-10 mx-auto flex h-full max-w-[260px] flex-col items-center">
                  <div className={`flex h-24 w-24 items-center justify-center rounded-full ${iconBg}`}>
                    <TerritoryIcon icon={territory.icon} accent={territory.accent} />
                  </div>

                  <p className="mt-5 text-[10px] font-semibold tracking-[0.24em] text-[var(--fontes-blue)]">
                    {territory.number}
                  </p>

                  <h3
                    className="mt-4 text-[clamp(1.4rem,1.9vw,2rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-[var(--fontes-navy)]"
                    style={{ fontFamily: "var(--font-sora)" }}
                  >
                    {territory.title}
                  </h3>

                  <span className={`mt-5 h-[2px] w-8 ${lineColor}`} aria-hidden="true" />

                  <p className="mt-5 max-w-[220px] text-[0.96rem] leading-6 text-[var(--fontes-navy)]/72">
                    {territory.description}
                  </p>

                  <ul className="mt-7 space-y-1.5 text-[10px] font-semibold uppercase leading-4 tracking-[0.23em] text-[var(--fontes-navy)]/68 sm:text-[11px]">
                    {territory.examples.map((example) => (
                      <li key={example}>{example}</li>
                    ))}
                  </ul>

                  <div className="mt-auto w-full pt-10" aria-hidden="true">
                    <div className="relative mx-auto h-36 w-full max-w-[250px]">
                      {territory.accent === "yellow" ? (
                        <>
                          <div className="absolute -bottom-20 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-[var(--fontes-yellow)]/72" />
                          <div className="absolute bottom-7 left-[-18%] h-28 w-[136%] rounded-[50%] border-[4px] border-[var(--fontes-yellow)]" />
                          <div className="absolute bottom-1 left-[-8%] h-24 w-[116%] rounded-[50%] border-[3px] border-[var(--fontes-yellow)]/70" />
                        </>
                      ) : index === 3 ? (
                        <>
                          <div className="absolute -bottom-24 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-[var(--fontes-blue)]" />
                          <div className="absolute -top-4 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full border-[6px] border-[var(--fontes-blue)]" />
                          <div className="absolute top-2 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full border-[4px] border-[#74BCFF]" />
                        </>
                      ) : (
                        <>
                          <div className="absolute -bottom-24 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-[var(--fontes-blue)]/85" />
                          <div className="absolute bottom-8 left-[-22%] h-28 w-[144%] rounded-[50%] border-[4px] border-[var(--fontes-blue)]" />
                          <div className="absolute bottom-1 left-[-12%] h-24 w-[124%] rounded-[50%] border-[3px] border-[#74BCFF]" />
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-8 px-6 py-8 lg:px-10 xl:px-14">
        <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[var(--fontes-navy)]/44 sm:text-xs">
          Instituto Fontes · Pessoas em movimento
        </p>
        <div className="hidden h-px flex-1 bg-[var(--fontes-navy)]/12 sm:block" aria-hidden="true" />
        <p className="hidden text-[10px] font-semibold uppercase tracking-[0.26em] text-[var(--fontes-blue)] sm:block sm:text-xs">
          Educação que abre caminhos
        </p>
      </div>
    </section>
  );
}
