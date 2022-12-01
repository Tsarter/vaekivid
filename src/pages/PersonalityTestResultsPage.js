import { useLocation } from "react-router-dom";

function PersonalityResultsPage() {
  const location = useLocation();
  console.log(location);
  return <p>{JSON.stringify(location.state)}</p>;
}

export default PersonalityResultsPage;
