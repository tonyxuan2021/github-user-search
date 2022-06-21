import "./User.scss";
import location from "../assets/icon-location.svg";
import website from "../assets/icon-website.svg";
import twitter from "../assets/icon-twitter.svg";
import company from "../assets/icon-company.svg";

import React, { useContext } from "react";
import { AppContext } from "../context";

const Other = () => {
  const { githubUser } = useContext(AppContext);
  const { html_url, twitter_username, blog } = githubUser;

  return (
    <div className="other">
      <div>
        <div className="other__wrapper">
          <img src={location} className="other__img" />
          <p className="other__asw">{githubUser.location || "unknown"}</p>
        </div>
        <div className="other__wrapper">
          <img src={website} className="other__img" />
          <p className="other__asw">{html_url}</p>
        </div>
      </div>
      <div>
        <div className="other__wrapper">
          <img src={twitter} className="other__img" />
          <p className="other__asw">{twitter_username || "unknown"}</p>
        </div>
        <div className="other__wrapper">
          <img src={company} className="other__img" />
          <p className="other__asw">{blog}</p>
        </div>
      </div>
    </div>
  );
};

export default Other;
