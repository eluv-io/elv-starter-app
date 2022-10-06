import React from "react";
import {Action} from "elv-components-js";

const GettingStarted = ({Login}) => {
  return (
    <div>
      <div className="spacer">
        <Action
          label="login"
          title="Login"
          type="button"
          onClick={Login}
        >
          Login
        </Action>
      </div>
    </div>
  );
};

export default GettingStarted;
