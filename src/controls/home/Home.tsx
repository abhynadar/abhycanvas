import React from "react";

import "./Home.css";
import { Header } from "../header/Header";
import { Posts } from "../posts/Posts";

const Home = () => {
  return (
    <div >
      <Header />
      <Posts />
    </div>
  );
};

export { Home };
