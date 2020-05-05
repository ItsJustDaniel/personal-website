import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Home from "./Components/Pages/Home";
import Blog from "./Components/Pages/Blog";
import PageNotFound from "./Components/Pages/404";
import BlogArticle from "./Components/Pages/BlogArticle";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/blog/:Article" component={BlogArticle} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/404" component={PageNotFound} />

          <Redirect to="/404" />
        </Switch>
      </Router>
    );
  }
}

export default App;
