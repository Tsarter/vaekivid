import "./PersonalityTraitsComponent.css";
import help from "../../assets/Help.svg";

export default function PersonalityTraitsComponent(props) {
    return (
        <section className="PersonalityTraitsComponent">
            <div className="TitleContainer">
                <h1>{props.title}</h1>
                <img className="HelpImg" src={help} alt="Abi"/>
            </div>

        </section>


    );


}