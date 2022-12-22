import React, { useState, useMemo } from "react";

// React useMemo Hook returns a memoized value
// the useMemo hook is used to optimize the performance of a component by memoizing the results of a calculation or functio

const Count = () => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const increamentOne = () => {
    setCountOne(countOne + 1);
  };

  const incrementTwo = () => {
    setCountTwo(countTwo + 1);
  };
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return countOne % 2 === 0;
  }, [countOne]);
  return (
    <>
      <div>
        <button onClick={increamentOne}> Count One-{countOne}</button>
      </div>
      <span>{isEven ? "Even" : "Odd"}</span>
      <div>
        <button onClick={incrementTwo}> Count One- {countTwo}</button>
      </div>
    </>
  );
};

export default Count;
