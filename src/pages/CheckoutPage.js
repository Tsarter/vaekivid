import "./CheckoutPage.css";
import CheckoutContainer from "../components/CheckoutComponent/CheckoutContainer.js";
import { useSelector } from "react-redux";

function CheckoutPage() {
  //redux magic. very good explanation -> https://www.youtube.com/watch?v=bbkBuqC1rU4
  const { amount } = useSelector((store) => store.cart);
  const paymentHandler = () => {
    fetch("u4i6z2tgu971d87d65z8a36asmhnj801@hook.eu1.make.com")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="toplevelContainer">
      <div className="leftContainer"></div>
      <div className="rightContainer">
        <CheckoutContainer />
      </div>
      <button onClick={paymentHandler}>Maksma</button>
    </div>
  );
}
export default CheckoutPage;
