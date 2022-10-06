import { makeObservable, observable, action } from "mobx";

class RootStore {
    loggedIn = false;
    userProfile = {}
    walletClient = {};

    constructor() {
      makeObservable(this,{
        loggedIn: observable,
        userProfile: observable,
        walletClient: observable,
        login: action,
        logout: action
      });
    }

    login(prof,client) {
      this.loggedIn = true;
      this.userProfile = prof;
      this.walletClient = client;
    }

    logout() {
      this.loggedIn = false;
      this.userProfile = {};
      this.walletClient = {};
    }
}

export const rootStore = new RootStore();

window.rootStore = rootStore;
