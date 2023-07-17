import { createSlice } from "@reduxjs/toolkit";

const likesSlice = createSlice({
  name: "likes",
  initialState: {
    likes: [],
  },
  reducers: {
    addLike(state, action) {
      state.likes.push(action.payload);
    },
    deleteLike(state, action) {
      state.likes.filter((like) => like.id !== action.payload.id);
    },
  },
});

export default likesSlice.reducer;

export const { addLike, deleteLike } = likesSlice.actions;
