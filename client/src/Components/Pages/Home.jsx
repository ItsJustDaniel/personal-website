import React from "react";
import Navbar from "../layouts/Navbar";
import Projects from "../layouts/Projects";
import About from "../layouts/About Me";
import Contacts from "../layouts/Contacts";
import "./Home.css";

export default function Home(props) {
  return (
    <div>
      <Navbar />
      {/* Home-section */}
      <section id="welcome-section">
        <div>
          <h1 id="name">Daniel Li</h1>
          <p id="name-desc">Front End Developer</p>
        </div>
      </section>
      <div id="content-container">
        <About />
        <Projects />
        <Contacts />
      </div>
    </div>
  );
}
