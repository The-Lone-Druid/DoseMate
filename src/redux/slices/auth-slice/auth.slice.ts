import { createSlice } from "@reduxjs/toolkit";
import { UserInfo } from "firebase/auth";
import { RootState } from "../../store";

interface AuthSlice extends UserInfo {}

const initialState: AuthSlice = {
  displayName: "",
  email: "",
  phoneNumber: "",
  photoURL: "",
  providerId: "",
  uid: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      return action.payload;
    },
    clearAuth: (state) => {
      return initialState;
    },
  },
});

export const { setAuth, clearAuth } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;
export const selectAuthUid = (state: RootState) => state.auth.uid;

export default authSlice.reducer;
