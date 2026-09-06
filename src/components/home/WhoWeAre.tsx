export function WhoWeAre() {
  return (
    <section
      id="instituto"
      className="bg-[var(--fontes-off-white)]"
      aria-labelledby="instituto-title"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-24 sm:py-28 lg:px-10 lg:py-36 xl:px-14 xl:py-40">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 xl:gap-28">
          <div className="max-w-[620px]">
            <div className="mb-6 flex items-center gap-4">
              <span
                className="h-px w-10 bg-[var(--fontes-blue)] sm:w-12"
                aria-hidden="true"
              />
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--fontes-blue)] sm:text-sm">
                O Instituto
              </p>
            </div>

            <h2
              id="instituto-title"
              className="text-[clamp(2.7rem,5vw,5.6rem)] font-bold leading-[0.96] tracking-[-0.05em] text-[var(--fontes-black)]"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              Pessoas em movimento para novos caminhos.
            </h2>
          </div>

          <div className="flex max-w-[720px] flex-col justify-center lg:pt-14">
            <p className="text-xl leading-9 text-[var(--fontes-black)] sm:text-[1.4rem] sm:leading-10 lg:text-[1.5rem]">
              O Instituto Fontes oferece formação, desenvolvimento e oportunidades
              para crianças, adolescentes e jovens, com ações abertas à comunidade
              em projetos específicos.
            </p>

            <div className="mt-10 border-t border-black/10 pt-8">
              <p className="max-w-[650px] text-base leading-8 text-black/62 sm:text-lg">
                Nosso foco principal está nos <strong className="font-semibold text-[var(--fontes-black)]">adolescentes e jovens</strong>, com formação,
                preparação profissional, desenvolvimento humano e acesso a novas
                oportunidades.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
