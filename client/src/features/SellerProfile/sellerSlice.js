import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sellername: "",
  sellerEmail: "",
  sellerPassword: "",
  sellerPhoneNumber: "",
  sellerAddress1: "",
  sellerAltPhNo: "",
};

const sellerSlice = createSlice({
  name: "seller",
  initialState,
  reducers: {
    updateSellerName(state, action) {
      state.sellername = action.payload;
    },
    updateSellerEmail(state, action) {
      state.sellerEmail = action.payload;
    },
    updateSellerPassword(state, action) {
      state.sellerPassword = action.payload;
    },
    updateSellerPhoneNo(state, action) {
      state.sellerPhoneNumber = action.payload;
    },
    updateSellerAddress1(state, action) {
      state.sellerAddress1 = action.payload;
    },
    updateSellerAltPhNo(state, action) {
      state.sellerAltPhNo = action.payload;
    },
  },
});

export const {
  updateSellerName,
  updateSellerEmail,
  updateSellerPassword,
  updateSellerPhoneNo,
  updateSellerAddress1,
  updateSellerAltPhNo,
} = sellerSlice.actions;

export default sellerSlice.reducer;
