import { createSlice } from "@reduxjs/toolkit";

type LangState = {
  language: string;
  dir: string;
};

const initialState: LangState = {
  language: "en",
  dir: "ltr",
};

const laguSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    handleChangeLanguage: (state, action) => {
      state.language = action.payload;
      state.dir = action.payload === "en" ? "ltr" : "rtl";
    },
  },
});

export const { handleChangeLanguage } = laguSlice.actions;
export default laguSlice.reducer;
