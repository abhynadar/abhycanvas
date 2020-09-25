import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import "./App.css";
import { Header } from "./controls/header/Header";
import { Thoughts } from "./controls/thoughts/Thoughts";

function App() {
  return (
    <div className="App">
      <Header />
      <Thoughts />
    </div>
  );
}

export default App;
