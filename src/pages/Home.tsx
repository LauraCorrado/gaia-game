export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <section aria-labelledby="hero-title" className="mb-16">
        <h1 id="hero-title" className="text-lm-text-primary dark:text-dm-text-primary mb-4">
          Giochi Accessibili ed Inclusivi per bambini con Autismo
        </h1>
        <p className="text-lm-text-secondary dark:text-dm-text-secondary text-lg max-w-2xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit est sit eos dignissimos, dolor facilis ipsa id nulla, perspiciatis esse sed quisquam, illo ratione.
        </p>
      </section>

      <section aria-labelledby="obiettivi-title" className="mb-16">
        <h2 id="obiettivi-title" className="text-lm-text-primary dark:text-dm-text-primary mb-6">
          Il progetto
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Ricerca', 'Inclusione', 'Innovazione'].map((label) => (
            <div
              key={label}
              className="bg-lm-bg-secondary dark:bg-dm-bg-secondary rounded-lg p-6"
            >
              <h3 className="text-lm-blue dark:text-dm-blue mb-2">{label}</h3>
              <p className="text-lm-text-secondary dark:text-dm-text-secondary text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="partner-title">
        <h2 id="partner-title" className="text-lm-text-primary dark:text-dm-text-primary mb-4">
          I partner
        </h2>
        <p className="text-lm-text-secondary dark:text-dm-text-secondary">
          TEA SRL · Studio Rubino SRL · Ober SRL · UNICAL
        </p>
      </section>
    </div>
  )
}