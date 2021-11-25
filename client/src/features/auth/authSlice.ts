import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { isAuth, LoginThunk, RegisterThunk, LogoutThunk } from './authService';
import { RootState } from '../../app/store';

interface IAuthState  {
  isAuthenticated: boolean,
  user: IUserData,
  isLoading: boolean,
  error: IError
}

interface IUserData {
  id?: string,
  name?: string,
  email?: string
}

interface IError {
  isError: boolean,
  errMsg: string
}


const initialState: IAuthState = {
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
      isAnyOf(isAuth.pending, LoginThunk.pending, RegisterThunk.pending),
      (state) => {
        state.isLoading = true;
      }
    )
    .addMatcher(
        isAnyOf(isAuth.fulfilled, LoginThunk.fulfilled,RegisterThunk.fulfilled),
        (state, action) => {
          state.isLoading = false;
          state.user = action.payload;
          state.isAuthenticated = true;
        }
    )
    .addMatcher(
      isAnyOf(isAuth.rejected, LoginThunk.rejected,LogoutThunk.fulfilled, RegisterThunk.rejected),
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
export const selectAuth = (state : RootState) => state.auth;
export const selectError = (state : RootState ) => state.auth.error;


// Reducer export
export default authSlice.reducer;
