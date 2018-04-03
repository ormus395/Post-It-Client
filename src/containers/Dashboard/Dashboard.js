import React, { Component } from "react";

import UserCard from "../../components/UserCard/UserCard";
import NewsFeed from "./NewsFeed/NewsFeed";
import ChatPanel from "./ChatPanel/ChatPanel";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h3>Dashboard</h3>
        <div className="row" style={{ border: "2px solid black" }}>
          <div className="col s3">
            <UserCard />
          </div>
          <div className="col s7">
            <NewsFeed />
          </div>
          <div className="col s2">
            <ChatPanel />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
