import React, { useContext } from 'react';
import './Calculator.css';
import { TipContext } from '../../context/TipContext';
import TipButton from '../TipButton/TipButton';
import dolaricon from '../../assets/images/images/dolaricon.svg'
import peopleicon from '../../assets/images/images/peopleicon.svg'

const Calculator = () => {
    const { bill, setBill, tip, setTip, people, setPeople, errorMessage, setErrorMessage } = useContext(TipContext);
    const handleBillChange = (e) => setBill(parseFloat(e.target.value) || 0);
    const handlePeopleChange = (e) => {
        const value = parseInt(e.target.value) || 1;
        setPeople(value);
        setErrorMessage(value <= 0 ? "Can't be zero" : '');
    };
    const handleTipClick = (tipValue) => setTip(tipValue);
    const handleCustomTipChange = (e) => setTip(parseFloat(e.target.value) || 0);

    return (
        <section className="calculator-box">
            <div className="bill-sum-box">
                <label htmlFor="bill-input">Bill</label>
                <div className="input-container">
                    <span className="icon">
                        <img src={dolaricon} alt="Dollar Icon" />
                    </span>
                    <input
                        type="number"
                        id="bill-input"
                        className="bill-input"
                        value={bill}
                        onChange={handleBillChange}
                        placeholder="0"
                    />
                </div>
            </div>
            <div className="select-tip-percentages-box">
                <label htmlFor="select-tip-btns-wraper" >Select Tip %</label>
                <div className="select-tip-btns-wraper">
                    {[5, 10, 15, 25, 50].map((percentage) => (
                        <TipButton key={percentage} value={percentage} onClick={() => handleTipClick(percentage)} />
                    ))}
                    <input
                        type="number"
                        id="custom-tip"
                        className="custom-tip"
                        value={tip}
                        onChange={handleCustomTipChange}
                        placeholder="Custom"
                    />
                </div>
            </div>
            <div className="numb-people-box">
                <label htmlFor="people-input">Number of People</label>
                <div className="input-container">
                    <span className="icon">
                        <img src={peopleicon} alt="People Icon" />
                    </span>
                    <input
                        type="number"
                        id="people-input"
                        className="people-input"
                        value={people}
                        onChange={handlePeopleChange}
                        placeholder="1"
                    />
                </div>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
        </section>
    );
};

export default Calculator;
