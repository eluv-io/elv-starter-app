import React from "react";
import {Action} from "elv-components-js";
import {observer} from "mobx-react";

const Home = observer(() => {
  const loggedOutView = (
    <>
      <div>You are logged out.</div>
      <div>
        <Action
          label="login"
          title="Login"
          type="button"
          onClick={() => rootStore.Authenticate()}
        >
          Login
        </Action>
      </div>
    </>
  );

  const loggedInView = (
    <>
      <div>You are logged in.</div>
      <div>
        <Action onClick={() => rootStore.Logout()}>Log out</Action>
      </div>
    </>
  );

  if(rootStore.loggedIn) {
    return loggedInView;
  } else {
    return loggedOutView;
  }
});

export default Home;
