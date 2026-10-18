export default function Navbar() {
  return <header className="site-header"><nav className="nav container" aria-label="Main navigation">
    <a className="brand" href="#home">J<span>D</span><i>.</i></a>
    <div className="nav-links"><a href="#about">About</a><a href="#education">Education</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#contact">Contact</a></div>
    <a className="button button-small button-outline" href="/resume">Resume <span aria-hidden="true">↗</span></a>
  </nav></header>;
}