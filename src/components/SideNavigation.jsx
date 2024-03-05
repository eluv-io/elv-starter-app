import {NavLink} from "react-router-dom";
import {AppShell, Flex, Image, Text} from "@mantine/core";
import {IconHome, IconNotebook} from "@tabler/icons-react";
import "@/assets/stylesheets/navigation.scss";
import Logo from "@/assets/images/eluvio-logo.svg";

const LINKS = [
  {title: "Home", icon: <IconHome />, path: "/"},
  {title: "Getting Started", icon: <IconNotebook />, path: "/getting-started"}
];

const SideNavigation = () => {
  return (
    <AppShell.Navbar p="md" className="side-navigation">
      <Image src={Logo} h={30} fit="contain" mb={16} />
      {
        LINKS.map(({path, title, icon}) => (
          <NavLink to={path} key={path} className="side-navigation__link">
            <Flex align="center" gap="xs">
              {icon ? icon : null}
              <Text>{title}</Text>
            </Flex>
          </NavLink>
        ))
      }
    </AppShell.Navbar>
  );
};

export default SideNavigation;
