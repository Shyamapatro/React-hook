import React, { useContext } from "react";
import ThemeContext from "./context/theme-context";

const Layout2 = () => {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <div style={theme}>
        <h1>Hello React</h1>
      </div>
    </div>
  );
};

export default Layout2;
