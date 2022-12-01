import "./PersonalityTraitsComponent.css";
import help from "../../assets/Help.svg";
import PersonalityTraitsSliderComponent from "../PersonalityTraitsSliderComponent/PersonalityTraitsSliderComponent";
import ButtonContinue from "../buttons/buttonContinue/ButtonContinue";

export default function PersonalityTraitsComponent(props) {
    return (
        <section className="PersonalityTraitsComponent">
            <div className="TitleContainer">
                <h1>{props.title}</h1>
                <img className="HelpImg" src={help} alt="Abi"/>
            </div>
            <div className="ContentContainer">
                <PersonalityTraitsSliderComponent title="Tujukas" default={0} maxval={5} minval={-5} color="#CB19F8"/>
                <PersonalityTraitsSliderComponent title="Sotsiaalsus" default={0} maxval={5} minval={-5} color="#4BA9BD"/>
                <PersonalityTraitsSliderComponent title="Intelligentsus" default={0} maxval={5} minval={-5} color="#E3EC80"/>
                <PersonalityTraitsSliderComponent title="Jutukas" default={0} maxval={5} minval={-5} color="#EC84DB"/>
                <PersonalityTraitsSliderComponent title="Usaldusväärne" default={0} maxval={5} minval={-5} color="#9F84EC"/>
                <PersonalityTraitsSliderComponent title="Mõtlik" default={0} maxval={5} minval={-5} color="#58BA2A"/>
                <PersonalityTraitsSliderComponent title="Enesekindlus" default={0} maxval={5} minval={-5} color="#2A5BBA"/>
                <PersonalityTraitsSliderComponent title="Huumor" default={0} maxval={5} minval={-5} color="#65686D"/>
                <PersonalityTraitsSliderComponent title="Väljendusoskus" default={0} maxval={5} minval={-5} color="#9D2ABA"/>
                <PersonalityTraitsSliderComponent title="Julgus" default={0} maxval={5} minval={-5} color="#E35A2E"/>
                <PersonalityTraitsSliderComponent title="Abivalmidus" default={0} maxval={5} minval={-5} color="#6CC2DD"/>

            </div>
            <div className="NextButton">
                <ButtonContinue/>
            </div>


        </section>


    );


}