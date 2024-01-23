import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const logout = () => {
    localStorage.clear();
  };
  return (
    <div>
      <ul className="Unordered_lists">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>About</li>
        <li>
          <Link to="/productlist">Product List</Link>
        </li>
        <li>
          <Link to="/addproduct">Add Product</Link>
        </li>
        <li>
          <Link to="/signup">sigup</Link>
        </li>
        <li>
          <Link to="/signin">signin</Link>
        </li>
        <li>
          <Link onClick={logout} to="/signup">
            logout
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
