import {observer} from "mobx-react-lite";
import {BrowserRouter} from "react-router-dom";
import {AppShell, MantineProvider} from "@mantine/core";
import MantineTheme from "@/assets/MantineTheme.js";
import AppRoutes from "./Routes.jsx";
import {rootStore} from "@/stores";
import SideNavigation from "@/components/SideNavigation.jsx";
import "@/assets/stylesheets/base.scss";
import "@/assets/stylesheets/reset.scss";
import "@mantine/core/styles.css";

const App = observer(() => {
  return (
    <MantineProvider withCssVariables theme={MantineTheme}>
      <BrowserRouter>
        <AppShell padding="lg" navbar={{width: 230, breakpoint: "sm"}}>
          <SideNavigation />
          <AppShell.Main>
            {
              rootStore.loaded ? <AppRoutes /> : null
            }
          </AppShell.Main>
        </AppShell>
      </BrowserRouter>
    </MantineProvider>
  );
});

export default App;
