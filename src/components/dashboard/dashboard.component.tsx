import React from 'react';
import { Route, Router, Switch } from 'react-router';
import { browserRoutingHistory } from '../../routing/history';
import Sidebar from "../sidebar/sidebar.component";
import Selfie from "../selfie/selfie.component";
import Id from "../id/id.component";
import Images from "./../images/images.component";

interface RouterProps {
}
const Dashboard = (props: RouterProps) => {
    return (
        <div className='row'>
            <div className='col-lg-2'>
                <Sidebar />
            </div>

            <div className='col-lg-6'>
                <Router history={browserRoutingHistory}>
                    <Switch>
                        <Route path={'/dashboard/selfie'} component={Selfie} />
                        <Route path={'/dashboard/id'} component={Id} />
                        <Route path={'/dashboard/images'} component={Images} />
                    </Switch>
                </Router>
            </div>
        </div>
    );
}

export default Dashboard;
