import React, { useContext, useState } from "react";
import { PassFunction } from "./App";
import ComponentB from "./ComponentB";

const ComponentA = () => {
  const [A, setA] = useState("intial state of component A");
  const getDatatFunction = useContext(PassFunction);

  return (
    <div>
      <ComponentB />
      <h1>{A}</h1>
      <button onClick={() => getDatatFunction.getData(A)}>
        passing data from A
      </button>
    </div>
  );
};

export default ComponentA;
