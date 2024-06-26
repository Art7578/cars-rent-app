import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../services/API';

export const fetchCatalog = createAsyncThunk('/catalog/fetchCatalog', async ({ page, itemsPerPage, filter }) => {
    const { data } = await axios.get('/catalog', { params: { page, itemsPerPage, ...filter } });
    return data;
});

export const decreaseCurrentPage = () => ({
    type: 'catalog/decreaseCurrentPage',
});


const initialState = {
    catalog: {
        items: [],
        status: 'loading',
        currentPage: 1,
        itemsPerPage: 8,
        hasMore: true 
    },
    filteredCars: []
};


const catalogSlice = createSlice({
    name: "catalog",
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.catalog.currentPage = action.payload;
        },
        setHasMore: (state, action) => {
            state.catalog.hasMore = action.payload;
        },
        decreaseCurrentPage: (state) => {
            state.catalog.currentPage -= 1;
            state.catalog.hasMore = true; 
        },
        setCatalog(state, action) {
            state.catalog = action.payload;
          },
          setFilteredCars(state, action) {
            state.filteredCars = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCatalog.pending, (state) => {
                state.catalog.items = [];
                state.catalog.status = 'loading';
            })
            .addCase(fetchCatalog.fulfilled, (state, action) => {
                state.catalog.items = action.payload;
                state.catalog.status = 'loaded';
                if (action.payload.length < state.catalog.itemsPerPage) {
                    state.catalog.hasMore = false;
                }
            })
            .addCase(fetchCatalog.rejected, (state) => {
                state.catalog.items = [];
                state.catalog.status = 'error';
            });
    }
});

export const catalogReducer = catalogSlice.reducer;
export const { setCurrentPage, setHasMore, setFilteredCars } = catalogSlice.actions;
