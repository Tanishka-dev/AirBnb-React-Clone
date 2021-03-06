import React from "react";
import "./App.css";
import Group from "./images/Group.png";

export default function Hero() {
  return (
    <div className="hero">
      <img className="hero-pic" src={Group}></img>
      <section className="hero-sec">
        <h1 className="online-h1">Online Experiences</h1>
        <p className="join-para">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </section>
    </div>
  );
}
