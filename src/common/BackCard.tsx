import React, { FC, memo, useContext, useEffect } from 'react';
import logo from 'logo.svg';
import { Box, Slide, Zoom } from '@mui/material';
import { Card } from 'interfaces/Card';
import CardsContext from '../store/context';

const BackCard: FC<{ card: Card }> = memo(({ card }) => {
  const [checked, setChecked] = React.useState(true);
  const { selectCard } = useContext(CardsContext);

  const bg = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )})`;

  const hideMe = () => setChecked(false);

  // useEffect(() => {
  //   if (!checked) selectCard(card);
  // }, [card, checked, selectCard]);

  return (
    <Slide direction="up" in={checked} onExit={() => setTimeout(() => selectCard(card), 400)}>
      {/* <Zoom in={checked}>*/}
      <Box
        border={1}
        width={150}
        bgcolor={bg}
        height={170}
        display="flex"
        alignItems="center"
        justifyContent="center"
        m={2}
        onClick={hideMe}
      >
        <p>{card.header}</p>
        <p>{card.description}</p>
        <img src={logo} className="App-logo" alt="logo" />
      </Box>
      {/* </Zoom>*/}
    </Slide>
  );
});

export default BackCard;
