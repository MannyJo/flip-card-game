import React from 'react';
import './Popup.scss';

const Popup = ({ isFinished, setFinished, time }) => {

    const clickButton = () => {
        setFinished(false);
    }

    return (
        <div className={isFinished ? "popupOuterContainer" : "popupOuterContainer hidden"}>
            <div className="popupInnerContainer">
                <p className="popupMessage">
                    <b>You have completed this puzzle!!</b>
                    <br/><br/>
                    Score : 6/6<br/>
                    Time : {time}
                </p>
                <div className="popupButtonContainer">
                    <button onClick={clickButton} className="popupButton">Okay!</button>
                </div>
            </div>
        </div>
    )
}

export default Popup;