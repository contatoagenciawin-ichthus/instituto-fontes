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

const frameA =
  "https://res.cloudinary.com/iqlvzhdw/video/upload/so_1.1,w_900,h_1120,c_fill,g_auto,q_auto,f_auto/v1788725634/hero-approved-desktop.jpg";
const frameB =
  "https://res.cloudinary.com/iqlvzhdw/video/upload/so_4.7,w_720,h_720,c_fill,g_auto,q_auto,f_auto/v1788725634/hero-approved-desktop.jpg";

export function WhoWeAre() {
  return (
    <section
      id="instituto"
      className="relative overflow-hidden bg-[var(--fontes-off-white)]"
      aria-labelledby="instituto-title"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-20 sm:py-24 lg:px-10 lg:py-28 xl:px-14 xl:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-[0.94fr_1.06fr] lg:gap-16 xl:gap-24">
          <div className="relative z-10 max-w-[650px]">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-[2px] w-10 bg-[var(--fontes-blue)] sm:w-12" aria-hidden="true" />
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

            <p className="mt-8 max-w-[600px] text-lg leading-8 text-[var(--fontes-black)]/74 sm:text-xl sm:leading-9">
              O Instituto Fontes oferece formação, desenvolvimento e oportunidades
              para crianças, adolescentes e jovens, com ações abertas à comunidade
              em projetos específicos.
            </p>

            <p className="mt-6 max-w-[570px] text-base leading-8 text-black/58 sm:text-lg">
              Nosso foco principal está nos adolescentes e jovens, preparando
              caminhos reais para o futuro.
            </p>
          </div>

          <div className="relative min-h-[500px] sm:min-h-[590px] lg:min-h-[650px]" aria-hidden="true">
            <div className="absolute left-[3%] top-[5%] h-[76%] w-[63%] overflow-hidden rounded-[46%_46%_16%_16%/34%_34%_12%_12%] bg-[var(--fontes-blue)]">
              <img
                src={frameA}
                alt=""
                className="h-full w-full object-cover saturate-[0.92]"
              />
              <div className="absolute inset-0 bg-[var(--fontes-blue)]/24 mix-blend-color" />
            </div>

            <div className="absolute right-[2%] top-[14%] h-[190px] w-[190px] rounded-full bg-[var(--fontes-yellow)] sm:h-[225px] sm:w-[225px] lg:h-[245px] lg:w-[245px]" />

            <div className="absolute bottom-[4%] right-[2%] h-[43%] w-[44%] overflow-hidden rounded-full border-[10px] border-[var(--fontes-off-white)] bg-[var(--fontes-navy)] shadow-[0_22px_70px_rgba(15,45,91,0.12)]">
              <img src={frameB} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-[var(--fontes-navy)]/12 mix-blend-multiply" />
            </div>

            <div className="absolute left-[-3%] top-[57%] z-20 w-[72%]">
              <svg viewBox="0 0 520 150" className="h-auto w-full" fill="none">
                <path d="M0 82C84 14 131 132 224 65C310 2 371 115 520 34" stroke="var(--fontes-blue)" strokeWidth="7" strokeLinecap="round" />
                <path d="M0 108C84 40 131 158 224 91C310 28 371 141 520 60" stroke="#74BCFF" strokeWidth="4" strokeLinecap="round" />
                <path d="M0 132C84 64 131 182 224 115C310 52 371 165 520 84" stroke="var(--fontes-blue)" strokeOpacity="0.32" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>

            <div className="absolute right-[1%] top-[3%] text-right text-[10px] font-semibold uppercase leading-5 tracking-[0.27em] text-[var(--fontes-navy)]/48 sm:text-xs sm:leading-6">
              Mais pessoas
              <br />
              mais horizontes
            </div>

            <div className="absolute bottom-[7%] left-[8%] z-30 bg-[var(--fontes-off-white)]/94 px-4 py-3 backdrop-blur-sm">
              <p className="text-[10px] font-semibold uppercase leading-5 tracking-[0.26em] text-[var(--fontes-blue)] sm:text-xs">
                Educação que abre caminhos
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-[var(--fontes-navy)]/10 pt-10 sm:mt-20 sm:pt-12 lg:mt-24 lg:pt-14">
          <div className="grid gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
            {pillars.map((pillar, index) => (
              <div key={pillar.title} className="relative pr-4">
                <div className="mb-5 flex items-center gap-3">
                  <span className="text-xs font-semibold tracking-[0.2em] text-[var(--fontes-blue)]">0{index + 1}</span>
                  <span className="h-[2px] w-7 bg-[var(--fontes-blue)]" aria-hidden="true" />
                </div>
                <h3
                  className="text-2xl font-semibold tracking-[-0.035em] text-[var(--fontes-navy)] sm:text-[1.7rem]"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  {pillar.title}
                </h3>
                <p className="mt-3 max-w-[340px] text-base leading-7 text-black/58">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
