import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { isAuth, Login, RegisterThunk, LogoutThunk } from './authService';

const initialState = {
  isAuthenticated: false,
  user:{},
  isLoading:false,
  error:{isError:false,errMsg:""}
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error.isError = false;
      state.error.errMsg = "";
    },
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
      isAnyOf(isAuth.rejected, Login.rejected,LogoutThunk.fulfilled, RegisterThunk.rejected),
      (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = {};
        state.error.isError = true;
        state.error.errMsg = action.payload;
      }
    )
  },
});

export const { clearError } = authSlice.actions;

export const selectAuth = (state) => state.auth;

export const selectError = (state) => state.auth.error;


export default authSlice.reducer;
