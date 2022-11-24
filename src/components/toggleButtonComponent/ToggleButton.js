import classes from "./ToggleButton.module.css"

/* Toggle Button which changes colour on click. When used 2 input props are needed:
1. Text which is displayed on the button <ToggleButton text="input text" />
2. Which color button turns to when clicked <ToggleButton selectedColor="color" />

Example: <ToggleButton text="Jah" selectedColor="MediumSeaGreen" />
*/

export default function ToggleButton(props) {
   const isClicked = props.isClicked

   if (isClicked) {
      return <div className={classes.container}>
         <button
            className={classes.btn}
            style={{background: props.color}}
            onClick={props.onClick}
         >{props.text}
         </button>
      </div>
   }


   if (!isClicked) {
      return <div className={classes.container}>
         <button
            className={classes.btn}
            onClick={props.onClick}
         >{props.text}
         </button>
      </div>

   }
}