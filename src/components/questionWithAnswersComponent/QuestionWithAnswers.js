import React, {useState} from "react";
import ToggleButton from "../toggleButtonComponent/ToggleButton";
import classes from "./QuestionWithAnswers.module.css"

/* Box with a question and two buttons, buttons and questions can freely be assigned text values.
Buttons can also be assigned colours they turn to when clicked.
5 input props needed when using this component:
1. The question itself between prop tags: <QuestionWithAnswers> 1. test question </QuestionWithAnswers>
2. Button 1 text 3. Button 1 color 4. Button 2 text 5. Button 2 color:
<QuestionWithAnswers text="Jah" color="Green" text2="Ei" color2="Red"> 1. test question </Question...>

Color reccommendation: MediumSeagreen & IndianRed
*/
export default function QuestionWithAnswers(props) {

   const [clicked, isClicked] = useState(false)
   const [clicked2, isClicked2] = useState(false)

   function clickHandler() {
      isClicked(!clicked);
      isClicked2(false)
   }

   function clickHandler2() {
      isClicked2(!clicked2);
      isClicked(false)
   }

   return (
      <div className={classes.box}>
         <p className={classes.question}>{props.children}</p>
         <div className={classes.container}>
         <ToggleButton
            text={props.text}
            color={props.color}
            isClicked={clicked}
            onClick={clickHandler}
         />
         <ToggleButton
            text={props.text2}
            color={props.color2}
            isClicked={clicked2}
            onClick={clickHandler2}
         />
         </div>
      </div>
   )

}