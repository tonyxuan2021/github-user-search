import "./Header.scss";
import moon from "../assets/icon-moon.svg";

import React from "react";

const Header = () => {
  return (
    <div className="header">
      <h2>devfinder</h2>
      <div className="header--right">
        <p>DARK</p>
        <img src={moon}></img>
      </div>
    </div>
  );
};

export default Header;
