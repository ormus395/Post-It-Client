import React, { Component } from "react";

import NewsFeedCard from "../../../components/NewsFeedCard/NewsFeedCard";

class NewsFeed extends Component {
  render() {
    let postList;
    if (!this.props.feed) {
      postList = (
        <div>
          No posts to display, try submitting one, or adding some followers?
        </div>
      );
    } else {
      postList = this.props.feed.map(post => (
        <NewsFeedCard key={post.id} post={post} />
      ));
    }
    console.log(postList);
    return <div className="col">{postList}</div>;
  }
}

export default NewsFeed;
