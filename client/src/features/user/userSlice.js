import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  phoneNumber: "",
  userPhoto: null,
  email: "",
  password: "",
  confirmPassword: "",
  isAuthenticate: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserName(state, action) {
      state.username = action.payload;
      state.isAuthenticate = true;
    },
    updatePhoneNumber(state, action) {
      state.phoneNumber = action.payload;
    },
    updateUserEmail(state, action) {
      state.email = action.payload;
    },
    updatePassword(state, action) {
      state.password = action.payload;
    },
    updateConfirm(state, action) {
      state.confirmPassword = action.payload;
    },
    updateUserPhoto(state, action) {
      state.userPhoto = action.payload;
    },
  },
});

export const { updateUserName, updateUserPhoto, updateUserEmail } =
  userSlice.actions;
export default userSlice.reducer;
