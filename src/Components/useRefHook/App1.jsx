import React, { useRef, useState } from "react";

//What is useRef-- it is kind of hook to manipulate dom
//How to use it
const App1 = () => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const refElement = useRef();
  console.log(refElement);
  function Reset() {
    setName("");
    refElement.current.focus();
  }
  function handlechange() {
    refElement.current.style.background = color;
  }

  return (
    <div>
      <h1>Learning useRef</h1>
      <input
        ref={refElement}
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <button onClick={Reset}>Reset</button>
      <button onClick={handlechange}>change the color</button>
      <input
        type="text"
        onChange={(e) => {
          setColor(e.target.value);
        }}
      ></input>
    </div>
  );
};

export default App1;
