import { Redirect, Route } from "react-router-dom"
import Auth from "./helpers/auth";

export const PrivateRouter = ({ children, ...rest }) => {

    return (
        <Route {...rest} render={({ location }) => {
            return Auth.isAuthenticated ?
                children :
                <Redirect to={{
                    pathname: '/admin/login',
                    state: { from: location }
                }} />
        }} />
    )
}