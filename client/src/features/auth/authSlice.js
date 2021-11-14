import { createSlice } from '@reduxjs/toolkit';
import { isAuth, Login } from './authService';

const initialState = {
  isAuthenticated: false,
  user:{},
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(isAuth.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(isAuth.fulfilled, (state, action) => {
        state.status = 'idle';
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(isAuth.rejected, (state, action) => {
        state.status = 'idle';
      })
      .addCase(Login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(Login.fulfilled, (state, action) => {
        state.status = 'idle';
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(Login.rejected, (state, action) => {
        state.status = 'idle';
      })
  },
});

export const selectAuth = (state) => state.auth;


export default authSlice.reducer;
