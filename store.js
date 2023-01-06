import { configureStore } from "@reduxjs/toolkit";
import FavoritesSlice from "./slices/FavoritesSlice";
import ModalSlice from "./slices/ModalSlice";

export const store = configureStore({
  reducer: {
    modal: ModalSlice,
    favorites: FavoritesSlice,
  },
});
