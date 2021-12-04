import React, { FC, useCallback, useContext, useState } from 'react';
import { Box, Button, LinearProgress, Rating } from '@mui/material';
import CardsContext from 'store/context';
import FinishedArray from 'core/arrays/FinishedArray';
import DialogSmall from 'common/DialogSmall';

const OpenedCard: FC = () => {
  const { selectedCard, addCardToFinish, resetCards, finishedCards } = useContext(CardsContext);

  const [rating, setRating] = useState(0);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = useCallback(() => {
    addCardToFinish(selectedCard.id, rating);
  }, [selectedCard, addCardToFinish, rating]);

  const handleSkip = useCallback(() => {
    addCardToFinish(selectedCard.id, 0);
  }, [addCardToFinish, selectedCard]);

  if (!selectedCard)
    return (
      <Box sx={{ width: '100%' }}>
        <LinearProgress />
      </Box>
    );

  return (
    <Box style={{ width: '80vw' }} p={4}>
      {Object.keys(finishedCards).length > 0 && (
        <Button variant="contained" color="info" onClick={resetCards}>
          Reset finished list
        </Button>
      )}
      <FinishedArray />
      <Button variant="contained" onClick={handleClickOpen}>
        Skip
      </Button>
      <p>{selectedCard.header}</p>
      <p>{selectedCard.description}</p>
      <Box display="flex" alignItems="center">
        <Rating
          name="simple-controlled"
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />
        <span style={{ margin: '0 5px' }} />
        <Button onClick={handleSave} disabled={!rating} variant="contained">
          Save result
        </Button>
      </Box>
      <DialogSmall
        title="Do you wanna skip question?"
        confirm="Skip"
        cancel="Wait, I know answer"
        open={open}
        handleClose={handleClose}
        handleConfirm={handleSkip}
      />
    </Box>
  );
};

export default OpenedCard;
