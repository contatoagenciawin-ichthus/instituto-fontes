import Image from "next/image";

export function VisualMosaicSection() {
  return (
    <section className="overflow-hidden bg-[var(--fontes-off-white)]">
      <div className="mx-auto max-w-[1440px] px-6 pb-24 sm:pb-28 lg:px-10 lg:pb-32 xl:px-14 xl:pb-36">
        <div className="grid gap-4 lg:grid-cols-12 lg:grid-rows-[220px_220px] xl:grid-rows-[250px_250px]">
          <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] bg-[var(--fontes-navy)] lg:col-span-7 lg:row-span-2 lg:min-h-0">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
            >
              <source
                src="/media/instituto_fontes_hero_11s_final.mp4"
                type="video/mp4"
              />
            </video>
            <div
              className="absolute inset-0 bg-[var(--fontes-blue)]/58 mix-blend-color"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-[var(--fontes-navy)]/28 mix-blend-multiply"
              aria-hidden="true"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--fontes-navy)]/72 to-transparent px-7 pb-7 pt-24 sm:px-9 sm:pb-9">
              <p
                className="max-w-[560px] text-[clamp(2rem,4vw,4.6rem)] font-bold leading-[0.95] tracking-[-0.05em] text-white"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                Pessoas em movimento.
              </p>
            </div>
          </div>

          <div className="relative min-h-[220px] overflow-hidden rounded-[2rem] bg-[var(--fontes-yellow)] p-7 sm:p-9 lg:col-span-5 lg:min-h-0">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--fontes-navy)]/58">
              Formação
            </p>
            <p
              className="absolute bottom-7 left-7 max-w-[420px] text-[clamp(2.2rem,4vw,4.4rem)] font-bold leading-[0.92] tracking-[-0.055em] text-[var(--fontes-navy)] sm:bottom-9 sm:left-9"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              Mais caminhos para o futuro.
            </p>
          </div>

          <div className="relative min-h-[260px] overflow-hidden rounded-[2rem] bg-white lg:col-span-5 lg:min-h-0">
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <Image
                src="/brand/pattern-medio.png"
                alt=""
                width={700}
                height={420}
                className="h-auto w-[118%] max-w-none opacity-90"
              />
            </div>
            <div className="absolute bottom-7 left-7 sm:bottom-9 sm:left-9">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--fontes-blue)]">
                Desenvolvimento
              </p>
              <p className="mt-2 text-base font-medium text-[var(--fontes-navy)] sm:text-lg">
                Conhecimento, autonomia e oportunidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
