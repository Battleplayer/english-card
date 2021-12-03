import React, { FC, useCallback, useContext, useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogTitle, LinearProgress, Rating } from '@mui/material';
import CardsContext from '../store/context';
import FinishedArray from './FinishedArray';

const OpenedCard: FC = () => {
  const { selectedCard, addCardToFinish, resetCards } = useContext(CardsContext);

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
    <Box style={{ width: '80vw' }}>
      <Button variant="contained" color="info" onClick={resetCards}>
        Reset finished list
      </Button>
      <FinishedArray />
      <Button variant="contained" onClick={handleClickOpen}>
        Skip
      </Button>
      <p>{selectedCard.header}</p>
      <p>{selectedCard.description}</p>
      <Box>
        <Rating
          name="simple-controlled"
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />
        <Button onClick={handleSave} disabled={!rating} variant="contained">
          Save result
        </Button>
      </Box>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Use Google's location service?"}</DialogTitle>

        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="contained">
            Wait, I know answer
          </Button>
          <Button onClick={handleSkip} color="secondary" variant="contained">
            Skip
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default OpenedCard;
