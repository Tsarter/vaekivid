import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import logo from "../../illustrations/logo.svg";
import search from "../../illustrations/Search.svg";
import user from "../../illustrations/User.svg";
import cart from "../../illustrations/cart.svg";
function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
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
          <img src={search} alt="otsing"></img>
          <img src={user} alt="kasutaja"></img>
          <Link to="/ostukorv">
            <img src={cart} alt="ostukorv"></img>
          </Link>
        </div>
      </nav>
    </header>
  );
}
export default MainNavigation;
