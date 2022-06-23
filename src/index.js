import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./router";
import { HashRouter } from "react-router-dom";

import NavigationBar from "Components/NavigationBar";
import "Assets/stylesheets/app.scss";

const rootElement = ReactDOM.createRoot(document.getElementById("app"));

rootElement.render(
  <React.StrictMode>
    <HashRouter>
      <div className="app-container">
        <NavigationBar />
        <Routes />
      </div>
    </HashRouter>
  </React.StrictMode>
);
