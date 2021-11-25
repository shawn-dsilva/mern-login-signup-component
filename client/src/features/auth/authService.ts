import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {AxiosError} from "axios";


interface ValidationErrors {
  errorMessage: string
  field_errors: Record<string, string>
}

interface IUserFormData {
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

export const LoginThunk = createAsyncThunk(
  "auth/Login",
  async (data: IUserFormData, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/users/login", data);
      return response.data;
    } catch (err) {
      let error = err as AxiosError<ValidationErrors>  // cast the error for access
      // Custom error message from Server returned to reducer using rejectWithValue
      // This error is available in action.payload unlike action.error for unhandled errors
      return rejectWithValue(error.response?.data);
    }
  }
);

export const RegisterThunk = createAsyncThunk(
  "auth/Register",
  async (data: IUserFormData, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/users/register", data);
      return response.data;
    } catch (err) {
      let error = err as AxiosError<ValidationErrors>  // cast the error for access
      // Custom error message from Server returned to reducer using rejectWithValue
      // This error is available in action.payload unlike action.error for unhandled errors
      return rejectWithValue(error.response?.data);
    }
  }
);

export const LogoutThunk = createAsyncThunk("auth/Logout", async () => {
  const response = await axios.delete("/api/users/logout", {
    withCredentials: true,
  });
  return response.data;
});
