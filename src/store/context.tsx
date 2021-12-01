import { Card } from 'interfaces/Card';
import { createContext, FC, useState, ReactNode } from 'react';
import grammarList from './grammarList';

const CardsContext = createContext({
  selectedCard: null,
  finishedCards: [],
  isDrawerOpened: false,
  allCards: [],
  openDrawer: () => {},
  closeDrawer: () => {},
  selectCard: (card: Card | null): void => {},
  addCardToFinish: (card: FinishedCard): void => {},
});

export default CardsContext;

interface FinishedCard {
  [key: number]: number;
}

export const CardsProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const savedCards = JSON.parse(localStorage.getItem('finishedCards')) || [];
  const [allCards, setAllCards] = useState<Card[]>(grammarList);
  const [selectedCard, setSelectedCard] = useState<null | Card>(null);
  const [finishedCards, setFinishedCards] = useState<FinishedCard[] | []>(savedCards);
  const [isDrawerOpened, setDrawerOpen] = useState<boolean>(false);

  const openDrawer = () => setDrawerOpen(true);

  const closeDrawer = () => setDrawerOpen(false);

  const addCardToFinish = (card: FinishedCard) => {
    setSelectedCard(null);
    const finishedList = [...finishedCards, card];
    localStorage.setItem('finishedCards', JSON.stringify(finishedList));
    setFinishedCards(finishedList);
  };

  const selectCard = (card: null | Card) => {
    if (card) openDrawer();
    setSelectedCard(card);
    setAllCards((prevState) => prevState.filter((el) => el.id !== card.id));
  };

  return (
    <CardsContext.Provider
      value={{
        selectedCard,
        finishedCards,
        isDrawerOpened,
        openDrawer,
        closeDrawer,
        addCardToFinish,
        selectCard,
        allCards,
      }}
    >
      {children}
    </CardsContext.Provider>
  );
};
