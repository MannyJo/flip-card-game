import React from 'react';
import './Card.scss';

const Card = ({ card, clickCard }) => {
    return (
        <div className="cardFrame">
            <div className={card.isVisible ? 'cardContent visible' : 'cardContent'} onClick={clickCard(card)}>
                <div className="cardFront">Front</div>
                <div className="cardBack">{card.value}</div>
            </div>
        </div>
    )
}

export default Card;