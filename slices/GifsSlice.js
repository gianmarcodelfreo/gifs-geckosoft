import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gifs: [],
};

export const GifsSlice = createSlice({
  name: "gifs",
  initialState,
  reducers: {
    setGifs: (state, action) => {
      state.gifs = action.payload;
    },
    concatGifs: (state, action) => {
      state.gifs = [...state.gifs, ...action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setGifs, concatGifs } = GifsSlice.actions;

export default GifsSlice.reducer;
