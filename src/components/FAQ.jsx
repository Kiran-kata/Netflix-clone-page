import { useState } from "react";

const questions = [
  { 
    q: "What is Netflix?", 
    a: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices." 
  },
  { 
    q: "How much does Netflix cost?", 
    a: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $6.99 to $19.99 a month." 
  },
  { 
    q: "Where can I watch?", 
    a: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device." 
  },
  { 
    q: "How do I cancel?", 
    a: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks." 
  },
  { 
    q: "What can I watch on Netflix?", 
    a: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want." 
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section style={styles.section}>
      <div className="container">
        <h2 style={{ textAlign: "center", marginBottom: 40 }}>Frequently Asked Questions</h2>

        {questions.map((item, i) => (
          <div key={i} style={styles.item}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={styles.q}
            >
              <span>{item.q}</span>
              <span style={{ fontSize: "2rem", transform: open === i ? "rotate(45deg)" : "none", transition: "transform 0.3s" }}>+</span>
            </button>
            {open === i && <div style={styles.a}>{item.a}</div>}
          </div>
        ))}

        <div style={styles.ctaBox}>
          <p>Ready to watch? Enter your email to create or restart your membership.</p>
          <div style={styles.form}>
            <input type="email" placeholder="Email address" style={styles.input} />
            <button style={styles.button}>Get Started <span style={styles.arrow}>›</span></button>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "70px 0",
  },
  item: {
    marginBottom: 8,
  },
  q: {
    width: "100%",
    textAlign: "left",
    padding: "24px 32px",
    background: "#2d2d2d",
    color: "white",
    fontSize: "1.5rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    transition: "background 0.3s",
  },
  a: {
    padding: "24px 32px",
    background: "#2d2d2d",
    color: "white",
    fontSize: "1.25rem",
    lineHeight: 1.6,
    marginTop: 2,
  },
  ctaBox: {
    marginTop: 60,
    textAlign: "center",
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
