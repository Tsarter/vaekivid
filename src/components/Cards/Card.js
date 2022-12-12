import classes from "./Card.module.css";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../features/cart/cartSlice";
import {
  removeFromStorage,
  addToStorage,
} from "../../features/storage/storageSlice";
function Card(props) {
  const dispatch = useDispatch();
  console.log(props.checkout);
  return (
    <div className={classes.card}>
      <div className={classes.image_div}>
        <img
          alt="Pilt kivist."
          className={classes.rock_image}
          src={props.image}
        ></img>
      </div>
      <h2 className={classes.name_text}>{props.name}</h2>
      <h2 className={classes.price_text}>{props.price}€ / tk</h2>
      <div className={classes.actions}>
        {props.checkout != "True" && (
          <button
            className={classes.btn}
            onClick={() => {
              dispatch(addItem(props.item));
              dispatch(removeFromStorage(props.id));
            }}
          >
            Lisa ostukorvi
          </button>
        )}
        {props.checkout == "True" && (
          <button
            className={classes.btn}
            onClick={() => {
              dispatch(removeItem(props.id));
              dispatch(addToStorage(props.item));
            }}
          >
            Eemalda
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
