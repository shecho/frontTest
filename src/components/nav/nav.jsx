
import React from 'react';

import { NavLink } from "react-router-dom";
import "./nav.css";

const Nav = (props) => {
  const activeStyles = {
    color: "rgb(83, 75, 87)",
  };
  return (
    <>
      <nav className="nav">
        <div className="hamburger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className="nav-links">
          <NavLink exact to="/" activeStyle={activeStyles}>
            <li>
              <i className="fa fa-home mx-2" aria-hidden="true"></i>Home
            </li>
          </NavLink>

          <NavLink to="/schedule" activeStyle={activeStyles}>
            <li>
              <i className="fa fa-calendar mx-2" aria-hidden="true"></i>Agenda
            </li>
          </NavLink>
          <NavLink to="/cars" activeStyle={activeStyles}>
            <li>
              <i className="fa fa-car px-2" aria-hidden="true"></i>
                Vehiculos
            </li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
}
export default Nav


