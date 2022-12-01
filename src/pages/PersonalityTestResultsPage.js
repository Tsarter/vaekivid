import { useLocation } from "react-router-dom";
/* Api  https://rapidapi.com/bellatrics/api/sentino/*/
import sentinoExample from "../test_data/sentino_example";

function PersonalityResultsPage() {
  const location = useLocation();
  const sentino = location.state;
  // fake data
  const sentinoFake = sentinoExample.scoring.neo;
  let text = "";

  for (const property in sentinoFake) {
    text +=
      property +
      ":  " +
      Math.round(sentinoFake[property].score * 10 + Number.EPSILON) / 10 +
      " ";
  }
  return <p>{text}</p>;
}

export default PersonalityResultsPage;
