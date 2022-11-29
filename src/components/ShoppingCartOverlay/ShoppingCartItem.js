import classes from "./ShoppingCartItem.module.css"

export default function ShoppingCartItem(props) {
   return (
      <div className={classes.container}>
         <div className={classes.textContainer}>
            <div className={classes.description}>{props.children}</div>
            <div className={classes.pricing}>{props.price}</div>
         </div>
         <div className={classes.image}>
            <img src={props.img} alt="Kivi"/>
         </div>


      </div>

   )


}