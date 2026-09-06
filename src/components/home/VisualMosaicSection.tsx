const mosaicImages = {
  photography: "https://images.pexels.com/photos/3856039/pexels-photo-3856039.jpeg?auto=compress&cs=tinysrgb&w=1500",
  art: "https://images.pexels.com/photos/34022914/pexels-photo-34022914.jpeg?auto=compress&cs=tinysrgb&w=1000",
  sport: "https://images.pexels.com/photos/6005461/pexels-photo-6005461.jpeg?auto=compress&cs=tinysrgb&w=1000",
  workshop: "https://images.pexels.com/photos/3844533/pexels-photo-3844533.jpeg?auto=compress&cs=tinysrgb&w=1000",
  music: "https://images.pexels.com/photos/8472851/pexels-photo-8472851.jpeg?auto=compress&cs=tinysrgb&w=1000",
  community: "https://images.pexels.com/photos/3856035/pexels-photo-3856035.jpeg?auto=compress&cs=tinysrgb&w=1200",
};

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

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-[255px_255px_255px]">
          <div className="relative min-h-[430px] overflow-hidden rounded-[2rem] bg-[var(--fontes-navy)] sm:col-span-2 lg:col-span-6 lg:row-span-2 lg:min-h-0">
            <img src={mosaicImages.photography} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--fontes-navy)]/92 via-[var(--fontes-navy)]/10 to-transparent" />
            <div className="absolute left-7 top-7 text-[10px] font-semibold uppercase leading-5 tracking-[0.28em] text-white/72 sm:left-9 sm:top-9 sm:text-xs">
              Aprender fazendo
              <br />
              descobrir possibilidades
            </div>
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
              <p
                className="max-w-[560px] text-[clamp(2.5rem,4.5vw,5.2rem)] font-bold leading-[0.92] tracking-[-0.055em] text-white"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                Pessoas em movimento.
              </p>
            </div>
          </div>

          <div className="relative min-h-[260px] overflow-hidden rounded-[2rem] bg-[var(--fontes-blue)] lg:col-span-3 lg:min-h-0">
            <img src={mosaicImages.art} alt="" className="absolute inset-0 h-full w-full object-cover grayscale contrast-[1.08]" />
            <div className="absolute inset-0 bg-[var(--fontes-blue)] mix-blend-color" />
            <div className="absolute inset-0 bg-[var(--fontes-navy)]/16 mix-blend-multiply" />
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-7 sm:left-7 sm:right-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/72">Arte e cultura</p>
              <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white" style={{ fontFamily: "var(--font-sora)" }}>
                Criar também é construir futuro.
              </p>
            </div>
          </div>

          <div className="relative min-h-[260px] overflow-hidden rounded-[2rem] bg-[var(--fontes-yellow)] lg:col-span-3 lg:min-h-0">
            <img src={mosaicImages.sport} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--fontes-navy)]/78 via-transparent to-transparent" />
            <div className="absolute right-[-34px] top-[-34px] h-28 w-28 rounded-full border-[14px] border-[var(--fontes-yellow)]" aria-hidden="true" />
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-7 sm:left-7 sm:right-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/74">Esporte</p>
              <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white" style={{ fontFamily: "var(--font-sora)" }}>
                Disciplina em prática.
              </p>
            </div>
          </div>

          <div className="relative min-h-[260px] overflow-hidden rounded-[2rem] bg-white lg:col-span-3 lg:min-h-0">
            <img src={mosaicImages.workshop} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-[var(--fontes-navy)]/10" />
            <div className="absolute left-5 top-5 rounded-full bg-white/92 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.23em] text-[var(--fontes-blue)] backdrop-blur-sm sm:text-[10px]">
              Formação profissional
            </div>
          </div>

          <div className="relative min-h-[260px] overflow-hidden rounded-[2rem] bg-[var(--fontes-yellow)] p-7 sm:p-8 lg:col-span-3 lg:min-h-0">
            <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full border-[14px] border-white/24" aria-hidden="true" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--fontes-navy)]/58">Mais horizontes</p>
            <p
              className="absolute bottom-7 left-7 right-7 text-[clamp(2rem,3.2vw,3.5rem)] font-bold leading-[0.93] tracking-[-0.055em] text-[var(--fontes-navy)] sm:bottom-8 sm:left-8 sm:right-8"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              Potencial precisa de oportunidade.
            </p>
          </div>

          <div className="relative min-h-[280px] overflow-hidden rounded-[2rem] bg-[var(--fontes-navy)] lg:col-span-4 lg:min-h-0">
            <img src={mosaicImages.music} alt="" className="absolute inset-0 h-full w-full object-cover grayscale contrast-[1.05]" />
            <div className="absolute inset-0 bg-[var(--fontes-navy)] mix-blend-color" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--fontes-navy)]/82 to-transparent" />
            <div className="absolute bottom-7 left-7 right-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/66">Repertório</p>
              <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white" style={{ fontFamily: "var(--font-sora)" }}>
                Novas habilidades, novas possibilidades.
              </p>
            </div>
          </div>

          <div className="relative min-h-[280px] overflow-hidden rounded-[2rem] bg-white lg:col-span-5 lg:min-h-0">
            <img src={mosaicImages.community} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--fontes-navy)]/72 via-[var(--fontes-navy)]/8 to-transparent" />
            <div className="absolute left-7 top-1/2 max-w-[290px] -translate-y-1/2 sm:left-9">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/68">Comunidade</p>
              <p className="mt-3 text-3xl font-bold leading-[0.96] tracking-[-0.05em] text-white" style={{ fontFamily: "var(--font-sora)" }}>
                Crescer também é caminhar junto.
              </p>
            </div>
          </div>

          <div className="relative min-h-[280px] overflow-hidden rounded-[2rem] bg-white p-7 sm:p-8 lg:col-span-3 lg:min-h-0">
            <svg viewBox="0 0 300 110" className="absolute left-6 top-7 w-[78%]" fill="none" aria-hidden="true">
              <path d="M0 55C58 8 93 88 155 45C211 6 242 70 300 28" stroke="var(--fontes-blue)" strokeWidth="6" strokeLinecap="round" />
              <path d="M0 78C58 31 93 111 155 68C211 29 242 93 300 51" stroke="#74BCFF" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <div className="absolute bottom-7 left-7 right-7 sm:bottom-8 sm:left-8 sm:right-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--fontes-blue)]">Instituto Fontes</p>
              <p className="mt-2 text-[clamp(1.8rem,2.7vw,3rem)] font-bold leading-[0.95] tracking-[-0.05em] text-[var(--fontes-navy)]" style={{ fontFamily: "var(--font-sora)" }}>
                Educação que abre caminhos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
