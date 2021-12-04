import React, { useContext } from 'react';
import CardsContext from 'store/context';
import { Box } from '@mui/material';
import grammarList from 'store/grammarList';
import FinishedCard from 'core/cards/FinishedCard';

const FinishedArray = () => {
  const { finishedCards } = useContext(CardsContext);
  return (
    <Box display="flex" flexDirection="row" flexWrap="wrap">
      {grammarList.map((item) => {
        for (const [key, value] of Object.entries(finishedCards)) {
          if (item.id === +key) {
            const getBackground = () => {
              switch (value) {
                case 0:
                  return 'purple';
                case 1:
                case 2:
                  return 'red';
                case 3:
                  return 'yellow';
                case 4:
                case 5:
                  return 'green';
                default:
                  return 'orange';
              }
            };
            return <FinishedCard key={item.id} item={item} getBackground={getBackground()} value={value} />;
          }
        }
        return null;
      })}
    </Box>
  );
};

export default FinishedArray;
