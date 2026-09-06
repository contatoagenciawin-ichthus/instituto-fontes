function App() {
  return (
    <div className="min-h-screen bg-[var(--color-surface)] text-[var(--color-ink)]">
      <main>
        <section className="mx-auto flex min-h-screen max-w-[1440px] items-center px-6 py-12 lg:px-12">
          <div className="max-w-3xl">
            <p className="mb-5 font-medium uppercase tracking-[0.16em] text-[var(--color-blue)]">
              Pessoas em movimento
            </p>
            <h1 className="font-display text-5xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Formação, desenvolvimento e oportunidades para mais futuros.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--color-muted-ink)]">
              O Instituto Fontes oferece formação, desenvolvimento e oportunidades para crianças,
              adolescentes e jovens, com ações abertas à comunidade em projetos específicos.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
