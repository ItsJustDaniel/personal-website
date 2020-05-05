import React, { Component } from "react";
import "./BlogList.css";
import { Link } from "react-router-dom";
import ArticleData from "../../API/ArticleData";

class BlogList extends Component {
  state = { BlogList: [] };
  async componentDidMount() {
    const json = await ArticleData();
    this.setState({ BlogList: json }, () => console.log(this.state.BlogList));
  }

  render() {
    return (
      <div>
        <h1 id="Blog-Title">Blogs</h1>

        <ul id="blogList">
          {this.state.BlogList.slice()
            .reverse()
            .map(blog => (
              <li key={blog.id} className="blog" onClick={this.handleClick}>
                <Link to={`/blog/${blog.name}`} className="blog-link">
                  <h3 className="blogName">{blog.name}</h3>
                  <div className="date"> {blog.time}</div>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default BlogList;
