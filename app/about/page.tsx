import type { Metadata } from 'next';

const aboutDescription = 'Learn about BuildX Capital, a research and advisory firm working across the United States and Africa corridor, founded by Tolu Adetuyi.';

export const metadata: Metadata = {
  title: 'About BuildX Capital',
  description: aboutDescription,
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About BuildX Capital',
    description: aboutDescription,
    type: 'website',
    url: 'https://buildx.capital/about',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'About BuildX Capital' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About BuildX Capital',
    description: aboutDescription,
    images: ['/og.png'],
  },
};

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
          <h1>About BuildX.</h1>

          <p className="about-lead">BuildX Capital is a research and advisory firm operating across the United States and Africa. We identify where productive opportunity is forming and help investors, founders and operators act on it.</p>

          <div className="about-grid">
            <article>
              <p className="section-number">01</p>
              <h2>Our mandate.</h2>
              <p>We connect American capital with African opportunity, and African capital and talent with opportunities in the US market. Our focus is productive assets and businesses with the potential to create durable economic value.</p>
            </article>

            <article>
              <p className="section-number">02</p>
              <h2>How we work.</h2>
              <p>Original research informs our view of markets. Advisory turns that view into action through market entry, opportunity sizing, deal sourcing, diligence, structuring and capital mobilisation.</p>
            </article>
          </div>

          <section className="leadership" aria-labelledby="leadership-title">
            <div className="leadership-heading">
              <p className="section-number">03</p>
              <h2 id="leadership-title">Leadership.</h2>
            </div>
            <div className="leadership-copy">
              <h3>Tolu Adetuyi</h3>
              <p className="leadership-role">Founder, BuildX Capital</p>
              <p>Tolu is co-founder and Chief Innovation Officer at Prembly, a Y Combinator-backed trust infrastructure company operating across Nigeria, Kenya, the United States and the European Union. He serves on boards across sectors including cross-border payments and mobility, and previously led growth at Moniepoint.</p>
              <p>He holds an MBA in finance from Morgan State University and a degree in computer science. He began his career as a software engineer.</p>
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
