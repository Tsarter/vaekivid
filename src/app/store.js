// state managment -> https://github.com/netprince1210/eCommerce-React-Redux-Saga-KD/blob/master/src/index.jsx
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import storageSlice from "../features/storage/storageSlice";
import personalitySlice from "../features/personality/personalitySlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    storage: storageSlice,
    personality: personalitySlice,
  },
});
