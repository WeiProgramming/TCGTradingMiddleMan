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
        {currentUser ? (
            <React.Fragment>
            {(activityItems.length > 0) ? (
                activityItems.map((item) => {
                    // console.log('new item', item["data"]["userId"] === currentUser.uid);
                    console.log('item in activity bar ', item)
                    return (
                        <CardWrapperComponent 
                        cardData={item} 
                        isOwner={item["data"]["userId"] === currentUser.uid ? true : false }
                        userId ={currentUser.uid}
                        />
                    )
                })
            ):(
                <div>
                    <p>No Activity</p>
                </div>
            )}
            </React.Fragment>
        ) : (
        <React.Fragment>
            {(activityItems.length > 0) ? (
                activityItems.map((item) => {
                    return (
                        <div className="activity__item">
                            <img key={item?.["id"]} src={
                item?.data["trade"]["card"]["card_images"][0]["image_url_small"]}
                alt="card"/>
                        </div>
                    )
                })
            ):(
                <div>
                    <p>No Activity</p>
                </div>
            )}
        </React.Fragment>)}
        </div>
        </div>
    )
}

export default ActivityBarComponent;