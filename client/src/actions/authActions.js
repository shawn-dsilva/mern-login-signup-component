import axios from "axios";
import { returnStatus } from "./statusActions";

import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  AUTH_SUCCESS,
  AUTH_FAIL,
  LOGOUT_SUCCESS,
} from "./types";

//Check if user is already logged in
export const isAuth = () => (dispatch) => {

    axios
    .get("/api/users/authchecker",{withCredentials:true})
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

//Register New User
export const register = ({ name, email, password }) => (dispatch) => {
  // Headers
  const headers = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // Request body
  const body = JSON.stringify({ name, email, password });

  axios
    .post("/api/users/register", body, headers)
    .then((res) =>{
      dispatch(returnStatus(res.data, res.status, 'REGISTER_SUCCESS'))
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
    })
    .catch((err) => {
      dispatch(returnStatus(err.response.data, err.response.status, 'REGISTER_FAIL'))
      dispatch({
        type: REGISTER_FAIL
      });
    });
};

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
      dispatch(returnStatus(err.response.data, err.response.status, 'LOGIN_FAIL'))
      dispatch({
        type: LOGIN_FAIL
      });
    });
};

//Logout User and Destroy session
export const logout = () => (dispatch) => {

    axios
    .delete("/api/users/logout", { withCredentials: true })
    .then((res) =>
      dispatch({
        type: LOGOUT_SUCCESS,
      })
    )
    .catch((err) => {
      console.log(err);
    });

}