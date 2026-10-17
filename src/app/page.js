import Image from "next/image";
import myImage from "../assets/myImage.jpg";
import projects from "../data/projects";

const skills = [
  { name: "JavaScript", icon: "js", level: "Core language" },
  { name: "TypeScript", icon: "ts", level: "Type-safe code" },
  { name: "React.js", icon: "react", level: "UI development" },
  { name: "Next.js", icon: "next", level: "Full-stack framework" },
  { name: "Tailwind CSS", icon: "tailwind", level: "Utility-first CSS" },
  { name: "HTML5", icon: "html", level: "Web structure" },
  { name: "CSS3", icon: "css", level: "Responsive styling" },
  { name: "Git & GitHub", icon: "git", level: "Version control" },
  { name: "REST APIs", icon: "api", level: "Data integration" },
  { name: "Responsive Design", icon: "responsive", level: "All screen sizes" },
];

function SkillIcon({ type }) {
  const common = { viewBox: "0 0 48 48", width: 32, height: 32, "aria-hidden": true, fill: "none" };
  const paths = {
    js: <><rect x="4" y="4" width="40" height="40" rx="7" fill="#F7DF1E" /><path d="M25 32c1 2 2 3 5 3 2 0 3-1 3-2 0-2-2-2-4-3-3-1-5-2-5-6 0-3 2-5 6-5 3 0 5 1 6 4l-4 2c-1-2-2-2-3-2s-2 1-2 2c0 1 1 2 3 2 4 2 6 3 6 7 0 4-3 6-7 6-4 0-7-2-8-5zM9 32l4-2c1 2 2 4 4 4 1 0 2-1 2-3V20h5v12c0 5-3 8-7 8-4 0-7-2-8-8z" fill="#171717"/></>,
    ts: <><rect x="4" y="4" width="40" height="40" rx="7" fill="#3178C6" /><path d="M9 18h20v5h-7v17h-6V23H9zM29 36c2 1 4 2 6 2s3-1 3-2-1-2-4-3c-4-1-6-3-6-7 0-4 3-7 8-7 3 0 5 1 7 2l-2 5c-2-1-3-2-5-2s-2 1-2 2 1 2 4 3c4 2 6 4 6 7 0 5-4 7-9 7-4 0-7-1-9-3z" fill="#fff"/></>,
    react: <><circle cx="24" cy="24" r="3.8" fill="#61DAFB"/><g stroke="#61DAFB" strokeWidth="2.2"><ellipse cx="24" cy="24" rx="20" ry="8"/><ellipse cx="24" cy="24" rx="20" ry="8" transform="rotate(60 24 24)"/><ellipse cx="24" cy="24" rx="20" ry="8" transform="rotate(120 24 24)"/></g></>,
    next: <><circle cx="24" cy="24" r="20" fill="#fff"/><path d="M13 34V14l22 22M13 14l22 28M30 14v13" stroke="#111" strokeWidth="2.5"/></>,
    tailwind: <><path d="M24 12c-7 0-11 4-13 12 3-4 6-5 10-4 2 1 4 3 6 4 4 2 9 1 14-5-3 4-6 5-10 4-2-1-4-3-6-4-4-2-9-1-14 5 3-8 7-12 13-12z" fill="#38BDF8"/><path d="M14 26c-4 0-7 3-9 8 2-2 4-3 7-2 2 0 3 2 5 3 4 2 8 1 12-4-2 2-5 3-7 2-2 0-3-2-5-3-1-1-2-2-3-4z" fill="#38BDF8" opacity=".7"/></>,
    html: <><path d="m7 5 3 34 14 4 14-4 3-34z" fill="#E34F26"/><path d="m24 9v30l11-3 2-27z" fill="#EF652A"/><path d="M14 14h20l-1 5H19l1 5h12l-1 10-7 2-7-2-.5-5h5l.3 2 2.2.6 2.3-.6.3-3H16z" fill="#fff"/></>,
    css: <><path d="m7 5 3 34 14 4 14-4 3-34z" fill="#1572B6"/><path d="m24 9v30l11-3 2-27z" fill="#33A9DC"/><path d="M14 14h21l-.5 5H20l.5 4h13l-1 10-8.5 2-8-2-.5-5h5l.4 2 3.1.6 3.2-.6.3-3H16z" fill="#fff"/></>,
    git: <><path d="M22 4 4 22a3 3 0 0 0 0 4l18 18a3 3 0 0 0 4 0l18-18a3 3 0 0 0 0-4L26 4a3 3 0 0 0-4 0z" fill="#F05032"/><path d="m15 15 18 18M24 12v23" stroke="#fff" strokeWidth="3"/><circle cx="15" cy="15" r="3" fill="#fff"/><circle cx="24" cy="12" r="3" fill="#fff"/><circle cx="24" cy="35" r="3" fill="#fff"/></>,
    api: <><rect x="5" y="5" width="38" height="38" rx="9" stroke="#67E8F9" strokeWidth="2.5"/><path d="m18 17-7 7 7 7M30 17l7 7-7 7M27 13l-6 22" stroke="#A78BFA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></>,
    responsive: <><rect x="5" y="8" width="26" height="21" rx="3" stroke="#67E8F9" strokeWidth="2.5"/><path d="M12 35h12M18 29v6" stroke="#67E8F9" strokeWidth="2.5" strokeLinecap="round"/><rect x="32" y="17" width="11" height="24" rx="2.5" stroke="#A78BFA" strokeWidth="2.5"/><path d="M36 37h3" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round"/></>
  };
  return <svg {...common}>{paths[type]}</svg>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <nav className="nav container" aria-label="Main navigation">
          <a className="brand" href="#home">J<span>D</span><i>.</i></a>
          <div className="nav-links">
            <a href="#about">About</a><a href="#education">Education</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#contact">Contact</a>
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
        <div className="container quick-stats" aria-label="Portfolio highlights"><div><strong>03<span>+</span></strong><p>Featured projects</p></div><div><strong>10</strong><p>Core skills</p></div><div><strong>14</strong><p>Programming Hero batch</p></div><div><strong>100<span>%</span></strong><p>Learning mindset</p></div></div>
      </section>

      <section className="section section-muted" id="about">
        <div className="container two-column">
          <div><p className="eyebrow">01 / ABOUT ME</p><h2 className="section-title">Curious mind.<br /><span className="gradient-text">Builder’s mindset.</span></h2></div>
          <div className="about-copy"><p>I’m a fresher web developer from Bangladesh, focused on creating accessible and responsive web applications. I enjoy turning ideas into useful interfaces and learning how the frontend connects with backend services.</p><p>I’m currently developing my skills through hands-on projects and the Programming Hero Batch 14 program. I’m looking for an entry-level opportunity where I can contribute, learn from experienced developers, and grow into a well-rounded engineer.</p><div className="learning-note"><span>✳</span><div><strong>My approach</strong><p>Build consistently, ask questions, learn from feedback, and improve one feature at a time.</p></div></div></div>
        </div>
      </section>

      
      <section className="section section-muted" id="education">
        <div className="container">
          <div className="section-heading">
            <div><p className="eyebrow">02 / EDUCATION</p><h2 className="section-title">Learning with <span className="gradient-text">purpose.</span></h2></div>
            <p className="section-intro">Building a strong foundation through structured learning and hands-on practice.</p>
          </div>
          <div className="education-card">
            <div className="education-mark" aria-hidden="true"><svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="m2 9 10-5 10 5-10 5L2 9Z"/><path d="M6 11v5c3.5 3 8.5 3 12 0v-5M22 9v6"/></svg></div>
            <div className="education-content"><p className="education-status">CURRENTLY LEARNING</p><h3>Full Stack Web Development</h3><p className="education-institute">Programming Hero · Batch 14</p><p>Learning modern web development through practical assignments and projects, with a focus on JavaScript, TypeScript, React, Next.js, and Tailwind CSS.</p></div>
            <span className="education-badge">In progress</span>
          </div>
        </div>
      </section>
\n      <section className="section" id="skills">
        <div className="container"><div className="section-heading"><div><p className="eyebrow">02 / TOOLKIT</p><h2 className="section-title">Skills I’m building<span className="gradient-text">.</span></h2></div><p className="section-intro">The tools I use to turn concepts into working web experiences.</p></div>
          <div className="skills-grid">{skills.map((skill, index) => <article className="skill-card" key={skill.name}><span className="skill-number">0{index + 1}</span><div className="skill-icon"><SkillIcon type={skill.icon} /></div><h3>{skill.name}</h3><p>{skill.level}</p><span className="skill-arrow" aria-hidden="true">↗</span></article>)}</div>
          <div className="learning-strip"><span className="learning-strip-icon">✦</span><div><strong>Always learning, always building</strong><p>Practicing through real projects in the Programming Hero Batch 14 community.</p></div><a href="#projects">See my work <span aria-hidden="true">↗</span></a></div>
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

      <section className="section" id="contact"><div className="container contact-panel"><div><p className="eyebrow">04 / LET’S CONNECT</p><h2 className="section-title">Let’s build something<br /><span className="gradient-text">meaningful.</span></h2><p className="contact-description">I’m open to junior roles, internships, and opportunities to learn with a team. I’d love to hear from you.</p></div><div className="contact-actions"><a className="button button-primary" href="https://www.linkedin.com/in/jitu-dey" target="_blank" rel="noreferrer">Message me on LinkedIn ↗</a><a className="contact-link" href="https://www.linkedin.com/in/jitu-dey" target="_blank" rel="noreferrer">Connect on LinkedIn ↗</a><a className="contact-link whatsapp-link" href="https://wa.me/8801625302484" target="_blank" rel="noreferrer" aria-label="Chat with Jitu Dey on WhatsApp"><svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.5 4.1 1.6 5.9L0 24l6.5-1.7a11.8 11.8 0 0 0 5.6 1.4h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.1-3.5-8.4ZM12.1 21.7a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.9 1 1-3.8-.3-.4a9.7 9.7 0 1 1 8.6 4.8Zm5.4-7.3c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1a8 8 0 0 1-2.4-1.5 9 9 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6s-.7-1.7-.9-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.6s1.1 3 1.3 3.2c.1.2 2.2 3.4 5.3 4.7.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.8-.7 2.1-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.5Z"/></svg><span>WhatsApp</span><span aria-hidden="true">↗</span></a><a className="contact-link" href="https://github.com/jitudey24" target="_blank" rel="noreferrer">Explore GitHub ↗</a></div></div></section>

      <footer className="site-footer"><div className="container footer-inner"><a className="brand" href="#home">J<span>D</span><i>.</i></a><p>Designed with care, built with curiosity.</p><a href="#home">Back to top ↑</a><span>© {new Date().getFullYear()} Jitu Dey</span></div></footer>
    </main>
  );
}
