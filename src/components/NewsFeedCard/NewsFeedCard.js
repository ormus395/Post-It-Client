import React, { Component } from "react";

const newsFeedCard = ({ post }) => (
  <div className="card blue-grey darken-1">
    <div className="card-content white-text">
      <span className="card-title">{post.User.username}</span>
      <p>{post.content}</p>
    </div>
    <div className="card-action">
      <a href="#">This is a link</a>
      <a href="#">This is a link</a>
    </div>
  </div>
);

export default newsFeedCard;
