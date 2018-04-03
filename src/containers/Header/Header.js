import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, Redirect, withRouter } from "react-router-dom";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return null;
      case false:
        return null;
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
            <NavLink to="/logout">Logout</NavLink>
          </li>
        ];
    }
  }
  render() {
    console.log(this.props);
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
    isLoggedIn: state.auth.token
  };
};

export default connect(mapStateToProps)(Header);
