import React, { useState } from "react";
import "./counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevValue => (prevValue < 20) ? prevValue+1 : prevValue)
  }

  const handleDecrement = () => {
    setCount(prevValue => (prevValue > 0) ? prevValue-1 : 0)
  }

  const handleReset = () => {
    setCount(prevValue => prevValue = 0)
  }

  return (
    <>
    <h1 className="counter">Counter</h1>
    <div className="buttons">
      <button className="increase" onClick={handleIncrement}>+</button> &nbsp;
      <p className="value">{count}</p> &nbsp;
      <button className="decrease" onClick={handleDecrement}>-</button>
      <button className="reset" onClick={handleReset}>Reset</button>
    </div>
    </>
  );
};

export default Counter;
