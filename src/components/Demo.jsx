const steps = [
  { title: "Requirement", desc: "Understand goals, users, and content." },
  { title: "Design", desc: "Create responsive UI/UX and review." },
  { title: "Development", desc: "Implement using React + clean code." },
  { title: "Testing", desc: "Cross-device testing + performance." },
  { title: "Deploy", desc: "Deploy to Vercel/Netlify and go live." },
];

export default function Demo() {
  return (
    <section id="demo" className="section alt">
      <div className="container demo-grid">
        <div>
          <div className="section-head left">
            <h2>Demonstration / Workflow</h2>
            <p>
              We follow a simple, structured process to deliver high-quality
              results.
            </p>
          </div>

          <div className="steps">
            {steps.map((step, idx) => (
              <div className="step" key={idx}>
                <div className="step-num">{idx + 1}</div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="demo-video">
          <div className="demo-box">
            <p className="demo-title">Project Preview</p>
            <p className="demo-sub">
              Replace this box with image/video in production.
            </p>
            <div className="demo-placeholder">Image / Video Area</div>
          </div>
        </div>
      </div>
    </section>
  );
}

