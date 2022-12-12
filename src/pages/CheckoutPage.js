import "./CheckoutPage.css";
import CheckoutContainer from "../components/CheckoutComponent/CheckoutContainer.js";
import { useSelector } from "react-redux";
import axios from "axios";
import ShoppingCartMain from "../components/ShoppingCartMain/ShoppingCartMain";
import Card from "../components/Cards/Card";
import bolmen from "../assets/bolmen.png";

function CheckoutPage() {
  //redux magic. very good explanation -> https://www.youtube.com/watch?v=bbkBuqC1rU4
  const { amount, cartItems, total } = useSelector((store) => store.cart);
  const jsonToSend = {};
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(jsonToSend),
  };
  const paymentHandler = () => {
    let randomId = Math.floor(Math.random() * 10000000);
    let payloadObj = {
      amount: total,
      currency: "EUR",
      access_key: "4e5d2fcd-c766-47c4-aa74-6197cf7ddb5e",
      merchant_reference: toString(randomId),
      merchant_return_url: "https://tatall.pages.taltech.ee/iti0105-2022/",
      merchant_notification_url: "https://montonio.com/orders/payment_webhook",
      payment_information_unstructured:
        "Payment for order " + toString(randomId),
      preselected_locale: "et",
      checkout_email: toString(total) + "@montonio.com",
    };
    axios
      .post(
        "https://hook.eu1.make.com/j191rhrr099wkqk43jkxom9r3hut8myt",
        payloadObj
      )
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        window.open(
          "https://sandbox-payments.montonio.com?payment_token=" + response.data
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="toplevelContainer">
      <h1 className="shoppingCartTitle">Sinu ostukorv</h1>
      <div className="CheckoutShoppingCart">
        <ShoppingCartMain>
          {cartItems.map((item) => {
            return (
              <Card
                key={item.id}
                id={item.id}
                name={item.fields.title}
                price={item.fields.price}
                image={item.fields.image[0].url}
                item={item}
                checkout="True"
              />
            );
          })}
        </ShoppingCartMain>
      </div>

      <div className="totalLabel">
        <b>Kokku: </b> {total}€
      </div>
      <button className="payButton" onClick={paymentHandler}>
        Maksma
      </button>

      <div className="leftContainer">
        <CheckoutContainer />
      </div>
    </div>
  );
}

export default CheckoutPage;
