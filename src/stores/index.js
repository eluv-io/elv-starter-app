import {flow, configure, makeAutoObservable} from "mobx";
import {ElvWalletClient} from "@eluvio/elv-client-js";
import {FrameClient} from "@eluvio/elv-client-js/src/FrameClient";

// Force strict mode so mutations are only allowed within actions.
configure({
  enforceActions: "always"
});

class RootStore {
  client;
  walletClient;
  authenticated = false;
  loaded = false;

  constructor() {
    makeAutoObservable(this);

    this.Initialize();
    this.Authenticate = this.Authenticate.bind(this);
    this.Logout = this.Logout.bind(this);
  }

  Initialize = flow(function * () {
    try {
      // Determine whether your application needs FrameClient or
      // ElvWalletClient

      // FrameClient is a client that looks like ElvClient but, under the
      // hood, passes messages to another frame with an actual ElvClient
      //
      this.client = new FrameClient({
        target: window.parent,
        timeout: 60
      });

      // ElvWalletClient is a standalone client for using Eluvio Media
      // Wallet functionality
      //

      this.walletClient = yield ElvWalletClient.Initialize(
        {
        // eslint-disable-next-line no-undef
        network: EluvioConfiguration.network,
        // eslint-disable-next-line no-undef
        mode: EluvioConfiguration.mode
      });

      window.client = this.client;
      window.walletClient = this.walletClient;
    } catch(error) {
      console.error("Failed to initialize application");
      console.error(error);
    } finally {
      this.loaded = true;
    }
  });

  Authenticate = flow(function * () {
    try {
      yield this.walletClient.LogIn({
        method: "popup"
      });

      this.authenticated = true;
    } catch(error) {
      console.error(error);
    }
  });

  Logout = flow(function * () {
    yield this.walletClient.LogOut();
    this.authenticated = false;
  });
}

export const rootStore = new RootStore();

window.rootStore = rootStore;
