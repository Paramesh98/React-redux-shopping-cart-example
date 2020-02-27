import React from "react";
import Cart from "./containers/Cart";
import ProductList from "./containers/ProductList";
import { Link, Route } from "react-router-dom";
import Navbar from "./Navbar";

const App = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>React and Redux Example</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <ProductList />
          </div>
          <div className="col-md-4">
            <Cart />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
