const mosaicFrameA =
  "https://res.cloudinary.com/iqlvzhdw/video/upload/so_0.9,w_1200,h_1350,c_fill,g_auto,q_auto,f_auto/v1788725634/hero-approved-desktop.jpg";
const mosaicFrameB =
  "https://res.cloudinary.com/iqlvzhdw/video/upload/so_5.2,w_760,h_760,c_fill,g_auto,q_auto,f_auto/v1788725634/hero-approved-desktop.jpg";
const mosaicFrameC =
  "https://res.cloudinary.com/iqlvzhdw/video/upload/so_8.1,w_760,h_760,c_fill,g_auto,q_auto,f_auto/v1788725634/hero-approved-desktop.jpg";

export function VisualMosaicSection() {
  return (
    <section className="overflow-hidden bg-[var(--fontes-off-white)]">
      <div className="mx-auto max-w-[1440px] px-6 pb-24 sm:pb-28 lg:px-10 lg:pb-32 xl:px-14 xl:pb-36">
        <div className="mb-8 flex items-end justify-between gap-8 sm:mb-10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--fontes-blue)] sm:text-xs">
            Pessoas · caminhos · futuro
          </p>
          <div className="hidden h-px flex-1 bg-[var(--fontes-navy)]/12 sm:block" aria-hidden="true" />
          <p className="hidden text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--fontes-navy)]/42 lg:block">
            Instituto Fontes
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-12 lg:grid-rows-[245px_245px] xl:grid-rows-[280px_280px]">
          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-[var(--fontes-navy)] lg:col-span-6 lg:row-span-2 lg:min-h-0">
            <img src={mosaicFrameA} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-[var(--fontes-blue)]/34 mix-blend-color" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--fontes-navy)]/86 via-[var(--fontes-navy)]/10 to-transparent" aria-hidden="true" />

            <div className="absolute left-7 top-7 text-[10px] font-semibold uppercase leading-5 tracking-[0.28em] text-white/70 sm:left-9 sm:top-9 sm:text-xs">
              Mais pessoas
              <br />
              mais horizontes
            </div>

            <div className="absolute inset-x-0 bottom-0 px-7 pb-8 pt-28 sm:px-9 sm:pb-10">
              <p
                className="max-w-[560px] text-[clamp(2.4rem,4.4vw,5.1rem)] font-bold leading-[0.92] tracking-[-0.055em] text-white"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                Pessoas em movimento.
              </p>
            </div>
          </div>

          <div className="relative min-h-[230px] overflow-hidden rounded-[2rem] bg-[var(--fontes-yellow)] p-7 sm:p-9 lg:col-span-3 lg:min-h-0">
            <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full border-[15px] border-white/24" aria-hidden="true" />
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--fontes-navy)]/58">Formação</p>
            <p
              className="absolute bottom-7 left-7 right-7 text-[clamp(2rem,3.5vw,3.7rem)] font-bold leading-[0.93] tracking-[-0.055em] text-[var(--fontes-navy)] sm:bottom-9 sm:left-9 sm:right-9"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              Mais caminhos para o futuro.
            </p>
          </div>

          <div className="relative min-h-[300px] overflow-hidden rounded-[2rem] bg-white lg:col-span-3 lg:min-h-0">
            <div className="absolute -left-7 -top-5 h-28 w-28 rounded-full bg-[var(--fontes-blue)]/12" aria-hidden="true" />
            <div className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-[9px] border-[#D8EEFF]">
              <img src={mosaicFrameB} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="absolute bottom-5 right-5 h-16 w-16 rounded-full bg-[var(--fontes-yellow)]" aria-hidden="true" />
          </div>

          <div className="relative min-h-[280px] overflow-hidden rounded-[2rem] bg-[var(--fontes-blue)] lg:col-span-3 lg:min-h-0">
            <img src={mosaicFrameC} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-[var(--fontes-blue)]/60 mix-blend-color" aria-hidden="true" />
            <div className="absolute inset-0 bg-[var(--fontes-navy)]/20 mix-blend-multiply" aria-hidden="true" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/72">Desenvolvimento</p>
              <p className="mt-2 text-xl font-semibold tracking-[-0.035em] text-white sm:text-2xl" style={{ fontFamily: "var(--font-sora)" }}>
                Conhecimento em ação.
              </p>
            </div>
          </div>

          <div className="relative min-h-[250px] overflow-hidden rounded-[2rem] bg-white p-7 sm:p-9 lg:col-span-3 lg:min-h-0">
            <div className="absolute -bottom-20 -right-16 h-56 w-56 rounded-full border-[18px] border-[var(--fontes-blue)]/12" aria-hidden="true" />
            <svg viewBox="0 0 300 100" className="absolute left-6 top-6 w-[78%]" fill="none" aria-hidden="true">
              <path d="M0 55C58 8 93 88 155 45C211 6 242 70 300 28" stroke="var(--fontes-blue)" strokeWidth="6" strokeLinecap="round" />
              <path d="M0 78C58 31 93 111 155 68C211 29 242 93 300 51" stroke="#74BCFF" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <div className="absolute bottom-7 left-7 right-7 sm:bottom-9 sm:left-9 sm:right-9">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--fontes-blue)]">Oportunidade</p>
              <p
                className="mt-2 text-[clamp(1.8rem,3vw,3rem)] font-bold leading-[0.95] tracking-[-0.05em] text-[var(--fontes-navy)]"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                Potencial precisa de caminho.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
