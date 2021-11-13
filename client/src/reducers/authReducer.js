import { createSlice, isAnyOf } from '@reduxjs/toolkit'

import {

  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  AUTH_SUCCESS,
  AUTH_FAIL
} from "../actions/types";


const initialState = {
  user: null,
};

const authSlice = createSlice({
  name:'auth',
  initialState,
  reducers: {
    registerSuccess(state, action) {
      return {
        ...state,
        user: action.payload
      };
    },
    authSuccess(state, action) {
      console.log(state.isAuthenticated);
      state.isAuthenticated.push(action.payload)
    }
  },
  extraReducers: builder => {
    builder.addMatcher( isAnyOf(LOGIN_SUCCESS),
    (state,action) => {
      console.log(action.payload);
        state.isAuthenticated = true;
        state.user = action.payload;
    })
    .addMatcher(
      isAnyOf(AUTH_ERROR, LOGIN_FAIL, LOGOUT_SUCCESS,REGISTER_FAIL,AUTH_FAIL),
      (state,action) => {
        return {
          ...state,
          user: null,
        }
      }
    )
  }
})

export const {registerSuccess, authSuccess} = authSlice.actions

export default authSlice.reducer