export function MotionSection() {
  return (
    <section
      className="relative overflow-hidden bg-[var(--fontes-off-white)] py-20 sm:py-24 lg:py-28"
      aria-labelledby="motion-title"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 xl:px-14">
        <div className="relative min-h-[520px] overflow-hidden bg-[var(--fontes-navy)] sm:min-h-[600px] lg:min-h-[680px]">
          <video
            className="absolute inset-0 hidden h-full w-full object-cover md:block motion-reduce:hidden"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source
              src="/media/instituto_fontes_secao_intermediaria_01.mp4"
              type="video/mp4"
            />
          </video>

          <video
            className="absolute inset-0 h-full w-full object-cover md:hidden motion-reduce:hidden"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source
              src="/media/instituto_fontes_secao_mobile_01.mp4"
              type="video/mp4"
            />
          </video>

          <div
            className="absolute inset-0 bg-[var(--fontes-blue)]/52 mix-blend-color"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-[var(--fontes-navy)]/30 mix-blend-multiply"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[var(--fontes-navy)]/82 via-[var(--fontes-navy)]/8 to-[var(--fontes-navy)]/12"
            aria-hidden="true"
          />

          <div className="relative z-10 flex min-h-[520px] h-full flex-col justify-between px-7 py-8 sm:min-h-[600px] sm:px-10 sm:py-10 lg:min-h-[680px] lg:px-14 lg:py-12 xl:px-16">
            <div className="flex items-center justify-between gap-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/72 sm:text-xs">
                Instituto Fontes
              </p>
              <span className="h-[2px] w-12 bg-[var(--fontes-yellow)] sm:w-16" aria-hidden="true" />
            </div>

            <div className="max-w-[900px]">
              <h2
                id="motion-title"
                className="text-[clamp(3.4rem,7vw,7.8rem)] font-bold leading-[0.9] tracking-[-0.06em] text-white"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                Pessoas em movimento.
              </h2>

              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/72 sm:text-xs">
                <span>Formação</span>
                <span className="h-1 w-1 rounded-full bg-[var(--fontes-yellow)]" aria-hidden="true" />
                <span>Desenvolvimento</span>
                <span className="h-1 w-1 rounded-full bg-[var(--fontes-yellow)]" aria-hidden="true" />
                <span>Oportunidades</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between gap-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--fontes-navy)]/40 sm:text-xs">
            Diferentes caminhos. Um mesmo propósito.
          </p>
          <span className="hidden h-[2px] w-14 bg-[var(--fontes-blue)] sm:block" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
