import React, { useState } from "react";
import ToggleButton from "../toggleButtonComponent/ToggleButton";
import classes from "./QuestionWithAnswers.module.css";
import { FormCtx } from "../form/form";
/* Box with a question and two buttons, buttons and questions can freely be assigned text values.
Buttons can also be assigned colours they turn to when clicked.
5 inputs needed when using this component:
1. The question itself in between tags: <QuestionWithAnswers> 1. test question </QuestionWithAnswers>
2. Button 1 text 3. Button 1 color 4. Button 2 text 5. Button 2 color:
<QuestionWithAnswers text="Jah" color="Green" text2="Ei" color2="Red"> 1. test question </Question...>

Color reccommendation: MediumSeagreen & IndianRed
*/
export default function QuestionWithAnswers(props) {
  const [clicked, isClicked] = useState(false);
  const [clicked2, isClicked2] = useState(false);

  function clickHandlerYes() {
    props.handleClick([props.yes, true]);
    isClicked2(false);
    isClicked(true);
  }

  function clickHandlerNo() {
    props.handleClick([props.no, false]);
    isClicked2(true);
    isClicked(false);
  }

  return (
    <div className={classes.box}>
      <p className={classes.question}>{props.children}</p>
      <div className={classes.container}>
        <ToggleButton
          text={props.text}
          color={props.color}
          isClicked={clicked}
          onClick={clickHandlerYes}
        />
        <ToggleButton
          text={props.text2}
          color={props.color2}
          isClicked={clicked2}
          onClick={clickHandlerNo}
        />
      </div>
    </div>
  );
}
