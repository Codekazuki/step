import React from "react";
import "./travel.css";
import { Logo } from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
import { useState } from "react";

const Travel = () => {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    setItems([]);
  }
  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        onToggleItem={handleToggleItem}
        onDeleteItem={handleDeleteItem}
        items={items}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
};

export default Travel;
