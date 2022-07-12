import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {
    login: (state, action) => {
      console.log(action.payload)
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
      };
    },
    logout: (state) => {
      return {};
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
