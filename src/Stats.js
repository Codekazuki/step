import React from "react";

const Stats = ({ items }) => {
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.floor((packedItems / numItems) * 100);
  return (
    <footer className='stats'>
      <em>
        You have {numItems} items ,and {packedItems} have been parked{" "}
        {percentage}%
      </em>
    </footer>
  );
};

export default Stats;
