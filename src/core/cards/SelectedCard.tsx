import React, { useContext } from 'react';
import CardsContext from '../../store/context';

const SelectedCard = () => {
  const { selectedCard } = useContext(CardsContext);
  return (
    <div>
      <p>{selectedCard.header}</p>
      <p>{selectedCard.description}</p>
    </div>
  );
};

export default SelectedCard;
