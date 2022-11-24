import "./CourierOptionComponent.css";
import { Link } from "react-router-dom";


function CourierOptionComponent(props) {

    return (

        <Link>
            <div className="CourierOptionComponent">

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