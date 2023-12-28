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
    setCount((c) => c + step);
  }
  function handleDecreaseCount() {
    setCount((c) => c - step);
  }

  return (
    <section>
      <div>
        <button onClick={handleDecreaseStep}>-</button>
        <span> Step:{step}</span>
        <button onClick={handleIncreaseStep}>+</button>
      </div>
      <div>
        <button onClick={handleDecreaseCount}>-</button>
        <span>Count:{count}</span>
        <button onClick={handleIncreaseCount}>+</button>
      </div>
    </section>
  );
};

export default Date;
