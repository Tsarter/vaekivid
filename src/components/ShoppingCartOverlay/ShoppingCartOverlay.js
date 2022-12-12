import classes from "./ShoppingCartOverlay.module.css";
import ShoppingCartItem from "./ShoppingCartItem";
import "../../index.css";
import kjall from "../../assets/kjall.png";
import bolmen from "../../assets/bolmen.png";
import NavigationButton from "../buttons/NavigationButton/NavigationButton";
import { useSelector } from "react-redux";

export default function ShoppingCartOverlay({ handleShown }) {
  // redux magic
  const { total, cartItems } = useSelector((state) => state.cart);
  const isClicked = handleShown.isClicked;

  if (!isClicked) return null;

  return (
    <div className={classes.outerContainer}>
      <div className={classes.yourCart}>
        <h2>Sinu ostukorv</h2>
        <div className={classes.underLine} />
      </div>
      <div>
        {cartItems.map((item) => {
          return (
            <ShoppingCartItem
              key={item.id}
              img={item.fields.image[0].url}
              price={item.fields.price}
              item={item}
            >
              {item.fields.title}
            </ShoppingCartItem>
          );
        })}
      </div>
      <div className={classes.underLine} />
      <div className={classes.total}>Summa: {total}€</div>
      <div className={classes.navBtn}>
        <NavigationButton
          className="buy_button"
          link="/ostukorv"
          clickFunc={() => handleShown.setClick(false)}
        >
          OSTMA
        </NavigationButton>
      </div>
    </div>
  );
}
