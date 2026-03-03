export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-overlay" />

      <div className="container hero-content">
        <h1>Unlimited movies, TV shows, and more</h1>
        <p className="hero-subtitle">Watch anywhere. Cancel anytime.</p>
        <p className="hero-cta">Ready to watch? Enter your email to create or restart your membership.</p>

        <div className="email-form">
          <input type="email" placeholder="Email address" className="email-input" />
          <button className="cta-btn">Get Started <span className="cta-arrow">›</span></button>
        </div>
      </div>
    </section>
  );
}
