import "./PersonalityTraitsSliderComponent.css";
import SliderElement from "./SliderElement";
import SliderButton from "./SliderButton";
import { useState } from "react";

export default function PersonalityTraitsSliderComponent(props) {
  const [val, setValue] = useState(props.default);
  const handleValue = {
    val: val,
    increment: () => {
      let usedVal = Math.min(props.maxval, val + 1);
      setValue(usedVal);
    },
    decrement: () => {
      let usedVal = Math.max(props.minval, val - 1);
      setValue(usedVal);
    },
  };

  return (
    <div className="PersonalityTraitsSliderComponent">
      <h3 className="PersonalityTitle">{props.title}</h3>
      <div className="Content">
        <SliderElement
          val={val}
          color={props.color}
          max={50 / props.maxval}
          min={50 / Math.abs(props.minval)}
        />
        <SliderButton handleValue={handleValue} noChoosing={props.noChoosing} />
      </div>
    </div>
  );
}
