import React, { useContext } from 'react';
import { Box, Button } from '@mui/material';
import BackCard from 'core/cards/BackCard';
import CardsContext from 'store/context';

const StartArray = () => {
  const { allCards, resetCards, finishedCards } = useContext(CardsContext);
  return (
    <Box my={2}>
      {Object.keys(finishedCards).length > 0 && (
        <Button variant="contained" color="info" onClick={resetCards}>
          Reset finished list
        </Button>
      )}
      <Box style={{ display: 'flex', flexDirection: 'row', padding: 0, alignItems: 'flex-start', flexWrap: 'wrap' }}>
        {allCards.map((card) => (
          <BackCard key={card.id} card={card} />
        ))}
      </Box>
    </Box>
  );
};

export default StartArray;
