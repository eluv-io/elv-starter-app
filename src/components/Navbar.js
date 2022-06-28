import React from "react";
import { AppBar, Toolbar} from "@material-ui/core";
import { NavLink} from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <AppBar position="fixed" className="appBar" color="inherit">
      <Toolbar className="navbar" >
        <NavLink to = '/'><p className='navbar-links'>Home</p></NavLink>
        <NavLink to = '/components'><p className = 'navbar-links'>Components</p></NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
