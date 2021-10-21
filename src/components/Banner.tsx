import React from "react";
import { Link } from "react-router-dom";

export const Banner = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Hot Deals</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
};
