import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
// import Date from "./Date";
import Travel from "./Travel";
import Flashcards from "./Flashcards";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Date /> */}
    <Travel />
    <Flashcards />
  </React.StrictMode>
);
