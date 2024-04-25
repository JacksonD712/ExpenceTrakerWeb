import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

// Load access token from local storage
const initialAccessToken = localStorage.getItem("accessToken");

// Thunk action creator for refreshing the access token
export const refreshAccessToken = createAsyncThunk(
  "auth/refreshAccessToken",
  async (_, {getState, dispatch}) => {
    const refreshToken = getState().auth.refreshToken;
    if (!refreshToken) {
      throw new Error("No refresh token available.");
    }

    try {
      const response = await axios.post(
        "https://backend-practice.euriskomobility.me/refresh-token",
        {refreshToken}
      );

      // Update the access token and refresh token in the state and local storage
      dispatch(loginSuccess(response.data));
    } catch (error) {
      // Handle refresh token failure, such as logging the user out
      dispatch(logout());
      throw error;
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: !!initialAccessToken, // Check if access token exists
    accessToken: initialAccessToken, // Load access token
    refreshToken: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      localStorage.setItem("accessToken", action.payload.accessToken);
    },
    logout: state => {
      state.isAuthenticated = false;
      state.accessToken = null;
      state.refreshToken = null;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("email");
    },
  },
  extraReducers: builder => {
    // Handle refreshAccessToken pending, fulfilled, and rejected actions
    builder.addCase(refreshAccessToken.fulfilled, (state, action) => {
      // Update the access token and refresh token in the state and local storage
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      localStorage.setItem("accessToken", action.payload.accessToken);
    });
  },
});

export const {loginSuccess, logout} = authSlice.actions;

export default authSlice.reducer;
