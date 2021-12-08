import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
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
      sx={{
        margin: 2,
        padding: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 170,
        height: 190,
      }}
    >
      <Typography variant="h5" align="center">
        {item.name}
      </Typography>
      <Box>
        <Typography variant="h6" align="center">
          Your result:
        </Typography>
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
    </Box>
  );
};

export default FinishedCard;
