import React, { useEffect, useState } from 'react';
import './img-modal.css';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { BsChatDots, BsPencil } from 'react-icons/bs';
import { GiMagnifyingGlass } from 'react-icons/gi';
import {GoPerson} from 'react-icons/go';
import {addCardToUserWatchList} from '../../services/api/firebase-trade';

export const CardWrapperComponent = ({ cardData, isOwner, userId  }) => {
    let [showPopup, setShowPopup] = useState(false);
    let [favorite, setFavorite] = useState(false);
    let [owner, setOwner] = useState(null);

    useEffect(() => {
        setOwner(isOwner)
    }, [])

    const handleAddToFavorites = () => {
        addCardToUserWatchList(cardData, userId);
    }

    console.log('item coming to modal component ', cardData, isOwner);
    return (
        <div className="popup">
            {owner ? (<div className="popup__owner-icon"><GoPerson></GoPerson></div>) : (<div></div>)}
            <div className="popup__overlay">
                {owner ? (
                    <div className="popup__tab">
                        <GiMagnifyingGlass></GiMagnifyingGlass>
                    </div>
                ) : (
                    <div className="popup__tab fav" onClick={(e) => {
                        setFavorite(!favorite);
                        handleAddToFavorites();
                    }}>
                        {favorite ? <AiFillHeart /> : <AiOutlineHeart />}
                    </div>
                )}
                {owner ? (
                    <div className="popup__tab">
                        <BsPencil></BsPencil>
                    </div>
                ) : (
                    <div className="popup__tab">
                        <BsChatDots />
                    </div>
                )}
            </div>
            <img src={
                cardData?.data["trade"]["card"]["card_images"][0]["image_url_small"]}
                alt="card"
                onMouseOver={() => { setShowPopup(!showPopup) }}
                onMouseLeave={() => { setShowPopup(!showPopup) }} />
        </div>
    )
}

export const UserCardWrapperComponent = ({ card, type }) => {
    let [showUserCard, setShowUserCard] = useState(false);
    return (
        <div className="usercard">
            <div className="usercard__overlay">
                <div className="usercard__options-container">
                    <div className="usercard__option"><GiMagnifyingGlass></GiMagnifyingGlass></div>
                    {type === 'trade' ? (
                        <div className="usercard__option"><BsPencil></BsPencil></div>
                    ) : (
                        <div className="usercard__option"><AiOutlineHeart /></div>
                    )}
                </div>
            </div>
            <img
                src={card?.data["trade"]["card"]["card_images"][0]["image_url_small"]}
                alt="card"
                onMouseOver={() => { setShowUserCard(!showUserCard) }}
                onMouseLeave={() => { setShowUserCard(!showUserCard) }} />
        </div>
    )
}