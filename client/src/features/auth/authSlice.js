import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { isAuth, Login, RegisterThunk, LogoutThunk } from './authService';

const initialState = {
  isAuthenticated: false,
  user: {},
  isLoading: false,
  error: { isError: false, errMsg: "" },
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
      isAnyOf(isAuth.pending, Login.pending, RegisterThunk.pending),
      (state) => {
        state.isLoading = true;
      }
    )
    .addMatcher(
        isAnyOf(isAuth.fulfilled, Login.fulfilled,RegisterThunk.fulfilled),
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
        state.error.errMsg = action.payload; // action.payload contains the result of rejectWithValue upon error
      }
    )
  },
});

// Exporting  auto generated actions from reducers
export const { clearError } = authSlice.actions;

// Exporting pieces of state to be used in components with useSelector Hook
export const selectAuth = (state) => state.auth;
export const selectError = (state) => state.auth.error;


// Reducer export
export default authSlice.reducer;
