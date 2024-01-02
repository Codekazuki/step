import React from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Brush", quantity: 1, packed: false },
];

const PackingList = () => {
  return (
    <div>
      {initialItems.map((item) => {
        return (
          <ul>
            <h3 key={item.quantity}>{item.quantity}</h3>
            <h2 key={item.id}>{item.description}</h2>
          </ul>
        );
      })}
    </div>
  );
};

export default PackingList;
