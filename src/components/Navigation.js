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
                ✅   Задачи
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/list">
                🪴  Список растений
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/wishlist">
                🎉  Вишлист растений
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/dead">
                🪦  Кладбище растений
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/form">
                🏡  Внести растение
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/space">
                👁️  Расстановка
                </NavLink>
              </li>
            </ul>
        </div>
      </nav>
  );
}

export default Navigation;