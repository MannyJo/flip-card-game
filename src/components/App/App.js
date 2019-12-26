import React, { useState, useEffect } from 'react';
import Cards from '../Cards/Cards';
import './App.scss';

function App() {
  const RESET_TIME = 15;
  const RESET_DELAY = 0;
  const END_TIME = 0;
  const ONE_SECOND = 1000;

  const [time, setTime] = useState(RESET_TIME);
  const [delay, setDelay] = useState(RESET_DELAY);
  let buttonName = delay === RESET_DELAY ? 'START' : 'RESET';

  useEffect(() => {
    if (delay > RESET_DELAY) {
      let timer = setInterval(() => setTime(time - 1), delay);

      if (time === END_TIME) {
        clearInterval(timer);
        setDelay(RESET_DELAY);
        setTime(RESET_TIME);
      }

      return () => clearInterval(timer);
    }
  }, [time, delay]);

  const clickButton = () => {
    if (buttonName.toLowerCase().match('reset')) {
      setDelay(RESET_DELAY);
      setTime(RESET_TIME);
    } else {
      setDelay(ONE_SECOND);
    }
  }

  return (
    <div className="appContainer">
      <h1 className="title">Flip Card Game</h1>
      <div className="timerContainer">
        <h2>Time Remaining : {time}</h2>
        <button className="timerButton" onClick={clickButton}>{buttonName}</button>
      </div>
      <Cards
        isStarted={delay === RESET_DELAY ? false : true} 
        setDelay={setDelay}
        setTime={setTime}
        time={time}
      />
    </div>
  );
}

export default App;
