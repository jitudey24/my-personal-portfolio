"use client";

export default function ResumePage() {
  return (
    <main className="resume-page">
      <div className="resume-toolbar">
        <a className="button button-outline" href="/">← Back to portfolio</a>
        <button className="button button-primary" type="button" onClick={() => window.print()}>Download / Save as PDF ↗</button>
      </div>
      <article className="resume-sheet">
        <header className="resume-header">
          <h1>Jitu Dey</h1>
          <p className="resume-headline">Fresher Web Developer | Frontend Development</p>
          <div className="resume-contact">
            <span>Bangladesh</span><span>Phone: 01625302484</span><span>Email: jitudey24@gmail.com</span>
            <span>GitHub: github.com/jitudey24</span><span>LinkedIn: linkedin.com/in/jitu-dey</span>
          </div>
        </header>
        <section className="resume-section"><h2>Professional Summary</h2><p>Motivated fresher web developer with hands-on practice building responsive web applications using JavaScript, TypeScript, React, Next.js, and Tailwind CSS. Familiar with component-based UI development, REST API integration, dynamic routing, authentication concepts, and Git/GitHub workflows. Eager to contribute to a development team, learn from feedback, and deliver reliable user-focused web experiences.</p></section>
        <section className="resume-section"><h2>Technical Skills</h2><div className="resume-skills">{["JavaScript (ES6+)","TypeScript","React.js","Next.js","Tailwind CSS","HTML5","CSS3","REST API Integration","Git","GitHub","Responsive Design","React Hooks","Context API","MongoDB fundamentals","Better Auth fundamentals"].map(skill => <span key={skill}>{skill}</span>)}</div></section>
        <section className="resume-section"><h2>Projects</h2>
          <div className="resume-project"><h3>Bazar Dor — Market Price Tracker</h3><p className="resume-tech">Next.js · React · TypeScript · Tailwind CSS · Better Auth · MongoDB · REST API</p><p>Built a responsive Bangladesh market-price application for browsing products, viewing price changes, and exploring market-specific prices. Practiced API data fetching, dynamic product routes, authentication, protected pages, loading states, and responsive UI.</p><p>GitHub: github.com/jitudey24/B-14-A07-Bazar-Dor</p></div>
          <div className="resume-project"><h3>Dev Stack — Developer Technology Stack</h3><p className="resume-tech">React · TypeScript · Vite · Tailwind CSS · DaisyUI</p><p>Created a developer-focused interface for exploring technologies and managing a selected personal tech stack. Practiced React state, dynamic rendering, reusable UI, and responsive layouts.</p><p>GitHub: github.com/jitudey24/B14-A05-Dev-Stack</p></div>
          <div className="resume-project"><h3>FitLog — Workout Planner</h3><p className="resume-tech">Next.js · React · TypeScript · Tailwind CSS · Context API</p><p>Developed a workout discovery and planning experience with workout details, saved exercises, completion tracking, sorting, and plan statistics. Practiced shared state management and responsive page layouts.</p><p>GitHub: github.com/jitudey24/B-14-A06-Fit-Log</p></div>
        </section>
        <section className="resume-section"><h2>Education & Training</h2><p><strong>Programming Hero — Web Development Program, Batch 14</strong></p><p>Currently learning modern web development through structured lessons, assignments, and hands-on projects.</p><p className="resume-note">Add your formal school/college qualification and graduation year here before sending this resume to employers.</p></section>
        <section className="resume-section"><h2>Strengths</h2><ul><li>Consistent learner with a project-first approach.</li><li>Interested in clean code, responsive interfaces, and user-friendly design.</li><li>Comfortable using Git and GitHub to manage project work.</li><li>Open to feedback, collaboration, internships, and junior developer opportunities.</li></ul></section>
        <section className="resume-section"><h2>Career Objective</h2><p>Seeking a junior web developer or internship opportunity to apply my frontend skills, contribute to meaningful products, and continue growing toward full-stack development.</p></section>
      </article>
    </main>
  );
}
