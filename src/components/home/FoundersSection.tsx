import Image from "next/image";

const pendingItems = [
  {
    label: "História em primeira pessoa",
    status: "Conteúdo em validação",
  },
  {
    label: "Fotografia real dos fundadores",
    status: "Aguardando material",
  },
  {
    label: "Vídeo curto dos fundadores",
    status: "Previsto para versão final",
  },
];

export function FoundersSection() {
  return (
    <section
      id="fundadores"
      className="relative overflow-hidden bg-[var(--fontes-off-white)]"
      aria-labelledby="fundadores-title"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-20 sm:py-24 lg:px-10 lg:py-28 xl:px-14 xl:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch lg:gap-20 xl:gap-28">
          <div className="flex flex-col justify-between">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span
                  className="h-[2px] w-10 bg-[var(--fontes-blue)] sm:w-12"
                  aria-hidden="true"
                />
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--fontes-blue)] sm:text-sm">
                  Fundadores
                </p>
              </div>

              <h2
                id="fundadores-title"
                className="max-w-[700px] text-[clamp(2.9rem,5.2vw,6.2rem)] font-bold leading-[0.94] tracking-[-0.055em] text-[var(--fontes-navy)]"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                Por que o Instituto Fontes <span className="text-[var(--fontes-blue)]">existe</span>
              </h2>
            </div>

            <div className="mt-14 max-w-[560px] border-t border-[var(--fontes-navy)]/10 pt-7 lg:mt-20">
              <p className="text-sm leading-7 text-[var(--fontes-black)]/58 sm:text-base sm:leading-8">
                Esta seção será finalizada com a história contada pelos próprios fundadores, preservando a voz e a origem real do Instituto.
              </p>
            </div>
          </div>

          <div className="relative min-h-[480px] overflow-hidden bg-[var(--fontes-navy)] sm:min-h-[520px] lg:min-h-[560px]">
            <div
              className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[var(--fontes-blue)] sm:h-96 sm:w-96"
              aria-hidden="true"
            />
            <div
              className="absolute right-[7%] top-[10%] h-32 w-32 rounded-full bg-[var(--fontes-yellow)] sm:h-40 sm:w-40"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full border border-white/16 sm:h-80 sm:w-80"
              aria-hidden="true"
            />

            <div
              className="absolute bottom-[18%] left-[-8%] w-[72%] opacity-24"
              aria-hidden="true"
            >
              <Image
                src="/brand/pattern-medio.png"
                alt=""
                width={720}
                height={360}
                className="h-auto w-full object-contain brightness-0 invert"
              />
            </div>

            <div className="relative z-10 flex h-full min-h-[480px] flex-col justify-between p-7 sm:min-h-[520px] sm:p-10 lg:min-h-[560px] lg:p-12">
              <div className="flex items-start justify-between gap-8">
                <p className="max-w-[180px] text-[10px] font-semibold uppercase leading-5 tracking-[0.26em] text-white/68 sm:text-xs sm:leading-6">
                  Fotografia real dos fundadores
                </p>
                <span className="h-[2px] w-12 bg-white/72" aria-hidden="true" />
              </div>

              <div className="max-w-[430px]">
                <p
                  className="text-[clamp(2rem,3.4vw,4.2rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-white"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  A imagem e a voz reais entram aqui.
                </p>
                <p className="mt-5 max-w-[350px] text-sm leading-7 text-white/62 sm:text-base">
                  Sem banco de imagens. Sem história inventada. Este espaço fica reservado para o material oficial.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid border-y border-[var(--fontes-navy)]/10 sm:mt-12 md:grid-cols-3 lg:mt-14">
          {pendingItems.map((item, index) => (
            <div
              key={item.label}
              className={`px-0 py-6 md:px-7 md:py-8 ${
                index > 0
                  ? "border-t border-[var(--fontes-navy)]/10 md:border-l md:border-t-0"
                  : ""
              }`}
            >
              <p className="text-xs font-semibold uppercase leading-5 tracking-[0.18em] text-[var(--fontes-navy)]">
                {item.label}
              </p>
              <p className="mt-2 text-sm text-[var(--fontes-black)]/48">
                {item.status}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
