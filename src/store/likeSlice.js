import { createSlice } from '@reduxjs/toolkit';

const likesSlice = createSlice({
    name: 'likes',
    initialState: { likes: [] },
    reducers: {
        addLike(state, action) {
            if (!state.includes(action.payload)) state.push(action.payload);
        },
        deleteLike(state, action) {
            return state.filter((like) => like !== action.payload);
        },
        clearLikes(state) {
            return (state = []);
        },
    },
});

export default likesSlice.reducer;

export const { addLike, deleteLike, clearLikes } = likesSlice.actions;
