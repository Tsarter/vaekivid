import React from 'react';
import "./DeliveryInfoComponent.css";

function DeliveryInfoComponent(props) {



    return (
        <div className={`DeliveryInfoComponent ${props.offset == "true" ? "offset" : ''}`}>
            <h3 className="title">{props.title}</h3>
            <input className='inputBox' type="text"/>
        </div>


    );

}

export default DeliveryInfoComponent;