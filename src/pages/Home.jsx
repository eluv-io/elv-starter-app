import {observer} from "mobx-react-lite";
import {Button, Text} from "@mantine/core";
import {rootStore} from "@/stores";

const Home = observer(() => {
  return (
    <>
      <Text>Media Wallet auth</Text>
      <Button onClick={rootStore.authenticated ? rootStore.Logout : rootStore.Authenticate}>
        {rootStore.authenticated ? "Log out" : "Log in"}
      </Button>
    </>
  );
});

export default Home;
