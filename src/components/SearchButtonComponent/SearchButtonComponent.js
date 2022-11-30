import search from "../../assets/Search.svg";
import "./SearchButtonComponent.css";
import {useState} from "react";
import SearchOverlayComponent from "../SearchOverlayComponent/SearchOverlayComponent";
import {Link} from "react-router-dom";

function SearchButtonComponent() {
    const [overlay, useOverlay] = useState(false);
    const handleShown = {
        overlay: overlay,
        useOverlay: (e) => useOverlay(e)
    }


    return (
            <div className="SearchButtonComponent">
                <Link onClick={() => handleShown.useOverlay(!overlay)}>
                    <img src={search} alt="otsing"/>
                </Link>
                <SearchOverlayComponent handleShown={handleShown}/>
            </div>


    );


}

export default SearchButtonComponent;