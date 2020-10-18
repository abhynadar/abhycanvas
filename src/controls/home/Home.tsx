import React from "react";

import "./Home.css";
import { Header } from "../header/Header";
import { Posts } from "../posts/Posts";
import { Thoughts } from "../thoughts/Thoughts";

const Home = () => {
  return (
    <div >
      <Header />
      {/* <Thoughts /> */}
      <Posts />
    </div>
  );
};

export { Home };
