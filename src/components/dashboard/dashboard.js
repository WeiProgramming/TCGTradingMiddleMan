import React, {useState, useEffect, useContext} from 'react';
import './dashboard.css';
import greenArrowLogo from '../../assets/images/green-arrow.png';

import {getUserTrades} from '../../services/api/firebase-trade';
import {AuthContext} from '../../firebase-context';

function DashboardComponent() {
    const {currentUser} = useContext(AuthContext);
    let [tradeItems, setTradeItems] = useState([]);
    useEffect(() => {
        getUserTrades(currentUser).then(trades => {
            console.log('getting latest user trade posts ', trades, currentUser);
            setTradeItems(trades);
        })
    }, [])
    return (
        <div className="dashboard" color="primary">
            <div className="dashboard__prev">
                    <img src={greenArrowLogo} alt="carrow logo"/>
            </div>
            <div className="dashboard__trade-table">
            {(tradeItems.length > 0) ? (
                tradeItems.map((item) => {
                    return (
                            <div className="dashboard__card-container">
                                <img src={item["data"]["trade"]["card"]["card_images"][0]["image_url_small"]} alt="card"/>
                            </div>
                    )
                })
            ):(
                <div>
                    <p>No Activity</p>
                </div>
            )}
            </div>
            <div className="dashboard__next">
                <img src={greenArrowLogo} alt="carrow logo"/>
            </div>
        </div>
    )
}

export default DashboardComponent;