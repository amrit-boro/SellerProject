import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchName: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    updateSearchName(state, action) {
      state.searchName = action.payload;
    },
  },
});

export const { updateSearchName } = searchSlice.actions;

export default searchSlice.reducer;
