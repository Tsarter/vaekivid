import logo from "../../assets/logo.svg";
import "./FooterComponent.css";
import { Link } from "react-router-dom";
import React from "react";

function FooterComponent() {
  return (
    <footer className="footerContainer">
      <div className="hrContainer rowFlex">
        <hr />
        <hr />
      </div>
      <div className="imgContainer rowFlex">
        <img alt="company-logo" src={logo} />
      </div>
      <div className="buttonContainer rowFlex">
        <div className="text">LANGUAGES</div>
        <Link to="/terms">
          <div className="text">LEGAL TERMS</div>
        </Link>
        <div className="text">PRIVACY POLICY</div>
      </div>
      <div className="rowFlex">
        <div className="text">© 2022 | VÄEKIVID</div>
      </div>
    </footer>
  );
}

export default FooterComponent;
