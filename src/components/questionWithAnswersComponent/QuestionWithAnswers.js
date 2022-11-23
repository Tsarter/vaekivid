import React, {useState} from "react";
import classes from "./QuestionWithAnswers.css"
import ToggleButton from "../toggleButtonComponent/ToggleButton";


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
      <div>
         <ToggleButton
            text="Yes"
            selectedColor="MediumSeaGreen"
            isClicked={clicked}
            onClick={clickHandler}
         />
         <ToggleButton
            text="No"
            selectedColor="Red"
            isClicked={clicked2}
            onClick={clickHandler2}
         />
      </div>
   )

}