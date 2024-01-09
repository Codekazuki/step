import React, { useState } from "react";

const PackingList = ({ items, onDeleteItem, onToggleItem }) => {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  if (sortBy === "quantity")
    sortedItems = items.slice().sort((a, b) => b.quantity - a.quantity);
  return (
    <div className='list'>
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            onToggleItem={onToggleItem}
            onDeleteItem={onDeleteItem}
            item={item}
          />
        ))}
      </ul>
      <div className='actions'>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value='input'>sort by input order</option>
          <option value='description'>Sort by description</option>
          <option value='packed'>Sort by packed status</option>
          <option value='quantity'>Sort by quantity</option>
        </select>
      </div>
    </div>
  );
};
function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type='checkbox'
        value={item.packed}
        onChange={() => {
          onToggleItem(item.id);
        }}
      />
      <span
        style={
          item.packed ? { textDecoration: "line-through", color: "green" } : {}
        }
      >
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
export default PackingList;
