import "./User.scss";

import React from "react";
import Intro from "./Intro";
import Info from "./Info";
import Other from "./Other";

const User = () => {
  return (
    <div className="user">
      <Intro />
      <Info />
      <Other />
    </div>
  );
};

export default User;
