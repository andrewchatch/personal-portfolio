import React from "react";
import "./Navigation.css";

class Navigation extends React.Component {

  render() {
    return(
      <nav id="nav-bar" className="text-center">
        <h1 id="name">Andrew Hatch</h1>
        <h2 id="job-title">Software Developer</h2>
        <div id="links-section">
          <a id="welcome-link" href="#welcome" className="nav-links">Welcome</a>
          <a id="projects-link" href="#projects" className="nav-links">Projects</a>
          <a id="contact-me-link" href="#contact-me" className="nav-links">Contact Me</a>
        </div>
      </nav>
    );
  }
};

export default Navigation;
