import classes from "./SocialMediaButton.module.css"


export default function SocialMediaButton(props) {
    return (
        <div className={classes.SocialMediaButton}>
            <img src={props.img} alt={props.alt}/>
        </div>
    )
}