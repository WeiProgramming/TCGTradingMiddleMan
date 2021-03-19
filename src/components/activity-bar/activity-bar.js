import React, {useEffect, useState} from 'react'
import './activity-bar.css'
import logo from '../../assets/icons/green-dot.png'

import {getLatestTrades} from '../../services/api/firebase-trade';
import CardWrapperComponent from '../modals/img-modal';

let ActivityBarComponent = () => {
    let [activityItems, setActivityItem] = useState([]);
    useEffect(() => {
        getLatestTrades().then(trades => {
            console.log('getting latest trade posts ', trades);
            setActivityItem(trades);
        })
    }, [])
    return (
        <div className="activity">
            <div className="activity__header">
                <h4>Newly Posted Trades</h4><img src={logo} alt="online dot icon"/>
            </div>
        <div className="activity__bar">
            {(activityItems.length > 0) ? (
                activityItems.map((item) => {
                    return (
                        <CardWrapperComponent card={item}/>
                    )
                })
            ):(
                <div>
                    <p>No Activity</p>
                </div>
            )}
        </div>
        </div>
    )
}

export default ActivityBarComponent;