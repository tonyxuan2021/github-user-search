import React, { useContext } from "react";
import { AppContext } from "../context";
import "./User.scss";

const Info = () => {
  const { githubUser } = useContext(AppContext);
  const { public_repos, followers, following } = githubUser;

  return (
    <div className="info">
      <div className="info__wrapper">
        <p className="info__header">Repos</p>
        <p className="info__num">{public_repos}</p>
      </div>
      <div className="info__wrapper">
        <p className="info__header">Followers</p>
        <p className="info__num">{followers}</p>
      </div>
      <div className="info__wrapper">
        <p className="info__header">Following</p>
        <p className="info__num">{following}</p>
      </div>
    </div>
  );
};

export default Info;
