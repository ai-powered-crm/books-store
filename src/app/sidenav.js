import React from "react";
import { Outlet, Link } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import "./style.css";
function Sidenav() {
  return (
    <>
      <div className="all-nav">
        <div className="icons">
          <h1 className="logo">
            <Link to="/" className="nav-link">books store <span className="point1"> .</span></Link>
          </h1>
        </div>
        <ul>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/store" className="nav-link">Store</Link>
            <Link to="/books" className="nav-link">Books</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/cart" className="nav-link">Cart</Link>
        </ul>
      </div>
    </>
  );
}
export default Sidenav;
