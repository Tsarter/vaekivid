import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import Airtable from "airtable";
//patSR1z3tQOiHd1zW.ecb5f0d5d7e6541ef63adda40e3bcf54b7868a928b8a8df6cc4055190d056af5
const base = new Airtable({
  apiKey:
    "patSR1z3tQOiHd1zW.ecb5f0d5d7e6541ef63adda40e3bcf54b7868a928b8a8df6cc4055190d056af5",
}).base("appP9s3SyFZpBQ0BY");
var credentials =
  "patSR1z3tQOiHd1zW.ecb5f0d5d7e6541ef63adda40e3bcf54b7868a928b8a8df6cc4055190d056af5";
var auth = { Authorization: `Bearer ${credentials}` };

const initialState = { storage: [] };

export const getStorageItems = createAsyncThunk(
  "storage/getStorageItems",
  () => {
    return fetch(
      "https://api.airtable.com/v0/appP9s3SyFZpBQ0BY/Features?&view=viw9N8AUXpuOQVcos",
      { headers: auth }
    )
      .then((resp) => resp.json())
      .catch((err) => console.log(err));
  }
);
const storageSlice = createSlice({
  name: "storage",
  initialState,
  reducers: {
    removeFromStorage: (state, { payload }) => {
      state.storage = state.storage.filter((item) => item.id !== payload);
    },
    addToStorage: (state, { payload }) => {
      state.storage.push(payload);
    },
  },
  extraReducers: {
    [getStorageItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getStorageItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log("a", action.payload);
      state.storage = action.payload.records;
    },
    [getStorageItems.rejected]: (state) => {
      state.isLoading = false;
      console.log("err");
    },
  },
});

//console.log(cartSlice);
export const { removeFromStorage, addToStorage } = storageSlice.actions;

export default storageSlice.reducer;
