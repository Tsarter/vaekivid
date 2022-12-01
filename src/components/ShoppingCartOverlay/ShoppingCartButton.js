import React, {useState} from "react";
import classes from "./ShoppingCartButton.module.css"
import cart from "../../assets/cart.svg";
import ShoppingCartOverlay from "./ShoppingCartOverlay";

export default function ShoppingCartButton(){
   const [isClicked, setClick] = useState(false)
   const handleShown = {
      isClicked: isClicked,
      setClick: (e) => setClick(e)
   }
   return(
      <div>
         <img className={classes.hover} src={cart} onClick={() => setClick(!isClicked)} alt="käru"/>
         <ShoppingCartOverlay handleShown={handleShown}/>
      </div>
   )
}