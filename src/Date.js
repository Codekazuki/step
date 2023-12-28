import React, { useState } from "react";

const Date = () => {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(1);
  function handleIncreaseStep() {
    setStep((s) => s + 1);
  }
  function handleDecreaseStep() {
    setStep((s) => s - 1);
  }

  function handleIncreaseCount() {
    setCount((s) => s + 5);
  }
  function handleDecreaseCount() {
    setCount((s) => s - 5);
  }

  return (
    <section>
      <div>
        <button onClick={handleDecreaseStep}>-</button>
        <span>{step}</span>
        <button onClick={handleIncreaseStep}>+</button>
      </div>
      <div>
        <button onClick={handleDecreaseCount}>-</button>
        <span>{count}</span>
        <button onClick={handleIncreaseCount}>+</button>
      </div>
    </section>
  );
};

export default Date;
