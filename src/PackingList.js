import React from "react";

const PackingList = ({ items }) => {
  return (
    <div className='list'>
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};
function Item({ item }) {
  return (
    <li>
      <span
        style={
          item.packed ? { textDecoration: "line-through", color: "green" } : {}
        }
      >
        {item.quantity} {item.description}
      </span>
      <button
        onClick={(e) => {
          alert("delete functionality not active yet");
        }}
      >
        ❌
      </button>
    </li>
  );
}
export default PackingList;
