import { createSlice } from "@reduxjs/toolkit";

export const LenguageSlice = createSlice({
  name: "Lenguage",
  initialState: {
    idioms: ["Todos", "Español", "Inglés", "Francés", "Todos"],
    selectedLanguage: "Todos",
  },

  reducers: {
    setSelectedLenguage: (state, action) => {
      state.selectedLanguage = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSelectedLenguage } = LenguageSlice.actions;
