import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pokemon">Pokemon</Link>
        </li>
        <li>
          <Link to="/box">Box</Link>
        </li>
        <li>
          <Link to="/pokemon/new">Add Pokemon</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
