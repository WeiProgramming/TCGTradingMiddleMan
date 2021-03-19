import React, { useEffect, useState } from 'react';
import './img-modal.css';
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai';
import {BsChatDots} from 'react-icons/bs';

const CardWrapperComponent = ({ card }) => {
    let [showPopup, setShowPopup] = useState(false);
    let [favorite, setFavorite] = useState(false);
    console.log('item comign to modal component ', card);
    return (
        <div className="popup">
            <div className="popup__overlay">
                <div className="popup__tab fav" onClick={(e) => {
                    setFavorite(!favorite);
                }}>
                    {favorite ? <AiFillHeart/> : <AiOutlineHeart/>}
                </div>
                <div className="popup__tab">
                    <BsChatDots/>
                </div>
            </div>
                <img src={
                    card?.data["trade"]["card"]["card_images"][0]["image_url_small"]}
                    alt="card"
                    onMouseOver={() => { setShowPopup(!showPopup) }}
                    onMouseLeave={() => { setShowPopup(!showPopup) }} />
        </div>
    )
}

export default CardWrapperComponent;