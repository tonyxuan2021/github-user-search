import React from "react";
import placeholder from "../assets/favicon-32x32.png";
import "./User.scss";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro--top">
        <img className="intro__img" src={placeholder}></img>
        <div className="intro--top--right">
          <h2>The Octocat</h2>
          <p>@octocat</p>
          <p>Joined 25 Jan 2011</p>
        </div>
      </div>
      <p className="intro--btm">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        Quisque volutpat mattis eros.
      </p>
    </div>
  );
};

export default Intro;
