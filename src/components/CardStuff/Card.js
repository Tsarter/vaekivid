import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
import classes from "./Card.module.css";

function Card(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className={classes.card}>
      <div className={classes.image_div}>
        <img
          alt="Pilt kivist."
          className={classes.rock_image}
          src={props.image}
        ></img>
      </div>
      <h2 className={classes.name_text}>{props.name}</h2>
      <h2 className={classes.price_text}>{props.price}</h2>
      <div className={classes.actions}>
        <button className={classes.btn} onClick={deleteHandler}>
          Lisa korvi
        </button>
      </div>
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
    </div>
  );
}

export default Card;
