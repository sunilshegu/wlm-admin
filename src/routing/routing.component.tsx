import React from "react";
import { browserRoutingHistory } from "./history";
import { Route, Router, Switch } from "react-router-dom";
import { PATHS } from "./routing.helpers";
import Login from "../components/auth/auth.component";
import Dashboard from "../components/dashboard/dashboard.component";

function AppRouter() {
    return (
        <Router history={browserRoutingHistory}>
            <Switch>
                <Route path={PATHS.DASHBOARD} component={Dashboard}/>
                <Route path={PATHS.LOGIN} component={Login}/>
                <Route path={PATHS.HOME} component={Login}/>
                {/* <PrivateRoute path={PATHS.ACCEPT_INVITE} component={AcceptInvitation}/> */}
            </Switch>
        </Router>
    )
}

export default AppRouter;