import React from "react"
import "./Projects.css"

export default function Projects(props) {
  return (
    <section id="project-section">
      {/* Projects */}
      <h2 id="project-title">Projects</h2>
      <div id="project-containter">
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
              href="https://itsjustdaniel.github.io/drum-machine/"
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
        {/*recursive art */}
        <div className="project">
          <div className="Image-Container">
            <a
              className="project-tile"
              href="https://itsjustdaniel.github.io/recursive-art/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/ItsJustDaniel/recursive-art/master/image/Fractal%20Tree.png"
                className="Image"
                alt="calculator"
              />
              <div className="content">
                <h2>Recursive Art</h2>
              </div>
            </a>
          </div>
        </div>
        {/* Marvel Character Search */}
        <div className="project">
          <div className="Image-Container">
            <a
              className="project-tile"
              href="https://itsjustdaniel.github.io/Marvel-Search/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/ItsJustDaniel/Project-Images/master/Screenshots/Marvel-Search.png"
                className="Image"
                alt=""
              />
              <div className="content">
                <h2>Marvel Search</h2>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
