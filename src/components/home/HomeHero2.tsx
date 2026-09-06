import Image from "next/image";
import Link from "next/link";

export function HomeHero2() {
  return (
    <section
      id="hero-pattern-preview"
      className="relative isolate h-[calc(100svh-88px)] min-h-[520px] overflow-hidden bg-[var(--fontes-navy)]"
    >
      <video
        className="hero-video absolute inset-0 hidden h-full w-full object-cover md:block"
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

      <video
        className="hero-video absolute inset-0 h-full w-full object-cover md:hidden"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source
          src="/media/instituto_fontes_hero_mobile_11s_final.mp4"
          type="video/mp4"
        />
      </video>

      <div
        className="absolute inset-0 bg-[var(--fontes-blue)]/72 mix-blend-color"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 bg-[var(--fontes-navy)]/52 mix-blend-multiply"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 bg-gradient-to-r from-[var(--fontes-navy)]/75 via-[var(--fontes-navy)]/30 to-transparent md:from-[var(--fontes-navy)]/82 md:via-[var(--fontes-navy)]/24"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 bg-gradient-to-t from-[var(--fontes-navy)]/40 via-transparent to-[var(--fontes-navy)]/10"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-[52vw] min-w-[240px] max-w-[560px] overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -bottom-10 right-[-48px] w-[270px] opacity-[0.09] sm:w-[320px] md:w-[370px] lg:w-[430px] xl:w-[500px]">
          <Image
            src="/brand/pattern-medio.png"
            alt=""
            width={520}
            height={520}
            className="h-auto w-full object-contain mix-blend-screen"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] items-center px-6 py-10 lg:px-10 xl:px-14">
        <div className="max-w-[760px]">
          <h1
            className="max-w-[760px] text-[clamp(3rem,6vw,6.8rem)] font-bold leading-[0.91] tracking-[-0.055em] text-white"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            Potencial precisa de oportunidade.
          </h1>

          <p className="mt-6 max-w-[640px] text-lg leading-8 text-white/88 sm:text-xl sm:leading-9 lg:mt-7 lg:text-[1.35rem]">
            Formação e novos caminhos para adolescentes e jovens construírem seu
            futuro.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 lg:mt-9">
            <Link
              href="/#instituto"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[var(--fontes-blue)] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Conheça o Instituto
            </Link>

            <Link
              href="/#contribua"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/45 bg-white/8 px-6 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
            >
              Contribua
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
