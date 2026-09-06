const paths = [
  "Barbearia",
  "Manicure",
  "Cabeleireiro",
  "Maquiagem",
  "Moda",
  "Marketing digital",
  "Hardware",
];

export function FeaturedTerritorySection() {
  return (
    <section
      className="relative overflow-hidden bg-[var(--fontes-navy)] text-white"
      aria-labelledby="territorio-destaque-title"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-24 sm:py-28 lg:px-10 lg:py-32 xl:px-14 xl:py-36">
        <div className="grid gap-16 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:gap-20 xl:gap-28">
          <div className="relative z-10 max-w-[650px]">
            <div className="mb-7 flex items-center gap-4">
              <span className="h-[2px] w-10 bg-[#74BCFF] sm:w-12" aria-hidden="true" />
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#74BCFF] sm:text-sm">
                Território em destaque
              </p>
            </div>

            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-white/46 sm:text-sm">
              Formação profissional e empreendedorismo
            </p>

            <h2
              id="territorio-destaque-title"
              className="text-[clamp(3rem,5.3vw,6.1rem)] font-bold leading-[0.92] tracking-[-0.06em] text-white"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              Habilidade que encontra <span className="text-[#74BCFF]">caminho.</span>
            </h2>

            <p className="mt-8 max-w-[590px] text-lg leading-8 text-white/68 sm:text-xl sm:leading-9">
              Formação prática para desenvolver habilidades, ampliar repertório e aproximar adolescentes e jovens de novas possibilidades profissionais.
            </p>

            <div className="mt-10 flex max-w-[610px] flex-wrap gap-x-5 gap-y-3 border-t border-white/12 pt-7">
              {paths.map((path) => (
                <span
                  key={path}
                  className="text-[11px] font-semibold uppercase tracking-[0.17em] text-white/54 sm:text-xs"
                >
                  {path}
                </span>
              ))}
            </div>
          </div>

          <div className="relative min-h-[470px] sm:min-h-[540px] lg:min-h-[610px]" aria-hidden="true">
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 720 620"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                className="fontes-line-flow"
                d="M8 468C128 385 192 514 315 414C435 316 504 164 712 134"
                stroke="#007BFF"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <path
                d="M6 500C137 420 207 535 332 438C453 344 525 200 714 166"
                stroke="#74BCFF"
                strokeOpacity="0.75"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <path
                d="M12 531C149 456 222 560 349 462C473 367 548 237 708 205"
                stroke="white"
                strokeOpacity="0.18"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>

            <div className="fontes-float absolute left-[4%] top-[52%] h-24 w-24 rounded-full border border-white/16 bg-white/[0.03] sm:h-28 sm:w-28 lg:h-32 lg:w-32" />
            <div className="fontes-breathe absolute left-[39%] top-[42%] h-32 w-32 rounded-full bg-[var(--fontes-blue)] sm:h-36 sm:w-36 lg:h-40 lg:w-40" />
            <div className="fontes-float absolute right-[2%] top-[13%] h-40 w-40 rounded-full bg-[var(--fontes-yellow)] sm:h-48 sm:w-48 lg:h-52 lg:w-52" />

            <div className="absolute left-[6%] top-[58%] z-10 text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/45 sm:text-xs">
                01
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-white sm:text-base">
                Habilidade
              </p>
            </div>

            <div className="absolute left-[42%] top-[48%] z-10 text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/56 sm:text-xs">
                02
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-white sm:text-base">
                Formação
              </p>
            </div>

            <div className="absolute right-[6%] top-[24%] z-10 text-center text-[var(--fontes-navy)]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] opacity-55 sm:text-xs">
                03
              </p>
              <p className="mt-2 text-sm font-bold uppercase tracking-[0.15em] sm:text-base">
                Oportunidade
              </p>
            </div>

            <div className="absolute bottom-[4%] right-[2%] flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/42 sm:text-xs">
              <span className="h-[2px] w-9 bg-[#74BCFF]" />
              Habilidade → profissão → oportunidade
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
