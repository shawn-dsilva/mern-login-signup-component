import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { isAuth, Login, RegisterThunk } from './authService';

const initialState = {
  isAuthenticated: false,
  user:{},
  isLoading:false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
    .addMatcher(
      isAnyOf(isAuth.pending, Login.pending),
      (state, action) => {
        state.isLoading = true;
      }
    )
    .addMatcher(
        isAnyOf(isAuth.fulfilled, Login.fulfilled),
        (state, action) => {
          state.isLoading = false;
          state.user = action.payload;
          state.isAuthenticated = true;
        }
    )
    .addMatcher(
      isAnyOf(isAuth.rejected, Login.rejected),
      (state, action) => {
        state.isLoading = false;
      }
    )
  },
});

export const selectAuth = (state) => state.auth;


export default authSlice.reducer;
