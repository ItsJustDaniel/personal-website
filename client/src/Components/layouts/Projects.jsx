import React from "react";
import "./Projects.css";

export default function Projects(props) {
  return (
    <section id="project-section">
      {/* Projects */}
      <h2 id="project-title">Projects</h2>
      <div id="project-containter">
        {/*Quote Machine */}
        <div className="project">
          <div className="Image-Container">
            <a
              className="project-tile"
              href="https://itsjustdaniel.github.io/quote-machine/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/ItsJustDaniel/Project-Images/master/Screenshots/Quote%20Machine.png"
                className="Image"
                alt=""
              />
              <div className="content">
                <h2>Quote Machine</h2>
              </div>
            </a>
          </div>
        </div>
        {/*mardown previewer */}
        <div className="project">
          <div className="Image-Container">
            <a
              className="project-tile"
              href="https://itsjustdaniel.github.io/react-markdown-previewer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/ItsJustDaniel/Project-Images/master/Screenshots/React%20Mardown%20Previewer.png"
                className="Image"
                alt=""
              />
              <div className="content">
                <h2>Markdown Previewer</h2>
              </div>
            </a>
          </div>
        </div>
        <div className="project">
          {/* Calculator */}
          <div className="Image-Container">
            <a
              className="project-tile"
              href="https://itsjustdaniel.github.io/calculator"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/ItsJustDaniel/Project-Images/master/Screenshots/Calculator.png"
                className="Image"
                alt=""
              />
              <div className="content">
                <h2>Calculator</h2>
              </div>
            </a>
          </div>
        </div>
        {/* Drum machine */}
        <div className="project">
          <div className="Image-Container">
            <a
              className="project-tile"
              href="https://codepen.io/Derpniel/pen/OJJeXWR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/ItsJustDaniel/Project-Images/master/Screenshots/Drum-machine.png"
                className="Image"
                alt="quote generator"
              />
              <div className="content">
                <h2>Drum machine</h2>
              </div>
            </a>
          </div>
        </div>
        {/*Pomodoro Clock */}
        <div className="project">
          <div className="Image-Container">
            <a
              className="project-tile"
              href="https://itsjustdaniel.github.io/pomodoro-clock/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/ItsJustDaniel/Project-Images/master/Screenshots/Pomodoro%20Clock.png"
                className="Image"
                alt="text markup"
              />
              <div className="content">
                <h2>Pomodoro Clock</h2>
              </div>
            </a>
          </div>
        </div>
        {/* js documentation */}
        <div className="project">
          <div className="Image-Container">
            <a
              className="project-tile"
              href="https://codepen.io/Derpniel/pen/vqvXVo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://screenshot.codepen.io/3353909.vqvXVo.small.8b3403ee-2210-4a6a-9202-50073612445f.png"
                className="Image"
                alt="calculator"
              />
              <div className="content">
                <h2>Js Documentation</h2>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
