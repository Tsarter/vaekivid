import logo from "../../assets/logo.svg";
import "./FooterComponent.css";

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
        <div className="text">PRIVACY POLICY</div>
        <div className="text">LEGAL TERMS</div>
      </div>
      <div className="rowFlex">
        <div className="text">© 2022 | VÄEKIVID</div>
      </div>
    </footer>
  );
}

export default FooterComponent;
