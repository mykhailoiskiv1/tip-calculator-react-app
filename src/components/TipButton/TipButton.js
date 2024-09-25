import React from 'react';
import './TipButton.css';

const TipButton = ({ value, onClick }) => {
    return (
        <button className="tip-btn" onClick={onClick}>
            {value}%
        </button>
    );
};

export default TipButton;
