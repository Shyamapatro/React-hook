import React, { useState } from "react";
import ThemeContext, { themes } from "./context/theme-context";
import Layout from "./Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout2 from "./Layout2";
const App4 = () => {
  const [theme, setTheme] = useState(themes.dark);
  const toggleTheme = () => {
    console.log(theme);
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
  };
  return (
    <div>
      <BrowserRouter>
        <ThemeContext.Provider value={theme}>
          <button onClick={toggleTheme}> change theme</button>
          <Routes>
            <Route path="/layout2" element={<Layout2 />}></Route>
            <Route path="/layout" element={<Layout />}></Route>
          </Routes>
        </ThemeContext.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App4;
