import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brand: "",
  priceFrom: "",
  priceTo: "",
  mileageFrom: "",
  mileageTo: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter(state, action) {
      console.log("Applying filter:", action.payload); // Отладочный вывод
      return { ...state, ...action.payload };
    },
    resetFilter(state) {
      console.log("Resetting filter"); // Отладочный вывод
      return initialState;
    },
  },
});

export const { setFilter, resetFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;