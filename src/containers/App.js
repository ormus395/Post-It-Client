import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Header/Header";
import Landing from "./Landing/Landing";
import Logout from "./Landing/Logout/Logout";
import Dashboard from "./Dashboard/Dashboard";

const Post = () => <h2>new Post</h2>;
const Messages = () => <h2>MEssages</h2>;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header auth={this.props.isLoggedIn} />
          <div className="container">
            <Route path="/" exact component={Landing} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/messages" exact component={Messages} />
            <Route path="/post/new" component={Post} />
            <Route path="/logout" component={Logout} />
          </div>
        </div>
      </Router>
    );
  }
}

let mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.token
  };
};

export default connect(mapStateToProps, null)(App);
