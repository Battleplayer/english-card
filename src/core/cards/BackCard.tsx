import React, { FC, memo, useCallback, useContext } from 'react';
import logo from 'assets/logo_english.svg';
import { Box, Slide } from '@mui/material';
import { Card } from 'interfaces/Card';
import CardsContext from 'store/context';

const BackCard: FC<{ card: Card }> = memo(({ card }) => {
  const [checked, setChecked] = React.useState(true);
  const { selectCard } = useContext(CardsContext);

  const hideMe = useCallback(() => {
    setChecked(false);
  }, []);

  return (
    <Slide direction="up" in={checked} onExit={() => setTimeout(() => selectCard(card), 300)}>
      <Box
        border={1}
        borderRadius={3}
        width={120}
        bgcolor={'transparent'}
        height={150}
        display="flex"
        alignItems="center"
        justifyContent="center"
        m={1}
        onClick={hideMe}
        p={1}
      >
        <img src={logo} alt="logo" />
      </Box>
    </Slide>
  );
});

export default BackCard;
