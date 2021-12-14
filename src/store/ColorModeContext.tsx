import React, { createContext } from "react";
import createTheme from "@mui/material/styles/createTheme";
import { PaletteMode, ThemeProvider } from "@mui/material";

interface ColorContext {
  toggleColorMode: () => void;
  mode: "dark" | "light";
}

export const ColorModeContext = createContext<ColorContext>({
  toggleColorMode: () => {
  },
  mode: "light"
});

export const ColorModeContextProvider = ({ children }) => {
  const [mode, setMode] = React.useState<PaletteMode>("light");
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) => (prevMode === "light" ? "dark" : "light"));
      }
    }),
    []
  );

  // Update the theme only if the mode changes
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: "#FFD700"
          },
          secondary: {
            main: "#2FF3E0"
          },
          error: {
            main: "#F51720"
          }
        },
        typography: {
          h1: {
            fontSize: "24px"
          },
          body1: {
            fontSize: "14px",
            fontWeight: "bold"
          },
          subtitle1: {
            fontSize: "12px"
          }
        }
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};
