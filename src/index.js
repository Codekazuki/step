import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import Travel from "./Travel";
import Flashcards from "./Flashcards";
import DateCounter from "./DateCounter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <DateCounter />
    <Travel />
    <Flashcards />
  </React.StrictMode>
);
