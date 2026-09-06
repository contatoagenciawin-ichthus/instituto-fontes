import Image from "next/image";

const pillars = [
  {
    title: "Formação",
    text: "Conhecimento que prepara para a vida e para o trabalho.",
  },
  {
    title: "Desenvolvimento",
    text: "Habilidades, convivência, autonomia e visão de futuro.",
  },
  {
    title: "Oportunidades",
    text: "Novos caminhos para adolescentes e jovens seguirem em frente.",
  },
];

export function WhoWeAre() {
  return (
    <section
      id="instituto"
      className="relative overflow-hidden bg-[var(--fontes-off-white)]"
      aria-labelledby="instituto-title"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-24 sm:py-28 lg:px-10 lg:py-32 xl:px-14 xl:py-36">
        <div className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 xl:gap-24">
          <div className="relative z-10 max-w-[660px]">
            <div className="mb-6 flex items-center gap-4">
              <span
                className="h-[2px] w-10 bg-[var(--fontes-blue)] sm:w-12"
                aria-hidden="true"
              />
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--fontes-blue)] sm:text-sm">
                O Instituto
              </p>
            </div>

            <h2
              id="instituto-title"
              className="text-[clamp(2.8rem,5vw,5.7rem)] font-bold leading-[0.94] tracking-[-0.055em] text-[var(--fontes-navy)]"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              Pessoas em movimento para novos{" "}
              <span className="text-[var(--fontes-blue)]">caminhos.</span>
            </h2>

            <p className="mt-8 max-w-[610px] text-lg leading-8 text-[var(--fontes-black)]/74 sm:text-xl sm:leading-9">
              O Instituto Fontes oferece formação, desenvolvimento e oportunidades
              para crianças, adolescentes e jovens, com ações abertas à comunidade
              em projetos específicos.
            </p>

            <p className="mt-6 max-w-[590px] text-base leading-8 text-black/58 sm:text-lg">
              Nosso foco principal está nos adolescentes e jovens, preparando
              caminhos reais para o futuro.
            </p>
          </div>

          <div className="relative min-h-[460px] sm:min-h-[520px] lg:min-h-[560px]" aria-hidden="true">
            <div className="absolute inset-y-0 right-0 w-[78%] overflow-hidden rounded-[2px] bg-[var(--fontes-navy)]">
              <div className="absolute -left-[10%] top-[8%] h-[210px] w-[210px] rounded-full bg-[var(--fontes-blue)] sm:h-[260px] sm:w-[260px] lg:h-[300px] lg:w-[300px]" />
              <div className="absolute right-[8%] top-[7%] h-[120px] w-[120px] rounded-full bg-[var(--fontes-yellow)] sm:h-[150px] sm:w-[150px] lg:h-[170px] lg:w-[170px]" />

              <div className="absolute bottom-[12%] left-[11%] max-w-[310px] text-white">
                <p className="text-[clamp(2rem,3.2vw,3.8rem)] font-semibold leading-[0.98] tracking-[-0.045em]" style={{ fontFamily: "var(--font-sora)" }}>
                  Formação,
                  <br />
                  desenvolvimento
                  <br />
                  <span className="text-[#74BCFF]">e oportunidades.</span>
                </p>
              </div>

              <div className="absolute right-[7%] top-[42%] text-right text-[10px] font-semibold uppercase leading-5 tracking-[0.26em] text-white/66 sm:text-xs sm:leading-6">
                Pessoas
                <br />
                em movimento
              </div>
            </div>

            <div className="absolute bottom-[13%] left-0 w-[58%] max-w-[360px] opacity-95">
              <Image
                src="/brand/pattern-medio.png"
                alt=""
                width={520}
                height={220}
                className="h-auto w-full"
              />
            </div>

            <div className="absolute left-[7%] top-[11%] h-[34%] w-[35%] border-l border-t border-[var(--fontes-blue)]/28" />

            <div className="absolute bottom-[3%] right-[4%] flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--fontes-blue)] sm:text-xs">
              <span className="h-[2px] w-8 bg-[var(--fontes-blue)]" />
              Mais horizontes
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-[var(--fontes-navy)]/10 pt-10 sm:mt-20 sm:pt-12 lg:mt-24 lg:pt-14">
          <div className="grid gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
            {pillars.map((pillar, index) => (
              <div key={pillar.title} className="relative pr-4">
                <div className="mb-5 flex items-center gap-3">
                  <span className="text-xs font-semibold tracking-[0.2em] text-[var(--fontes-blue)]">
                    0{index + 1}
                  </span>
                  <span className="h-[2px] w-7 bg-[var(--fontes-blue)]" aria-hidden="true" />
                </div>
                <h3
                  className="text-2xl font-semibold tracking-[-0.035em] text-[var(--fontes-navy)] sm:text-[1.7rem]"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  {pillar.title}
                </h3>
                <p className="mt-3 max-w-[340px] text-base leading-7 text-black/58">
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
