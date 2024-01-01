import React from "react";
import "./travel.css";
import { Logo } from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Brush", quantity: 1, packed: false },
];

const Travel = () => {
  return (
    <div>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
};

export default Travel;
