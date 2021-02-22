import React from 'react';
import Button from '@material-ui/core/Button';
import './dashboard.css';

function DashboardComponent() {
    return (
        <div className="dashboard" color="primary">
            <h5>What's Hot Now</h5> 
            <div className="dasboard__news-bar">
                <div className="dashboard__card-container">
                    <img src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg"/>
                </div>
                <div className="dashboard__card-container">
                    <img src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg"/>
                </div>
            </div>
        </div>
    )
}

export default DashboardComponent;