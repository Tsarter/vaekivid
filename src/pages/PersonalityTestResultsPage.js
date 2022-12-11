import { useLocation } from "react-router-dom";
/* Api  https://rapidapi.com/bellatrics/api/sentino/*/
import sentinoExample from "../test_data/sentino_example";
import { useDispatch } from "react-redux";
import { setPersonalityValue } from "../features/personality/personalitySlice";
import { useSelector } from "react-redux";
import PersonalityTraitsComponent from "../components/PersonalityTraitsComponent/PersonalityTraitsComponent";
function PersonalityResultsPage() {
  const location = useLocation();
  const dispatch = useDispatch();
  const personality = useSelector((state) => state.personality);
  console.log(personality);
  const sentino = location.state;
  // for fake data
  //console.log(sentinoExample.scoring.neo);
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
    console.log("here1", personality);
    text +=
      property +
      ":  " +
      Math.round(neoFake[property].score * 10 + Number.EPSILON) / 10 +
      " ";
  }
  return (
    <div>
      <p>{text}</p>{" "}
    </div>
  );
}

export default PersonalityResultsPage;
