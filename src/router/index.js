import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";

import GettingStarted from "Components/GettingStarted";
import Components from "Components/Components";
import Fabric from "Components/Fabric";

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact={true} path="/" element={<GettingStarted />} />
      <Route path="/fabric" element={<Fabric />} />
      <Route path="/components" element={<Components />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
