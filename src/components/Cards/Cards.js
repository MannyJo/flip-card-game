import React, { useState, useEffect } from 'react';
import Card from './Card/Card';
import Popup from '../Popup/Popup';
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

const Cards = ({ isStarted, setDelay, setTime, time }) => {
    const [cards, setCards] = useState(initCards);
    const [deck, setDeck] = useState([]);
    const [isFinished, setFinished] = useState(false);
    const [remainTime, setRemainTime] = useState(15);

    useEffect(() => {
        const index = cards.findIndex(card => card.isLocked === false);
        if(index < 0) {
            const newCards = cards.map(card => ({ ...card, isVisible: false, isLocked: false }));

            setRemainTime(15-time);
            setFinished(true);

            setCards(newCards);
            setDeck([]);
            setDelay(0);
            setTime(15);
        }
        // eslint-disable-next-line
    }, [cards]);

    useEffect(() => {
        const newCards = cards.map(card => ({ ...card, isVisible: false, isLocked: false }));
        setCards(newCards);
        setDeck([]);
        // eslint-disable-next-line
    }, [isStarted]);

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

    const checkLogic = (card) => {
        let newCards = [];
        if(deck.length === 1) {
            newCards = cards.map(c => {
                if(c.id === card.id || deck[0].id === c.id) {
                    if(deck[0].value === card.value) {
                        return { ...c, isLocked: true }
                    } else {
                        return { ...c, isVisible: false }
                    }
                }
                return c;
            });
            setCards(newCards);
            setDeck([]);
        }
    }

    const clickCard = card => e => {
        if(isStarted) {
            if(checkDeck(card)) {
                if(e.target.parentElement.className.includes('cardContent')) {
                    card.isVisible = !card.isVisible;
                    setTimeout(() => checkLogic(card), 500);
                }
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
            <Popup 
                isFinished={isFinished}
                setFinished={setFinished}
                time={remainTime}
            />
        </div>
    )
}

export default Cards;