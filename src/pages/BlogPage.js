import facebook from "../assets/facebook.svg";
import linkedin from "../assets/linkedin.svg";
import youtube from "../assets/youtube.svg";
import twitter from "../assets/twitter.svg";
import tiktok from "../assets/tik_tok.svg";
import kiviilm from "../assets/kivine-ilm.svg";
import classes from "./BlogPage.module.css";
import SocialMediaButton from "../components/buttons/SocialMediaButton/SocialMediaButton";

function BlogPage() {
  return (
    <div className={classes.TopContainer}>
      <div className={classes.BlogPage}>
        <div className={classes.blogHeader}>
          <h1 className={classes.title}>
            Kümme ideed, mida teha kivise ilmaga
          </h1>
          <h2 className={`${classes.gray} ${classes.date}`}>Nov 09, 2022</h2>
          <div className={classes.Socials}>
            <div className={classes.gray}>jaga</div>
            <SocialMediaButton img={facebook} alt="facebook" />
            <SocialMediaButton img={linkedin} alt="linkedin" />
            <SocialMediaButton img={youtube} alt="youtube" />
            <SocialMediaButton img={twitter} alt="twitter" />
            <SocialMediaButton img={tiktok} alt="tiktok" />
          </div>
        </div>
        <div className={classes.mainContent}>
          <img src={kiviilm} alt="kivine ilm" />
          <p>
            Kõiki päevi pole õnnistatud päikesepaiste ja helesinise taevaga.
            Eestis elades ei tule tõenäoliselt mitte kellelegi suure üllatusena,
            et vahel (või tihti) sajab ka kive. Kuigi kivised päevad võivad
            tunduda tüütuna, pole vaja oma pead norgu lasta, sest tegelikult
            pakuvad need ka palju toredaid võimalusi oma aja sisustamiseks.
            Sellest blogipostitusest leiad kümme tegevust, mida ette võtta siis,
            kui väljas lihtsalt kallab ja kallab.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
