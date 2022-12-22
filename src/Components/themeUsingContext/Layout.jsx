import React, { useContext } from "react";
import ThemeContext from "./context/theme-context";


const Layout = () => {
  const theme = useContext(ThemeContext);
  console.log(theme);
  return (
    <div style={theme}>
      <p>Hello string {JSON.stringify(theme)}</p>
    </div>
  );
};

export default Layout;
