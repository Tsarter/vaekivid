import React, { useState } from "react";
import classes from "./ShoppingCartButton.module.css";
import cart from "../../assets/cart.svg";
import ShoppingCartOverlay from "./ShoppingCartOverlay";
import { useSelector } from "react-redux";

export default function ShoppingCartButton() {
  const { amount } = useSelector((store) => store.cart);
  const [isClicked, setClick] = useState(false);
  const handleShown = {
    isClicked: isClicked,
    setClick: (e) => setClick(e),
  };
  return (
    <div className={classes.cartDiv}>
      {amount != 0 && (
        <div className={classes.cartCounter}>
          <p>{amount}</p>
        </div>
      )}
      <img
        className={classes.hover}
        src={cart}
        onClick={() => setClick(!isClicked)}
        alt="käru"
      />
      <ShoppingCartOverlay handleShown={handleShown} />
    </div>
  );
}
