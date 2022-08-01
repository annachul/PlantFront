import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
        <div className="navigation">
            <div className="namesite">
                Plant Tracker
            </div>
            <ul class="mx-0.5">
              <li className="nav-item">
                <NavLink to="/tasks">
                ✅   Tasks
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/list">
                🪴  Plant list
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/wishlist">
                🎉  Plant Wishlist
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/dead">
                🪦  Graveyard
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/form">
                🏡  Add plant
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/space">
                👁️  Space
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/makechange">
                🖌️  Change plant
                </NavLink>
              </li>
            </ul>
        </div>
      </nav>
  );
}

export default Navigation;