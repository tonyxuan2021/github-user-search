import React from "react";
import "./User.scss";

const Info = () => {
  return (
    <div className="info">
      <div className="info__wrapper">
        <p>Repos</p>
        <p className="info__num">8</p>
      </div>
      <div className="info__wrapper">
        <p>Followers</p>
        <p className="info__num">3938</p>
      </div>
      <div className="info__wrapper">
        <p>Following</p>
        <p className="info__num">9</p>
      </div>
    </div>
  );
};

export default Info;
