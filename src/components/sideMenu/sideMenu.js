import { Link } from "react-router-dom";
import classes from "./sideMenu.module.css";
function SideMenu({ onClick, showSideMenu }) {
  const handleClickOutside = function (event) {
    if (!event.target.closest("#sidem") && !event.target.closest("#header")) {
      console.log("hey", showSideMenu);
      onClick();
      document.removeEventListener("click", handleClickOutside);
    }
  };
  if (showSideMenu) {
    document.addEventListener("click", handleClickOutside);
  }

  return (
    <div id="sidem" className={classes.sideMenu}>
      <div className={classes.pages}>
        <div onClick={onClick}>
          <Link to="/">
            <h4>Kodu</h4>
          </Link>
        </div>
        <div onClick={onClick}>
          <Link to="/meist">
            <h4>Meist</h4>
          </Link>
        </div>
        <div onClick={onClick}>
          <Link to="/blogi">
            <h4>Blogi</h4>
          </Link>
        </div>
        <div onClick={onClick}>
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
    </div>
  );
}
export default SideMenu;
