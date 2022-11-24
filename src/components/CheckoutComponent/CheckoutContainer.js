import "./CheckoutContainer.css";
import DeliveryMethodComponent from "../DeliveryMethodComponent/DeliveryMethodComponent";
import CourierOptionComponent from "../CourierOptionComponent/CourierOptionComponent";
import dpd from "../../assets/dpd.svg";
import omniva from "../../assets/omniva.svg";
import catapult from "../../assets/catapult.svg";
import building from "../../assets/building.svg";
import React from 'react';
import {useState} from 'react';

function CheckoutContainer() {
    const [selected, useSelected] = useState();
    const handleSelected = {
        selected: selected,
        useSelected: (e) => useSelected(e)
    }


    return (

        <div className="container">
            <h1 className="containerTitle">Vali tarneviis</h1>
            <DeliveryMethodComponent title="Pakiautomaat">
                <CourierOptionComponent handleSelected={handleSelected} title="Omniva" img={omniva} alt="Omniva Logo" price="2,19 €"/>
                <CourierOptionComponent handleSelected={handleSelected} title="DPD" img={dpd} alt="DPD Logo" price="2,99 €"/>
            </DeliveryMethodComponent>
            <DeliveryMethodComponent title="Kuller">
                <CourierOptionComponent handleSelected={handleSelected} title="Omniva" img={omniva} alt="Omniva Logo" price="4,29 €"/>
                <CourierOptionComponent handleSelected={handleSelected} title="DPD" img={dpd} alt="DPD Logo" price="4,99 €"/>
            </DeliveryMethodComponent>
            <DeliveryMethodComponent title="Muu">
                <CourierOptionComponent handleSelected={handleSelected} title="Katapult" img={catapult} alt="Catapult" price="Tasuta"/>
                <CourierOptionComponent handleSelected={handleSelected} title="Ise järgi" img={building} alt="Building" price="Tasuta"/>
            </DeliveryMethodComponent>
        </div>
    )


}

export default CheckoutContainer;