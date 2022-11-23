import "./CheckoutContainer.css";
import DeliveryMethodComponent from "../DeliveryMethodComponent/DeliveryMethodComponent";

function CheckoutContainer() {
    return (
        <div className="container">
            <DeliveryMethodComponent methodTitle="Pakiautomaat"/>
            <DeliveryMethodComponent methodTitle="Kuller"/>
        </div>
        )


}

export default CheckoutContainer;