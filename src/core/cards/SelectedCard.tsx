import { Box, Button, Card, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import CardsContext from '../../store/context';

const SelectedCard = () => {
  const { selectedCard } = useContext(CardsContext);

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const setVisible = () => setIsVisible(true);
  return (
    <Card variant="outlined" sx={{ margin: 2, padding: 2 }}>
      <Typography variant="h6" align="center">
        {selectedCard.name}
      </Typography>
      {isVisible ? (
        <Box display="flex" flexDirection="column">
          <Card variant="outlined" sx={{ margin: 2, padding: 1 }}>
            {selectedCard.rules.map((rule, index) => (
              <Typography variant="body1" align="center" key={index}>
                {rule}
              </Typography>
            ))}
          </Card>
          <Card variant="outlined" sx={{ margin: 2, padding: 1 }}>
            {selectedCard.negation.map((neg, index) => (
              <Typography variant="body1" align="center" key={index}>
                {neg}
              </Typography>
            ))}
          </Card>
          <Card variant="outlined" sx={{ margin: 2, padding: 1 }}>
            {selectedCard.question.map((quest, index) => (
              <Typography variant="body1" align="center" key={index}>
                {quest}
              </Typography>
            ))}
          </Card>
        </Box>
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={setVisible}
          fullWidth
          sx={{ padding: 2, fontWeight: '700' }}
        >
          Show the answer
        </Button>
      )}
    </Card>
  );
};

export default SelectedCard;
