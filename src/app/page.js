import Image from "next/image";
import myImage from "../assets/myImage.jpg";
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
              <div className="avatar-photo"><Image src={myImage} alt="Jitu Dey" width={124} height={124} priority /></div>
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
            <div className="project-content"><p className="project-category"><svg aria-hidden="true" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z"/></svg>{project.category}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><div className="tech-list">{project.technologies.slice(0, 6).map((tech) => <span key={tech}><svg aria-hidden="true" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2"><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 4l-4 16"/></svg>{tech}</span>)}</div><div className="project-links">{project.live ? <a href={project.live} target="_blank" rel="noreferrer"><svg aria-hidden="true" viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14 3h7v7M21 3l-9 9"/><path d="M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6"/></svg>Live demo</a> : null}<a href={project.github} target="_blank" rel="noreferrer"><svg aria-hidden="true" viewBox="0 0 24 24" width="17" height="17" fill="currentColor"><path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.63 1.21 3.27.93.1-.72.39-1.21.71-1.49-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.27-2.6 5.21-5.08 5.49.4.35.76 1.02.76 2.06V22c0 .29.2.64.77.53A11.1 11.1 0 0 0 12 .9Z"/></svg>Source code <span aria-hidden="true">↗</span></a></div></div>
          </article>)}</div>
        </div>
      </section>

      <section className="section" id="contact"><div className="container contact-panel"><div><p className="eyebrow">04 / LET’S CONNECT</p><h2 className="section-title">Let’s build something<br /><span className="gradient-text">meaningful.</span></h2><p className="contact-description">I’m open to junior roles, internships, and opportunities to learn with a team. I’d love to hear from you.</p></div><div className="contact-actions"><a className="button button-primary" href="https://www.linkedin.com/in/jitu-dey" target="_blank" rel="noreferrer">Message me on LinkedIn ↗</a><a className="contact-link" href="https://www.linkedin.com/in/jitu-dey" target="_blank" rel="noreferrer">Connect on LinkedIn ↗</a><a className="contact-link" href="https://github.com/jitudey24" target="_blank" rel="noreferrer">Explore GitHub ↗</a></div></div></section>

      <footer className="site-footer"><div className="container footer-inner"><a className="brand" href="#home">J<span>D</span><i>.</i></a><p>Designed with care, built with curiosity.</p><a href="#home">Back to top ↑</a><span>© {new Date().getFullYear()} Jitu Dey</span></div></footer>
    </main>
  );
}
