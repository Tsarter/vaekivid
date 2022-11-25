import React from 'react';
import "./DeliveryInfoComponent.css";

function DeliveryInfoComponent(props) {

/*title prop can't be too long or else when the component is rendered it screws to the parent.
* add offset='true'*/

    return (
        <div className={`DeliveryInfoComponent ${props.offset == "true" ? "offset" : ''}`}>
            <h3 className="title">{props.title}</h3>
            <input className='inputBox' type="text"/>
        </div>


    );

}

export default DeliveryInfoComponent;