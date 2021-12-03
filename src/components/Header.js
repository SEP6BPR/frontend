import React from "react";
import { Link } from "react-router-dom"; //move around and create navlinks
import AzureAuthenticationButton from "../azure/azure-authentication-component";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/add">(NOT) Pirate Bay</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/">Watching List</Link>
            </li>

            <li>
              <Link to="/watched">Watched Movies</Link>
            </li>

            <li>
              <Link to="/login">Log in</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
