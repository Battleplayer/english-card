import React, { FC } from 'react';
import { Box } from '@mui/material';
import { Card } from 'interfaces/Card';
import StarIcon from '@mui/icons-material/Star';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';

interface Props {
  item: Card;
  getBackground: string;
  value: number;
}

const FinishedCard: FC<Props> = ({ item, getBackground, value }) => {
  const arr = Array.from('x'.repeat(value));

  return (
    <Box
      key={item.id}
      borderColor={getBackground}
      border={2}
      borderRadius={4}
      width={150}
      height={220}
      m={2}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <h2 style={{ textAlign: 'center' }}>Question: {item.header}</h2>
      <h4 style={{ textAlign: 'center' }}>Your result: </h4>
      <Box flexDirection="row" display="flex">
        {arr.length > 0 ? (
          arr.map((star, index) => (
            <Box key={index}>
              <StarIcon color="info" />
            </Box>
          ))
        ) : (
          <SentimentDissatisfiedIcon />
        )}
      </Box>
    </Box>
  );
};

export default FinishedCard;
