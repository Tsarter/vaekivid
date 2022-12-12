import classes from "./ShoppingCartMain.module.css";

export default function ShoppingCartMain(props) {
  return (
    <div className={classes.ShoppingCartMain}>
      <div className={classes.CardContent}>
        {props.children ? props.children : "Ostukorv on tühi"}
      </div>
    </div>
  );
}
