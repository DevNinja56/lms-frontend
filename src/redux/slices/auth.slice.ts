import { verifyUser } from "@actions/verify-user";
import { createSlice } from "@reduxjs/toolkit";
import { userType } from "@utils/Types";

export interface authStateType {
  user: userType;
  isAuthenticated: boolean | null;
  isLoading: boolean;
  error: string | null;
}

export const initialState: authStateType = {
  user: {
    name: "",
    email: "",
    bio_desc: "",
    role: "",
    dob: null,
    gender: null,
    avatar: null,
    documents: [],
    timezone: null,
    address: null,
    password: "",
    phone_number: "",
    createdAt: "",
    updatedAt: "",
    sms_otp: "",
    sms_otp_created_at: "",
    sms_otp_expires_at: "",
    id: "",
  },
  isAuthenticated: null,
  isLoading: false,
  error: null,
};

const authUserInfo = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = null;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
    loggedIn: (state) => {
      state.isAuthenticated = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(verifyUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(verifyUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload.data;
        state.error = null;
      })
      .addCase(verifyUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

export const { updateUser, logout, loggedIn } = authUserInfo.actions;
export default authUserInfo.reducer;
