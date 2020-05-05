import React from "react";
import Navbar from "../layouts/Navbar";
import ArticleContent from "../layouts/ArticleContent";
import SideBar from "../layouts/SideBarBlogList";
import ArticleData from "../../API/ArticleData";

import "./BlogArticle.css";

class BlogArticle extends React.Component {
  state = { content: "", name: "", time: "", articleData: {}, test: "" };

  getArticleData = async () => {
    const articleArr = await ArticleData();
    const article = articleArr.find(
      i => i.name === this.props.match.params.Article
    );
    console.log(article);
    this.setState(
      {
        content: article.content,
        name: article.name,
        time: article.time,
        data: articleArr
      },
      () => console.log(this.state.data)
    );
  };

  componentDidMount = () => {
    this.getArticleData();
  };
  render() {
    return (
      <div>
        <Navbar />
        <div id="Article-Body">
          <SideBar getArticleData={this.getArticleData} />
          <ArticleContent
            name={this.state.name}
            content={this.state.content}
            time={this.state.time}
          />
        </div>
      </div>
    );
  }
}

export default BlogArticle;
