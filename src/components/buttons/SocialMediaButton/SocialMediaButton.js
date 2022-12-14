import classes from "./SocialMediaButton.module.css"


export default function SocialMediaButton(props) {
    return (
       <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
           <div className={classes.SocialMediaButton}>
               <img src={props.img} alt={props.alt}/>
           </div>
       </a>
    )
}