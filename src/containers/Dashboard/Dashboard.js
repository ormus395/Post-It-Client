import React, { Component } from "react";

import UserCard from "../../components/UserCard/UserCard";
import NewsFeed from "./NewsFeed/NewsFeed";
import ChatPanel from "./ChatPanel/ChatPanel";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h3>Dashboard</h3>
        <div>
          <UserCard />
          <NewsFeed />
          <ChatPanel />
        </div>
      </div>
    );
  }
}

export default Dashboard;
