const services = [
  {
    title: "Website Design (UI/UX)",
    desc: "Modern layouts with clean typography, spacing, and user-friendly flow.",
  },
  {
    title: "React Development",
    desc: "Fast and scalable single-page apps using React with reusable components.",
  },
  {
    title: "Landing Pages",
    desc: "Conversion-focused pages with CTA placement, trust-building sections, and speed.",
  },
  {
    title: "Backend Integration",
    desc: "API integration, database connectivity, and deployment-ready architecture.",
  },
  {
    title: "SEO Optimization",
    desc: "Technical SEO setup for better ranking, performance, and discoverability.",
  },
  {
    title: "Deployment & Support",
    desc: "Deploy on Vercel/Netlify with post-launch maintenance and monitoring.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-head">
          <h2>Our Services</h2>
          <p>Everything you need to build and grow your online presence.</p>
        </div>

        <div className="grid-3">
          {services.map((s, i) => (
            <div className="card" key={i}>
              <div className="icon">{i + 1}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
