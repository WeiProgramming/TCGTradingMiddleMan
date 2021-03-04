import React from 'react';
import DashboardComponent from '../../components/dashboard/dashboard';
import TradeComponent from '../../components/trade/trade';
import ProfileComponent from '../../components/profile/profile';

import { 
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch,
    Link
} from 'react-router-dom';

function DashboardLayout() {
    let match = useRouteMatch();
    console.log('match link in dash layout ', match)
    // console.log('match params in dash layout ', location);
    return (
        <div className="main-layout">
            <Switch>
                <Route path={`${match.url}/profile`} exact>
                    <ProfileComponent></ProfileComponent>
                </Route>
                <Route path={`${match.url}/create`} exact>
                    <TradeComponent></TradeComponent>
                </Route>
                <Route path={`${match.url}`} exact >
                    <DashboardComponent></DashboardComponent>
                </Route>
            </Switch>
        </div>
    )
}

export default DashboardLayout;