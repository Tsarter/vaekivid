import React, {useState} from "react";
import classes from "./ToggleButton.module.css"

/* Toggle Button which changes colour on click. When used 2 props inputs are needed:
1. Text which is displayed on the button <ToggleButton text="input text" />
2. Which color button turns to when clicked <ToggleButton selectedColor="color" />

Example: <ToggleButton text="Jah" selectedColor="MediumSeaGreen" />
*/

export default function ToggleButton(props) {
   const isClicked = props.isClicked

   if (isClicked) {
      return <div className={classes.div}>
         <button
            className={classes.btn}
            style={{background: props.selectedColor}}
            onClick={props.onClick}
         >{props.text}
         </button>
      </div>
   }


   if (!isClicked) {
      return <div className={classes.div}>
         <button
            className={classes.btn}
            onClick={props.onClick}
         >{props.text}
         </button>
      </div>
   }
}