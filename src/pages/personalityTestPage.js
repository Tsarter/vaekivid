import classes from "./personalityTestPage.module.css";
import QuestionWithAnswers from "../components/questionWithAnswersComponent/QuestionWithAnswers";
import { useState } from "react";
import ButtonContinue from "../components/buttons/buttonContinue/ButtonContinue";

{
  /*Questions taken from https://sellavio.ee/test/eysencki-temperamenditest/ */
}

function PersonalityTestPage() {
  const [dict, setCount] = useState({});
  const handleClick = (valuePair) => {
    // 👇️ take parameter passed from Child component
    setCount((currentDict) => {
      currentDict[valuePair[0]] = valuePair[1];
      return currentDict;
    });
  };
  const handleSubmit = () => {
    let jsonToSend = { text: "", inventories: ["big5", "neo"], lang: "en" };
    for (const [key, value] of Object.entries(dict)) {
      jsonToSend.text += " " + key;
    }

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "a3cfb2e7e6msh4adb2d7cdb30727p19fcb5jsn002df6b5dfcb",
        "X-RapidAPI-Host": "sentino.p.rapidapi.com",
      },
      body: JSON.stringify(jsonToSend),
    };
    fetch("https://sentino.p.rapidapi.com/score/text", options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };
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
          yes="I often feel the need for new experiences."
          no="I don't often feel the desire for new experiences."
          text="Jah"
          text2="Ei"
          handleClick={handleClick}
        />
        <QuestionWithAnswers
          children="2.Kas tunned sageli, et vajad sõpru, kes sind mõistaksid ja lohutaksid?"
          yes="I often feel that I need friends to understand and comfort me."
          no="I never feel that I need friends to understand or comfort me."
          text="Jah"
          text2="Ei"
          handleClick={handleClick}
        />
        <QuestionWithAnswers
          children="3.Kas pead end muretuks inimeseks - selliseks, keda on raske solvata?"
          yes="I think of myself as a carefree person - someone who is hard to offend."
          no="I think of myself as a troubled person - someone who is easily offended."
          text="Jah"
          text2="Ei"
          handleClick={handleClick}
        />
        <QuestionWithAnswers
          children="4.Kas Sul on raske leppida „ei” vastusega ning oma soovidest ja plaanidest loobuda?"
          yes="It's hard for me to take no for an answer and give up my wishes and plans."
          no="It's easy for me to take no for an answer and give up my wishes and plans."
          text="Jah"
          text2="Ei"
          handleClick={handleClick}
        />
        <QuestionWithAnswers
          children="5.Kas eelistad oma toiminguid tehes eelnevalt rahulikult läbi mõelda?"
          yes=""
          no=""
          text="Jah"
          text2="Ei"
          id="5"
          handleClick={handleClick}
        />
        <QuestionWithAnswers
          children="6.Kas pead alati oma lubadustest kinni, seda isegi siis, kui see võib Sulle ebamugavusi põhjustada?"
          yes=""
          no=""
          text="Jah"
          text2="Ei"
          id="6"
          handleClick={handleClick}
        />
        <QuestionWithAnswers
          children="7.Kas Sinu meeleolu muutub tihti?"
          yes=""
          no=""
          text="Jah"
          text2="Ei"
          id="7"
          handleClick={handleClick}
        />
        <QuestionWithAnswers
          children="8.Kas on õige, et tavaliselt räägid ja tegutsed Sa kiiresti ilma pikemalt järele mõtlemata?"
          text="Jah"
          text2="Ei"
          id="8"
          handleClick={handleClick}
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
      <div onClick={handleSubmit} className={classes.button}>
        <ButtonContinue onClick={handleSubmit} />
      </div>
    </section>
  );
}
export default PersonalityTestPage;
