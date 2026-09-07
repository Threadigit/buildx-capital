export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="BuildX Capital home">
          <span className="brand-b">B</span>
          <span className="brand-x">X</span>
          <small>CAPITAL</small>
        </a>
        <p>BUILDX.CAPITAL <i aria-hidden="true">/</i> 2026</p>
      </header>

      <section className="hero" id="top">
        <aside className="hero-rail" aria-hidden="true">
          <span>BUILD WHAT MATTERS</span>
        </aside>

        <div className="statement">
          <div className="bx-art" aria-hidden="true"><span>B</span><span>X</span></div>
          <h1>Mobilising private capital into productive assets and businesses.</h1>
          <p><strong>Starting with</strong> energy, mobility, manufacturing, logistics, and physical infrastructure.</p>
        </div>

        <a className="live-panel" aria-label="BuildX Fund 1 is now live — request access" href="mailto:tolu@buybuild.xyz?subject=BuildX%20Fund%201">
          <span>BuildX Fund 1</span>
          <i>now live</i>
          <span className="live-arrow" aria-hidden="true" />
        </a>
      </section>
    </main>
  );
}
