import classes from "./ShoppingCartOverlay.module.css"
import { Link } from "react-router-dom";
import ShoppingCartItem from "./ShoppingCartItem";
import "../../index.css"
import kjall from "../../assets/kjall.png"


export default function ShoppingCartOverlay({handleShown}){
   const isClicked = handleShown.isClicked

   if (!isClicked) return null

   return (
      <div className={classes.outerContainer}>
         <div className={classes.yourCart}>
            <h2>Sinu ostukorv</h2>
            <hr className={classes.underLine} />
         </div>
         <div>
            <ShoppingCartItem img={kjall} price="21.99€">efeoifsofmefsoi fosief soifj seoijoij oieafaefae aef aeffea .</ShoppingCartItem>
         </div>
         <Link to="/ostukorv">
            <button onClick={() => handleShown.setClick(false)}>OSTA</button>
         </Link>

      </div>
   )

}

