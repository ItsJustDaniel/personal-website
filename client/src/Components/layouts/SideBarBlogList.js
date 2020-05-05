import React from "react";
import { Link } from "react-router-dom";
import "./SideBarBlogList.css";
import ArticleData from "../../API/ArticleData";

class SideBar extends React.Component {
  state = { BlogList: [] };
  async componentDidMount() {
    const json = await ArticleData();
    this.setState({ BlogList: json });
  }

  handleClick = () => {
    this.props.getArticleData();
  };
  render() {
    return (
      <div id="sidebar-container">
        <nav className="sidebar">
          {this.state.BlogList.slice()
            .reverse()
            .map(blog => (
              <li
                key={blog.id}
                onClick={this.handleClick}
                className="siderbar-blog"
              >
                <Link
                  to={`/blog/${blog.name}`}
                  className="blog-link sidebar"
                  onClick={this.handleClick}
                >
                  <h3>{blog.name}</h3>
                </Link>
              </li>
            ))}
        </nav>
      </div>
    );
  }
}

export default SideBar;
