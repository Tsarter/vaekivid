import classes from "./PersonalityTraitsPage.module.css";
import PersonalityTraitsComponent from "../components/PersonalityTraitsComponent/PersonalityTraitsComponent";
import ButtonContinue from "../components/buttons/buttonContinue/ButtonContinue";

export default function PersonalityTraitsPage() {
  return (
    <div className={classes.PersonalityTraitsPage}>
      <div className={classes.PersonalityTraitsComponent}>
        <PersonalityTraitsComponent title="Vali enda isikuomadused" color="" />
      </div>
      <h1>Parimate omadustega kivi saamiseks..</h1>
      <div className={classes.testSectionDesktop}>
        <h1>Või läbi allolev</h1>
        <div className={classes.btnToTest}>
          <ButtonContinue text="Test" destination="/iseloomutest" />
        </div>
        <h1>ja saa täpsem tulemus</h1>
      </div>
      <div className={classes.testSectionMobile}>
        <h1>..läbi allolev</h1>
        <div className={classes.btnToTest}>
          <ButtonContinue text="Test" destination="/iseloomutest" />
        </div>
        <h1>või</h1>
      </div>
    </div>
  );
}
