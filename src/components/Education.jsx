export default function Education() {
  return (
    <section className="section section-muted" id="education">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / EDUCATION</p>
            <h2 className="section-title">My learning <span className="gradient-text">journey.</span></h2>
          </div>
          <p className="section-intro">My formal education and ongoing practical web development training.</p>
        </div>

        <div className="education-list">
          <article className="education-card">
            <div className="education-mark" aria-hidden="true">✦</div>
            <div className="education-content">
              <p className="education-status">RESULT PENDING</p>
              <h3>Diploma in Engineering — Electrical</h3>
              <p className="education-institute">National Institute of Technology (NIT), Chattogram</p>
              <p>Bangladesh Technical Education Board (BTEB) · Expected 2026</p>
            </div>
            <span className="education-badge">Result pending</span>
          </article>

          <article className="education-card">
            <div className="education-mark" aria-hidden="true">✦</div>
            <div className="education-content">
              <p className="education-status">COMPLETED · 2020</p>
              <h3>Secondary School Certificate (SSC)</h3>
              <p className="education-institute">Safa Motaleb High School</p>
              <p>Chittagong Board · 2020</p>
            </div>
            <span className="education-badge">Completed</span>
          </article>

          <article className="education-card">
            <div className="education-mark" aria-hidden="true">⌘</div>
            <div className="education-content">
              <p className="education-status">CURRENTLY LEARNING</p>
              <h3>Full Stack Web Development</h3>
              <p className="education-institute">Programming Hero · Batch 14</p>
              <p>Project-based practice with JavaScript, TypeScript, React, Next.js, and Tailwind CSS.</p>
            </div>
            <span className="education-badge">In progress</span>
          </article>
        </div>
      </div>
    </section>
  );
}
