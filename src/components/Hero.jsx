export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <p className="chip">Modern Web Development • UI/UX • Deployment</p>

          <h1 className="hero-title">
            Build modern, scalable websites with <span>Prowork Tech</span>
          </h1>

          <p className="hero-subtitle">
            We design and develop clean, fast, and responsive websites that help
            businesses grow online — from landing pages to complete web apps.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Get a Free Consultation
            </a>
            <a href="#services" className="btn btn-outline">
              Explore Services
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <h3>50+</h3>
              <p>Projects Delivered</p>
            </div>
            <div className="stat">
              <h3>4.8/5</h3>
              <p>Client Rating</p>
            </div>
            <div className="stat">
              <h3>24×7</h3>
              <p>Support</p>
            </div>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-img">
            <div className="img-grad" />
            <div className="img-content">
              <p className="img-title">Your product deserves</p>
              <p className="img-title bold">a premium home page</p>
              <p className="img-desc">Responsive • SEO Friendly • Fast Loading</p>
            </div>
          </div>

          <div className="hero-mini-cards">
            <div className="mini-card">
              <p className="mini-head">Performance</p>
              <p className="mini-sub">Optimized UI</p>
            </div>
            <div className="mini-card">
              <p className="mini-head">Clean Code</p>
              <p className="mini-sub">Easy Maintain</p>
            </div>
            <div className="mini-card">
              <p className="mini-head">Deploy</p>
              <p className="mini-sub">Vercel/Netlify</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
