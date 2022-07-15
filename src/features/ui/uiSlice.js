import { createSlice } from "@reduxjs/toolkit";
export const uiSlice = createSlice({
  name: "ui",
  initialState: { loading: false, msgError: null },
  reducers: {
    setError: (state, action) => {
      state.msgError = action.payload;
    },
    removeError: (state) => {
      state.msgError = null;
    },
  },
});

export const { setError, removeError } = uiSlice.actions;
export default uiSlice.reducer;
