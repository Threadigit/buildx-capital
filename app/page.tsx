export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="BuildX Capital home">
          <span className="brand-b">B</span>
          <span className="brand-x">X</span>
          <small>CAPITAL</small>
        </a>

        <nav aria-label="Primary navigation">
          <a href="https://research.buildx.capital">Research</a>
          <a href="mailto:hello@buildx.capital">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <aside className="hero-rail" aria-hidden="true">
          <span>BUILD WHAT MATTERS</span>
        </aside>

        <div className="hero-content">
          <div className="bx-art" aria-hidden="true">
            <span>B</span><span>X</span>
          </div>

          <div className="statement">
            <p className="eyebrow">
              <span>United States</span>
              <span className="corridor-mark" aria-hidden="true"><i /></span>
              <span>Africa</span>
            </p>
            <h1>Mobilising private capital into productive assets and businesses.</h1>
            <p className="corridor">
              Between the United States and Africa. American capital reaching African opportunity it cannot see from the outside, African capital and talent reaching the US market.
            </p>
          </div>

          <div className="practice-grid">
            <article>
              <p className="section-number">01</p>
              <h2>How we work.</h2>
              <p>We combine original research with advisory and capital mobilisation. Research identifies where opportunity is forming; execution happens deal by deal through purpose built vehicles. Investors choose each opportunity rather than committing to a blind pool.</p>
            </article>

            <article>
              <p className="section-number">02</p>
              <h2>Research.</h2>
              <p>Where opportunity is forming, country by country across Africa and sector by sector across the United States.</p>
              <a className="research-link" href="https://research.buildx.capital">
                Explore BuildX Research <span className="research-arrow" aria-hidden="true" />
              </a>
            </article>

            <article>
              <p className="section-number">03</p>
              <h2>Advisory.</h2>
              <p>We help investors, founders and operators find, assess and act on opportunities across the United States and Africa.</p>
              <a className="advisory-link" href="mailto:hello@buildx.capital">hello@buildx.capital</a>
            </article>

            <address>
              <p className="section-number">04</p>
              <h2>Contact.</h2>
              <a href="mailto:hello@buildx.capital">hello@buildx.capital</a>
            </address>
          </div>
        </div>
      </section>
    </main>
  );
}
