import { useLocation } from "react-router-dom";
/* Api  https://rapidapi.com/bellatrics/api/sentino/*/
import sentinoExample from "../test_data/sentino_example";

function PersonalityResultsPage() {
  const location = useLocation();
  const sentino = location.state;
  // for fake data
  console.log(sentinoExample.scoring.neo);
  const neoFake = sentinoExample.scoring.neo;
  // for real data
  //const neo = sentino.scoring.neo;
  let text = "";

  for (const property in neoFake) {
    console.log(property);
    text +=
      property +
      ":  " +
      Math.round(neoFake[property].score * 10 + Number.EPSILON) / 10 +
      " ";
  }
  return <p>{text}</p>;
}

export default PersonalityResultsPage;
