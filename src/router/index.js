import React, {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import "../static/stylesheets/app.scss"
import GettingStarted from "Components/GettingStarted";
import Components from "Components/Components";
import Home from "Components/Home";
import Navbar from "Components/Navbar";
import { ElvWalletClient } from "@eluvio/elv-wallet-client"; 
import rootStore from "../stores/index.js"
import * as Actions from "../actions/Actions"

const AppRoutes = React.memo(() => {
  const [profile, setProfile] = useState({});
  const [walletClient, setWalletClient] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  //Define event listener for changes to loggedIn state stored in rootStore
  rootStore.on("change", () => {
    let newState = rootStore.getLoggedIn()
    setLoggedIn(newState);
    if(newState) {
      console.log("user has logged on")
    } else {
      console.log("user has logged off")
    }
  });

  const Login = async() => {
    const client =  await ElvWalletClient.InitializePopup({
      requestor: "Eluvio Music App",
      walletAppUrl: "https://wallet.contentfabric.io",
      loginOnly: true
    });
    await client.AddEventListener(client.EVENTS.LOG_IN, async () => {
      let profile = await client.UserProfile();
      setProfile(profile);
      if(Object.keys(walletClient).length === 0) {
        setWalletClient(client);
      }
      client.Destroy();
      Actions.loginAction();
    });
  };

  const Logout = async () => {
    await walletClient.SignOut(); 
    setWalletClient({});
    setProfile({});
    Actions.logoutAction();
  };

  return (
    <div>
      {loggedIn && <Navbar />}
      <Routes>
        {!loggedIn && 
      <Route exact={true} path="/" element = {<GettingStarted Login = {Login} />} /> }
        {loggedIn && <Route exact={true} path="/" element = {<Home name = {profile.name} Logout = {Logout}/>} /> }
        <Route path="/components" element={<Components />} />
      </Routes>
    </div>
  );
});

export default AppRoutes;
