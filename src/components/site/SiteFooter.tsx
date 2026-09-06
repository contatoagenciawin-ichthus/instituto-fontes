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
    <footer className="bg-[var(--fontes-off-white)]">
      <div className="mx-auto max-w-[1440px] px-6 py-14 sm:py-16 lg:px-10 lg:py-20 xl:px-14">
        <div className="grid gap-12 border-b border-[var(--fontes-navy)]/10 pb-12 lg:grid-cols-[1.1fr_0.72fr_0.82fr] lg:gap-16 lg:pb-16">
          <div>
            <Image
              src="/brand/logo-horizontal.png"
              alt="Instituto Fontes"
              width={220}
              height={80}
              className="h-auto w-[180px]"
            />
            <p className="mt-6 max-w-[440px] text-base leading-7 text-[var(--fontes-navy)]/64">
              Formação, desenvolvimento e oportunidades para crianças,
              adolescentes e jovens, com foco em novos caminhos para o futuro.
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--fontes-blue)]">
              Navegue
            </p>
            <ul className="space-y-3">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-[var(--fontes-navy)] transition-colors hover:text-[var(--fontes-blue)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--fontes-blue)]">
              Contato
            </p>
            <address className="not-italic text-sm leading-7 text-[var(--fontes-navy)]/72">
              <p>Rua Abelardo Fonseca, 84</p>
              <p>Campo Limpo, Americana/SP</p>
              <p className="mt-4">
                <a className="hover:text-[var(--fontes-blue)]" href="tel:+5519997403018">
                  (19) 9.9740-3018
                </a>
              </p>
              <p>
                <a className="hover:text-[var(--fontes-blue)]" href="tel:+5519993827864">
                  (19) 9.9382-7864
                </a>
              </p>
              <p className="mt-4 break-all">
                <a
                  className="hover:text-[var(--fontes-blue)]"
                  href="mailto:contato@fontesinstituto.com.br"
                >
                  contato@fontesinstituto.com.br
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-7 text-xs text-[var(--fontes-navy)]/44 sm:flex-row sm:items-center sm:justify-between">
          <p>Instituto Fontes</p>
          <p>Americana/SP</p>
        </div>
      </div>
    </footer>
  );
}
