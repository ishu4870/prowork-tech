export default function Navbar() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <div className="brand">
          <div className="logo">PT</div>
          <span className="brand-name">Prowork Tech</span>
        </div>

        <nav className="nav-links">
          <a href="#services">Services</a>
          <a href="#demo">Demonstration</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#faq">FAQ</a>
          <a href="#contact" className="btn btn-primary small">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

