import Card from "../components/CardStuff/Card";
import kjall from "../assets/kjall.png";
import classes from "./HomePage.module.css";
import trees from "../assets/Kuusepuud.svg";
import flag from "../assets/LippKunkaOtsas.svg";
import ButtonContinue from "../components/buttons/buttonContinue/ButtonContinue";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
function HomePage() {
  const dispatch = useDispatch();
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

      <section className={classes.shopSection}>
        <h1>Või vali mõni spetsialistide poolt loodud väekivi</h1>
        <div className={classes.card_table}>
          {storage.map((item) => {
            return (
              <Card
                id={item.id}
                name={item.fields.title}
                price={item.fields.price}
                image={item.fields.image[0].url}
              />
            );
          })}
        </div>
        <button onClick={() => dispatch(clearCart())}></button>
      </section>
    </div>
  );
}
export default HomePage;
