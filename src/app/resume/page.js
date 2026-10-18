export default function ResumePage() {
  return (
    <main className="resume-page">
      <div className="resume-toolbar">
        <a className="button button-outline" href="/">← Back to portfolio</a>
        <a
          className="button button-primary"
          href="/resume.pdf"
          download="Jitu-Dey-CV.pdf"
        >
          Download original CV ↗
        </a>
      </div>

      <section className="resume-viewer" aria-label="Original CV PDF">
        <object
          className="resume-pdf"
          data="/resume.pdf"
          type="application/pdf"
          aria-label="Jitu Dey original CV"
        >
          <p className="resume-fallback">
            Your browser cannot display this PDF.
            <a href="/resume.pdf" download="Jitu-Dey-CV.pdf">Download the original CV</a>
            or open it in a new tab.
            <a href="/resume.pdf" target="_blank" rel="noreferrer">Open PDF</a>
          </p>
        </object>
      </section>
    </main>
  );
}
