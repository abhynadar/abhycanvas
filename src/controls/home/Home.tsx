import React from "react";

import "./Home.css";
import { Header } from "../header/Header";
import { Thoughts } from "../thoughts/Thoughts";

const Home = () => {
  return (
    <div className="App">
      <Header />
      <Thoughts />
    </div>
  );
};

export { Home };
