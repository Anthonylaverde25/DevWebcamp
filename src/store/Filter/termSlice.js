import { createSlice } from "@reduxjs/toolkit";

export const termSlice = createSlice({
  name: "term",
  initialState: {
    searchTerm: "",
  },

  reducers: {
    setSearchTerm: (state, action) => {
      if (action.payload.length >= 2) {
        state.searchTerm = action.payload;
      } else {
        state.searchTerm = 0;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSearchTerm } = termSlice.actions;
