import React from "react";
import {Routes, Route} from "react-router-dom";
import "../static/stylesheets/app.scss"
import GettingStarted from "Components/GettingStarted";
import Components from "Components/Components";
import Home from "Components/Home";
import Navbar from "Components/Navbar";
import { ElvWalletClient } from "@eluvio/elv-wallet-client"; 
import { observer } from 'mobx-react';


const AppRoutes = observer(({RootStore}) => {
  const Login = async() => {
    const client =  await ElvWalletClient.InitializePopup({
      requestor: "Eluvio Music App",
      walletAppUrl: "https://wallet.contentfabric.io",
      loginOnly: true
    });
    await client.AddEventListener(client.EVENTS.LOG_IN, async () => {
      let profile = await client.UserProfile();
      console.log(RootStore.loggedIn);
      RootStore.login(profile,client);
      client.Destroy();
    });
  };

  const Logout = async () => {
    await RootStore.walletClient.SignOut(); 
    RootStore.logout();
  };

  return (
    <div>
      {RootStore.loggedIn && <Navbar />}
      <Routes>
        {!RootStore.loggedIn && 
      <Route exact={true} path="/" element = {<GettingStarted Login = {Login} />}/> }
        {RootStore.loggedIn && <Route exact={true} path="/" element = {<Home name = {RootStore.userProfile.name} Logout = {Logout}/>}/> }
        <Route path="/components" element={<Components/>}/>
      </Routes>
    </div>
  );
});

export default AppRoutes;
