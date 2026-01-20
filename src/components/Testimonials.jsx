const testimonials = [
  {
    name: "Amit Sharma",
    role: "Startup Founder",
    msg: "Prowork Tech delivered a modern homepage with amazing responsiveness. Clean UI and fast load time!",
  },
  {
    name: "Neha Verma",
    role: "Business Owner",
    msg: "Very professional work and clear communication. Contact form worked perfectly after deployment.",
  },
  {
    name: "Rahul Singh",
    role: "Product Manager",
    msg: "Great UI/UX and structured workflow. Highly recommend for web development projects.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <div className="section-head">
          <h2>What Clients Say</h2>
          <p>Trusted by businesses for quality work and quick delivery.</p>
        </div>

        <div className="grid-3">
          {testimonials.map((t, i) => (
            <div className="card testimonial" key={i}>
              <p className="quote">“{t.msg}”</p>
              <div className="user">
                <div className="avatar">{t.name[0]}</div>
                <div>
                  <h4>{t.name}</h4>
                  <p>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
