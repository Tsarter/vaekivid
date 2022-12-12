import { useLocation } from "react-router-dom";
/* Api  https://rapidapi.com/bellatrics/api/sentino/*/
import sentinoExample from "../test_data/sentino_example";
import { useDispatch, useSelector } from "react-redux";
import { setPersonalityValue } from "../features/personality/personalitySlice";
import classes from "./PersonalityTestResultsPage.module.css";
import PersonalityTraitsComponent from "../components/PersonalityTraitsComponent/PersonalityTraitsComponent";
import RockCardAdvanced from "../components/Cards/RockCardAdvanced/RockCardAdvanced";
import { addPersonalRock } from "../features/personalRocks/personalRocksSlice";
import { useEffect } from "react";
function PersonalityResultsPage() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { storage } = useSelector((state) => state.storage);
  useEffect(() => {
    console.log(storage, personalRocks);
    dispatch(addPersonalRock(storage[0]));
    dispatch(addPersonalRock(storage[1]));
    dispatch(addPersonalRock(storage[2]));
    dispatch(addPersonalRock(storage[3]));
  }, []);
  const personality = useSelector((state) => state.personality);
  const { personalRocks } = useSelector((state) => state.personalRocks);
  const sentino = location.state;
  console.log(personalRocks);
  // for fake data
  const neoFake = sentinoExample.scoring.neo;
  // for real data
  //const neo = sentino.scoring.neo;
  let text = "";

  for (const property in neoFake) {
    //console.log(neoFake[property]);
    dispatch(
      setPersonalityValue([
        property,
        Math.round(neoFake[property].score * 10 + Number.EPSILON) / 10,
      ])
    );
    //console.log("here1", personality);
    text +=
      property +
      ":  " +
      Math.round(neoFake[property].score * 10 + Number.EPSILON) / 10 +
      " ";
  }
  return (
    <div className={classes.screen}>
      {/* <p>{text}</p> */}
      <div className={classes.personalRocksContainer}>
        <h1>Sulle sobivad väekivid</h1>
        <div className={classes.PersonalityTraitsComponent}>
          <PersonalityTraitsComponent
            title="Sinu isikuomadused"
            color=""
            noChoosing="True"
          />
        </div>
        {personalRocks.map((item) => {
          return (
            <RockCardAdvanced
              key={item.id}
              name={item.fields.title}
              price={item.fields.price}
              img={item.fields.image[0].url}
              description={item.fields.description}
              bg_color="#D8AA78"
            />
          );
        })}
      </div>
    </div>
  );
}

export default PersonalityResultsPage;
