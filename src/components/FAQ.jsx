import { useState } from "react";

const questions = [
  { 
    q: "What is Netflix?", 
    a: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices." 
  },
  { 
    q: "How much does Netflix cost?", 
    a: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans and pricing vary by region and may change over time." 
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
  {
    q: "Is Netflix good for kids?",
    a: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space."
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
