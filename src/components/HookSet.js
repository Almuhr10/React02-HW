import { Button } from "@chakra-ui/react";
import React, { useState } from "react";

const HookSet = () => {
  //Here is the add counter
  const [counter, setCounter] = useState(0);
  const increment = () => {
    // setCounter(counter + 1);
    setCounter((prev) => prev + 1);
  };

  //Here is the minus counter
  const [countMin, setDecrement] = useState(20);
  const decrement = () => {
    // setCounter(counter + 1);
    setDecrement((prev) => prev - 1);
  };
  return (
    <div>
      <Button onClick={increment}> Click here to add </Button>
      <p> counter : {counter} </p>
      <br /> <br />
      <Button onClick={decrement}> Click here to minus </Button>
      <p> counter : {countMin} </p>
    </div>
  );
};

export default HookSet;
