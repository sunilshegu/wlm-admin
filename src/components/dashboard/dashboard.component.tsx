import React from 'react';
import { Route, Router, Switch } from 'react-router';
import { browserRoutingHistory } from '../../routing/history';
import Sidebar from "../sidebar/sidebar.component";

interface RouterProps {
}

const Comp1 = () => {
    return (
        <div>Comp1---------------------------------------------------------------------------------------------------------------------------------------</div>
    )
}
const Comp2 = () => {
    return (

        <div>Hai this is page 2</div>
    )
}
const Comp3 = () => {
    return (

        <div>Hai this is page 3</div>
    )
}

const Dashboard = (props: RouterProps) => {
    return (
        <div className='row'>
            <div className='col-md-4'>
                <Sidebar />
            </div>
            <div className='col-md-8'>
                <Router history={browserRoutingHistory}>
                    <Switch>
                        <Route path={'/dashboard/comp1'} component={Comp1} />
                        <Route path={'/dashboard/comp2'} component={Comp2} />
                        <Route path={'/dashboard/comp3'} component={Comp3} />
                    </Switch>
                </Router>
            </div>
        </div>
    );
}

export default Dashboard;
