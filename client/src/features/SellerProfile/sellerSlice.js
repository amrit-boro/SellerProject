import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sellerName: "Amrit Boro",
  sellerAbout: "write aobut what you gonna sell",
  sellerEmail: "yahoo@com",
  sellerPhone: "9123432455",
  sellerAddress: "Guwahati",
  sellerPanCard: "123456789",
  sellerIFSC: "1DDFC2123G",
  sellerAgreement: false,
  sellerAccountNumber: "1234567890",
  sellerAccountHolder: "Amrit Boro",
};

const sellerSlice = createSlice({
  name: "seller",
  initialState,
  reducers: {
    updateSellerName(state, action) {
      state.sellerName = action.payload;
    },

    updateSellerAbout(state, action) {
      state.sellerAbout = action.payload;
    },
    updateSellerEmail(state, action) {
      state.sellerEmail = action.payload;
    },
    updateSellerPhone(state, action) {
      state.sellerPhone = action.payload;
    },
    updateSellerAddress(state, action) {
      state.sellerAddress = action.payload;
    },
    updateSellerPanCard(state, action) {
      state.sellerPanCard = action.payload;
    },
    updateSellerIFSC(state, action) {
      state.sellerIFSC = action.payload;
    },
    updateSellerAgreement(state, action) {
      state.sellerAgreement = action.payload;
    },
    updateSellerAccountHolder(state, action) {
      state.sellerAccountHolder = action.payload;
    },
    updateSellerAccountNumber(state, action) {
      state.sellerAccountNumber = action.payload;
    },
  },
});

export const {
  updateSellerName,
  updateSellerAbout,
  updateSellerEmail,
  updateSellerPhone,
  updateSellerAddress,
  updateSellerPanCard,
  updateSellerIFSC,
  updateSellerAgreement,
  updateSellerAccountHolder,
  updateSellerAccountNumber,
} = sellerSlice.actions;

export default sellerSlice.reducer;
