import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import sellerReducer from "./features/SellerProfile/sellerSlice";
import searchSlice from "./features/searchSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    seller: sellerReducer,
    search: searchSlice,
  },
});

export default store;
