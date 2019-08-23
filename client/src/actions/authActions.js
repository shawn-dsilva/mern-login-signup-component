import axios from "axios";
import cookie from 'react-cookies'


import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  AUTH_SUCCESS,
  AUTH_FAIL,
  LOGOUT_SUCCESS,
} from "./types";

//Check if user is already logged in
export const isAuth = () => (dispatch) => {
   const headers = {
    headers: {
      "session-id": cookie.load('session-id')
    }
    };

    console.log(cookie.load('session-id'));

    axios
    .get("/api/users/authchecker", headers)
    .then((res) =>
      dispatch({
        type: AUTH_SUCCESS,
        payload: res.data
      })
    )
    .catch((err) => {
      dispatch({
        type: AUTH_FAIL
      });
    });

}
//Login User
export const login = ({ email, password }) => (dispatch) => {
  // Headers
  const headers = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // Request body
  const body = JSON.stringify({ email, password });

  axios
    .post("/api/users/login", body, headers)
    .then((res) =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })
    )
    .catch((err) => {
      dispatch({
        type: LOGIN_FAIL
      });
    });
};

//Logout User and Destroy session
export const logout = () => (dispatch) => {
   const headers = {
    headers: {
      "session-id": cookie.load('session-id')
    }
    };

    axios
    .delete("/api/users/logout", headers)
    .then((res) =>
      dispatch({
        type: LOGOUT_SUCCESS,
      })
    )
    .catch((err) => {
      console.log(err);
    });

}