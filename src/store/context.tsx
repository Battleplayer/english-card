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
  selectCard: (card: null | Card) => {},
  addCardToFinish: (id: number, rating: number): void => {},
  resetCards: () => {},
});

export default CardsContext;

export const CardsProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const savedCards = JSON.parse(localStorage.getItem('finishedCards')) || {};

  const [allCards, setAllCards] = useState<Card[]>(grammarList);
  const [selectedCard, setSelectedCard] = useState<null | Card>(null);
  const [finishedCards, setFinishedCards] = useState<any>(savedCards ?? {});
  const [isDrawerOpened, setDrawerOpen] = useState<boolean>(false);

  const openDrawer = () => setDrawerOpen(true);

  const closeDrawer = () => setDrawerOpen(false);

  const addCardToFinish = (id: number, rating: number) => {
    console.log(id);
    console.log(rating);
    setSelectedCard(null);
    const finishedList = { ...finishedCards, [id]: rating };
    localStorage.setItem('finishedCards', JSON.stringify(finishedList));
    setFinishedCards(finishedList);
    closeDrawer();
  };

  const selectCard = (card: null | Card) => {
    if (card) {
      openDrawer();
      setAllCards((prevState) => prevState.filter((el) => el.id !== card.id));
    } else {
      closeDrawer();
    }
    setSelectedCard(card);
  };

  const resetCards = () => {
    setFinishedCards({});
    localStorage.removeItem('finishedCards');
    setAllCards(grammarList);
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
        resetCards,
      }}
    >
      {children}
    </CardsContext.Provider>
  );
};
