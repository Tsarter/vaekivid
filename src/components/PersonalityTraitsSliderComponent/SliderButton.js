import "./SliderButton.css";

export default function SliderButton({ handleValue, noChoosing }) {
  if (noChoosing == "True") {
    // Remove the option to change personality values
    return (
      <div className="SliderButton">
        <div className="SelectorNum">{handleValue.val}</div>
      </div>
    );
  } else {
    return (
      <div className="SliderButton">
        <button
          className="SelectorButton"
          id="plus"
          onClick={handleValue.decrement}
        >
          -
        </button>
        <div className="SelectorNum">{handleValue.val}</div>
        <button
          className="SelectorButton"
          id="minus"
          onClick={handleValue.increment}
        >
          +
        </button>
      </div>
    );
  }
}
