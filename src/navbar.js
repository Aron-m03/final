import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="logo">
        <Link to="/" className="logo-link">
          Restaurant
        </Link>
      </h1>
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link">
            Menu
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;