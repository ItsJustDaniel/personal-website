import React from "react";
import "./Contacts.css";

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
          <i class="fab fa-github fa-lg github"></i>
        </a>
        <a
          href="https://twitter.com/Justdaniel5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-twitter fa-lg twitter"></i>
        </a>
        <a
          href="mailto:danielli12750@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fas fa-envelope-square fa-lg email"></i>
        </a>
      </div>
      <br />
    </div>
  );
};

export default Contacts;
