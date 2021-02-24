import React from 'react';
import DashboardComponent from '../../components/dashboard/dashboard';
import TradeComponent from '../../components/trade/trade';
import { 
    Link,
    Switch,
    Route,
    useRouteMatch
} from 'react-router-dom';

function DashboardLayout() {
    let match = useRouteMatch();
    return (
        <div className="main-layout">
            <Switch>
                <Route exact path={`${match.url}`}>
                    <DashboardComponent></DashboardComponent>
                </Route>
                <Route path={`${match.url}/create`}>
                    <TradeComponent></TradeComponent>
                </Route>
            </Switch>
        </div>
    )
}

export default DashboardLayout;