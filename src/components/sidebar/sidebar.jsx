
import React from 'react';

import { NavLink } from "react-router-dom";
import "./sidebar";

const Sidebar = (props) => {
  const activeStyles = {
    color: "rgb(83, 75, 87)",
  };
  const styles={
    width: "5vw",
    height:"80vh",
    listStyle: "none"
  }
  return (
    <>
      <nav className="p-2" style={styles}>
        <ul className="">
          <NavLink exact to="/" activeStyle={activeStyles}>
              <i className="fa fa-plus mx-2 btn btn-success m-2" aria-hidden="true"></i>
          </NavLink>
          <NavLink exact to="/" activeStyle={activeStyles}>
              <i className="fa fa-filter mx-2 btn btn-light" aria-hidden="true"></i>
          </NavLink>
        </ul>
      </nav>
    </>
  );
}
export default Sidebar 


