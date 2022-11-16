import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Card(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <div className="image-div">
        <img className="rock-image" src={props.image}></img>
      </div>
      <h2 className="name-text">{props.name}</h2>
      <h2 className="price-text">{props.price}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Lisa korvi</button>
      </div>
      {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
      {modalIsOpen && <Backdrop onClick={closeModalHandler}/>}
    </div>
  );
}

export default Card;
