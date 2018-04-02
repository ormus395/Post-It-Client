import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from "./Header/Header";
import Landing from "./Landing/Landing";

const Dashboard = () => <h2>Dashboard</h2>;
const Post = () => <h2>new Post</h2>;
const Messages = () => <h2>MEssages</h2>;

class App extends Component {
  componentDidMount() {}
  componentDidUpdate() {}
  render() {
    return (
      <Router>
        <div>
          <Header />
          <div className="container">
            <Route path="/" exact component={Landing} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/messages" exact component={Messages} />
            <Route path="/post/new" component={Post} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
