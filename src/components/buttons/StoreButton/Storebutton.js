import classes from "./StoreButton.module.css"

export default function StoreButton() {
   const HandleClickScroll = () => {
      const element = document.getElementById("rockstore");
      if (element) {
         element.scrollIntoView({behavior: "smooth"});
      }
   };
   return (
      <div onClick={HandleClickScroll} className = {classes.store}>
         <h4>Pood</h4>
      </div>
   )
}