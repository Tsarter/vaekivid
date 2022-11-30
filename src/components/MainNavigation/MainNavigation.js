import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import logo from "../../assets/logo.svg";
import user from "../../assets/User.svg";
import cart from "../../assets/cart.svg";

import SearchButtonComponent from "../SearchButtonComponent/SearchButtonComponent";
function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.pages}>
        <div>
          <Link to="/">
            <h4>Kodu</h4>
          </Link>
        </div>
        <div>
          <Link to="/meist">
            <h4>Meist</h4>
          </Link>
        </div>
        <div>
          <Link to="/blogi">
            <h4>Blogi</h4>
          </Link>
        </div>
        <div>
          <Link to="/">
            <h4>Pood</h4>
          </Link>
        </div>
      </div>
      <div className={classes.logo}>
        <div className={classes.logo_text}>Väekivid</div>
        <img src={logo} alt="Väekivid logo"></img>
      </div>
      <div className={classes.icons}>
        <SearchButtonComponent/>
        <img src={user} alt="kasutaja"></img>
        <Link to="/ostukorv">
          <img src={cart} alt="ostukorv"></img>
        </Link>
      </div>
    </header>
  );
}
export default MainNavigation;
