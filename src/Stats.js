import React from "react";

const Stats = ({ items }) => {
  const numItems = items.length;
  return (
    <footer className='stats'>
      <em>You have {numItems} items </em>
    </footer>
  );
};

export default Stats;
