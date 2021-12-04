import React from 'react';
import './App.css';
import { CardsProvider } from 'store/context';
import { Container } from '@mui/material';

import MainDrawer from './common/MainDrawer';
import Share from './common/Share';
import Toast from './common/Toast';
import StartArray from './core/arrays/StartArray';

const App = () => {
  return (
    <CardsProvider>
      <Container style={{ minHeight: '100vh' }}>
        <h1>Select a card</h1>
        <StartArray />
        <MainDrawer />
        <Share />
        <Toast />
      </Container>
    </CardsProvider>
  );
};

export default App;
