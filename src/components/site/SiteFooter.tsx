import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "O Instituto", href: "/#instituto" },
  { label: "Impacto", href: "/#impacto" },
  { label: "Territórios", href: "/#territorios" },
  { label: "Oportunidades", href: "/#oportunidades" },
  { label: "Contribua", href: "/#contribua" },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[var(--fontes-navy)] text-white">
      <img
        src="/brand/pattern-medio.png"
        alt=""
        className="fontes-wave-drift-slow pointer-events-none absolute -right-20 top-8 w-[560px] opacity-[0.11] sm:w-[720px] lg:w-[920px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-14 sm:py-16 lg:px-10 lg:py-20 xl:px-14">
        <div className="grid gap-12 border-b border-white/12 pb-12 lg:grid-cols-[1.1fr_0.72fr_0.82fr] lg:gap-16 lg:pb-16">
          <div>
            <Image
              src="/brand/logo-horizontal.png"
              alt="Instituto Fontes"
              width={240}
              height={90}
              className="h-[72px] w-auto object-contain"
            />
            <p className="mt-6 max-w-[440px] text-base leading-7 text-white/68">
              Formação, desenvolvimento e oportunidades para crianças,
              adolescentes e jovens, com foco em novos caminhos para o futuro.
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#74BCFF]">
              Navegue
            </p>
            <ul className="space-y-3">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-white/78 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#74BCFF]">
              Contato
            </p>
            <address className="not-italic text-sm leading-7 text-white/70">
              <p>Rua Abelardo Fonseca, 84</p>
              <p>Campo Limpo, Americana/SP</p>
              <p className="mt-4">
                <a className="hover:text-white" href="tel:+5519997403018">
                  (19) 9.9740-3018
                </a>
              </p>
              <p>
                <a className="hover:text-white" href="tel:+5519993827864">
                  (19) 9.9382-7864
                </a>
              </p>
              <p className="mt-4 break-all">
                <a className="hover:text-white" href="mailto:contato@fontesinstituto.com.br">
                  contato@fontesinstituto.com.br
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-7 text-xs text-white/42 sm:flex-row sm:items-center sm:justify-between">
          <p>Instituto Fontes</p>
          <div className="flex items-center gap-4">
            <span className="hidden h-px w-16 bg-[var(--fontes-blue)] sm:block" aria-hidden="true" />
            <p>Mais pessoas. Mais horizontes.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
