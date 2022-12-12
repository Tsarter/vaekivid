import classes from './ShoppingCartCard.module.css';

export default function ShoppingCartCard(props) {

  return (
    <div className={classes.ShoppingCartCard}>
      <div className={classes.CardImg}>
        <img src={props.src} alt={props.alt}/>
      </div>
      <div className={classes.CardInfo}>
        {props.title}<br/>
        {props.price}€
      </div>
    </div>
  );

}