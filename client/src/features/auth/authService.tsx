import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {AxiosError} from "axios";

const headers = {
  "Content-Type": "application/json",
};

interface ValidationErrors {
  errorMessage: string
  field_errors: Record<string, string>
}

interface IUserData {
  name?: string,
  email: string,
  password: string,
}

export const isAuth = createAsyncThunk("auth/isAuth", async () => {
  const response = await axios.get("/api/users/authchecker", {
    withCredentials: true,
  });
  return response.data;
});

export const Login = createAsyncThunk(
  "auth/Login",
  async (data: IUserData, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/users/login", data);
      return response.data;
    } catch (err) {
      if(err instanceof Error ) {
      let error = err as AxiosError<ValidationErrors>  // cast the error for access
      // Custom error message from Server returned to reducer using rejectWithValue
      // This error is available in action.payload unlike action.error for unhandled errors
      return rejectWithValue(error.message);
      }
    }
  }
);

export const RegisterThunk = createAsyncThunk(
  "auth/Register",
  async (data: IUserData, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/users/register", data);
      return response.data;
    } catch (err) {
      let error = err as AxiosError<ValidationErrors>  // cast the error for access
      // Custom error message from Server returned to reducer using rejectWithValue
      // This error is available in action.payload unlike action.error for unhandled errors
      return rejectWithValue(error.message);
    }
  }
);

export const LogoutThunk = createAsyncThunk("auth/Logout", async () => {
  const response = await axios.delete("/api/users/logout", {
    withCredentials: true,
  });
  return response.data;
});
