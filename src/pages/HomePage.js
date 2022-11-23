import Card from "../components/CardStuff/Card";
import kjall from "../assets/kjall.png";
import classes from "./HomePage.module.css";

function HomePage() {
  return (
    <div>
      <h1>Või vali mõni spetsialistide poolt loodud väekivi</h1>
      <div className={classes.card_table}>
        <Card name="Kjallfrogenäider" price="21.99€" image={kjall} />
        <Card name="Kjallfrogenäider" price="21.99€" image={kjall} />
        <Card name="Kjallfrogenäider" price="21.99€" image={kjall} />
        <Card name="Kjallfrogenäider" price="21.99€" image={kjall} />
        <Card name="Kjallfrogenäider" price="21.99€" image={kjall} />
        <Card name="Kjallfrogenäider" price="21.99€" image={kjall} />
      </div>
    </div>
  );
}
export default HomePage;
