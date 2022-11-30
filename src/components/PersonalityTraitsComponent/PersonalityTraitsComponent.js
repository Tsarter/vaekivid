import "./PersonalityTraitsComponent.css";
import help from "../../assets/Help.svg";
import PersonalityTraitsSliderComponent from "../PersonalityTraitsSliderComponent/PersonalityTraitsSliderComponent";

export default function PersonalityTraitsComponent(props) {
    return (
        <section className="PersonalityTraitsComponent">
            <div className="TitleContainer">
                <h1>{props.title}</h1>
                <img className="HelpImg" src={help} alt="Abi"/>
            </div>
            <div className="ContentContainer">
                <PersonalityTraitsSliderComponent title="Tujukas" default={0} maxval={3} minval={-3}/>
                <PersonalityTraitsSliderComponent title="Sotsiaalsus" default={0} maxval={3} minval={-3}/>
            </div>

        </section>


    );


}