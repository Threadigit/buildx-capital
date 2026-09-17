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
          <a href="mailto:tolu@adetuyi.com">Contact</a>
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
            <p className="eyebrow">United States <i aria-hidden="true" /> Africa</p>
            <h1>Mobilising private capital into productive assets and businesses.</h1>
            <p className="subhead">
              Starting with energy, mobility, manufacturing, logistics and physical infrastructure.
            </p>
            <p className="corridor">
              Between the United States and Africa. American capital reaching African opportunity it cannot see from the outside, African capital and talent reaching the US market.
            </p>
          </div>

          <div className="practice-grid">
            <article>
              <p className="section-number">01</p>
              <h2>How we work.</h2>
              <p>Advisory and capital mobilisation, deal by deal. Investors participate in individual opportunities through purpose built vehicles, choosing each one rather than committing to a blind pool.</p>
            </article>

            <article>
              <p className="section-number">02</p>
              <h2>Research.</h2>
              <p>Where opportunity is forming, country by country across Africa and sector by sector across the United States.</p>
              <a className="research-link" href="https://research.buildx.capital">
                Explore BuildX Research <span className="research-arrow" aria-hidden="true" />
              </a>
            </article>

            <address>
              <p className="section-number">03</p>
              <h2>Contact.</h2>
              <a href="mailto:tolu@adetuyi.com">tolu@adetuyi.com</a>
            </address>
          </div>
        </div>
      </section>
    </main>
  );
}
