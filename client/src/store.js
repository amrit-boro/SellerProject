import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import sellerReducer from "./features/SellerProfile/sellerSlice";
import searchSlice from "./features/searchSlice";
import filterSlice from "./features/filterSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    seller: sellerReducer,
    search: searchSlice,
    filter: filterSlice, // Assuming you have a filterSlice as well
  },
});

export default store;
