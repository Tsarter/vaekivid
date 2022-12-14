import classes from "./personalityTestPage.module.css";
import QuestionWithAnswers from "../components/questionWithAnswersComponent/QuestionWithAnswers";
import { useState } from "react";
import ButtonContinue from "../components/buttons/buttonContinue/ButtonContinue";
import sentinoExample from "../test_data/sentino_example";
// import { createSlice, configureStore } from "redux";
import { useNavigate } from "react-router-dom";
{
  /*Questions taken from https://sellavio.ee/test/eysencki-temperamenditest/ 
  api from https://rapidapi.com/bellatrics/api/sentino
  */
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

  /* const personalitySlice = (val) =>
    createSlice({
      name: "personalityText",
      initialState: {
        value: "",
      },
      reducers: {
        addText: (state) => {
          state.value += val;
        },
      },
    }); */

  const navigate = useNavigate();
  const toComponentB = (text) => {
    navigate("/iseloomutulemused", { state: text });
  };
  const handleSubmit = () => {
    let jsonToSend = { text: "", inventories: ["big5", "neo"], lang: "en" };
    for (const [key, value] of Object.entries(dict)) {
      jsonToSend.text += " " + key;
    }
    console.log("clicked");

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "a3cfb2e7e6msh4adb2d7cdb30727p19fcb5jsn002df6b5dfcb",
        "X-RapidAPI-Host": "sentino.p.rapidapi.com",
      },
      body: JSON.stringify(jsonToSend),
    };
    // toComponentB() for fake data
    toComponentB(sentinoExample);
    // fetch() for real data
    fetch("https://sentino.p.rapidapi.com/score/text", options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        toComponentB(response);
      })
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
      <div className={[classes.wave1, classes.spacer].join(" ")}></div>
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
          yes="I prefer to think things through calmly beforehand"
          no="I don't think my actions through calmly beforehand."
          text="Jah"
          text2="Ei"
          id="5"
          handleClick={handleClick}
        />
        <QuestionWithAnswers
          children="6.Kas pead alati oma lubadustest kinni, seda isegi siis, kui see võib Sulle ebamugavusi põhjustada?"
          yes="I always keep my promises, even when it might inconvenience me."
          no="I never keep my promises."
          text="Jah"
          text2="Ei"
          id="6"
          handleClick={handleClick}
        />
        <QuestionWithAnswers
          children="7.Kas Sinu meeleolu muutub tihti?"
          yes="My mood changes often."
          no="My mood doesn't change often."
          text="Jah"
          text2="Ei"
          id="7"
          handleClick={handleClick}
        />
        <QuestionWithAnswers
          children="8.Kas on õige, et tavaliselt räägid ja tegutsed Sa kiiresti ilma pikemalt järele mõtlemata?"
          yes="Usually, I speak and act quickly without much thought."
          no="I usually act slowly and think about things for a long time."
          text="Jah"
          text2="Ei"
          id="8"
          handleClick={handleClick}
        />
        <QuestionWithAnswers
          children="9.Kas Sulle on kunagi tundunud, et oled „lõputult õnnetu” inimene, ilma et selleks konkreetset põhjust oleks olnud?"
          yes='It seems to me that I am an "infinitely unhappy" person, for no particular reason that I know of.'
          no='I have not felt like an "endlessly unhappy" person.'
          text="Jah"
          text2="Ei"
          handleClick={handleClick}
        />
        <QuestionWithAnswers
          children="10.Kas on õige, et oled valmis väga pingutama selle nimel, et end teistele tõestada?"
          yes="I am ready to work hard to prove myself to others."
          no="I'm not prepared to go out of my way to prove myself to others."
          text="Jah"
          text2="Ei"
          handleClick={handleClick}
        />
        <QuestionWithAnswers
          children="11.Kas Sa kohmetud või muutud häbelikuks, kui tahad vestlusse astuda sümpaatse ja atraktiivse isikuga?"
          yes="I get shy or embarrassed when I want to strike up a conversation with someone nice and attractive."
          no="I like to strike up a conversation with a likeable and attractive person."
          text="Jah"
          text2="Ei"
          handleClick={handleClick}
        />
        <QuestionWithAnswers
          children="12.Kas aeg-ajalt juhtub, et Sa lähed endast välja ja vihastad?"
          yes="From time to time I lose my temper and get angry."
          no="I never lose my temper or get angry."
          text="Jah"
          text2="Ei"
          handleClick={handleClick}
        />
        <QuestionWithAnswers
          children="13.Kas tegutsed tihti hetkelise tuju ajel?"
          yes="I often act on the spur of the moment."
          no="I think several times before I act."
          text="Jah"
          text2="Ei"
          handleClick={handleClick}
        />
        <QuestionWithAnswers
          children="14.Kas Sind jälitavad tihti mõtted sellest, mida oleks tulnud teisiti teha või öelda?"
          yes="I am often haunted by thoughts of what I should have done differently."
          no="I never think about what I could have done differently."
          text="Jah"
          text2="Ei"
          handleClick={handleClick}
        />
        <QuestionWithAnswers
          children="15.Kas Sa eelistad head raamatut kohtumisele huvitavate inimestega?"
          yes="I prefer a good book to meeting interesting people."
          no="I prefer meeting interesting people to a good book."
          text="Jah"
          text2="Ei"
          handleClick={handleClick}
        />
        <QuestionWithAnswers
          children="16.Kas on õige, et Sind on lihtne solvata või endast välja viia?"
          yes="It's easy to offend me or make me lose my temper."
          no="I never get offended or lose my temper."
          text="Jah"
          text2="Ei"
          handleClick={handleClick}
        />
        <QuestionWithAnswers
          children="17.Kas Sulle meeldib sageli koos heade kaaslastega veidi lõõgastuda?"
          yes="I often like to relax a bit with good company."
          no="I prefer being alone."
          text="Jah"
          text2="Ei"
          handleClick={handleClick}
        />
        <QuestionWithAnswers
          children="18.Kas Sul tuleb tihti pähe niisuguseid mõtteid, mida sa meeleldi varjaksid teiste eest?"
          yes="I often have thoughts that I like to hide from others."
          no="I never have thoughts that I would like to hide from others."
          text="Jah"
          text2="Ei"
          handleClick={handleClick}
        />
        <QuestionWithAnswers
          children="19.Kas on õige, et Sa oled mõnikord nii energiast tulvil, et kõik lausa lendab käes, mõnikord aga muutud täiesti loiuks ja ükskõikseks ümbritseva suhtes?"
          yes="Sometimes I'm so full of energy that everything just flies out of my hands, and sometimes I become completely lazy and indifferent to my surroundings."
          no=""
          text="Jah"
          text2="Ei"
          handleClick={handleClick}
        />
        <QuestionWithAnswers
          children="20.Kas on õige, et eelistad omada vähem, kuid see-eest häid sõpru?"
          yes="I prefer to have fewer, but good friends."
          no="I prefer to have more, but not so good friends."
          text="Jah"
          text2="Ei"
          handleClick={handleClick}
        />
        <QuestionWithAnswers
          children="21.Kas Sa unistad sageli?"
          yes="I often dream."
          no="I never dream."
          text="Jah"
          text2="Ei"
          handleClick={handleClick}
        />
        <QuestionWithAnswers
          children="22.Kui Sinu peale karjutakse, kas vastad samaga?"
          yes="When people shout at me, I shout back."
          no="When people shout at me, I ignore them."
          text="Jah"
          text2="Ei"
          handleClick={handleClick}
        />
        <QuestionWithAnswers
          children="23.Kas Sind piinab sageli süütunne?"
          yes="I am often plagued by guilt."
          no="I am rarely plagued by guilt."
          text="Jah"
          text2="Ei"
          handleClick={handleClick}
        />
        <QuestionWithAnswers
          children="22.Kui Sinu peale karjutakse, kas vastad samaga?"
          yes="When people shout at me, I shout back."
          no="When people shout at me, I ignore them."
          text="Jah"
          text2="Ei"
          handleClick={handleClick}
        />
        <QuestionWithAnswers
          children="24.Kas pead kõiki oma harjumusi meeldivaiks ja headeks?"
          yes="I think all my habits are nice and good."
          no="I think none of my habits are nice or good."
          text="Jah"
          text2="Ei"
          handleClick={handleClick}
        />
        <QuestionWithAnswers
          children="22.Kui Sinu peale karjutakse, kas vastad samaga?"
          yes="When people shout at me, I shout back."
          no="When people shout at me, I ignore them."
          text="Jah"
          text2="Ei"
          handleClick={handleClick}
        />
        <QuestionWithAnswers
          children="25.Kas oled suuteline hästi lõbutsema ja end täiesti välja elama mõnel peol?"
          yes="I'm able to have a good time and totally live it up at some parties."
          no="I don't like going to parties."
          text="Jah"
          text2="Ei"
          handleClick={handleClick}
        />
        <QuestionWithAnswers
          children="26.Kas Sinu kohta võib väita, et üsna sageli on Su närvid viimase piirini pingul?"
          yes="For me, quite often my nerves are stretched to the limit."
          no="I very rarely get nervous.."
          text="Jah"
          text2="Ei"
          handleClick={handleClick}
        />

        <QuestionWithAnswers
          children="22.Kui Sinu peale karjutakse, kas vastad samaga?"
          yes="When people shout at me, I shout back."
          no="When people shout at me, I ignore them."
          text="Jah"
          text2="Ei"
          handleClick={handleClick}
        />
        <QuestionWithAnswers
          children="27.Kas Sind loetakse lõbusaks ja elavaks seltskonnakaaslaseks?"
          yes="I'm considered a fun and lively companion."
          no="I don't like to be social.."
          text="Jah"
          text2="Ei"
          handleClick={handleClick}
        />
        <QuestionWithAnswers
          children="28.Kui oled tegelenud millegi olulisega, kas kaalutled hiljem, mida oleks võinud teha paremini?"
          yes="When I've done something important, I don't reflect later on what I could have done better."
          no="When people shout at me, I ignore them."
          text="Jah"
          text2="Ei"
          handleClick={handleClick}
        />
        <QuestionWithAnswers
          children="29.Kas oled peamiselt vaikne, kui viibid seltskonnas?"
          yes="I'm mostly quiet when I'm in company."
          no="I'm mostly talkative when I'm in company."
          text="Jah"
          text2="Ei"
          handleClick={handleClick}
        />
        <QuestionWithAnswers
          children="30.Kas on vahel juhtunud, et räägid kuulujutte edasi?"
          yes="I have sometimes passed on rumours."
          no="I'm not going to pass on the rumours."
          text="Jah"
          text2="Ei"
          handleClick={handleClick}
        />
        <QuestionWithAnswers
          children="22.Kui Sinu peale karjutakse, kas vastad samaga?"
          yes="When people shout at me, I shout back."
          no="When people shout at me, I ignore them."
          text="Jah"
          text2="Ei"
          handleClick={handleClick}
        />
        <QuestionWithAnswers
          children="31.Kas on juhtunud, et Sa ei suuda sellepärast uinuda, et igasugused mõtted tulevad pähe?"
          yes="There have been times where I have been unable to sleep because all sorts of thoughts came into my head."
          no="Thought don't stop me from sleeping."
          text="Jah"
          text2="Ei"
          handleClick={handleClick}
        />
        <QuestionWithAnswers
          children="32.Kas on õige, et kui tahad millegi kohta teavet, siis eelistad seda otsida iseseisvalt, selle asemel, et sõpradelt-tuttavatelt küsima minna?"
          yes="I prefer to look for information on my own instead of asking friends for it."
          no="I prefer to ask friends for information instead of searching independently."
          text="Jah"
          text2="Ei"
          handleClick={handleClick}
        />
        <QuestionWithAnswers
          children="33.Kas Sul esineb tugevaid südamekloppimisi?"
          yes="I have severe palpitations."
          no="I don't experience severe heart palpitations."
          text="Jah"
          text2="Ei"
          handleClick={handleClick}
        />
        <QuestionWithAnswers
          children="34.Kas Sulle meeldib töö, mis nõuab tähelepanu ning keskendumist?"
          yes="I like work that requires attention and concentration."
          no="I don't like work that requires attention and concentration."
          text="Jah"
          text2="Ei"
          handleClick={handleClick}
        />
        <QuestionWithAnswers
          children="35.Kas käitud alati reeglite järgi, isegi kui teaksid, et keegi nende rikkumisest teada ei saa?"
          yes="I always obey the rules, even if I know that no one would know if I broke them."
          no="I don't always play by the rules if I know that no one will find out I'm breaking them."
          text="Jah"
          text2="Ei"
          handleClick={handleClick}
        />
        <QuestionWithAnswers
          children="36.Kas inimeste hulgas, keda Sa tead, on niisuguseid, kes Sulle ei meeldi?"
          yes="Among the people I know, there are some I don't like."
          no="Among the people I know, there are no people I don't like."
          text="Jah"
          text2="Ei"
          handleClick={handleClick}
        />
      </div>
      <div onClick={handleSubmit} className={classes.button}>
        <ButtonContinue />
      </div>
    </section>
  );
}
export default PersonalityTestPage;
