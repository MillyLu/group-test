import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    token: null,
};

export const registration = createAsyncThunk('auth/reg', async (data) => {
    try {
        const response = await fetch('https://reqres.in/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return await response.json();
    } catch (error) {
        return error.message;
    }
});

export const authorization = createAsyncThunk('auth/auth', async (data) => {
    try {
        const response = await fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return await response.json();
    } catch (error) {
        return error.message;
    }
});

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        deleteUser: (state) => {
            localStorage.removeItem('token');
            state.token = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(registration.fulfilled, (state, action) => {
            state.token = action.payload;
            localStorage.setItem('token', action.payload);
        });
        builder.addCase(authorization.fulfilled, (state, action) => {
            state.token = action.payload;
            localStorage.setItem('token', action.payload);
        });
    },
});

export default authSlice.reducer;

export const { deleteUser } = authSlice.actions;
