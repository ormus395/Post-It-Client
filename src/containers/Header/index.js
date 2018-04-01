import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import * as actions from "../../store/actions";
class Header extends Component {
  login = e => {
    e.preventDefault();
    this.props.login();
  };

  renderContent() {
    switch (this.props.auth) {
      // case null:
      //   return (
      //     <li>
      //       <a onClick={this.login}>Local Login</a>
      //     </li>
      //   );
      // case false:
      //   <li>
      //     <a onClick={this.login}>Local Login</a>
      //   </li>;
      default:
        return [
          <li key="1">
            <NavLink to="/dashboard">Feed</NavLink>
          </li>,
          <li key="2">
            <NavLink to="/messages">Messages</NavLink>
          </li>,
          <li key="3">
            <NavLink to="/post/new">PostIt</NavLink>
          </li>,
          <li key="4">
            <a onClick={this.logout}>Log Out</a>
          </li>
        ];
    }
  }
  render() {
    console.log();
    return (
      <nav>
        <div className="nav-wrapper container">
          <NavLink to="/" className="brand-logo">
            Poster
          </NavLink>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps, actions)(Header);
