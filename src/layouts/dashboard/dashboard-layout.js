import React from 'react';
import TradeListComponent from '../../components/tradelist/tradelist';
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
            <Link to={`${match.url}/create`} variant="contained" color="primary">
                Make a new Trade
            </Link>
            <Link to={`${match.url}/list`} variant="contained" color="primary">
                View List
            </Link>
            <Switch>
                <Route path={`${match.url}/list`}>
                    <TradeListComponent></TradeListComponent>
                </Route>
                <Route path={`${match.url}/create`}>
                    <TradeComponent></TradeComponent>
                </Route>
            </Switch>
        </div>
    )
}

export default DashboardLayout;