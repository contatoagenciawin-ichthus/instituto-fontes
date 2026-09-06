export default function HomePage() {
  return (
    <main className="min-h-screen bg-[var(--fontes-off-white)] text-[var(--fontes-black)]">
      <section className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-16 lg:px-10">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--fontes-blue)]">
            Instituto Fontes
          </p>
          <h1
            className="text-5xl font-bold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            Formação, desenvolvimento e oportunidades para mais futuros.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-black/70">
            O Instituto Fontes oferece formação, desenvolvimento e oportunidades
            para crianças, adolescentes e jovens, com ações abertas à comunidade
            em projetos específicos.
          </p>
        </div>
      </section>
    </main>
  );
}
