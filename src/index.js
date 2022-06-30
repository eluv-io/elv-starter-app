import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./router/index";
import {HashRouter} from "react-router-dom";
import "Assets/stylesheets/app.scss";
import { RootStore } from "./stores/index.js";

const rootElement = ReactDOM.createRoot(document.getElementById("app"));

rootElement.render(
  <React.StrictMode>
    <HashRouter>
      <div className="app-container">
        <AppRoutes RootStore={RootStore} />
      </div>
    </HashRouter>
  </React.StrictMode>
);
