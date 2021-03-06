import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            iNuts
            <img src="images/inuts-logo.svg" alt="logo" />
            {/* <i className="fab fa-typo3" /> */}
          </Link>

          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/products" className="nav-links">
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/signup" className="nav-links">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
