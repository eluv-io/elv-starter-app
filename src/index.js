import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./router";
import {HashRouter} from "react-router-dom";
import Navbar from "Components/Navbar";
import "Assets/stylesheets/app.scss";

const rootElement = ReactDOM.createRoot(document.getElementById("app"));



rootElement.render(
  <React.StrictMode>
    <HashRouter>
      <div className="app-container">
        <Routes />
      </div>
    </HashRouter>
  </React.StrictMode>
);
