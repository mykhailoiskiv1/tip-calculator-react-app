import { useState } from 'react';

const useCalculator = () => {
    const [bill, setBill] = useState(0);
    const [tip, setTip] = useState(0);
    const [people, setPeople] = useState(1);

    const calculate = () => {
        if (bill > 0 && people > 0) {
            const tipAmount = (bill * (tip / 100)) / people;
            const totalAmount = (bill / people) + tipAmount;
            return { tipAmount, totalAmount };
        }
        return { tipAmount: 0, totalAmount: 0 };
    };

    return {
        bill,
        tip,
        people,
        setBill,
        setTip,
        setPeople,
        calculate,
    };
};

export default useCalculator;