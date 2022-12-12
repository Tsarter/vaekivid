import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  adventurousness: { name: "Seiklushimu", value: 0, color: "#CB19F8" },
  intellect: { name: "Intelligentsus", value: 0, color: "#E3EC80" },
  assertiveness: { name: "Enesekindlus", value: 0, color: "#EC84DB" },
  cheerfulness: { name: "Rõõmsameelsus", value: 0, color: "#9F84EC" },
  cooperation: { name: "Koostöö", value: 0, color: "#58BA2A" },
  depression: { name: "Depressioon", value: 0, color: "#2A5BBA" },
  dutifulness: { name: "Kohusetundlikkus", value: 0, color: "#65686D" },
  emotionality: { name: "Emotsionaalsus", value: 0, color: "#9D2ABA" },
  friendliness: { name: "Sõbralikkus", value: 0, color: "#E35A2E" },
  gregariousness: { name: "Seltskondlikkus", value: 0, color: "#6CC2DD" },
  imagination: { name: "Kujutlusvõime", value: 0, color: "#FAAB78" },
  liberalism: { name: "Liberaalus", value: 0, color: "#e924b5" },
  modesty: { name: "Tagasihoidlikkus", value: 0, color: "#7F669D" },
  orderliness: { name: "Korrektsus", value: 0, color: "#FF8787" },
  "self-discipline:": {
    name: "Enesedistsipliin",
    value: 0,
    color: "#9363f1",
  },
};

const personalitySlice = createSlice({
  name: "personality",
  initialState,
  reducers: {
    increaseValue: (state, { payload }) => {
      if (state[payload].value < 5) {
        state[payload].value++;
      }
    },
    decreaseValue: (state, { payload }) => {
      if (state[payload].value > 0) {
        state[payload].value--;
      }
    },
    setPersonalityValue: (state, { payload }) => {
      if (payload[0] in state) {
        state[payload[0]].value = Math.round(payload[1] * 5 + Number.EPSILON);
      }
      //
      //console.log(state[payload[0]]);*/
    },
  },
});

export const { increaseValue, decreaseValue, setPersonalityValue } =
  personalitySlice.actions;

export default personalitySlice.reducer;
