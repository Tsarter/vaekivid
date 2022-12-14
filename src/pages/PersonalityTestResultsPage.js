import { useLocation } from "react-router-dom";
/* Api  https://rapidapi.com/bellatrics/api/sentino/*/
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
  const { personalRocks } = useSelector((state) => state.personalRocks);
  const sentino = location.state;
  console.log(personalRocks);
  // for real data
  const neo = sentino.scoring.neo;
  let text = "";

  for (const property in neo) {
    dispatch(
      setPersonalityValue([
        property,
        Math.round(neo[property].score * 10 + Number.EPSILON) / 10,
      ])
    );
    console.log(
      Math.round(neo[property].score * 20 + Number.EPSILON) / 2,
      property
    );
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
              item={item}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PersonalityResultsPage;
