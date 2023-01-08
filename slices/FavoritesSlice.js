import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gifs: [],
};

export const FavoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    removeFavoritedItem: (state, action) => {
      const item = action.payload;

      state.gifs = state.gifs.filter((gif) => gif.id !== item.id);
      localStorage.setItem("gifs", JSON.stringify(state.gifs));
    },
    addFavoritedItem: (state, action) => {
      state.gifs.push(action.payload);
      localStorage.setItem("gifs", JSON.stringify(state.gifs));
    },
    setFavoritesItems: (state, action) => {
      state.gifs = action.payload;
    },
  },
});

export const { removeFavoritedItem, addFavoritedItem, setFavoritesItems } = FavoritesSlice.actions;

export default FavoritesSlice.reducer;
