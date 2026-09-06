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
    <header className="h-[88px] border-b border-black/5 bg-[var(--fontes-off-white)]">
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-6 lg:px-10 xl:px-14">
        <Link href="/" aria-label="Instituto Fontes — início" className="shrink-0">
          <Image
            src="/brand/logo-horizontal.png"
            alt="Instituto Fontes"
            width={220}
            height={80}
            priority
            className="h-auto w-[154px] sm:w-[170px] lg:w-[184px]"
          />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-black/70 lg:flex" aria-label="Navegação principal">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-[var(--fontes-blue)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#contribua"
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--fontes-blue)] px-5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--fontes-blue)]"
        >
          Contribua
        </Link>
      </div>
    </header>
  );
}
