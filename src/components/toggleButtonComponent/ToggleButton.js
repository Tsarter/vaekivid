import React, {useState} from "react";
import classes from "./ToggleButton.module.css"

/* Toggle Button which changes colour on click. When used 2 props inputs are needed:
1. Text which is displayed on the button <ToggleButton text="input text" />
2. Which color button turns to when clicked <ToggleButton selectedColor="color" />

Example: <ToggleButton text="Jah" selectedColor="MediumSeaGreen" />
*/

export default function ToggleButton(props) {
   const [clicked, ClickHandler] = useState(false)

   if (clicked) {
      return <button
         className={classes.btn}
         style={{background: props.selectedColor}}
         onClick={() => ClickHandler(!clicked)}
      >{props.text}
      </button>
   }
   if (!clicked) {
      return <button
         className={classes.btn}
         onClick={() => ClickHandler(!clicked)}
      >{props.text}
      </button>
   }
}