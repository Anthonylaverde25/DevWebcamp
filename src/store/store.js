import { configureStore, createSlice } from "@reduxjs/toolkit";
import { LenguageSlice } from "./Filter/lenguageSlice";
import { cartSlice } from "./Cart/cartSlice";
import { termSlice } from "./Filter";

export const store = configureStore({
  reducer: {
    Lenguage: LenguageSlice.reducer,
    Term: termSlice.reducer,
    Cart: cartSlice.reducer,
  },
});
