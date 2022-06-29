import dispatcher from "../dispatcher";

export function loginAction() {
    dispatcher.dispatch({type:"LOG_IN"});
}

export function logoutAction() {
    dispatcher.dispatch({type:"LOG_OUT"});
}