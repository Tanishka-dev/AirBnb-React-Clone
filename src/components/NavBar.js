import React from "react";
import "./App.css";
import logo from "./images/logo.png";

export default function NavBar() {
  return (
    <div className="nav-rectangle">
      <img src={logo} className="nav-logo"></img>
    </div>
  );
}
