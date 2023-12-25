import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handleNext() {
    if (step < 3) setStep(step + 1);
  }
  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }
  function handleReset() {
    if (step >= 2) setStep(step - 1);
    if (step >= 3) setStep(step - 2);
  }
  function handleIsOpen() {
    setIsOpen(!isOpen);
  }

  return (
    isOpen && (
      <div className='steps'>
        <button className='close-button' onClick={handleIsOpen}>
          &times;
        </button>
        <div className='numbers'>
          <div className={`${step >= 1 ? "active" : ""}`}>1</div>
          <div className={`${step >= 2 ? "active" : ""}`}>2</div>
          <div className={`${step >= 3 ? "active" : ""}`}>3</div>
        </div>
        <p className='message'>
          {" "}
          Step {step}:{messages[step - 1]}
        </p>
        <div className='buttons'>
          <button
            onClick={handlePrevious}
            style={{ backgroundColor: "#7950f2", color: "#000000" }}
          >
            Previous
          </button>
          <button
            style={{
              backgroundColor: "#880000",
              color: "#fff",
            }}
            onClick={handleReset}
          >
            Reset
          </button>
          <button
            style={{
              backgroundColor: "#7950f2",
              color: "#000000",
            }}
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    )
  );
}

export default App;
