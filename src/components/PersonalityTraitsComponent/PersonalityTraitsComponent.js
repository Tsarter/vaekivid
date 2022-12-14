import "./PersonalityTraitsComponent.css";
import help from "../../assets/Help.svg";
import PersonalityTraitsSliderComponent from "../PersonalityTraitsSliderComponent/PersonalityTraitsSliderComponent";
import ButtonContinue from "../buttons/buttonContinue/ButtonContinue";
import { useSelector } from "react-redux";

export default function PersonalityTraitsComponent(props) {
  const personality = useSelector((state) => state.personality);
  return (
    <section className="PersonalityTraitsComponent">
      <div className="TitleContainer">
        <h1>{props.title}</h1>
        <img className="HelpImg" src={help} alt="Abi" />
      </div>
      <div className="ContentContainer">
        {Object.keys(personality).map((key, index) => {
          console.log(personality[key].value);
          return (
            <PersonalityTraitsSliderComponent
              key={index}
              title={personality[key].name}
              default={personality[key].value}
              maxval={5}
              minval={-5}
              color={personality[key].color}
              noChoosing={props.noChoosing}
            />
          );
        })}
      </div>
      <div className="NextButton">
        <ButtonContinue />
      </div>
    </section>
  );
}
