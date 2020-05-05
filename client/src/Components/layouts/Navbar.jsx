import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar(props) {
  return (
    <nav id="navbar">
      <div id="navContainer">
        <Link to="/" className="nav-links">
          Home
        </Link>
        <Link to="/blog" className="nav-links">
          Blog
        </Link>
      </div>
    </nav>
  );
}
