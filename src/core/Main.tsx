import BackCard from 'common/BackCard';
import React, { useContext } from 'react';
import OpenedDrawer from 'common/OpenedDrawer';
import { Container, List } from '@mui/material';
import CardsContext from '../store/context';
import { TransitionGroup } from 'react-transition-group';

const Main = () => {
  const { allCards } = useContext(CardsContext);

  return (
    <Container>
      <h1>Select a card</h1>
      <List>
        <TransitionGroup style={{ display: 'flex', flexDirection: 'row', padding: 0, alignItems: 'flex-start' }}>
          {allCards.map((card) => (
            <BackCard key={card.id} card={card} />
          ))}
        </TransitionGroup>
      </List>
      <OpenedDrawer />
    </Container>
  );
};

export default Main;
