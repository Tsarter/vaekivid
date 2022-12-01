import classes from "./NavigationButton.module.css"
import {Link} from "react-router-dom";

export default function NavigationButton(props) {

   if (props.clickFunc) {
      return (
         <Link to={props.link}>
            <button
               className={classes.btn}
               onClick={props.clickFunc}
               style={{background: props.color}}>
               {props.children}
            </button>
         </Link>
      )
   }
   return (
      <Link to={props.link}>
         <button
            className={classes.btn}
            style={{background: props.color}}>
            {props.children}
         </button>
      </Link>
   )
}
