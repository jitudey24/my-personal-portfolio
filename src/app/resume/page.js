"use client";

export default function ResumePage() {
  return (
    <main className="resume-page">
      <div className="resume-toolbar">
        <a className="button button-outline" href="/">← Back to portfolio</a>
        <a className="button button-primary" href="/resume.pdf" download="Jitu-Dey-CV.pdf">
          Download my CV ↗
        </a>
      </div>

      <section className="resume-viewer" aria-label="Jitu Dey CV">
        <iframe
          src="/resume.pdf"
          title="Jitu Dey CV"
          width="100%"
          height="900"
          style={{ border: 0, background: "#fff" }}
        />
      </section>
    </main>
  );
}
