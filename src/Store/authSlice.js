
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  accessToken: "",
  isAuthenticated: false,
  userData: null,
  email: "",
  refreshToken: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
      state.isAuthenticated = true;
    },
    setRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
      state.isAuthenticated = true;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    resetAuthState: state => {
      state.accessToken = "";
      state.isAuthenticated = false;
      state.userData = null;
      state.email = "";
    },
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.accessToken = action.payload.accessToken;
      state.userData = action.payload.userData;
      state.email = action.payload.email;
      state.refreshToken = action.payload.refreshToken;
    },
    logout: state => {
      state.isAuthenticated = false;
      state.accessToken = "";
      state.userData = null;
      state.email = "";
      state.refreshToken = "";
    },
  },
});

export const {
  setAccessToken,
  setRefreshToken,
  setUserData,
  resetAuthState,
  loginSuccess,
  logout,
} = authSlice.actions;

export default authSlice.reducer;
