import React from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home';
import { TipProvider } from './context/TipContext'; 
import './App.css';

const App = () => {
  return (
    <TipProvider>
      <div className="App">
        <Header />
        <Home />
      </div>
    </TipProvider>
  );
};

export default App;
