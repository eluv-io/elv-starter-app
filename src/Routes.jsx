import Home from "@/pages/Home.jsx";
import GettingStarted from "@/pages/GettingStarted.jsx";
import {Route, Routes} from "react-router-dom";
import {observer} from "mobx-react-lite";

const AppRoutes = observer(() => {
  const routes = [
    {path: "/", Component: <Home />, label: "Home"},
    {path: "/getting-started", Component: <GettingStarted />, label: "Getting Started"}
  ];

  return (
    <Routes>
      {
        routes.map(({path, Component}) => (
          <Route
            exact={true}
            key={path}
            path={path}
            element={Component}
          />
        ))
      }
    </Routes>
  );
});

export default AppRoutes;
