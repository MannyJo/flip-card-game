import React, { useState } from 'react';
import Card from './Card/Card';
import './Cards.scss';

const initCards = [
    { id: 1, value: '1', isVisible: false },
    { id: 2, value: '2', isVisible: false },
    { id: 3, value: '3', isVisible: false },
    { id: 4, value: '4', isVisible: false },
    { id: 5, value: '5', isVisible: false },
    { id: 6, value: '6', isVisible: false },
    { id: 7, value: '1', isVisible: false },
    { id: 8, value: '2', isVisible: false },
    { id: 9, value: '3', isVisible: false },
    { id: 10, value: '4', isVisible: false },
    { id: 11, value: '5', isVisible: false },
    { id: 12, value: '6', isVisible: false }
];

const Cards = () => {
    const [cards, setCards] = useState(initCards);

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
        <div className="cardContainer">
            {
                cards.map((card, i) => 
                    <Card 
                        key={i} 
                        card={card} 
                        clickCard={clickCard}
                    />
                )
            }
        </div>
    )
}

export default Cards;