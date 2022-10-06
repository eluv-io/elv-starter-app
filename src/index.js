import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./router/index";
import {HashRouter} from "react-router-dom";
import "Assets/stylesheets/app.scss";
import {Provider} from "mobx-react";
import * as Stores from "./stores";
import LeftNavigation from "Components/LeftNavigation";

const rootElement = ReactDOM.createRoot(document.getElementById("app"));

rootElement.render(
  <Provider {...Stores}>
    <React.StrictMode>
      <HashRouter>
        <div className="app-container">
          <LeftNavigation />
          <AppRoutes />
        </div>
      </HashRouter>
    </React.StrictMode>
  </Provider>
);
