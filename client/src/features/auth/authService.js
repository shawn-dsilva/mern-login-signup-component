import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const headers = {
  "Content-Type": "application/json",
};
export const isAuth = createAsyncThunk("auth/isAuth", async () => {
  const response = await axios.get("/api/users/authchecker", {
    withCredentials: true,
  });
  return response.data;
});

export const Login = createAsyncThunk(
  "auth/Login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/users/login", data, headers, {
        withCredentials: true,
      });
      return response.data;
    } catch (err) {
      // Custom error message from Server returned to reducer using rejectWithValue
      // This error is available in action.payload unlike action.error for unhandled errors
      return rejectWithValue(err.response.data);
    }
  }
);

export const RegisterThunk = createAsyncThunk(
  "auth/Register",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/users/register", data, headers, {
        withCredentials: true,
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const LogoutThunk = createAsyncThunk("auth/Logout", async () => {
  const response = await axios.delete("/api/users/logout", {
    withCredentials: true,
  });
  return response.data;
});
