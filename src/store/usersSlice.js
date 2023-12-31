import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    users: [],
    error: '',
};

export const fetchUsers = createAsyncThunk('users', async (params) => {
    const { perPage, page } = params;
    try {
        const response = await axios.get(
            `https://reqres.in/api/users?per_page=${perPage}&page=${page}`,
        );
        return response.data;
    } catch (error) {
        return error.message;
    }
});

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
            state.error = null;
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = 'failed';
            state.users = [];
            state.error = action.error.message;
        });
    },
});

export default usersSlice.reducer;
