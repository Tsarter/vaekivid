import classes from "./RockCardAdvanced.module.css";
import rectangleBlob1 from "../../../assets/rectangleBlob1.svg";
import { useDispatch } from "react-redux";

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
          style={{ top: "1rem", backgroundColor: "#E35A2E" }}
        ></div>
        <div
          className={classes.rockPersonality}
          style={{ top: "2rem", backgroundColor: "#4BA9BD" }}
        ></div>
        <div
          className={classes.rockPersonality}
          style={{ top: "3rem", backgroundColor: "#65686D" }}
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
        <button className={classes.btn} onClick={() => {}}>
          Lisa korvi
        </button>
      </div>
    </div>
  );
}

export default RockCardAdvanced;
