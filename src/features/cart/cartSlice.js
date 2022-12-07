import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from "../../test_data/cartItems";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, { payload }) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== payload);
    },
    addItem: (state, { payload }) => {
      state.cartItems.push(payload);
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += 1;
        total += item.fields.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

//console.log(cartSlice);
export const { clearCart, removeItem, addItem, calculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
