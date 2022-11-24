import "./DeliveryMethodComponent.css";
import CourierOptionComponent from "../CourierOptionComponent/CourierOptionComponent.js";
import dpd from "../../assets/dpd.svg";
import omniva from "../../assets/omniva.svg";

function DeliveryMethodComponent(props) {
   return <div className="DeliveryMethodComponent">
      <h2>
         {props.title}
      </h2>
      <hr/>
      <div className="CourierOptionContainer">
         {props.children}
      </div>
   </div>

}


export default DeliveryMethodComponent;