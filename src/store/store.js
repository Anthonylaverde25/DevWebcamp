import { configureStore, createSlice } from "@reduxjs/toolkit";
import { LenguageSlice } from "./Filter/lenguageSlice";
import { cartSlice } from "./Cart/cartSlice";

export const store = configureStore({
  reducer: {
    Lenguage: LenguageSlice.reducer,
    Cart: cartSlice.reducer,
  },
});
