import React from "react"
import "./Contact.css"
import { FaGithub, FaTwitter, FaEnvelopeSquare } from "react-icons/fa"

const Contacts = () => {
  return (
    <div>
      <h2 className="Title" id="Contacts-Title">
        Contacts
      </h2>
      <div className="Contact-Icons">
        <a
          href="https://github.com/ItsJustDaniel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="fab fa fa-lg github icon" />
        </a>
        <a
          href="https://twitter.com/Justdaniel5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="fab fa fa-lg twitter icon" />
        </a>
        <a
          href="mailto:danielli12750@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelopeSquare className="fab fa fa-lg email icon" />
        </a>
      </div>
      <br />
    </div>
  )
}

export default Contacts
