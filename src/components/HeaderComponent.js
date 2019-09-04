import React from "react";

import logo from "../assets/logo.png";

const HeaderComponent = () => {
  return (
    <header>  
       <div>
        <img src={logo} alt="logo.png"></img>
      </div>   
      <div>
        <h2>Programming Challenge</h2>
        <p>javascript: datastructures, typeAheah, groupBy/filter, aggregate</p>
      </div>
    </header>
  );
};

export default HeaderComponent;
