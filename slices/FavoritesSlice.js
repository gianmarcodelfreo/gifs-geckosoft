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
    },
    addFavoritedItem: (state, action) => {
      state.gifs.push(action.payload);
    },
    setFavoritesItems: (state, action) => {
      state.gifs = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { removeFavoritedItem, addFavoritedItem, setFavoritesItems } = FavoritesSlice.actions;

export default FavoritesSlice.reducer;
