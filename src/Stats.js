import React from "react";

const Stats = ({ items }) => {
  if (items.length === 0)
    return (
      <p className='stats'>
        <em>Start packing stuffs</em>
      </p>
    );
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.floor((packedItems / numItems) * 100);
  return (
    <footer className='stats'>
      <em>
        {percentage === 100
          ? `You are ready ✈️`
          : ` 💼 You have ${numItems} items ,and ${packedItems} have been parked 📦
        ${percentage}%`}
      </em>
    </footer>
  );
};

export default Stats;
