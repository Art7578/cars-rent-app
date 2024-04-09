import { configureStore } from "@reduxjs/toolkit";
import { catalogReducer } from "./slices/catalog";
import { authReducer } from "./slices/auth";
import { favoriteReducer } from "./slices/favorites";
import { filterReducer } from "./slices/filter";

const store = configureStore({
    reducer: {
        favorites: favoriteReducer,
        catalog: catalogReducer,
        auth: authReducer,
        filter: filterReducer
    }
});

export default store;