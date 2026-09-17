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
              Across the United States and Africa, we connect American capital with African opportunity, and African capital and talent with opportunities in the US market.
            </p>
            <p className="sectors">
              Financial Infrastructure, Energy, mobility, manufacturing, logistics and physical infrastructure.
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
              <a className="research-email" href="mailto:research@buildx.capital">research@buildx.capital</a>
            </article>

            <article>
              <p className="section-number">03</p>
              <h2>Advisory.</h2>
              <p>We work with investors entering new markets, and with founders and operators raising or expanding across the corridor. Market entry and sizing. Deal sourcing and diligence. Structuring and capital mobilisation. Ongoing support after the investment is made.</p>
              <a className="advisory-link" href="mailto:hello@buildx.capital">For advisory enquiries: hello@buildx.capital</a>
            </article>
          </div>

          <section className="who-we-are" aria-labelledby="who-we-are-title">
            <p className="section-number">04</p>
            <div className="who-heading">
              <h2 id="who-we-are-title">Who we are.</h2>
              <p>BuildX Capital was founded by Tolu Adetuyi.</p>
            </div>
            <div className="who-copy">
              <p>Tolu is co-founder and Chief Innovation Officer at Prembly, a trust infrastructure company backed by Y Combinator, operating across Nigeria, Kenya, the United States and the European Union. He is a board member across sectors including cross-border payments and mobility. He previously led growth at Moniepoint. He holds an MBA in finance from Morgan State University and a degree in computer science, and began his career as a software engineer.</p>
              <p>He writes at <a href="https://adetuyi.com">adetuyi.com</a>.</p>
            </div>
          </section>
        </div>
      </section>

      <footer className="site-footer">
        <p>BuildX Capital provides advisory services. Nothing on this site is an offer to sell or a solicitation to buy any security.</p>
      </footer>
    </main>
  );
}
