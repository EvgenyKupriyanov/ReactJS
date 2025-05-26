import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "toggle",
  initialState: {theme: "light",},
  reducers:{
    changeToggle: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light"}
  },
});

export const { changeToggle } = themeSlice.actions;

export default themeSlice.reducer;