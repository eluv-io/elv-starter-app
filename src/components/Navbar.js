import React from "react";
import { Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul>
        <Link to="/">Home</Link>
        <Link to="/components">Components</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
