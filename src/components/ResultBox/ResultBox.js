import React, { useContext } from 'react';
import { TipContext } from '../../context/TipContext';
import './ResultBox.css';

const ResultBox = () => {
    const { bill, tip, people } = useContext(TipContext);

    const tipAmount = bill && people ? (bill * (tip / 100)) / people : 0;
    const totalAmount = bill && people ? (bill + tipAmount) / people : 0;

    return (
        <section className="sum-box">
            <div className="tip-amount-row">
                <div className="title-sum">
                    Tip Amount<br /><span>/ person</span>
                </div>
                <div className="tip-amount">${tipAmount.toFixed(2)}</div>
            </div>
            <div className="total-row">
                <div className="title-sum">
                    Total<br /><span>/ person</span>
                </div>
                <div className="total-amount">${totalAmount.toFixed(2)}</div>
            </div>
            <button className="reset-btn" onClick={() => window.location.reload()}>RESET</button>
        </section>
    );
};

export default ResultBox;
