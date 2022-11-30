import classes from "./ShoppingCartOverlay.module.css"
import ShoppingCartItem from "./ShoppingCartItem";
import "../../index.css"
import kjall from "../../assets/kjall.png"
import bolmen from"../../assets/bolmen.png"
import NavigationButton from "../buttons/NavigationButton/NavigationButton";


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
            <ShoppingCartItem img={kjall} price="21.99€">Kjallfrogenäider</ShoppingCartItem>
            <ShoppingCartItem img={bolmen} price="18.99€">Bolmen</ShoppingCartItem>
         </div>
         <hr className={classes.underLine} />
         <div className={classes.total}>
            Summa: 40.98€
         </div>
         <div className={classes.navBtn}>
            <NavigationButton
               color="#30CF53"
               link="/ostukorv"
               clickFunc={() => handleShown.setClick(false)}>
               OSTMA
            </NavigationButton>
         </div>
      </div>
   )
}

