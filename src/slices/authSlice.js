import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    users: [],
    isAuthenticated: false,
  },
  reducers: {
    signIn: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    signUp: (state, action) => {
      state.users.push(action.payload);
      state.isAuthenticated = true;
    },
    signOut: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { signIn, signUp, signOut } = authSlice.actions;
export default authSlice.reducer;
