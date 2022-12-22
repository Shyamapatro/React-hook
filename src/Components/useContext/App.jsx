import React, { createContext, useState } from "react";
import Component from "./Component";

// step 1 : create context
export const userContext = createContext();
export const GeneralInfo = createContext();
export const PassFunction = createContext();

const App = () => {
  const [data, setData] = useState("");
  const getData = (arg) => {
    console.log(arg);
    setData(arg);
  };

  return (
    <div>
      {/* step2 : provide context using .Provider */}
      {/* step 3: consume the value  */}
      <userContext.Provider value={"Shyama"}>
        <GeneralInfo.Provider value={{ lastName: "Patro", data }}>
          <PassFunction.Provider value={{ getData: getData }}>
            <Component />
          </PassFunction.Provider>
        </GeneralInfo.Provider>
      </userContext.Provider>
    </div>
  );
};

export default App;
