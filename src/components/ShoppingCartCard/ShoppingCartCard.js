import classes from './ShoppingCartCard.module.css';

export default function ShoppingCartCard(props) {

  return (
    <div className={classes.ShoppingCartCard}>
      <div className={classes.CardImg}>
        <img src={props.src} alt={props.alt}/>
      </div>
      <div className={classes.InfoContainer}>
        <div className={classes.CardInfo}>
          <div>{props.title}</div>
          <div>{props.price}€</div>
        </div>
        <button className={classes.removeButton}>Eemalda</button>
      </div>

    </div>
  );

}