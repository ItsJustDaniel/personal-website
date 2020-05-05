import React from "react";
import Navbar from "../layouts/Navbar";
import BlogList from "../layouts/BlogList";
import "../../index.css";

function Blog() {
  return (
    <div id="blog-container">
      <br />
      <Navbar />
      <BlogList />
    </div>
  );
}

export default Blog;
