import React, { useState, createContext, useMemo } from 'react';

export const TipContext = createContext();

export const TipProvider = ({ children }) => {
    const [bill, setBill] = useState('');
    const [tip, setTip] = useState('');
    const [people, setPeople] = useState('1');
    const [errorMessage, setErrorMessage] = useState('');

    const value = useMemo(() => ({
        bill,
        setBill,
        tip,
        setTip,
        people,
        setPeople,
        errorMessage,
        setErrorMessage
    }), [bill, tip, people, errorMessage]);

    return (
        <TipContext.Provider value={value}>
            {children}
        </TipContext.Provider>
    );
};
