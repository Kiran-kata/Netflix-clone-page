import { useState } from "react";

const questions = [
  { 
    q: "What is this project?", 
    a: "This is a front-end UI clone demo built for learning and portfolio use." 
  },
  { 
    q: "Can I subscribe here?", 
    a: "No. This demo does not provide subscriptions, billing, or account services." 
  },
  { 
    q: "Does this collect my data?", 
    a: "No. The input fields are visual only and are not connected to a backend." 
  },
  { 
    q: "Is this an official website?", 
    a: "No. This project is not affiliated with Netflix or any streaming company." 
  },
  { 
    q: "What technologies are used?", 
    a: "The demo is built with React and Vite using reusable components and responsive CSS." 
  },
  {
    q: "Where is the live demo?",
    a: "Use the Live Demo link in the footer to open the latest deployed version on GitHub Pages."
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="faq-title">Frequently Asked Questions</h2>

        {questions.map((item, i) => (
          <div key={i} className="faq-item">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="faq-question"
            >
              <span>{item.q}</span>
              <span className={`faq-icon ${open === i ? "open" : ""}`}>+</span>
            </button>
            {open === i && <div className="faq-answer">{item.a}</div>}
          </div>
        ))}

        <div className="faq-cta-box">
          <p>Ready to watch? Enter your email to create or restart your membership.</p>
          <div className="email-form">
            <input type="email" placeholder="Email address" className="email-input" />
            <button className="cta-btn">Get Started <span className="cta-arrow">›</span></button>
          </div>
        </div>
      </div>
    </section>
  );
}
