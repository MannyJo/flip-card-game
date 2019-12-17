import React from 'react';
import './Card.scss';

const Card = ({ card, clickCard }) => {

    return (
        <div onClick={clickCard(card)} className="cardFrame">
            <div className="cardContent">
                {card.isVisible === false ? '' : card.value}
            </div>
        </div>
    )
}

export default Card;