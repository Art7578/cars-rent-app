import { createSlice } from "@reduxjs/toolkit";

const getInitialFavorites = () => {
  const userId = localStorage.getItem('userId');
  return JSON.parse(localStorage.getItem(`favs_${userId}`)) || [];
};

const initialState = {
  cars: getInitialFavorites(),
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const car = action.payload;
      const existingCar = state.cars.find((c) => c._id === car._id);

      if (!existingCar) {
        state.cars.push(car);
        localStorage.setItem(`favs_${localStorage.getItem('userId')}`, JSON.stringify(state.cars)); 
      }
    },
    removeFromFavorites: (state, action) => {
      const carId = action.payload;
      state.cars = state.cars.filter((car) => car._id !== carId);
      localStorage.setItem(`favs_${localStorage.getItem('userId')}`, JSON.stringify(state.cars)); 
    },
    setFavorites: (state, action) => {
      state.cars = action.payload;
      localStorage.setItem(`favs_${localStorage.getItem('userId')}`, JSON.stringify(state.cars));
    }
  },
});

export const { addToFavorites, removeFromFavorites, setFavorites } = favoritesSlice.actions;

export const selectFavorites = (state) => state.favorites.cars;

export const favoriteReducer = favoritesSlice.reducer;