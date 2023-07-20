import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    likes: [],
};
const likesSlice = createSlice({
    name: 'likes',
    initialState,
    reducers: {
        addLikes: (state, action) => {
            return {
                ...state,

                likes: [...state.likes, action.payload],
            };
        },
        deleteLikes: (state, action) => {
            const indexIds = state.likes.indexOf(action.payload);
            console.log(indexIds);
            if (indexIds < 0) return state;
            const newIds = [...state.likes];
            newIds.splice(indexIds, 1);

            return {
                ...state,
                likes: [...newIds],
            };
        },
        clearLikes(state) {
            return initialState;
        },
    },
});

export default likesSlice.reducer;

export const { addLikes, deleteLikes, clearLikes } = likesSlice.actions;
