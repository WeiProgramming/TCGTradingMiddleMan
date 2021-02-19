import React from 'react';
import Button from '@material-ui/core/Button';
import './dashboard.css';
import {getTestData} from '../../services/api/test;'

function DashboardComponent() {
    return (
        <div className="dashboard" color="primary">
            <div className="dasboard__news-bar">
                <div className="dashboard__news-item">
                    <img src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg"/>
                </div>
                <div className="dashboard__news-item">
                    <img src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg"/>
                </div>
                <div className="dashboard__news-item">
                    <img src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg"/>
                </div>
                <div className="dashboard__news-item">
                    <img src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg"/>
                </div>
            </div>
            <div className="dashboard__trade-table">
                <div className="dashboard__card-container">
                    <img src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg"/>
                </div>
                <div className="dashboard__card-container">
                    <img src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg"/>
                </div>
                <div className="dashboard__card-container">
                    <img src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg"/>
                </div>
                <div className="dashboard__card-container">
                    <img src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg"/>
                </div>
                <div className="dashboard__card-container">
                    <img src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg"/>
                </div>
                <div className="dashboard__card-container">
                    <img src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg"/>
                </div>
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