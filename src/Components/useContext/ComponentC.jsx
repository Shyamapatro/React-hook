import React, { useContext } from "react";
import ComponentD from "./ComponentD";
import { GeneralInfo, userContext } from "./App";

const ComponentC = () => {
  // call the userContext
  const userData = useContext(userContext);
  const generalData = useContext(GeneralInfo);
  console.log(generalData);
  return (
    <div>
      <ComponentD />
      <h1>I am from Component C</h1>
      <h1>
        {userData}-{generalData.lastName}
      </h1>
    </div>
  );
};

export default ComponentC;
