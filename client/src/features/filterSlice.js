import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  distance: "",
  unit: "",
  lat: null,
  lng: null,
  filterError: null,
  filteritemName: "",
  filterlocation: null, // Added to store user location
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateDistance(state, action) {
      state.distance = action.payload;
    },
    updateUnit(state, action) {
      state.unit = action.payload;
    },
    updatelat(state, action) {
      state.lat = action.payload;
    },
    updatelng(state, action) {
      state.lng = action.payload;
    },
    updateItemName(state, action) {
      state.filteritemName = action.payload;
    },
    updatelocation(state, action) {
      state.filterlocation = action.payload;
    },
    updateError(state, action) {
      state.filterError = action.payload;
    },
  },
});

export const {
  updateDistance,
  updateUnit,
  updatelat,
  updatelng,
  updateItemName,
  updatelocation,
  updateError,
} = filterSlice.actions;

export default filterSlice.reducer;
