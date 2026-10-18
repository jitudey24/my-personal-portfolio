import Image from "next/image";
import myImage from "../assets/myImage.jpg";
export default function Hero() {
  return <section className="hero section" id="home">
    <div className="hero-glow" aria-hidden="true" />
    <div className="container hero-grid"><div className="hero-copy">
      <p className="eyebrow"><span className="status-dot" /> AVAILABLE FOR JUNIOR OPPORTUNITIES</p>
      <p className="hello">Hello, I’m</p><h1>Jitu Dey<span>.</span></h1>
      <h2>Fresher <span className="gradient-text">Web Developer</span></h2>
      <p className="hero-description">I build clean, responsive, and user-friendly web experiences with modern JavaScript technologies. I’m learning every day and excited to grow with a collaborative team.</p>
      <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <span aria-hidden="true">↘</span></a><a className="button button-outline" href="/resume">View Resume <span aria-hidden="true">↗</span></a></div>
      <div className="social-links"><a href="https://github.com/jitudey24" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/jitu-dey" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="#contact">Contact me ↗</a></div>
    </div><div className="hero-card-wrap"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="profile-card">
      <div className="profile-top"><span className="window-dot pink" /><span className="window-dot yellow" /><span className="window-dot green" /><span className="profile-label">developer.profile</span></div>
      <div className="avatar-photo"><Image src={myImage} alt="Jitu Dey" width={124} height={124} priority /></div>
      <p className="profile-name">Jitu Dey</p><p className="profile-role">Frontend-focused Web Developer</p><div className="profile-divider" />
      <div className="profile-stat"><span>Currently learning</span><strong>Full Stack Development</strong></div><div className="profile-stat"><span>Learning community</span><strong>Programming Hero · Batch 14</strong></div><div className="code-line"><span>const</span> mindset = <b>"keep building";</b></div>
    </div><div className="float-chip chip-top">✦ Always learning</div><div className="float-chip chip-bottom"><span className="status-dot" /> Open to opportunities</div></div></div>
    <div className="container hero-bottom"><span>BASED IN BANGLADESH</span><span>DESIGN · CODE · LEARN</span><a href="#about">SCROLL TO EXPLORE ↓</a></div>
    <div className="container quick-stats" aria-label="Portfolio highlights"><div><strong>03<span>+</span></strong><p>Featured projects</p></div><div><strong>10</strong><p>Core skills</p></div><div><strong>14</strong><p>Programming Hero batch</p></div><div><strong>100<span>%</span></strong><p>Learning mindset</p></div></div>
  </section>;
}