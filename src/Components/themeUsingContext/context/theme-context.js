import { createContext } from "react";

export const themes = {
  dark: {
    color: "white",
    background: "black",
    padding: "10px",
    border: "2px solid gray",
  },
  light: {
    color: "black",
    background: "white",
    padding: "10px",
    border: "2px solid gray",
  },
};

const ThemeContext = createContext(themes.dark);
export default ThemeContext;
