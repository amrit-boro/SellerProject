import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sellername: "",
  sellerPhoneNumber: "",
  sellerAbout: "",
};

const sellerSlice = createSlice({
  name: "seller",
  initialState,
  reducers: {
    updateSellerName(state, action) {
      state.sellername = action.payload;
    },

    updateSellerPhoneNo(state, action) {
      state.sellerPhoneNumber = action.payload;
    },

    updateSellerAbout(state, action) {
      state.sellerAbout = action.payload;
    },
  },
});

export const { updateSellerName, updateSellerPhoneNo, updateSellerAbout } =
  sellerSlice.actions;

export default sellerSlice.reducer;
