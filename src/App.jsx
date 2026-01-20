import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Demo from "./components/Demo";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="page">
      <Navbar />
      <Hero />
      <Services />
      <Demo />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
