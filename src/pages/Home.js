import React from 'react';
import Calculator from '../components/Calculator/Calculator';
import ResultBox from '../components/ResultBox/ResultBox';
import './Home.css';

const Home = () => {
    return (
        <main className="home-container">
            <Calculator />
            <ResultBox />
        </main>
    );
};

export default Home;