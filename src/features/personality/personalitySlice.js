import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Seiklushimu: { value: 0, color: "#CB19F8" },
  Intelligentsus: { value: 0, color: "#E3EC80" },
  Enesekindlus: { value: 0, color: "#EC84DB" },
  Rõõmsameelsus: { value: 0, color: "#9F84EC" },
  Koostöö: { value: 0, color: "#58BA2A" },
  Depressioon: { value: 0, color: "#2A5BBA" },
  Kohusetundlikkus: { value: 0, color: "#65686D" },
  Emotsionaalsus: { value: 0, color: "#9D2ABA" },
  Sõbralikkus: { value: 0, color: "#E35A2E" },
  Seltskondlikkus: { value: 0, color: "#6CC2DD" },
  Kujutlusvõime: { value: 0, color: "#6CC2DD" },
  Liberaalus: { value: 0, color: "#6CC2DD" },
  Tagasihoidlikkus: { value: 0, color: "#6CC2DD" },
  Korrektsus: { value: 0, color: "#6CC2DD" },
  Enesedistsipliin: { value: 0, color: "#6CC2DD" },
};

const personalitySlice = createSlice({
  name: "cart",
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
    setValue: (state, { payload }) => {
      state[payload.personality_type] = payload.personality_value;
    },
  },
});

export const { increaseValue, decreaseValue, setValue } =
  personalitySlice.actions;

export default personalitySlice.reducer;
