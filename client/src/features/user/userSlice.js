import { createSlice } from "@reduxjs/toolkit";
import { FaS } from "react-icons/fa6";

const initialState = {
  username: "",
  phoneNumber: "912323298",
  email: "amrit@yahoo.com",
  password: "amrit1999",
  confirmPassword: "amrit1999",
  isAuthenticate: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
      state.isAuthenticate = true;
    },
    updatePhoneNumber(state, action) {
      state.phoneNumber = action.payload;
    },
    updateEmail(state, action) {
      state.email = action.payload;
    },
    updatePassword(state, action) {
      state.password = action.payload;
    },
    updateConfirm(state, action) {
      state.confirmPassword = action.payload;
    },
  },
});

export const { updateName, setUser } = userSlice.actions;
export default userSlice.reducer;
