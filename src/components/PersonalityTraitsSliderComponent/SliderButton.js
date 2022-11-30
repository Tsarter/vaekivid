import "./SliderButton.css";


export default function SliderButton({handleValue}) {

    return (
        <div className="SliderButton">
            <button className="SelectorButton" id="plus" onClick={handleValue.increment}>+</button>
            <div className="SelectorNum">{handleValue.val}</div>
            <button className="SelectorButton" id="minus" onClick={handleValue.decrement}>-</button>
        </div>
    );
}