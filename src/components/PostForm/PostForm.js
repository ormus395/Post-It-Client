import React, { Component } from "react";

class PostForm extends Component {
  state = {
    post: ""
  };

  handleChange = e => {
    return this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="input-field col s12">
        <input
          placeholder="Input your post here"
          id="post"
          type="text"
          className="validate"
          onChange={this.handleChange}
          value={this.state.post}
          name="post"
        />
        <label htmlFor="post">post</label>
        <button
          onClick={() => {
            this.props.post(this.state.post);
            this.setState({ post: "" });
          }}
          className="btn"
        >
          Post
        </button>
      </div>
    );
  }
}

export default PostForm;
