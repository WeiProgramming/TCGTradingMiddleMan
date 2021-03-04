import React from 'react'
import './activity-bar.css'
import logo from '../../assets/icons/green-dot.png'

let ActivityBarComponent = () => {
    return (
        <div className="activity">
            <div className="activity__header">
                <h4>Trades Live</h4><img src={logo} alt="online dot icon"/>
            </div>
        <div className="activity__bar">
            <div className="activity__item">
                <img src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg" />
            </div>
            <div className="activity__item">
                <img src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg" />
            </div>
            <div className="activity__item">
                <img src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg" />
            </div>
            <div className="activity__item">
                <img src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg" />
            </div>
            <div className="activity__item">
                <img src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg" />
            </div>
            <div className="activity__item">
                <img src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg" />
            </div>
            <div className="activity__item">
                <img src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg" />
            </div>
        </div>
        </div>
    )
}

export default ActivityBarComponent;