import { useState } from "react";

const faqs = [
  {
    q: "What technologies do you use?",
    a: "We use HTML/CSS/JavaScript, React, Next.js, and modern deployment platforms like Vercel & Netlify.",
  },
  {
    q: "Do you provide backend support?",
    a: "Yes. We can integrate forms, APIs, databases, authentication, and deployment-friendly backend solutions.",
  },
  {
    q: "How much time does a homepage take?",
    a: "Usually 2–5 days depending on UI complexity and content readiness.",
  },
  {
    q: "Is the website mobile responsive?",
    a: "Yes. We build fully responsive pages for mobile, tablet and desktop.",
  },
  {
    q: "Can you deploy the project?",
    a: "Yes, we deploy on Netlify/Vercel and share source code + documentation.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="section alt">
      <div className="container">
        <div className="section-head">
          <h2>Frequently Asked Questions</h2>
          <p>Quick answers to common questions.</p>
        </div>

        <div className="faq">
          {faqs.map((item, idx) => {
            const open = openIdx === idx;
            return (
              <button
                key={idx}
                className={`faq-item ${open ? "open" : ""}`}
                onClick={() => setOpenIdx(open ? -1 : idx)}
              >
                <div className="faq-q">
                  <span>{item.q}</span>
                  <span className="faq-icon">{open ? "–" : "+"}</span>
                </div>
                {open && <div className="faq-a">{item.a}</div>}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
