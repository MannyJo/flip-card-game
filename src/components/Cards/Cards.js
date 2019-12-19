import React, { useState } from 'react';
import Card from './Card/Card';
import './Cards.scss';

const initCards = [
    { id: 1, value: '1', isVisible: false, isLocked: false },
    { id: 2, value: '2', isVisible: false, isLocked: false },
    { id: 3, value: '3', isVisible: false, isLocked: false },
    { id: 4, value: '4', isVisible: false, isLocked: false },
    { id: 5, value: '5', isVisible: false, isLocked: false },
    { id: 6, value: '6', isVisible: false, isLocked: false },
    { id: 7, value: '1', isVisible: false, isLocked: false },
    { id: 8, value: '2', isVisible: false, isLocked: false },
    { id: 9, value: '3', isVisible: false, isLocked: false },
    { id: 10, value: '4', isVisible: false, isLocked: false },
    { id: 11, value: '5', isVisible: false, isLocked: false },
    { id: 12, value: '6', isVisible: false, isLocked: false }
];

const Cards = () => {
    const [cards, setCards] = useState(initCards);
    const [deck, setDeck] = useState([]);

    const checkDeck = card => {
        let isAvailable = false;

        if(!card.isLocked) {
            if(deck.findIndex(selectedCard => card.id === selectedCard.id) < 0 && deck.length !== 2) {
                setDeck([ ...deck, card ]);
                isAvailable = true;
            }
        }

        return isAvailable;
    }

    const checkLogic = card => {
        let newCards = [];
        if(deck.length === 1) {
            if(deck[0].value === card.value) {
                newCards = cards.map(c => {
                    if(c.id === card.id || deck[0].id === c.id) {
                        return { ...c, isLocked: true }
                    }
                    return c;
                });
            } else {
                newCards = cards.map(c => {
                    if(c.id === card.id || deck[0].id === c.id) {
                        return { ...c, isVisible: false }
                    }
                    return c;
                });
            }
            setCards(newCards);
            setDeck([]);
        }
    }

    const clickCard = card => e => {
        if(checkDeck(card)) {
            if(e.target.parentElement.className.includes('cardContent')) {
                card.isVisible = !card.isVisible;

                setTimeout(() => checkLogic(card), 1000);

            }
        }
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