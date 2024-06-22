import React, { useState } from "react";
import style from "./counter.module.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevValue) => (prevValue < 20 ? prevValue + 1 : prevValue));
  };

  const handleDecrement = () => {
    setCount((prevValue) => (prevValue > 0 ? prevValue - 1 : 0));
  };

  const handleReset = () => {
    setCount((prevValue) => (prevValue = 0));
  };

  return (
    <>
      <h1 className={style.counter}>Counter</h1>
      <div className={style.buttons}>
        <button className={style.increase} onClick={handleIncrement}>
          +
        </button>{" "}
        &nbsp;
        <p className={style.value}>{count}</p> &nbsp;
        <button className={style.decrease} onClick={handleDecrement}>
          -
        </button>
        <button className={style.reset} onClick={handleReset}>
          Reset
        </button>
      </div>
    </>
  );
};

export default Counter;
