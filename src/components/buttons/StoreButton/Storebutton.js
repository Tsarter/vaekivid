import classes from "./StoreButton.module.css"

export default function StoreButton() {
   return (
      <div className={classes.store}
           onClick={() => {
              setTimeout(() => {
                 console.log("hey");
                 var access = document.getElementById("shop");
                 access.scrollIntoView({behavior: "smooth"}, true);
              }, 50);
           }}
      >
         <h4 className={classes.store}>Pood</h4>
      </div>
   )
}
