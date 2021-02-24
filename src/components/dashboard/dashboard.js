import React from 'react';
import './dashboard.css';
import greenArrowLogo from '../../assets/images/green-arrow.png';

function DashboardComponent() {
    return (
        <div className="dashboard" color="primary">
            <div className="dashboard__prev">
                    <img src={greenArrowLogo}/>
            </div>
            <div className="dashboard__trade-table">
                <div className="dashboard__card-container">
                    <img src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg" />
                </div>
                <div className="dashboard__card-container">
                    <img src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg" />
                </div>
                <div className="dashboard__card-container">
                    <img src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg" />
                </div>
                <div className="dashboard__card-container">
                    <img src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg" />
                </div>
                <div className="dashboard__card-container">
                    <img src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg" />
                </div>
                <div className="dashboard__card-container">
                    <img src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg" />
                </div>
                <div className="dashboard__card-container">
                    <img src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg" />
                </div>
                <div className="dashboard__card-container">
                    <img src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg" />
                </div>
            </div>
            <div className="dashboard__next">
                <img src={greenArrowLogo}/>
            </div>
        </div>
    )
}

export default DashboardComponent;