import BackCard from 'common/BackCard';
import React, { useContext } from 'react';
import OpenedDrawer from 'common/OpenedDrawer';
import { Button, Container, List } from '@mui/material';
import CardsContext from '../store/context';
import Share from '../common/Share';

const Main = () => {
  const { allCards, resetCards } = useContext(CardsContext);

  return (
    <Container>
      <h1>Select a card</h1>
      <Button variant="contained" color="info" onClick={resetCards}>
        Reset finished list
      </Button>
      <List style={{ display: 'flex', flexDirection: 'row', padding: 0, alignItems: 'flex-start' }}>
        {allCards.map((card) => (
          <BackCard key={card.id} card={card} />
        ))}
      </List>
      <OpenedDrawer />
      <Share />
    </Container>
  );
};

export default Main;
