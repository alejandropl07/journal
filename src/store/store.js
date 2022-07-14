import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";

// const middleware = [thunk];

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
