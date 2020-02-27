import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
export default function Navbar() {
  return (
    <div className="row bg-light p-2">
      <div className="col-md-1">
        <Link to="/">
          <h3>Home</h3>
        </Link>
      </div>
      <div className="col-md-10" />
      <div className="col-md-1">
        <Link to="/cart">
          <h5> Cart</h5>
        </Link>
      </div>
    </div>
  );
}
