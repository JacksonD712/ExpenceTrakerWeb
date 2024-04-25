import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthneticationSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
