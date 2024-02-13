import { configureStore } from "@reduxjs/toolkit";
import { catalogReducer } from "./slices/catalog";
import { authReducer } from "./slices/auth";
import { favoriteReducer } from "./slices/favorites";

const store = configureStore({
    reducer: {
        favorites: favoriteReducer,
        catalog: catalogReducer,
        auth: authReducer
    }
});

export default store;