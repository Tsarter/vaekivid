import Card from "../components/CardStuff/Card";
import kjall from "../assets/kjall.png";
import classes from "./HomePage.module.css";
import trees from "../assets/Kuusepuud.svg";
import flag from "../assets/LippKunkaOtsas.svg";
/* import wave from "../assets/wave-haikei.svg"; */
function HomePage() {
  return (
    <div>
      <section className={classes.treeSection}>
        <img alt="flag" className={classes.flag} src={flag}></img>
        <h1>
          Eesti esimene <br /> eestimaine <br /> <span>kivipood</span>
        </h1>
        <img alt="tree" className={classes.trees} src={trees}></img>
      </section>
      <div className={[classes.wave, classes.spacer].join(" ")}></div>
      <section className={classes.shopSection}>
        <h1>Või vali mõni spetsialistide poolt loodud väekivi</h1>
        <div className={classes.card_table}>
          <Card name="Kjallfrogenäider" price="21.99€" image={kjall} />
          <Card name="Kjallfrogenäider" price="21.99€" image={kjall} />
          <Card name="Kjallfrogenäider" price="21.99€" image={kjall} />
          <Card name="Kjallfrogenäider" price="21.99€" image={kjall} />
          <Card name="Kjallfrogenäider" price="21.99€" image={kjall} />
          <Card name="Kjallfrogenäider" price="21.99€" image={kjall} />
        </div>
      </section>
    </div>
  );
}
export default HomePage;