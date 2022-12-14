import { createSlice, current } from "@reduxjs/toolkit";
import cartItems from "../../test_data/cartItems";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  delivery_price: 0,
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
    setDeliveryPrice: (state, { payload }) => {
      if (payload && payload === 0) {
        state.delivery_price = 0;
      }
      if (payload && payload != state.delivery_price) {
        state.delivery_price = payload;
      }
      state.delivery_price = payload;
    },
    calculateTotals: (state, { payload }) => {
      console.log(payload);
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += 1;
        total += item.fields.price;
      });
      state.amount = amount;
      state.total = Math.round((total + state.delivery_price) * 1000 + Number.EPSILON) / 1000;
    },
  },
});

export const {
  clearCart,
  removeItem,
  addItem,
  calculateTotals,
  setDeliveryPrice,
} = cartSlice.actions;

export default cartSlice.reducer;
