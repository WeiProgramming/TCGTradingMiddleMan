import React from 'react';
import './dashboard.css';
import greenArrowLogo from '../../assets/images/green-arrow.png';

function DashboardComponent() {
    return (
        <div className="dashboard" color="primary">
            <div className="dashboard__prev">
                    <img src={greenArrowLogo} alt="carrow logo"/>
            </div>
            <div className="dashboard__trade-table">
                <div className="dashboard__card-container">
                    <img src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg" alt="cards" />
                </div>
                <div className="dashboard__card-container">
                    <img src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg" alt="cards" />
                </div>
                <div className="dashboard__card-container">
                    <img src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg"alt="cards" />
                </div>
                <div className="dashboard__card-container">
                    <img src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg" alt="cards" />
                </div>
                <div className="dashboard__card-container">
                    <img src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg" alt="cards" />
                </div>
                <div className="dashboard__card-container">
                    <img src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg" alt="cards" />
                </div>
                <div className="dashboard__card-container">
                    <img src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg" alt="cards" />
                </div>
                <div className="dashboard__card-container">
                    <img src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg" alt="cards" />
                </div>
            </div>
            <div className="dashboard__next">
                <img src={greenArrowLogo} alt="carrow logo"/>
            </div>
        </div>
    )
}

export default DashboardComponent;