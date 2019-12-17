import React from 'react';
import './Card.scss';

const Card = ({ card, cards, setCards }) => {
    const clickCard = card => e => {
        if (card.isVisible) {
            e.target.className = 'cardFrame';
        } else {
            e.target.className += ' visible';
        }
        card.isVisible = !card.isVisible;
        setCards([ ...cards ]);
    }

    return (
        <div onClick={clickCard(card)} className="cardFrame">
            <div className="cardContent">
                {card.isVisible === false ? '' : card.value}
            </div>
        </div>
    )
}

export default Card;