import { configureStore } from "@reduxjs/toolkit";
import { catalogReducer } from "./slices/catalog";
import { authReducer } from "./slices/auth";

const store = configureStore({
    reducer: {
        catalog: catalogReducer,
        auth: authReducer
    }
});

export default store;