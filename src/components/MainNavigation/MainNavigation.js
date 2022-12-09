import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import logo from "../../assets/logo.svg";
import user from "../../assets/User.svg";
import ShoppingCartButton from "../ShoppingCartOverlay/ShoppingCartButton";
import SearchButtonComponent from "../SearchButtonComponent/SearchButtonComponent";
import StoreButton from "../buttons/StoreButton/Storebutton";
import hamburger from "../../assets/hamburger.svg";
import SideMenu from "../sideMenu/sideMenu";
import React from "react";

function MainNavigation() {
  const [showSideMenu, setshowSideMenu] = React.useState(false);
  const show = {
    showSideMenu: showSideMenu,
    setshowSideMenu: () => setshowSideMenu(!showSideMenu),
  };

  return (
    <div>
      {showSideMenu && (
        <SideMenu
          onClick={() => {
            show.setshowSideMenu();
          }}
          showSideMenu={showSideMenu}
        />
      )}

      <header className={classes.header}>
        <img
          className={classes.hamburger}
          src={hamburger}
          onClick={() => {
            show.setshowSideMenu();
          }}
        ></img>
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
            <Link
              onClick={() => {
                setTimeout(() => {
                  console.log("hey");
                  var access = document.getElementById("shop");
                  access.scrollIntoView({ behavior: "smooth" }, true);
                }, 70);
              }}
              to="/"
            >
              <h4>Pood</h4>
            </Link>
          </div>
        </div>
        <div className={classes.logo}>
          <div className={classes.logo_text}>Väekivid</div>
          <img src={logo} alt="Väekivid logo"></img>
        </div>
        <div className={classes.icons}>
          <div className={classes.hideOnMobile}>
            <SearchButtonComponent />
          </div>
          <div className={classes.hideOnMobile}>
            <img src={user} alt="kasutaja"></img>
          </div>
          <ShoppingCartButton />
        </div>
      </header>
    </div>
  );
}
export default MainNavigation;
