import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  personalRocks: [],
};

const personalRocksSlice = createSlice({
  name: "personality",
  initialState,
  reducers: {
    addPersonalRock: (state, { payload }) => {
      if (
        !state.personalRocks.some((obj) => obj.id === payload.id) &&
        payload
      ) {
        state.personalRocks.push(payload);
      } else {
        console.log("rock already in personalRocks");
      }
      //
      //console.log(state[payload[0]]);*/
    },
  },
});

export const { addPersonalRock } = personalRocksSlice.actions;

export default personalRocksSlice.reducer;
