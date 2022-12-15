import classes from "./ThankYouPage.module.css";
import React from "react";
import { useLocation } from "react-router-dom";
import ButtonContinue from "../components/buttons/buttonContinue/ButtonContinue";
export default function ThankYouPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const email = searchParams.get("email");
  console.log(searchParams.get("email"));

  return (
    <div className={classes.TopLevelContainer}>
      <h1 className={classes.Confirmed}>Teie tellimus on kinnitatud!</h1>
      <h3 className={classes.Receipt}>
        Tellimuse arve on saadetud e-mailile: {email}
      </h3>
      <h4 className={classes.ThankYou}>
        Täname Teid ostu eest ja loodame, et olete oma valitud toodetega rahul.
        Küsimuste või probleemide tekkimise korral saate meiega ühendust võtta
        meiliaadressil <b>klienditugi@vaekivid.ee</b>
      </h4>
      <a className={classes.NewsletterLink} href="https://tally.so/r/nrD265">
        <ButtonContinue text="Liitu meie uudiskirjaga." />
      </a>
    </div>
  );
}
