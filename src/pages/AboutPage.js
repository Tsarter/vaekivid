import classes from "./AboutPage.module.css"

function AboutPage() {

    return (
       <div className={classes.bigContainer}>
          <section className={classes.smallContainer}>
              <h1>Meie eesmärk</h1>
              <p>
                 Väekivid on esimene Euroopa kivinduse superrakendus. Võitleme paremate kivide eest ja
                 välismaa kivide vastu, pakkudes paremat alternatiivi igale otstarbele, mida kivi
                 teenindab - sealhulgas kiviteenus, ühiskasutatavad kivid ja tõukekivi ning toidu
                 ja toidukaupade kohaletoomine...
              </p>
          </section>
          <section className={classes.smallContainer}>
             <h1>100% kodumaine</h1>
             <p>
                Usume, et enamik kivisid ei nõua isiklikku kivi kasutamist.
                Väekivis ehitame tulevikku, kus inimesed on sunnitud liikumiseks kivi ostma.
                Seal, kus inimestel on vabadus soovi korral kivi kasutada, valides igaks elujuhtumiks
                sobivaima kivi.
             </p>
          </section>
       </div>

    )
}
export default AboutPage;