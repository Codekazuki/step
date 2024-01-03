import React from "react";

const Form = () => {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }
  return (
    <form onSubmit={handleSubmit} className='add-form'>
      <h2>What do you want to pack?</h2>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type='text' placeholder='item' />
      <button>Add Item</button>
    </form>
  );
};

export default Form;
