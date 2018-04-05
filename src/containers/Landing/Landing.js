import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as actions from "../../store/actions/auth";

import Spinner from "../../components/UI/Spinner/Spinner";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.name);
    this.props.onAuth(
      {
        username: this.state.username,
        password: this.state.password
      },
      e.target.name
    );
  };

  changeMode = () => {
    let newMode = this.state.mode;
    this.setState({ mode: !newMode });
  };

  render() {
    let errorMsg = this.props.error ? (
      <div className="col s12 m5">
        <div className="card-panel red darken-3">
          <span className="white-text">Wrong Username or Password</span>
        </div>
      </div>
    ) : null;
    let form = null;
    if (this.props.loading) {
      form = <Spinner />;
    } else {
      form = (
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input
                id="username"
                type="text"
                className="validate"
                onChange={this.handleChange}
                value={this.state.username}
                name="username"
              />
              <label htmlFor="username">Username</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="password"
                type="password"
                className="validate"
                onChange={this.handleChange}
                value={this.state.password}
                name="password"
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <button
            className="btn waves-effect waves-light left-align"
            type="submit"
            name="Sign-In"
            onClick={this.handleSubmit}
          >
            Sign In
          </button>
          <button
            onClick={this.handleSubmit}
            className="btn right-align"
            name="Register"
          >
            Register
          </button>
        </form>
      );
    }
    return (
      <div className="row">
        {this.props.isAuthenticated ? <Redirect to="/dashboard" /> : null}
        {errorMsg}
        {form}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (user, type) => {
      dispatch(actions.auth(user, type));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
