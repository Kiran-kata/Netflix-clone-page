export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-overlay" />

      <div className="container hero-content">
        <h1>Netflix-Inspired UI Clone Demo</h1>
        <p className="hero-subtitle">For portfolio and learning use only.</p>
        <p className="hero-cta">Demo only — no account creation, billing, or personal data collection.</p>

        <div className="email-form">
          <input type="email" placeholder="Demo input (not submitted)" className="email-input" />
          <button className="cta-btn">Try Demo <span className="cta-arrow">›</span></button>
        </div>
      </div>
    </section>
  );
}
