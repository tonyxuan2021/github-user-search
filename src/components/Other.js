import "./User.scss";
import location from "../assets/icon-location.svg";
import website from "../assets/icon-website.svg";
import twitter from "../assets/icon-twitter.svg";
import company from "../assets/icon-company.svg";

import React from "react";

const Other = () => {
  return (
    <div className="other">
      <div className="other__wrapper">
        <img src={location} className="other__img" />
        <p>San Francisco</p>
      </div>
      <div className="other__wrapper">
        <img src={website} className="other__img" />
        <p>http://github.blog</p>
      </div>
      <div className="other__wrapper">
        <img src={twitter} className="other__img" />
        <p>Not Available</p>
      </div>
      <div className="other__wrapper">
        <img src={company} className="other__img" />
        <p>@github</p>
      </div>
    </div>
  );
};

export default Other;
