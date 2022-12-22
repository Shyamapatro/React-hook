import React, { useContext } from "react";
import { GeneralInfo } from "./App";
import ComponentE from "./ComponentE";

const ComponentD = () => {
  const dataComingfromAPP = useContext(GeneralInfo);

  return (
    <div>
      <ComponentE />
      <h1>Component D: {dataComingfromAPP.data}</h1>
    </div>
  );
};

export default ComponentD;
