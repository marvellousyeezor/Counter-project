import React, { useState } from "react";
import "./Navbar.css";
import clogo from "../assets/clogo.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [hiddenMenu, setHiddenMenu] = useState(true);
  let activeStyle = { color: '#4287f5'};
  return (
    <section className="navbar">
      <div className="logo">
        <NavLink to="/">
          <img src={clogo} alt="counter logo"></img>
        </NavLink>
      </div>
      <div className= {(hiddenMenu ? "hidden" : "") + " navtab"}>
        <NavLink className="linked" to="/" style={({ isActive }) => isActive ? activeStyle : undefined}>Home</NavLink>
        <NavLink className="linked" to="/Counter.js" style={({ isActive }) => isActive ? activeStyle : undefined}>Counter</NavLink>
        <NavLink className="linked" to="/jjgfj" style={({ isActive }) => isActive ? activeStyle : undefined}>Error404</NavLink>
      </div>
      <span className= "menu" onClick={() => setHiddenMenu(!hiddenMenu)}>
        {hiddenMenu ? "| | |" : "X"}
      </span>
    </section>
  );
}

export default Navbar;
