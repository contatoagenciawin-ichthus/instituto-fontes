import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "O Instituto", href: "/#instituto" },
  { label: "Impacto", href: "/#impacto" },
  { label: "Territórios", href: "/#territorios" },
  { label: "Oportunidades", href: "/#oportunidades" },
];

export function SiteHeader() {
  return (
    <header className="relative z-50 h-[88px] border-b border-white/10 bg-[var(--fontes-navy)]">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--fontes-blue)]/70 to-transparent" aria-hidden="true" />
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-6 lg:px-10 xl:px-14">
        <Link
          href="/"
          aria-label="Instituto Fontes — início"
          className="flex h-full shrink-0 items-center"
        >
          <Image
            src="/brand/logo-horizontal.png"
            alt="Instituto Fontes"
            width={220}
            height={82}
            priority
            className="h-[54px] w-auto object-contain sm:h-[58px]"
          />
        </Link>

        <nav
          className="hidden items-center gap-8 text-sm font-medium text-white/72 lg:flex"
          aria-label="Navegação principal"
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative py-3 transition-colors after:absolute after:inset-x-0 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-[var(--fontes-blue)] after:transition-transform hover:text-white hover:after:scale-x-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#contribua"
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--fontes-yellow)] px-5 text-sm font-semibold text-[var(--fontes-navy)] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Contribua
        </Link>
      </div>
    </header>
  );
}
