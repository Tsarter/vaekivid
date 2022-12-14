import classes from "./RockCardAdvanced.module.css";
import rectangleBlob1 from "../../../assets/rectangleBlob1.svg";
import { useDispatch } from "react-redux";
import { addItem } from "../../../features/cart/cartSlice";
function RockCardAdvanced(props) {
  const dispatch = useDispatch();

  return (
    <div className={classes.card}>
      <div
        className={classes.image_div}
        style={{
          backgroundColor: props.bg_color,
        }}
      >
        <div
          className={classes.rockPersonality}
          style={{ backgroundColor: "#E35A2E" }}
        ></div>
        <div
          className={classes.rockPersonality}
          style={{ backgroundColor: "#4BA9BD" }}
        ></div>
        <div
          className={classes.rockPersonality}
          style={{ backgroundColor: "#65686D" }}
        ></div>
        <img
          alt="Pilt kivist."
          className={classes.rock_image}
          src={props.img}
        ></img>
      </div>
      <h2 className={classes.name_text}>{props.name}</h2>
      <h2 className={classes.price_text}>{props.price + "€"}</h2>
      <div className={classes.actions}>
        <button
          className={classes.btn}
          onClick={() => {
            dispatch(addItem(props.item));
          }}
        >
          Lisa korvi
        </button>
      </div>
    </div>
  );
}

export default RockCardAdvanced;
