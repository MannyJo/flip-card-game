import React, { useState, useEffect } from 'react';
import Cards from '../Cards/Cards';
import './App.scss';

function App() {
  const RESET_TIME = 10;
  const RESET_DELAY = 0;
  const END_TIME = 0;
  const ONE_SECOND = 1000;

  const [time, setTime] = useState(RESET_TIME);
  const [delay, setDelay] = useState(RESET_DELAY);
  let buttonName = delay === RESET_DELAY ? 'Start' : 'Reset';

  useEffect(() => {
    if(delay > RESET_DELAY) {
      let timer = setInterval(() => setTime(time-1), delay);

      if(time === END_TIME) {
        clearInterval(timer);
        setDelay(RESET_DELAY); 
      }

      return () => clearInterval(timer);
    }
  }, [time, delay]);

  const clickButton = () => {
    if(buttonName.toLowerCase().match('reset')) {
      setDelay(RESET_DELAY);
      setTime(RESET_TIME);
    } else {
      setDelay(ONE_SECOND);
    }
  }

  return (
    <div>
      <h1>Flip Card Game</h1>
      <div>
        <h2>Time Remaining : {time}</h2>
        <button onClick={clickButton}>{buttonName}</button>
      </div>
      <Cards />
    </div>
  );
}

export default App;
