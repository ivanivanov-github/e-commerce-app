import React from "react";
import { NavLink } from "react-router-dom";
import { Tokens } from "../Auth_Tokens/Tokens";

export default function NavBar() {
  function logOut() {
    Tokens.users[0].user1.user1AuthToken = false;
  }

  return (
    <header>
      <div className="header-container justify-container">
        <div id="nav-brand" className="nav-item">
          <NavLink to="/home" exact activeClassName="activeNav">
            E-commerce
          </NavLink>
        </div>
        <nav className="nav-container">
          <ul>
            <li className="nav-item">
              <NavLink to="/cart" exact activeClassName="activeNav">
                Cart
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products" exact activeClassName="activeNav">
                Sell Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/home" exact activeClassName="activeNav">
                Home
              </NavLink>
            </li>
            <li className="nav-item" id="logout-item">
              <NavLink
                to="/"
                exact
                activeClassName="activeNav"
                onClick={logOut}
              >
                Log Out
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
