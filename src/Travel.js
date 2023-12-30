import React from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Brush", quantity: 1, packed: false },
];

const Travel = () => {
  return <div>Travel Component</div>;
};

import React, { useState } from "react";

const DoubleComponent = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleDoubleClick = () => {
    const inputValue = parseFloat(input);
    if (!isNaN(inputValue)) {
      setResult(inputValue * 2);
    } else {
      setResult(null);
    }
  };

  return (
    <div>
      <label>
        Enter a number:
        <input
          type='text'
          value={input}
          onChange={handleInputChange}
          placeholder='Enter a number'
        />
      </label>
      <button onClick={handleDoubleClick}>Double</button>
      {result !== null && (
        <p>
          The double of {input} is: {result}
        </p>
      )}
    </div>
  );
};

export default Travel;
