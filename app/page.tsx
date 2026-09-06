const sectors = ['Energy', 'Manufacturing', 'Infrastructure'];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="BuildX Capital home">
          <span>BUILD</span><span className="brand-x">X</span>
          <span className="brand-capital">CAPITAL</span>
        </a>
        <div className="header-meta" aria-label="Investment focus">
          <span>PRIVATE CAPITAL</span>
          <span className="header-divider" aria-hidden="true" />
          <span>PRODUCTIVE ASSETS</span>
        </div>
        <a className="fund-link" href="#fund-one">
          <span className="status-dot" aria-hidden="true" />
          FUND 1
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span>01</span> OUR MANDATE</p>
          <h1>Mobilising private capital into <em>productive</em> assets and businesses.</h1>
          <p className="supporting-copy">Starting with energy, manufacturing, and infrastructure.</p>
          <div className="hero-index" aria-hidden="true">BX<span>01</span></div>
        </div>

        <a className="fund-card" id="fund-one" href="mailto:hello@buildx.capital?subject=BuildX%20Fund%201">
          <div className="fund-topline">
            <span>NOW OPEN</span>
            <span className="fund-arrow" aria-hidden="true">↗</span>
          </div>
          <div className="fund-title">
            <p>BUILDX</p>
            <h2>Fund 1</h2>
          </div>
          <div className="fund-footer">
            <span>NOW LIVE</span>
            <span>ENQUIRE</span>
          </div>
        </a>
      </section>

      <footer className="sector-strip" aria-label="BuildX investment sectors">
        <span className="strip-label">FOCUS</span>
        <div className="sector-list">
          {sectors.map((sector, index) => (
            <span key={sector}>
              <i>{String(index + 1).padStart(2, '0')}</i>{sector}
            </span>
          ))}
        </div>
        <span className="strip-mark" aria-hidden="true">BX.</span>
      </footer>
    </main>
  );
}
