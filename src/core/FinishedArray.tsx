import React, { useContext } from 'react';
import CardsContext from '../store/context';
import { Box } from '@mui/material';
import grammarList from 'store/grammarList';

const FinishedArray = () => {
  const { finishedCards } = useContext(CardsContext);
  return (
    <Box>
      {grammarList.map((item) => {
        for (const [key, value] of Object.entries(finishedCards)) {
          if (item.id === +key)
            return (
              <p>
                {item.header} - {value}
              </p>
            );
        }
        return null;
      })}
    </Box>
  );
};

export default FinishedArray;
