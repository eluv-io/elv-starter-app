import React from "react";
import logo from "./assets/logo.png";
import {Action} from "elv-components-js";

const GettingStarted = ({Login}) => {
  return (
    <div >
      <img src={logo} />
      <div className="spacer">
        <Action label="login" title="Login" type="button" className="primarybtn" onClick={Login} children={<p className="btntext">Login</p>} />
      </div>
    </div>
  );
};

export default GettingStarted;
