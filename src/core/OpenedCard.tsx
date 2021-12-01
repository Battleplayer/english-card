import React, { FC, useContext } from 'react';
import { Box } from '@mui/material';
import CardsContext from '../store/context';

const OpenedCard: FC = () => {
  const { selectedCard } = useContext(CardsContext);
  return (
    <Box style={{ width: '80vw' }}>
      <p>{selectedCard?.header}</p>
      <p>{selectedCard?.description}</p>
    </Box>
  );
};

export default OpenedCard;
