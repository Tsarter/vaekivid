import "./PersonalityTraitsComponent.css";
import help from "../../assets/Help.svg";
import PersonalityTraitsSliderComponent from "../PersonalityTraitsSliderComponent/PersonalityTraitsSliderComponent";
import ButtonContinue from "../buttons/buttonContinue/ButtonContinue";

export default function PersonalityTraitsComponent(props) {
  return (
    <section className="PersonalityTraitsComponent">
      <div className="TitleContainer">
        <h1>{props.title}</h1>
        <img className="HelpImg" src={help} alt="Abi" />
      </div>
      <div className="ContentContainer">
        <PersonalityTraitsSliderComponent
          title="Seiklushimu"
          default={0}
          maxval={5}
          minval={-5}
          color="#CB19F8"
        />
        <PersonalityTraitsSliderComponent
          title="Intelligentsus"
          default={0}
          maxval={5}
          minval={-5}
          color="#E3EC80"
        />
        <PersonalityTraitsSliderComponent
          title="Enesekindlus"
          default={0}
          maxval={5}
          minval={-5}
          color="#EC84DB"
        />
        <PersonalityTraitsSliderComponent
          title="Rõõmsameelsus"
          default={0}
          maxval={5}
          minval={-5}
          color="#9F84EC"
        />
        <PersonalityTraitsSliderComponent
          title="Koostöö"
          default={0}
          maxval={5}
          minval={-5}
          color="#58BA2A"
        />
        <PersonalityTraitsSliderComponent
          title="Depressioon"
          default={0}
          maxval={5}
          minval={-5}
          color="#2A5BBA"
        />
        <PersonalityTraitsSliderComponent
          title="Kohusetundlikkus"
          default={0}
          maxval={5}
          minval={-5}
          color="#65686D"
        />
        <PersonalityTraitsSliderComponent
          title="Emotsionaalsus"
          default={0}
          maxval={5}
          minval={-5}
          color="#9D2ABA"
        />
        <PersonalityTraitsSliderComponent
          title="Sõbralikkus"
          default={0}
          maxval={5}
          minval={-5}
          color="#E35A2E"
        />
        <PersonalityTraitsSliderComponent
          title="Seltskondlikkus"
          default={0}
          maxval={5}
          minval={-5}
          color="#6CC2DD"
        />
        <PersonalityTraitsSliderComponent
          title="Kujutlusvõime"
          default={0}
          maxval={5}
          minval={-5}
          color="#6CC2DD"
        />
        <PersonalityTraitsSliderComponent
          title="Liberaalus"
          default={0}
          maxval={5}
          minval={-5}
          color="#6CC2DD"
        />
        <PersonalityTraitsSliderComponent
          title="Tagasihoidlikkus"
          default={0}
          maxval={5}
          minval={-5}
          color="#6CC2DD"
        />
        <PersonalityTraitsSliderComponent
          title="Korrektsus"
          default={0}
          maxval={5}
          minval={-5}
          color="#6CC2DD"
        />
        <PersonalityTraitsSliderComponent
          title="Enesedistsipliin"
          default={0}
          maxval={5}
          minval={-5}
          color="#6CC2DD"
        />
      </div>
      <div className="NextButton">
        <ButtonContinue />
      </div>
    </section>
  );
}
