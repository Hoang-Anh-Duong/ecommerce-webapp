import storage from "./storage";

const Auth = {
    isAuthenticated: storage.isAuthenticated(),
    authenticated(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100);
    },
    signout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
}

export default Auth;