import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as actions from "../../store/actions/dashbaord";

import UserCard from "../../components/UserCard/UserCard";
import NewsFeed from "./NewsFeed/NewsFeed";
import ChatPanel from "./ChatPanel/ChatPanel";
import PostForm from "../../components/PostForm/PostForm";

class Dashboard extends Component {
  componentDidMount() {
    this.props.loadUser();
    this.props.loadFeed();
  }
  handlePostSubmit = post => {
    this.props.submitPost(post);
  };

  render() {
    return (
      <div>
        <h3>Dashboard</h3>
        <div className="row" style={{ border: "2px solid black" }}>
          <div className="col s3">
            <UserCard user={this.props.user} />
          </div>
          <div className="col s5">
            <PostForm post={this.handlePostSubmit} />
            <NewsFeed feed={this.props.posts} />
          </div>
          <div className="col s4">
            <ChatPanel />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.dashboard.user,
    loading: state.dashboard.loading,
    posts: state.dashboard.posts,
    chat: state.dashboard.chat,
    error: state.dashboard.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadUser: () => dispatch(actions.fetchUser()),
    submitPost: post => dispatch(actions.postSubmit(post)),
    loadFeed: () => dispatch(actions.loadFeed())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
