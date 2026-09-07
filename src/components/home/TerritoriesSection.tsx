const territories = [
  {
    title: "Formação profissional e empreendedorismo",
    examples: ["Barbearia", "Manicure", "Cabeleireiro", "Maquiagem", "Moda", "Marketing digital", "Hardware"],
    image: "https://images.pexels.com/photos/20853652/pexels-photo-20853652.jpeg?auto=compress&cs=tinysrgb&w=1400",
    imagePosition: "50% 34%",
    icon: "work",
  },
  {
    title: "Educação e tecnologia",
    examples: ["Reforço", "Leitura e redação", "Inglês", "Fotografia", "Informática"],
    image: "https://images.pexels.com/photos/12197311/pexels-photo-12197311.jpeg?auto=compress&cs=tinysrgb&w=1400",
    imagePosition: "50% 35%",
    icon: "education",
  },
  {
    title: "Arte e cultura",
    examples: ["Teatro", "Desenho", "Música", "Violão", "Teclado", "Ballet", "Jazz"],
    image: "https://images.pexels.com/photos/8382271/pexels-photo-8382271.jpeg?auto=compress&cs=tinysrgb&w=1400",
    imagePosition: "50% 42%",
    icon: "art",
  },
  {
    title: "Esporte",
    examples: ["Jiu-jitsu", "Muay Thai", "Vôlei"],
    image: "https://images.pexels.com/photos/19180857/pexels-photo-19180857.jpeg?auto=compress&cs=tinysrgb&w=1400",
    imagePosition: "50% 36%",
    icon: "sport",
  },
  {
    title: "Formação humana e espiritual",
    examples: ["Estudo bíblico", "Acompanhamento", "Convivência", "Desenvolvimento"],
    image: "https://images.pexels.com/photos/34623518/pexels-photo-34623518.jpeg?auto=compress&cs=tinysrgb&w=1400",
    imagePosition: "50% 34%",
    icon: "human",
  },
] as const;

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
    <svg viewBox="0 0 32 32" className="h-9 w-9" aria-hidden="true">
      {name === "work" ? (
        <>
          <circle {...shared} cx="10" cy="9" r="3.2" />
          <circle {...shared} cx="22" cy="9" r="3.2" />
          <path {...shared} d="m12.5 11 7.8 15M19.5 11 11.7 26M13.9 14.1 20 9.7M18.1 14.1 12 9.7" />
        </>
      ) : null}
      {name === "education" ? (
        <>
          <path {...shared} d="M4.5 7.5h7.2c2.4 0 4.3 1.5 4.3 3.4v15.6c0-1.9-1.9-3.4-4.3-3.4H4.5z" />
          <path {...shared} d="M27.5 7.5h-7.2c-2.4 0-4.3 1.5-4.3 3.4v15.6c0-1.9 1.9-3.4 4.3-3.4h7.2z" />
        </>
      ) : null}
      {name === "art" ? (
        <>
          <path {...shared} d="M20 6.2v15.2a4.2 4.2 0 1 1-2-3.6V9.4l9-2.2v11a4.2 4.2 0 1 1-2-3.6V4.7z" />
        </>
      ) : null}
      {name === "sport" ? (
        <>
          <circle {...shared} cx="18.2" cy="6.8" r="2.5" />
          <path {...shared} d="m15.6 11.2-3.8 5.1 4.4 2.5 3.2-4.2 3.2 3.1M16.2 18.8l-3 7.1M19.5 14.7l-1 6.2 5.7 4.8M12 16.2l-5.4-1.1" />
        </>
      ) : null}
      {name === "human" ? (
        <>
          <circle {...shared} cx="16" cy="9.5" r="3.2" />
          <circle {...shared} cx="7.4" cy="13.1" r="2.7" />
          <circle {...shared} cx="24.6" cy="13.1" r="2.7" />
          <path {...shared} d="M10.6 26v-2.2c0-4 2.4-7 5.4-7s5.4 3 5.4 7V26M3.2 25v-1.8c0-3.2 1.8-5.8 4.2-5.8 1.3 0 2.5.8 3.3 2M28.8 25v-1.8c0-3.2-1.8-5.8-4.2-5.8-1.3 0-2.5.8-3.3 2" />
        </>
      ) : null}
    </svg>
  );
}

function Waves({ mirrored = false }: { mirrored?: boolean }) {
  return (
    <svg
      viewBox="0 0 260 70"
      className={`pointer-events-none absolute bottom-4 z-20 h-auto w-[72%] text-[var(--fontes-blue)] ${mirrored ? "-right-7 scale-x-[-1]" : "-left-7"}`}
      aria-hidden="true"
    >
      {[8, 22, 36, 50].map((offset) => (
        <path
          key={offset}
          d={`M-8 ${offset} C48 ${offset - 30}, 92 ${offset + 31}, 150 ${offset} S248 ${offset - 15}, 282 ${offset + 6}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

export function TerritoriesSection() {
  return (
    <section id="territorios" className="relative overflow-hidden bg-[#FCFDFE]" aria-labelledby="territorios-title">
      <div className="pointer-events-none absolute -left-20 top-28 h-48 w-48 rounded-full bg-[var(--fontes-blue)]/[0.035]" aria-hidden="true" />
      <div className="pointer-events-none absolute right-[8%] top-16 h-52 w-52 rounded-full bg-[var(--fontes-yellow)]/[0.12]" aria-hidden="true" />

      <div className="mx-auto max-w-[1540px] px-5 py-20 sm:px-7 sm:py-24 lg:px-10 lg:py-28 xl:px-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--fontes-blue)] sm:text-sm">
              Territórios Fontes
            </p>
            <h2
              id="territorios-title"
              className="max-w-[820px] text-[clamp(3.4rem,7vw,7.4rem)] font-bold leading-[0.84] tracking-[-0.065em] text-[var(--fontes-navy)]"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              Territórios
              <span className="block text-[var(--fontes-blue)]">Fontes</span>
            </h2>
          </div>

          <p className="max-w-[560px] text-lg leading-8 text-[var(--fontes-navy)]/68 sm:text-xl sm:leading-9 lg:justify-self-end lg:pb-2">
            Formação profissional, educação, arte, esporte e desenvolvimento humano se encontram para ampliar repertório, autonomia e futuro.
          </p>
        </div>

        <div className="relative mt-12 sm:mt-14 lg:mt-16">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3 xl:gap-4">
            {territories.map((territory, index) => (
              <article
                key={territory.title}
                className="group relative flex min-h-[620px] flex-col overflow-hidden rounded-[28px] border border-[#DCE8F3] bg-white shadow-[0_12px_38px_rgba(15,45,91,0.045)] transition-transform duration-500 hover:-translate-y-1"
              >
                <div className="relative h-[270px] overflow-hidden bg-[#EFF6FC] sm:h-[285px] lg:h-[255px] xl:h-[285px]">
                  <div className={`absolute -top-12 h-52 w-52 rounded-full ${index % 2 === 0 ? "-right-10 bg-[var(--fontes-yellow)]/70" : "-left-8 bg-[var(--fontes-blue)]/18"}`} aria-hidden="true" />
                  <div className={`absolute bottom-2 h-64 w-64 rounded-full ${index % 2 === 0 ? "-left-14 bg-[var(--fontes-blue)]/16" : "-right-16 bg-[#E4EEF7]"}`} aria-hidden="true" />

                  <img
                    src={territory.image}
                    alt=""
                    className="relative z-10 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                    style={{ objectPosition: territory.imagePosition }}
                  />
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-[var(--fontes-navy)]/10 via-transparent to-white/5" aria-hidden="true" />
                  <Waves mirrored={index % 2 === 1} />
                </div>

                <div className="relative flex flex-1 flex-col px-6 pb-7 pt-14 lg:px-5 xl:px-6">
                  <div className="absolute left-1/2 top-0 z-30 flex h-[86px] w-[86px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[7px] border-white bg-[#EAF4FC] text-[var(--fontes-blue)] shadow-[0_8px_24px_rgba(15,45,91,0.08)]">
                    <TerritoryIcon name={territory.icon} />
                  </div>

                  <h3
                    className="min-h-[72px] text-center text-[clamp(1.25rem,1.55vw,1.65rem)] font-bold leading-[1.04] tracking-[-0.035em] text-[var(--fontes-navy)]"
                    style={{ fontFamily: "var(--font-sora)" }}
                  >
                    {territory.title}
                  </h3>

                  <span className="mx-auto mt-4 h-[3px] w-8 rounded-full bg-[var(--fontes-blue)]" aria-hidden="true" />

                  <ul className="mt-6 space-y-2.5">
                    {territory.examples.map((example) => (
                      <li key={example} className="flex items-start gap-3 text-[15px] leading-5 text-[var(--fontes-navy)]/82 xl:text-base">
                        <span className="mt-[9px] h-[2px] w-4 shrink-0 bg-[var(--fontes-blue)]" aria-hidden="true" />
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
