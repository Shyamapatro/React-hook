import React, { useState, useCallback } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

const ParentComponent = () => {
  const [age, setAge] = useState(24);
  const [salary, setSalary] = useState(25000);


  const increamentAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const increamentSalary = useCallback(() => {
    setSalary(salary + 2000);
  }, [salary]);
  return (
    <div>
      <Title />
      <Count text="age" count={age} />
      <Button handleClick={increamentAge}>Increment Age</Button>
      <Count text="salary" count={salary} />
      <Button handleClick={increamentSalary}>Increment Salary</Button>
    </div>
  );
};

export default ParentComponent;
