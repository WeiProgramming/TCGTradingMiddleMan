import React, { useState, useEffect, useContext } from 'react';
import './dashboard.css';
import greenArrowLogo from '../../assets/images/green-arrow.png';

import { getUserTrades } from '../../services/api/firebase-trade';
import { AuthContext } from '../../firebase-context';
import {UserCardWrapperComponent} from '../modals/img-modal';
import {getUserWatchList} from '../../services/api/firebase-trade';

function DashboardComponent() {
    const { currentUser } = useContext(AuthContext);
    let [tradeItems, setTradeItems] = useState([]);
    let [watchItems, setWatchItems] = useState([]);
    useEffect( () => {
        getUserTrades(currentUser).then(trades => {
            setTradeItems(trades);
        })
        getUserWatchList(currentUser["uid"]).then(watchList => {
            setWatchItems(watchList);
        })

    }, [])
    return (
        <div className="dashboard" color="primary">
            <div className="dashboard__list-container">
                <div className="dashboard__table-title">
                    WatchList
                </div>
                <div className="dashboard__table">
                    {(watchItems.length > 0) ? (
                        watchItems.map(({data}) => {
                            return (
                                <UserCardWrapperComponent 
                                card={data} 
                                type={"favorite"}/>
                            )
                        })
                    ) : (
                        <div>
                            <p>No Activity</p>
                        </div>
                    )}
                </div>
            </div>
            <div className="dashboard__list-container">
                <div className="dashboard__table-title">Trades</div>
                {/* <div className="dashboard__prev">
                    <img src={greenArrowLogo} alt="carrow logo" />
                </div> */}
                <div className="dashboard__table">
                    {(tradeItems.length > 0) ? (
                        tradeItems.map((item) => {
                            return (
                                <UserCardWrapperComponent card={item} type={"trade"}/>
                            )
                        })
                    ) : (
                        <div>
                            <p>No Activity</p>
                        </div>
                    )}
                </div>
                {/* <div className="dashboard__next">
                    <img src={greenArrowLogo} alt="carrow logo" />
                </div> */}
            </div>
        </div>
    )
}

export default DashboardComponent;