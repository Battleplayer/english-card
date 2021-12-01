import React from 'react';
import './App.css';
import Main from 'core/Main';
import { CardsProvider } from 'store/context';

const App = () => {
  return (
    <CardsProvider>
      <Main />
    </CardsProvider>
  );
};

export default App;
