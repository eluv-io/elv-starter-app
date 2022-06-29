import {EventEmitter} from "events";
import dispatcher from "../dispatcher";

class RootStore extends EventEmitter {
    constructor() {
        super();
        this.loggedIn = false;
    }

    setLoggedIn = (bool) => {
        if(this.loggedIn === bool) {
            //no change to account for
        } else {
            this.loggedIn = bool;
            this.emit("change");
        }
    }

    getLoggedIn = () => {
        return this.loggedIn;
    }

    handleAction = (action) => {
        console.log("rootStore received an action ", action);
        if(action.type === "LOG_IN") {
            this.setLoggedIn(true);
        } else if(action.type === "LOG_OUT") {
            this.setLoggedIn(false); 
        } else {
            //do nothing
        }
    }
}

const rootStore = new RootStore;
dispatcher.register(rootStore.handleAction.bind(rootStore));
window.rootStore = rootStore;
export default rootStore;