import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    cars: JSON.parse(localStorage.getItem("favs")) || [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      const car = action.payload;
      const existingCar = state.cars.find((c) => c._id === car._id);

      if (!existingCar) {
        state.cars.push(car);
        localStorage.setItem("favs", JSON.stringify(state.cars)); // Обновляем localStorage
      }
    },
    removeFromFavorites: (state, action) => {
      const carId = action.payload;
      state.cars = state.cars.filter((car) => car._id !== carId);
      localStorage.setItem("favs", JSON.stringify(state.cars)); // Обновляем localStorage
    },
    resetFavorites: (state) => {
      state.cars = [];
      localStorage.removeItem("favs");
    },
  },
});

export const { addToFavorites, removeFromFavorites, resetFavorites } = favoritesSlice.actions;

// Selector для получения списка избранных автомобилей
export const selectFavorites = (state) => state.favorites.cars;

// Редьюсер для обработки экшенов
export const favoriteReducer = favoritesSlice.reducer;
