import "./CheckoutPage.css";
import CheckoutContainer from "../components/CheckoutComponent/CheckoutContainer.js";
import { useSelector } from "react-redux";

function CheckoutPage() {
  //redux magic. very good explanation -> https://www.youtube.com/watch?v=bbkBuqC1rU4
  const { amount } = useSelector((store) => store.cart);
  console.log(amount);
  return (
    <div className="toplevelContainer">
      <div className="leftContainer"></div>
      <div className="rightContainer">
        <CheckoutContainer />
      </div>
    </div>
  );
}
export default CheckoutPage;
