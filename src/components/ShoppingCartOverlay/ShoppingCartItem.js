import classes from "./ShoppingCartItem.module.css";
import { addToStorage } from "../../features/storage/storageSlice";
import { removeItem } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";

export default function ShoppingCartItem(props) {
  const dispatch = useDispatch();
  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <div className={classes.description}>{props.children}</div>
        <div className={classes.pricing}>{props.price}</div>
        <div
          className={classes.remove}
          onClick={() => {
            dispatch(removeItem(props.item.id));
            dispatch(addToStorage(props.item));
          }}
        >
          eemalda
        </div>
      </div>
      <div className={classes.image}>
        <img src={props.img} alt="Kivi" />
      </div>
    </div>
  );
}
