import React from "react";
import "./App.css";

export default function Card(props) {
  let badgeText;
  if (props.item.openSpots == 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location == "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img className="card-img" src={props.item.coverImg}></img>
      <section className="star-div">
        <img src="../images/Star.png" className="card-star"></img>
        <span>{props.item.stats.rating}</span>
        <span className="grey">({props.item.stats.reviewCount})</span>
        <span className="grey"> · {props.item.location} </span>
      </section>
      <p className="card-title">{props.item.title} </p>
      <p className="card-cost">
        <span>From ${props.item.price} </span>/ person
      </p>
    </div>
  );
}

/*
  title={elements.title}
        description={elements.description}
        price={elements.price}
        img={elements.coverImg}
        stats={elements.stats}
        location={elements.location}
        openSpots={elements.openSpots}
*/
