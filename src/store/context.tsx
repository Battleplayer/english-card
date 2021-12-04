import { Card } from 'interfaces/Card';
import { createContext, FC, useState, ReactNode, useCallback, useMemo } from 'react';
import grammarList from './grammarList';

const CardsContext = createContext({
  // Cards
  selectedCard: null,
  finishedCards: [],
  selectCard: (card: null | Card) => {},
  addCardToFinish: (id: number, rating: number): void => {},
  resetCards: () => {},
  allCards: [],

  // Drawer
  openDrawer: () => {},
  closeDrawer: () => {},
  isDrawerOpened: false,

  // Snackbar
  isSnackBarOpened: false,
  setSnackBarMessage: (message: string) => {},
  snackMessage: null,
  setSnackBarOpened: (value: boolean) => {},
});

export default CardsContext;

export const CardsProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const savedCards = useMemo(() => JSON.parse(localStorage.getItem('finishedCards')) || {}, []);

  const [allCards, setAllCards] = useState<Card[]>(grammarList);
  const [selectedCard, setSelectedCard] = useState<null | Card>(null);
  const [finishedCards, setFinishedCards] = useState<any>(savedCards ?? {});
  const [isDrawerOpened, setDrawerOpen] = useState<boolean>(false);
  const [isSnackBarOpened, setSnackBarOpened] = useState(false);
  const [snackMessage, setSnackMessage] = useState<null | string>(null);

  const openDrawer = useCallback(() => {
    setDrawerOpen(true);
  }, []);

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
  }, []);

  const addCardToFinish = useCallback(
    (id: number, rating: number) => {
      setSelectedCard(null);
      const finishedList = { ...finishedCards, [id]: rating };
      localStorage.setItem('finishedCards', JSON.stringify(finishedList));
      setFinishedCards(finishedList);
      closeDrawer();
    },
    [closeDrawer, finishedCards]
  );

  const selectCard = useCallback(
    (card: null | Card) => {
      if (card) {
        openDrawer();
        setAllCards((prevState) => prevState.filter((el) => el.id !== card.id));
      } else {
        closeDrawer();
      }
      setSelectedCard(card);
    },
    [closeDrawer, openDrawer]
  );

  const resetCards = useCallback(() => {
    setFinishedCards({});
    localStorage.removeItem('finishedCards');
    setAllCards(grammarList);
  }, []);

  const setSnackBarMessage = useCallback((message) => {
    setSnackBarOpened(true);
    setSnackMessage(message);
  }, []);

  return (
    <CardsContext.Provider
      value={{
        // Cards
        selectedCard,
        finishedCards,

        addCardToFinish,
        resetCards,
        allCards,
        selectCard,
        // Drawer
        isDrawerOpened,
        closeDrawer,
        openDrawer,

        // Snackbar
        isSnackBarOpened,
        setSnackBarOpened,
        setSnackBarMessage,
        snackMessage,
      }}
    >
      {children}
    </CardsContext.Provider>
  );
};
