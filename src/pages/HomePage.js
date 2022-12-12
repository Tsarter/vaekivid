import Card from "../components/Cards/Card";
import classes from "./HomePage.module.css";
import trees from "../assets/Kuusepuud.svg";
import flag from "../assets/LippKunkaOtsas.svg";
import ButtonContinue from "../components/buttons/buttonContinue/ButtonContinue";
import { useSelector } from "react-redux";
function HomePage() {
  const { storage } = useSelector((state) => state.storage);
  return (
    <div>
      <section className={classes.treeSection}>
        <img alt="flag" className={classes.flag} src={flag}></img>
        <h1>
          Eesti esimene <br /> eestimaine <br /> <span>kivipood</span>
        </h1>
        <img alt="tree" className={classes.trees} src={trees}></img>
      </section>
      <div className={[classes.wave1, classes.spacer].join(" ")}></div>
      <section className={classes.saaJouduSection}>
        <h1>
          Saa <span>jõudu </span> Eesti
          <br />
          loodusest..
        </h1>
        <h1>
          ...luues just <span>endale</span>
          <br /> sobiv väekivi
        </h1>
        <ButtonContinue destination="/isikuomadused" />
      </section>
      <div className={[classes.wave2, classes.spacer].join(" ")}></div>
<<<<<<< HEAD
      <section className={classes.shopSection}>
        <h1 className="vali-spetsialistide-kivi">Või vali mõni spetsialistide poolt loodud väekivi</h1>
=======
      <section id="shop" className={classes.shopSection}>
        <h1>Või vali mõni spetsialistide poolt loodud väekivi</h1>
>>>>>>> 02bf043a4ee7c7bc4f50e43c157b8ea8ecb66613
        <div className={classes.card_table}>
          {storage.map((item) => {
            return (
              <Card
                key={item.id}
                id={item.id}
                name={item.fields.title}
                price={item.fields.price}
                image={item.fields.image[0].url}
                item={item}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}
export default HomePage;
