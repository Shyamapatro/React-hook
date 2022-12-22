import React, { useContext } from "react";
import { PassFunction } from "./App";

import ComponentC from "./ComponentC";

const ComponentB = () => {
  const getDatadetails = useContext(PassFunction);
  console.log(getDatadetails);
  return (
    <div>
      <ComponentC />
      <h1> this is from component B</h1>
      <button
        onClick={() =>
          getDatadetails.getData(
            "Pass data from component B to App.jsx which is root"
          )
        }
      >
        onClick to pass
      </button>
    </div>
  );
};

export default ComponentB;
