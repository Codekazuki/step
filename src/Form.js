import React, { useState } from "react";

const Form = ({ onAddItems }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = { description, quantity, id: Date.now(), parked: false };
    if (!description)
      return alert("Shey you dey whine? Abeg put wetin you wan park");
    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
    console.log(newItem);
  }
  return (
    <form onSubmit={handleSubmit} className='add-form'>
      <h2>What do you want to pack for your trip?</h2>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type='text'
        placeholder='item'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add Item</button>
    </form>
  );
};

export default Form;
