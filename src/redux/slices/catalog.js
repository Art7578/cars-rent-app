import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../services/API';

export const fetchCatalog = createAsyncThunk('/catalog/fetchCatalog', async () => {
    const { data } = await axios.get('/catalog');
    return data;
})

const initialState = {
    catalog: {
        items: [],
        status: 'loading'
    }
};

const catalogSlice = createSlice({
    name: "catalog",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCatalog.pending, (state) => {
                state.catalog.items = [];
                state.catalog.status = 'loading';
            })
            .addCase(fetchCatalog.fulfilled, (state, action) => {
                state.catalog.items = action.payload;
                state.catalog.status = 'loaded';
            })
            .addCase(fetchCatalog.rejected, (state) => {
                state.catalog.items = [];
                state.catalog.status = 'error';
            });
    }
});

export const catalogReducer = catalogSlice.reducer;



