import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/auth";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      mode: "signUp"
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAuth({
      username: this.state.username,
      password: this.state.password
    });
  };

  render() {
    return (
      <div className="row">
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
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: user => {
      dispatch(actions.auth(user));
    }
  };
};

export default connect(null, mapDispatchToProps)(Landing);
