import "./CheckoutContainer.css";
import DeliveryMethodComponent from "../DeliveryMethodComponent/DeliveryMethodComponent";
import CourierOptionComponent from "../CourierOptionComponent/CourierOptionComponent";
import dpd from "../../assets/dpd.svg";
import omniva from "../../assets/omniva.svg";
import catapult from "../../assets/catapult.svg";
import building from "../../assets/building.svg";
import truck from "../../assets/delivery-truck.svg";

function CheckoutContainer() {
    return (
        <div className="container">
            <h1 className="containerTitle">Vali tarneviis</h1>
            <DeliveryMethodComponent title="Pakiautomaat">
                <CourierOptionComponent title="Omniva" img={omniva} alt="Omniva Logo" price="2,19 €"/>
                <CourierOptionComponent title="DPD" img={dpd} alt="DPD Logo" price="2,99 €"/>
            </DeliveryMethodComponent>
            <DeliveryMethodComponent title="Kuller">
                <CourierOptionComponent title="Aadress" img={truck} alt="Truck" price="4,99 €"/>
            </DeliveryMethodComponent>
            <DeliveryMethodComponent title="Muu">
                <CourierOptionComponent title="Katapult" img={catapult} alt="Catapult" price="Tasuta"/>
                <CourierOptionComponent title="Ise järgi" img={building} alt="Building" price="Tasuta"/>
            </DeliveryMethodComponent>
        </div>
        )


}

export default CheckoutContainer;