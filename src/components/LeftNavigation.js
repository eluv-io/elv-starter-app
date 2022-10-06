import React from "react";
import {NavLink} from "react-router-dom";
import Logo from "Assets/images/logo";

const LeftNavigation = () => {
  return (
    <nav className="navigation">
      <img src={Logo} />
      <NavLink to={"/"} className="navigation__link">Home</NavLink>
      <NavLink to={"/components"} className="navigation__link">Components</NavLink>
    </nav>
  );
};

export default LeftNavigation;
