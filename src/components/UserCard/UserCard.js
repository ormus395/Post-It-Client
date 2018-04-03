import React, { Component } from "react";

let tempStyle = {
  border: "2px solid red",
  backgroundColor: "#ccc"
};

const UserCard = props => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={props.userImg || "http://via.placeholder.com/200x150"} />
        <span className="card-title">{props.username || "Temp"}</span>
        <a className="btn-floating halfway-fab waves-effect waves-light red">
          <i className="material-icons">&#43;</i>
        </a>
      </div>
      <div className="card-content">
        <p>
          I am a very simple card. I am good at containing small bits of
          information. I am convenient because I require little markup to use
          effectively.
        </p>
      </div>
    </div>
  );
};

export default UserCard;
