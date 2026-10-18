const skills = [
  { name: "JavaScript", level: "Core language", icon: "javascript", color: "F7DF1E" },
  { name: "TypeScript", level: "Type-safe code", icon: "typescript", color: "3178C6" },
  { name: "React.js", level: "UI development", icon: "react", color: "61DAFB" },
  { name: "Next.js", level: "Full-stack framework", icon: "nextdotjs", color: "FFFFFF" },
  { name: "Tailwind CSS", level: "Utility-first CSS", icon: "tailwindcss", color: "06B6D4" },
  { name: "HTML5", level: "Web structure", icon: "html5", color: "E34F26" },
  { name: "CSS3", level: "Responsive styling", icon: "css3", color: "1572B6" },
  { name: "Git", level: "Version control", icon: "git", color: "F05032" },
  { name: "GitHub", level: "Code collaboration", icon: "github", color: "FFFFFF" },
  { name: "REST APIs", level: "Data integration", icon: "postman", color: "FF6C37" },
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">03 / TOOLKIT</p>
            <h2 className="section-title">
              Skills I’m building<span className="gradient-text">.</span>
            </h2>
          </div>
          <p className="section-intro">
            The tools I use to turn concepts into working web experiences.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <article className="skill-card" key={skill.name}>
              <span className="skill-number">0{index + 1}</span>
              <div className="skill-logo-wrap">
                <img
                  className="skill-logo"
                  src={`https://cdn.simpleicons.org/${skill.icon}/${skill.color}`}
                  alt={`${skill.name} logo`}
                  width="32"
                  height="32"
                  loading="lazy"
                />
              </div>
              <h3>{skill.name}</h3>
              <p>{skill.level}</p>
              <span className="skill-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>

        <div className="learning-strip">
          <span className="learning-strip-icon" aria-hidden="true">✦</span>
          <div>
            <strong>Always learning, always building</strong>
            <p>Practicing through real projects in the Programming Hero Batch 14 community.</p>
          </div>
          <a href="#projects">See my work <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}
