import React from "react";

const PackingList = ({ items, onDeleteItem }) => {
  return (
    <div className='list'>
      <ul>
        {items.map((item) => (
          <Item key={item.id} onDeleteItem={onDeleteItem} item={item} />
        ))}
      </ul>
    </div>
  );
};
function Item({ item, onDeleteItem }) {
  return (
    <li>
      <input type='checkbox' value={item.packed} onChange={() => {}} />
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
