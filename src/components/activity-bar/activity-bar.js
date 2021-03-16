import React, {useEffect, useState} from 'react'
import './activity-bar.css'
import logo from '../../assets/icons/green-dot.png'

import {getLatestTrades} from '../../services/api/firebase-trade';
import CardWrapperModal from '../modals/img-modal';

let ActivityBarComponent = () => {
    let [activityItems, setActivityItem] = useState([]);
    let [showPopup, setShowPopup] = useState(false);
    useEffect(() => {
        getLatestTrades().then(trades => {
            console.log('getting latest trade posts ', trades);
            setActivityItem(trades);
        })
    }, [])
    return (
        <div className="activity">
            <div className="activity__header">
                <h4>Newly Posted</h4><img src={logo} alt="online dot icon"/>
            </div>
        <div className="activity__bar">
            {(activityItems.length > 0) ? (
                activityItems.map((item) => {
                    return (
                        <CardWrapperModal>
                            <div className="activity__item">
                                <img src={item["data"]["trade"]["card"]["card_images"][0]["image_url_small"]} alt="card" onMouseOver={() => {setShowPopup(!showPopup)}} onMouseLeave={() => {setShowPopup(!showPopup)}}/>
                                <div className={`popup ${showPopup ? 'show': ''}`}>
                                    <p>{item["data"]["trade"]["card"]["name"]}</p>
                                    <p>Wants: Money or Card</p>
                                    <p>Posted By: </p>
                                    <a>See Details</a>
                                </div>
                            </div>
                        </CardWrapperModal>
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