export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Prowork Tech. All rights reserved.</p>
        <div className="footer-links">
          <a href="#services">Services</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
