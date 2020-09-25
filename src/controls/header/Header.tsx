import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="masthead">
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="site-heading">
              <h1>Abhy's Canvas</h1>
              <span className="subheading">A place to express myself</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
