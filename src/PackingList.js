import React from "react";

const PackingList = ({ items, onDeleteItem, onToggleItem }) => {
  return (
    <div className='list'>
      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            onToggleItem={onToggleItem}
            onDeleteItem={onDeleteItem}
            item={item}
          />
        ))}
      </ul>
      <div className='actions'>
        <select>
          <option value='input'>sort by input order</option>
          <option value='description'>Sort by description</option>
          <option value='packed'>Sort by packed status</option>
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
