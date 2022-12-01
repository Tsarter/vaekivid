import "./PersonalityTraitsPage.css";
import PersonalityTraitsComponent from "../components/PersonalityTraitsComponent/PersonalityTraitsComponent";
import ButtonContinue from "../components/buttons/buttonContinue/ButtonContinue";

export default function PersonalityTraitsPage() {
  return (
    <div className="PersonalityTraitsPage">
      <PersonalityTraitsComponent title="Vali enda isikuomadused" color="" />
      <ButtonContinue text="Test" destiantion="/iseloomutest" />
    </div>
  );
}
