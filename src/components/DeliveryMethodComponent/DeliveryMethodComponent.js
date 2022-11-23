import "./DeliveryMethodComponent.css";
import CourierOptionComponent from "../CourierOptionComponent/CourierOptionComponent.js";
import dpd from "../../assets/dpd.svg";
import omniva from "../../assets/omniva.svg";

function DeliveryMethodComponent(props) {
   return <div className="DeliveryMethodComponent">
      <h2>
         {props.methodTitle}
      </h2>
      <hr/>
      <div className="CourierOptionContainer">
         <CourierOptionComponent courierTitle="Omniva" img={omniva} alt="Omniva Logo" price="2.99$"/>
         <CourierOptionComponent courierTitle="DPD" img={dpd} alt="DPD Logo" price="2.90$"/>
      </div>
   </div>

}


export default DeliveryMethodComponent;