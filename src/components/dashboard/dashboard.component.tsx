import React from 'react';
import { Route, Router, Switch } from 'react-router';
import { browserRoutingHistory } from '../../routing/history';
import { PATHS } from "../../routing/routing.helpers";
import Sidebar from "../sidebar/sidebar.component";
import Selfie from "../selfie/selfie.component";
import Id from "../id/id.component";
import Photos from "./../photos/photos.component";
import About from "./../about/about.component";
interface RouterProps {
}
const Dashboard = (props: RouterProps) => {
    return (
        <div className="container-fluid pl-0">
        <div className='row'>
            <div className='col-lg-2' >
                <Sidebar />
            </div>
            <div className='col-lg-10'>
                <Router history={browserRoutingHistory}>
                    <Switch>
                        <Route path={PATHS.SELFIE} component={Selfie} />
                        <Route path={PATHS.ID} component={Id} />
                        <Route path={PATHS.PHOTOS} component={Photos} />
                        <Route path={PATHS.ABOUT} component={About} />
                    </Switch>
                </Router>
            </div>
        </div>
        </div>
    );
}

export default Dashboard;


