import "./SearchOverlayComponent.css";
import {useEffect} from "react";
import search from "../../assets/Search.svg";

function SearchOverlayComponent({handleShown}) {

    useEffect(() => {
        let overlay_main = document.getElementsByClassName("OverlayToplevel");
        if (overlay_main.length !== 0) {
            overlay_main = overlay_main[0];
            overlay_main.addEventListener("click", (e) => {
                if (e.target == overlay_main){
                    handleShown.useOverlay(false);
                }
            })
        }
    }, [handleShown.overlay])

    if (handleShown.overlay) {
        return (
            <div className="OverlayToplevel">
                <div className="SearchOverlayComponent">
                    <h2 className="SearchTitle">Otsing</h2>
                    <div className="SearchBox">
                        <img src={search} alt="otsing"/>
                        <hr/>
                        <input type="text" placeholder="Otsi tooteid..."/>
                    </div>
                </div>
            </div>


        );


    } else {
        return "";
    }
}

export default SearchOverlayComponent;