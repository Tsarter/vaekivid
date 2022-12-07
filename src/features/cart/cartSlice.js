import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from "../../test_data/cartItems";

//patSR1z3tQOiHd1zW.ecb5f0d5d7e6541ef63adda40e3bcf54b7868a928b8a8df6cc4055190d056af5
const url = "https://course-api.com/react-useReducer-cart-project";

const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
  isLoading: true,
};

export const getCartItems = createAsyncThunk("cart/getCartItems", () => {
  return fetch(url)
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
});
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
  },
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cartItems = action.payload;
    },
    [getCartItems.rejected]: (state) => {
      state.isLoading = false;
      console.log("err");
    },
  },
});

//console.log(cartSlice);
export const { clearCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
