import NavBar from "./NavBar.js";
import Hero from "./Hero.js";
import Card from "./Card.js";
import cardData from "./data.js";
import "./App.css";

export default function App() {
  const card = cardData.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <div>
      <NavBar />
      <Hero />
      <section className="cards-list">{card}</section>
    </div>
  );
}
