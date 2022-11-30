import classes from "./personalityTestPage.module.css";
import QuestionWithAnswers from "../components/questionWithAnswersComponent/QuestionWithAnswers";

{
  /*Questions taken from https://sellavio.ee/test/eysencki-temperamenditest/ */
}

function PersonalityTestPage() {
  return (
    <section className={classes.section}>
      <div className={classes.instructions}>
        <h1>Juhised</h1>
        <p>
          Testi küsimused puudutavad Sinu käitumist ja tundeid. Vastamisel püüa
          otsustada, kas JAH või EI kirjeldab seda, kuidas tavaliselt käitud või
          tunned. Püüa vastata võimalikult ladusalt, ilma liiga pikalt küsimuste
          üle vaagimata. Õigeid ega valesid vastuseid ei ole. Tegemist pole
          intelligentsuse või võimekuse testiga, vaid võimalusega hinnata,
          kuidas me käitume.
        </p>
      </div>
      <div className={classes.questionsSection}>
        <QuestionWithAnswers
          children="1. Kas sa tunned tihti soovi uute elamuste järele, enese „väljaelamise” järele?"
          text="Jah"
          text2="Ei"
        />
        <QuestionWithAnswers
          children="2.Kas tunned sageli, et vajad sõpru, kes sind mõistaksid ja lohutaksid?"
          text="Jah"
          text2="Ei"
        />
        <QuestionWithAnswers
          children="3.Kas pead end muretuks inimeseks – selliseks, keda on raske solvata?"
          text="Jah"
          text2="Ei"
        />
        <QuestionWithAnswers
          children="4.Kas Sul on raske leppida „ei” vastusega ning oma soovidest ja plaanidest loobuda?"
          text="Jah"
          text2="Ei"
        />
        <QuestionWithAnswers
          children="5.Kas eelistad oma toiminguid tehes eelnevalt rahulikult läbi mõelda?"
          text="Jah"
          text2="Ei"
        />
        <QuestionWithAnswers
          children="6.Kas pead alati oma lubadustest kinni, seda isegi siis, kui see võib Sulle ebamugavusi põhjustada?"
          text="Jah"
          text2="Ei"
        />
        <QuestionWithAnswers
          children="7.Kas Sinu meeleolu muutub tihti?"
          text="Jah"
          text2="Ei"
        />
        <QuestionWithAnswers
          children="8.Kas on õige, et tavaliselt räägid ja tegutsed Sa kiiresti ilma pikemalt järele mõtlemata?"
          text="Jah"
          text2="Ei"
        />
        <QuestionWithAnswers
          children="9.Kas Sulle on kunagi tundunud, et oled „lõputult õnnetu” inimene, ilma et selleks konkreetset põhjust oleks olnud?"
          text="Jah"
          text2="Ei"
        />
        <QuestionWithAnswers
          children="10.Kas on õige, et oled valmis väga pingutama selle nimel, et end teistele tõestada?"
          text="Jah"
          text2="Ei"
        />
        <QuestionWithAnswers
          children="11.Kas Sa kohmetud või muutud häbelikuks, kui tahad vestlusse astuda sümpaatse ja atraktiivse isikuga?"
          text="Jah"
          text2="Ei"
        />
        <QuestionWithAnswers
          children="12.Kas aeg-ajalt juhtub, et Sa lähed endast välja ja vihastad?"
          text="Jah"
          text2="Ei"
        />
        <QuestionWithAnswers
          children="13.Kas tegutsed tihti hetkelise tuju ajel?"
          text="Jah"
          text2="Ei"
        />
        <QuestionWithAnswers
          children="14.Kas Sind jälitavad tihti mõtted sellest, mida oleks tulnud teisiti teha või öelda?"
          text="Jah"
          text2="Ei"
        />
        <QuestionWithAnswers
          children="15.Kas Sa eelistad head raamatut kohtumisele huvitavate inimestega?"
          text="Jah"
          text2="Ei"
        />
        <QuestionWithAnswers
          children="16.Kas on õige, et Sind on lihtne solvata või endast välja viia?"
          text="Jah"
          text2="Ei"
        />
        <QuestionWithAnswers
          children="17.Kas Sulle meeldib sageli koos heade kaaslastega veidi lõõgastuda?"
          text="Jah"
          text2="Ei"
        />
        <QuestionWithAnswers
          children="18.Kas Sul tuleb tihti pähe niisuguseid mõtteid, mida sa meeleldi varjaksid teiste eest?"
          text="Jah"
          text2="Ei"
        />
        <QuestionWithAnswers
          children="19.Kas on õige, et Sa oled mõnikord nii energiast tulvil, et kõik lausa lendab käes, mõnikord aga muutud täiesti loiuks ja ükskõikseks ümbritseva suhtes?"
          text="Jah"
          text2="Ei"
        />
        <QuestionWithAnswers
          children="20.Kas on õige, et eelistad omada vähem, kuid see-eest häid sõpru?"
          text="Jah"
          text2="Ei"
        />
        <QuestionWithAnswers
          children="21.Kas Sa unistad sageli?"
          text="Jah"
          text2="Ei"
        />
        <QuestionWithAnswers
          children="22.Kui Sinu peale karjutakse, kas vastad samaga?"
          text="Jah"
          text2="Ei"
        />
        <QuestionWithAnswers
          children="23.Kas Sind piinab sageli süütunne?"
          text="Jah"
          text2="Ei"
        />
        <QuestionWithAnswers
          children="24.Kas pead kõiki oma harjumusi meeldivaiks ja headeks?"
          text="Jah"
          text2="Ei"
        />
        <QuestionWithAnswers
          children="25.Kas oled suuteline hästi lõbutsema ja end täiesti välja elama mõnel peol?"
          text="Jah"
          text2="Ei"
        />
        <QuestionWithAnswers
          children="26.Kas Sinu kohta võib väita, et üsna sageli on Su närvid viimase piirini pingul?"
          text="Jah"
          text2="Ei"
        />
        <QuestionWithAnswers
          children="27.Kas Sind loetakse lõbusaks ja elavaks seltskonnakaaslaseks?"
          text="Jah"
          text2="Ei"
        />
      </div>
    </section>
  );
}
export default PersonalityTestPage;
