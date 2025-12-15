export default function Hero() {
  return (
    <section style={styles.hero}>
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        style={styles.bgVideo}
      >
        <source src="/netflix-bg.mp4" type="video/mp4" />
      </video>

      <div style={styles.overlay} />

      <div className="container" style={styles.content}>
        <h1>Unlimited movies, TV shows, and more</h1>
        <p style={styles.subtitle}>Watch anywhere. Cancel anytime.</p>
        <p style={styles.cta}>Ready to watch? Enter your email to create or restart your membership.</p>

        <div style={styles.form}>
          <input type="email" placeholder="Email address" style={styles.input} />
          <button style={styles.button}>Get Started <span style={styles.arrow}>›</span></button>
        </div>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    position: "relative",
    minHeight: "90vh",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    overflow: "hidden",
  },
  bgVideo: {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    top: 0,
    left: 0,
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.4)",
    backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.8) 0, rgba(0,0,0,0) 60%, rgba(0,0,0,0.8) 100%)",
  },
  content: {
    position: "relative",
    zIndex: 2,
    padding: "150px 0 100px",
  },
  subtitle: {
    fontSize: "1.5rem",
    margin: "1rem 0",
  },
  cta: {
    fontSize: "1.2rem",
    margin: "1.5rem 0",
  },
  form: {
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    gap: 10,
    flexWrap: "wrap",
  },
  input: {
    padding: "16px 20px",
    fontSize: "1rem",
    border: "1px solid rgba(255,255,255,0.4)",
    borderRadius: 4,
    minWidth: 300,
    background: "rgba(22,22,22,0.7)",
    color: "white",
  },
  button: {
    background: "#e50914",
    color: "white",
    padding: "16px 32px",
    borderRadius: 4,
    fontSize: "1.25rem",
    fontWeight: 600,
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  arrow: {
    fontSize: "1.5rem",
  }
};
