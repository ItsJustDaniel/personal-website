import React from "react";
import "./ArticleContent.css";

const ArticleContent = (props) => {
  return (
    <div id="ArticleContent">
      <div id="Header">
        <h1>{props.name}</h1>
        <small>{props.time}</small>
      </div>
      <div id="content">
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default ArticleContent;
