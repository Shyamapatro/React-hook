import React from "react";
import Counter from "./Counter";
import UseReducerComponent from "./UseReducerCompomponent";
// what is useReuce? -
// useReducer is a react hook use for state management.
// It is similar to useState but we use in some specific edge cases.
// it is use in complex state management logic.
const App1 = () => {
  return (
    <div>
      <Counter />
      <UseReducerComponent />
    </div>
  );
};

export default App1;
