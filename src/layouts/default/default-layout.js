import React from 'react';
import TradeComponent from '../../components/trade/trade';
import LandingPage from '../../pages/landing/landing';
import './default-layout.css';

function DefaultLayout() {
    return (
        <div className="main-layout">
            <LandingPage></LandingPage>
        </div>
    )
}

export default DefaultLayout;