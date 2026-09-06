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

const primaryImage =
  "https://images.pexels.com/photos/6209356/pexels-photo-6209356.jpeg?auto=compress&cs=tinysrgb&w=1400";
const secondaryImage =
  "https://images.pexels.com/photos/7742822/pexels-photo-7742822.jpeg?auto=compress&cs=tinysrgb&w=1000";

export function WhoWeAre() {
  return (
    <section
      id="instituto"
      className="relative overflow-hidden bg-[var(--fontes-off-white)]"
      aria-labelledby="instituto-title"
    >
      <div className="pointer-events-none absolute -right-20 top-16 h-56 w-56 rounded-full border-[24px] border-[var(--fontes-blue)]/8 sm:h-72 sm:w-72" aria-hidden="true" />

      <div className="mx-auto max-w-[1440px] px-6 py-20 sm:py-24 lg:px-10 lg:py-28 xl:px-14 xl:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16 xl:gap-24">
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

          <div className="relative min-h-[500px] sm:min-h-[610px] lg:min-h-[690px]" aria-hidden="true">
            <div className="fontes-breathe absolute right-[8%] top-[2%] h-[245px] w-[245px] rounded-full bg-[var(--fontes-yellow)] sm:h-[285px] sm:w-[285px] lg:h-[315px] lg:w-[315px]" />
            <div className="absolute left-[10%] top-[7%] h-[58%] w-[68%] rounded-full bg-[var(--fontes-blue)]" />

            <div className="absolute left-[0%] top-[10%] h-[72%] w-[70%] overflow-hidden bg-[var(--fontes-navy)] shadow-[0_28px_90px_rgba(15,45,91,0.12)]">
              <img
                src={primaryImage}
                alt=""
                className="fontes-image-breathe h-full w-full object-cover object-center"
              />
            </div>

            <div className="absolute bottom-[0%] right-[0%] h-[43%] w-[46%] overflow-hidden border-[10px] border-[var(--fontes-off-white)] bg-[var(--fontes-blue)] shadow-[0_24px_80px_rgba(15,45,91,0.16)]">
              <img
                src={secondaryImage}
                alt=""
                className="h-full w-full object-cover grayscale contrast-[1.08]"
              />
              <div className="absolute inset-0 bg-[var(--fontes-blue)] mix-blend-color" />
              <div className="absolute inset-0 bg-[var(--fontes-navy)]/12 mix-blend-multiply" />
            </div>

            <img
              src="/brand/pattern-medio.png"
              alt=""
              className="fontes-wave-drift absolute left-[-8%] top-[55%] z-20 w-[78%] opacity-95"
            />

            <div className="absolute right-[1%] top-[3%] z-20 text-right text-[10px] font-semibold uppercase leading-5 tracking-[0.27em] text-[var(--fontes-navy)]/48 sm:text-xs sm:leading-6">
              Mais pessoas
              <br />
              mais horizontes
            </div>

            <div className="absolute bottom-[8%] left-[5%] z-30 max-w-[300px] border-l-2 border-[var(--fontes-blue)] bg-white/94 px-5 py-4 backdrop-blur-sm">
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
