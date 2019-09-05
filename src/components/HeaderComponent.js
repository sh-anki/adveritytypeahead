import React from "react";
import "./HeaderComponent.css";

import logo from "../assets/logo.png";

const HeaderComponent = () => {
  return (
    <header className="main-header">
      <div className="logo-wrapper">
        <img className="main-logo" src={logo} alt="logo.png"></img>
      </div>
      <div className="main-desc">
        <h2>Programming Challenge</h2>
        <p>javascript datastructures, typeAheah, groupBy/filter, aggregate</p>
      </div>
    </header>
  );
};

export default HeaderComponent;
