import Image from "next/image";
import projects from "../data/projects";

const skills = ["JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Git & GitHub", "REST APIs", "Responsive Design"];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <nav className="nav container" aria-label="Main navigation">
          <a className="brand" href="#home">J<span>D</span><i>.</i></a>
          <div className="nav-links">
            <a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#contact">Contact</a>
          </div>
          <a className="button button-small button-outline" href="/resume">Resume <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <section className="hero section" id="home">
        <div className="hero-glow" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> AVAILABLE FOR JUNIOR OPPORTUNITIES</p>
            <p className="hello">Hello, I’m</p>
            <h1>Jitu Dey<span>.</span></h1>
            <h2>Fresher <span className="gradient-text">Web Developer</span></h2>
            <p className="hero-description">I build clean, responsive, and user-friendly web experiences with modern JavaScript technologies. I’m learning every day and excited to grow with a collaborative team.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <span aria-hidden="true">↘</span></a>
              <a className="button button-outline" href="/resume">View Resume <span aria-hidden="true">↗</span></a>
            </div>
            <div className="social-links">
              <a href="https://github.com/jitudey24" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/jitu-dey" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href="#contact">Contact me ↗</a>
            </div>
          </div>
          <div className="hero-card-wrap">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="profile-card">
              <div className="profile-top"><span className="window-dot pink" /><span className="window-dot yellow" /><span className="window-dot green" /><span className="profile-label">developer.profile</span></div>
              <div className="avatar-mark">JD<span>.</span></div>
              <p className="profile-name">Jitu Dey</p><p className="profile-role">Frontend-focused Web Developer</p>
              <div className="profile-divider" />
              <div className="profile-stat"><span>Currently learning</span><strong>Full Stack Development</strong></div>
              <div className="profile-stat"><span>Learning community</span><strong>Programming Hero · Batch 14</strong></div>
              <div className="code-line"><span>const</span> mindset = <b>"keep building";</b></div>
            </div>
            <div className="float-chip chip-top">✦ Always learning</div><div className="float-chip chip-bottom"><span className="status-dot" /> Open to opportunities</div>
          </div>
        </div>
        <div className="container hero-bottom"><span>BASED IN BANGLADESH</span><span>DESIGN · CODE · LEARN</span><a href="#about">SCROLL TO EXPLORE ↓</a></div>
      </section>

      <section className="section section-muted" id="about">
        <div className="container two-column">
          <div><p className="eyebrow">01 / ABOUT ME</p><h2 className="section-title">Curious mind.<br /><span className="gradient-text">Builder’s mindset.</span></h2></div>
          <div className="about-copy"><p>I’m a fresher web developer from Bangladesh, focused on creating accessible and responsive web applications. I enjoy turning ideas into useful interfaces and learning how the frontend connects with backend services.</p><p>I’m currently developing my skills through hands-on projects and the Programming Hero Batch 14 program. I’m looking for an entry-level opportunity where I can contribute, learn from experienced developers, and grow into a well-rounded engineer.</p><div className="learning-note"><span>✳</span><div><strong>My approach</strong><p>Build consistently, ask questions, learn from feedback, and improve one feature at a time.</p></div></div></div>
        </div>
      </section>

      <section className="section" id="skills">
        <div className="container"><div className="section-heading"><div><p className="eyebrow">02 / TOOLKIT</p><h2 className="section-title">Skills I’m building<span className="gradient-text">.</span></h2></div><p className="section-intro">The tools I use to turn concepts into working web experiences.</p></div>
          <div className="skills-grid">{skills.map((skill, index) => <div className="skill-card" key={skill}><span className="skill-number">0{index + 1}</span><span>{skill}</span><span className="skill-arrow">↗</span></div>)}</div>
          <p className="skills-footnote"><span className="status-dot" /> Growing my skills through practice, projects, and code reviews.</p>
        </div>
      </section>

      <section className="section section-muted" id="projects">
        <div className="container"><div className="section-heading"><div><p className="eyebrow">03 / SELECTED WORK</p><h2 className="section-title">Projects with purpose<span className="gradient-text">.</span></h2></div><p className="section-intro">A few hands-on projects where I’ve practiced building real-world features.</p></div>
          <div className="projects-grid">{projects.map((project, index) => <article className="project-card" key={project.id}>
            <div className="project-image">{project.image ? <Image src={project.image} alt={project.title} fill sizes="(max-width: 760px) 100vw, 50vw" style={{objectFit:"cover"}} /> : <div className="project-placeholder">PROJECT / 0{index + 1}</div>}<span className="project-index">0{index + 1}</span></div>
            <div className="project-content"><p className="project-category">{project.category}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><div className="tech-list">{project.technologies.slice(0, 6).map((tech) => <span key={tech}>{tech}</span>)}</div><div className="project-links">{project.live ? <a href={project.live} target="_blank" rel="noreferrer">Live demo ↗</a> : null}<a href={project.github} target="_blank" rel="noreferrer">Source code ↗</a></div></div>
          </article>)}</div>
        </div>
      </section>

      <section className="section" id="contact"><div className="container contact-panel"><div><p className="eyebrow">04 / LET’S CONNECT</p><h2 className="section-title">Let’s build something<br /><span className="gradient-text">meaningful.</span></h2><p className="contact-description">I’m open to junior roles, internships, and opportunities to learn with a team. I’d love to hear from you.</p></div><div className="contact-actions"><a className="button button-primary" href="https://www.linkedin.com/in/jitu-dey" target="_blank" rel="noreferrer">Message me on LinkedIn ↗</a><a className="contact-link" href="https://www.linkedin.com/in/jitu-dey" target="_blank" rel="noreferrer">Connect on LinkedIn ↗</a><a className="contact-link" href="https://github.com/jitudey24" target="_blank" rel="noreferrer">Explore GitHub ↗</a></div></div></section>

      <footer className="site-footer"><div className="container footer-inner"><a className="brand" href="#home">J<span>D</span><i>.</i></a><p>Designed with care, built with curiosity.</p><a href="#home">Back to top ↑</a><span>© {new Date().getFullYear()} Jitu Dey</span></div></footer>
    </main>
  );
}
