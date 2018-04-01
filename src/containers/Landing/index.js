import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

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

  register = e => {
    e.preventDefault();
    this.props.register(this.state);
  };

  render() {
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.register}>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="username"
                type="text"
                className="validate"
                name="username"
                onChange={this.handleChange}
                value={this.state.username}
              />
              <label htmlFor="username">username</label>
            </div>
            <div className="input-field col s6">
              <input
                id="password"
                type="password"
                className="validate"
                name="password"
                onChange={this.handleChange}
                value={this.state.password}
              />
              <label htmlFor="password">password</label>
            </div>
          </div>
          <input type="submit" value="Register" className="btn" />
        </form>
      </div>
    );
  }
}

export default connect(null, actions)(Landing);
