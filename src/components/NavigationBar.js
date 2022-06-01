import React from "react";
import {NavLink} from "react-router-dom";

import {ImageIcon} from "elv-components-js";
import Logo from "Assets/images/logo.svg";

const NavigationBar = () => {
  return (
    <nav className="navigation">
      <NavLink className="navigation-logo-container" to="/">
        <ImageIcon icon={Logo} title="Eluvio" className="navigation-logo" />
      </NavLink>
      <NavLink className="navigation-link" to="/">Getting Started</NavLink>
      <NavLink className="navigation-link" to="/components">Components</NavLink>
      <NavLink className="navigation-link" to="/fabric">Fabric</NavLink>
    </nav>
  );
};

export default NavigationBar;
