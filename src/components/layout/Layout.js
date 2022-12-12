import classes from "./Layout.module.css";
import MainNavigation from "../MainNavigation/MainNavigation";
import FooterComponent from "../FooterComponent/FooterComponent";

function Layout(props) {
  return (
    <div className={classes.layout}>
       <MainNavigation />
       <main className={classes.main}>{props.children}</main>
       <FooterComponent />
    </div>
  );
}
export default Layout;
