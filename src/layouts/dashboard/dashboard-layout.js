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
    console.log('match link in dash layout ', match)
    return (
        <div className="main-layout">
            <Switch>
                <Route path={`${match.url}create`}>
                    <TradeComponent></TradeComponent>
                </Route>
                <Route exact path={`${match.url}`}>
                    <DashboardComponent></DashboardComponent>
                </Route>
            </Switch>
        </div>
    )
}

export default DashboardLayout;