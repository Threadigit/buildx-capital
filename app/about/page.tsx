export default function About() {
  return (
    <main className="site-shell about-page">
      <header className="site-header">
        <a className="brand" href="/" aria-label="BuildX Capital home">
          <span className="brand-b">B</span>
          <span className="brand-x">X</span>
          <small>CAPITAL</small>
        </a>

        <nav aria-label="Primary navigation">
          <a href="/">Home</a>
          <a href="https://research.buildx.capital">Research</a>
          <a href="mailto:hello@buildx.capital">Contact</a>
        </nav>
      </header>

      <section className="about-shell">
        <aside className="hero-rail" aria-hidden="true">
          <span>BUILD WHAT MATTERS</span>
        </aside>

        <div className="about-content">
          <p className="section-number">ABOUT / 01</p>
          <h1>Who we are.</h1>

          <div className="about-grid">
            <p className="about-intro">BuildX Capital was founded by Tolu Adetuyi.</p>
            <div className="about-copy">
              <p>Tolu is co-founder and Chief Innovation Officer at Prembly, a trust infrastructure company backed by Y Combinator, operating across Nigeria, Kenya, the United States and the European Union. He is a board member across sectors including cross-border payments and mobility. He previously led growth at Moniepoint.</p>
              <p>He holds an MBA in finance from Morgan State University and a degree in computer science, and began his career as a software engineer.</p>
              <p>He writes at <a href="https://adetuyi.com">adetuyi.com</a>.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <p>BuildX Capital provides advisory services. Nothing on this site is an offer to sell or a solicitation to buy any security.</p>
      </footer>
    </main>
  );
}
