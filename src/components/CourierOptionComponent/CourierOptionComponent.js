import "./CourierOptionComponent.css";
import {Link} from "react-router-dom";
import React from 'react';
import {useId} from 'react';

/*
Courier Component:
    props:
    title: Name of delivery service.
    img: Logo of the delivery service.
    alt: alt property for the image.
    price: Price of the delivery service.
    handleSelected: an object (inherited from parent) that is used to
        update the button if it's selected and make sure that there is only one courier option selected at a time.
*/

function CourierOptionComponent(props) {
    const id = useId();
    return (
        <Link onClick={() => {
            if (props.handleSelected.selected === id) {
                props.handleSelected.useSelected(null);
            }
            else {
                props.handleSelected.useSelected(id);
            }

        }}>
            <div className="CourierOptionComponent ">
                <div className={`SelectedTab ${id === props.handleSelected.selected ? "" : "unselected"}`}/>
                <img src={props.img} alt={props.alt} className="CourierImg"/>
                <div className="CourierInfo">
                    <h3 className="CourierName">{props.title}</h3>
                    <h4 className="CourierPrice">{props.price}</h4>
                </div>
            </div>
        </Link>
    )
}

export default CourierOptionComponent;