import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visible: false,
  currentGif: {},
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    hide: (state) => {
      state.visible = false;
    },
    show: (state, action) => {
      state.visible = true;
      state.gif = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { show, hide } = modalSlice.actions;

export default modalSlice.reducer;
