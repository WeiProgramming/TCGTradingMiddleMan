import React from 'react';
import './dashboard.css';
import { getTestData } from '../../services/api/test;'

function DashboardComponent() {
    return (
        <div className="dashboard" color="primary">
            <div className="dashboard__prev">
                <div className="dashboard__rectangle">
                    <p>prev</p>
                    <div className="dashboard__triangle"></div>
                </div>
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
            <div className="dashboard__rectangle">
                <p>next</p>
                <div className="dashboard__triangle"></div>
            </div>
            </div>
        </div>
    )
}

export default DashboardComponent;