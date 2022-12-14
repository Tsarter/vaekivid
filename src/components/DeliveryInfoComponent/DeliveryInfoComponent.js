import React from "react";
import "./DeliveryInfoComponent.css";

function DeliveryInfoComponent(props) {
  /*title prop can't be too long or else when the component is rendered it screws to the parent.
   * add offset='true'*/

  if (props.options) {
    return (
      <form
        className={`DeliveryInfoComponent ${
          props.offset == "true" ? "offset" : ""
        }`}
      >
        <label for="packet_machines" className="title">
          {props.title}
        </label>
        <select id="packet_machines" className="inputBox" type="text">
          {props.options.map((item) => {
            return <option value={item.name}>{item.NAME}</option>;
          })}
        </select>
      </form>
    );
  } else {
    return (
      <div
        className={`DeliveryInfoComponent ${
          props.offset == "true" ? "offset" : ""
        }`}
      >
        <h3 className="title">{props.title}</h3>
        <input className="inputBox" type="text" />
      </div>
    );
  }
}

export default DeliveryInfoComponent;
