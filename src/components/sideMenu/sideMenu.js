import { Link } from "react-router-dom";
import classes from "./sideMenu.module.css";
import { useEffect } from "react";

function SideMenu({ onClick, showSideMenu }) {
  useEffect(() => {
    let overlay_main = document.getElementsByClassName("sidem");
    if (overlay_main.length !== 0) {
      overlay_main = overlay_main[0];
      overlay_main.addEventListener("click", (e) => {
        if (e.target == overlay_main) {
          console.log("heys");
          onClick();
        }
      });
    }
  }, [onClick.showSideMenu]);

  return (
    <div className="sidem">
      <div className={[classes.sideMenu].join(" ")}>
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
    </div>
  );
}
export default SideMenu;
