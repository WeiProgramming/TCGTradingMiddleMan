import React, {useEffect, useState, useContext} from 'react'
import './activity-bar.css'
import logo from '../../assets/icons/green-dot.png'

import {getLatestTrades} from '../../services/api/firebase-trade';
import {CardWrapperComponent} from '../modals/img-modal';
import {AuthContext} from '../../firebase-context';

let ActivityBarComponent = () => {
    let {currentUser} = useContext(AuthContext)
    let [activityItems, setActivityItem] = useState([]);
    let [isOwner, setIsOwner] = useState(false);
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
                    console.log('new item', item["data"]["userId"] === currentUser.uid);

                    return (
                        <CardWrapperComponent card={item} isOwner={item["data"]["userId"] === currentUser.uid ? true : false }/>
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