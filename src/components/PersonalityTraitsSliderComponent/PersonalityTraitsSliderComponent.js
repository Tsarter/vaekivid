import "./PersonalityTraitsSliderComponent.css";
import SliderElement from "./SliderElement";
import SliderButton from "./SliderButton";
import {useState} from "react";


export default function PersonalityTraitsSliderComponent(props) {
    const [val, setValue] = useState(props.default);
    const handleValue = {
        val: val,
        setValue: (e) => setValue(e)
    }

    return (
        <div className="PersonalityTraitsSliderComponent">
            <h3 className="PersonalityTitle">{props.title}</h3>
            <div className="Content">
                <SliderElement/>
                <SliderButton handleValue={handleValue}/>
            </div>
        </div>

    );

}