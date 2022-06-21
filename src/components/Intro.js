import React, { useContext } from "react";
import placeholder from "../assets/favicon-32x32.png";
import { AppContext } from "../context";
import "./User.scss";

const Intro = () => {
  const { githubUser } = useContext(AppContext);

  const { avatar_url, name, login, created_at, bio } = githubUser;

  return (
    <div className="intro">
      <div className="intro--top">
        <img className="intro__img" src={avatar_url}></img>
        <div className="intro--top--right">
          <h3>{name}</h3>
          <p className="intro__login">@{login}</p>
          <p className="intro__date">Joined {created_at}</p>
        </div>
      </div>
      <p className="intro--btm">{bio}</p>
    </div>
  );
};

export default Intro;
