import React,{useState} from "react";
function SecondWay() {
    return (
      <div className="App">
        <GrandParent />
      </div>
    );
  }
  
  const GrandParent = () => {
    const [name, setName] = useState("i'm Grand Parent");
    return (
      <>
        <div>{name}</div>
        <Parent setName={setName} />
      </>
    );
  };
  
  const Parent = params => {
    return (
      <>
        <button onClick={() => params.setName("i'm from Parent")}>
          from Parent
        </button>
        <Child setName={params.setName} />
      </>
    );
  };
  
  const Child = params => {
    return (
      <>
        <button onClick={() => params.setName("i'm from Child")}>
          from Child
        </button>
      </>
    );
  };
  

  export default SecondWay;