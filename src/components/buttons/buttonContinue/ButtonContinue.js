import { useNavigate } from "react-router-dom";
import classes from "./ButtonContinue.module.css";

/*
Function:
 On button click go to page given through props (props.destination)
Style:
  rgb border, on hover rgb, on hover floats.
*/

function ButtonContinue(props) {
  const text = props.text || "Jätka";
  const navigate = useNavigate();
  return (
    <button
      className={classes.buttonMain}
      onClick={() => navigate(props.destination)}
    >
      {text}
      <i></i>
    </button>
  );
}
export default ButtonContinue;
