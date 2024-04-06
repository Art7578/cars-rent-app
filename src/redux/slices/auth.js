import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../services/API';
import { removeFromFavorites, setFavorites } from './favorites';

export const fetchAuth = createAsyncThunk('auth/fetchAuth', async (params, thunkAPI) => {
    const { dispatch } = thunkAPI;
    try {
        const { data } = await axios.post('/auth/login', params);
        if ('token' in data) {
            window.localStorage.setItem('token', data.token);
            const userId = data._id;
            localStorage.setItem('userId', userId);
            const favorites = JSON.parse(localStorage.getItem(`favs_${userId}`)) || [];
            dispatch(setFavorites(favorites));
        }
        return data;
    } catch (error) {
        // Обработка ошибки
        console.error('Error during login:', error);
        throw error;
    }
});

export const fetchRegister = createAsyncThunk('auth/fetchRegister', async (params, thunkAPI) => {
    const { dispatch } = thunkAPI;
    try {
        const { data } = await axios.post('/auth/register', params);
        if ('token' in data) {
            window.localStorage.setItem('token', data.token);
            const userId = data._id;
            localStorage.setItem('userId', userId);
            const favorites = JSON.parse(localStorage.getItem(`favs_${userId}`)) || [];
            dispatch(setFavorites(favorites));
        }
        return data;
    } catch (error) {
        console.error('Error during registration:', error);
        throw error;
    }
});

const initialState = {
    data: null,
    status: 'loading',
    userId: localStorage.getItem('userId') || null,
};

const token = localStorage.getItem('token');
initialState.data = token ? { token } : null;

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.data = null;
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            state.userId = null;
            removeFromFavorites(); 
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAuth.pending, (state) => {
                state.status = 'loading';
                state.data = null;
            })
            .addCase(fetchRegister.fulfilled, (state, action) => {
                state.status = 'loaded';
                state.data = action.payload;
            })
            .addCase(fetchAuth.rejected, (state) => {
                state.status = 'error';
                state.data = null;
            })
            .addCase(fetchRegister.pending, (state) => {
                state.status = 'loading';
                state.data = null;
            })
            .addCase(fetchAuth.fulfilled, (state, action) => {
                state.status = 'loaded';
                state.data = action.payload;
            })
            .addCase(fetchRegister.rejected, (state) => {
                state.status = 'error';
                state.data = null;
            });
    }
});

export const selectIsAuth = state => Boolean(state.auth.data);

export const authReducer = authSlice.reducer;

export const { logout } = authSlice.actions;