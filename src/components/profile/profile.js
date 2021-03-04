import React, {useContext, useEffect, useState} from 'react';
import './profile.css';
import {Button} from '@material-ui/core'
import {AuthContext} from '../../firebase-context';
import {getFireStoreUserDetail} from '../../services/api/firebase-auth';

const ProfileComponent = () => {
    const {currentUser} = useContext(AuthContext);
    let fireStoreUser = getFireStoreUserDetail(currentUser.uid);
    
    let [userDetails, setUserDetails] = useState(null);


    useEffect(() => {
        fireStoreUser.then(user => {
            console.log('In profile component user ', user);
            setUserDetails(user);
        })
    }, [])

    return userDetails ? (
        <div className="profile">
            <div className="profile__left-box">
                <div className="profile__avatar">
                    <img src={userDetails["profile_img"]} alt="Picture here"/>
                    <Button variant="outlined" color="primary">Edit</Button>
                </div>
                <div>
                    <p><strong>Trades</strong> 12</p>
                </div>
            </div>
            <div className="profile__right-box">
                <div className="profile__details">
                    <h2>{`${userDetails["displayName"]}`}</h2>
                    <h3>Address</h3> 
                        <p>{`${userDetails["address"]["street"]} ${userDetails["address"]["city"]} ${userDetails["address"]["state"]}, ${userDetails["address"]["zip"]}`}</p>
                    <Button variant="outlined" color="primary">Edit</Button>
                </div>
            </div>
        </div>
    ) : (<></>)
}

export default ProfileComponent;