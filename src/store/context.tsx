import { Card } from 'interfaces/Card';
import { createContext, FC, useState, ReactNode, useCallback, useMemo, useEffect } from 'react';
import i18n from 'translate';
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

  //
  shuffleAndReset: () => {},
});

export default CardsContext;

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
};

export const CardsProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const savedCards = useMemo(() => JSON.parse(localStorage.getItem('finishedCards')) || {}, []);
  const savedLanguage = useMemo(() => {
    if (localStorage.hasOwnProperty('language')) {
      return localStorage.getItem('language');
    }
    return 'en';
  }, []);

  const savedArr = Object.keys(savedCards).map((key) => +key);
  const startList = grammarList.filter((item) => !savedArr.includes(item.id));

  const [allCards, setAllCards] = useState<Card[]>(shuffle(startList));
  const [selectedCard, setSelectedCard] = useState<null | Card>(null);
  const [finishedCards, setFinishedCards] = useState<any>(savedCards ?? {});
  const [isDrawerOpened, setDrawerOpen] = useState<boolean>(false);
  const [isSnackBarOpened, setSnackBarOpened] = useState(false);
  const [snackMessage, setSnackMessage] = useState<null | string>(null);

  useEffect(() => {
    if (savedLanguage) i18n.changeLanguage(savedLanguage);
  }, [savedLanguage]);

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

  const shuffleAndReset = useCallback(() => {
    setAllCards(shuffle(grammarList));
    localStorage.removeItem('finishedCards');
    setFinishedCards({});
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

        // Shuffle array
        shuffleAndReset,
      }}
    >
      {children}
    </CardsContext.Provider>
  );
};
