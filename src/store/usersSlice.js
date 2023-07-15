import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const USERS_API = "https://reqres.in/api/users?per_page=8";

export const fetchUsers = createAsyncThunk("users", async () => {
  try {
    const response = await axios.get(USERS_API);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export default usersSlice.reducer;

export const { setUsers } = usersSlice.actions;
