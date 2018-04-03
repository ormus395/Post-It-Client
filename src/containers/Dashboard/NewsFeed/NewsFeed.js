import React, { Component } from "react";

import NewsFeedCard from "../../../components/NewsFeedCard/NewsFeedCard";

const dummyPosts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let tempStyle = {
  border: "2px solid red",
  backgroundColor: "#ccc"
};

class NewsFeed extends Component {
  render() {
    let feedList = dummyPosts.map(post => <NewsFeedCard />);
    console.log(dummyPosts);
    return <div style={tempStyle}>{feedList}</div>;
  }
}

export default NewsFeed;
