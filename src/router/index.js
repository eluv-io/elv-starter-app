import React, {useState} from "react";
import {Routes, Route} from "react-router-dom";

import GettingStarted from "Components/GettingStarted";
import Components from "Components/Components";
import Home from "Components/Home";
import Navbar from "Components/Navbar";
import { ElvWalletClient } from "@eluvio/elv-wallet-client"; 



const AppRoutes = React.memo(() => {

  const [profile, setProfile] = useState({});
  const [loggedIn,setLoggedIn] = useState(false);
  const [walletClient, setWalletClient] = useState({});



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
      setLoggedIn(true); 
      console.log("user has signed in");
    });


  };

  const Logout = async () => {
    await walletClient.SignOut(); 
    console.log("user has signed out");
    setWalletClient({});
    setProfile({});
    setLoggedIn(false);
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
