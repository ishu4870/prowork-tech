import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  function onChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("✅ Submitted Successfully! We'll contact you soon.");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("❌ Failed to submit. Please try again.");
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(""), 4000);
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container contact-grid">
        <div>
          <div className="section-head left">
            <h2>Contact Us</h2>
            <p>
              Have a project in mind? Submit your details and we’ll reach out.
            </p>
          </div>

          <div className="contact-card">
            <p className="contact-line">
              📍 Location: India (Remote Services Available)
            </p>
            <p className="contact-line">📧 Email: contact@proworktech.com</p>
            <p className="contact-line">📞 Phone: +91 98765 43210</p>
          </div>
        </div>

        <form className="form" onSubmit={onSubmit}>
          <div className="two">
            <div>
              <label>Name</label>
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label>Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div>
            <label>Contact Number</label>
            <input
              name="phone"
              value={form.phone}
              onChange={onChange}
              placeholder="Enter your contact number"
              required
            />
          </div>

          <div>
            <label>Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              placeholder="Write your message"
              rows="5"
              required
            />
          </div>

          <button
            className="btn btn-primary full"
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"}
          </button>

          {status && <p className="status">{status}</p>}
        </form>
      </div>
    </section>
  );
}
