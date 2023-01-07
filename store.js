import { configureStore } from "@reduxjs/toolkit";
import FavoritesSlice from "./slices/FavoritesSlice";
import GifsSlice from "./slices/GifsSlice";
import ModalSlice from "./slices/ModalSlice";

export const store = configureStore({
  reducer: {
    modal: ModalSlice,
    gifs: GifsSlice,
    favorites: FavoritesSlice,
  },
});
